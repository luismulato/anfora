// Ánfora — catálogo que lee las notas desde notes-data.js
// (window.ANFORA_NOTES, generado por el script de sync de cada
// instancia — ver ~/Lab/toolkit/anfora/packages/anfora-web/README.md). Sin fetch() a
// propósito, para poder abrirse con doble-click (file://) sin
// necesitar servidor. Config por instancia: window.ANFORA_CONFIG
// (opcional, declarado antes de este script).

(async function () {
  const { escapeHtml, renderMarkdown, copyToClipboard, flashCopied, createModal, bindFilterChips, initPaletteSystem } = window.CatalogBehavior;
  const { noteHash, notePathFromHash, publicNoteUrl } = window.NoteUrl;
  const { normalizeVisibilidad, isListable } = window.Visibility;

  // Config por instancia (ver ~/Lab/toolkit/anfora/packages/anfora-web/README.md):
  // window.ANFORA_CONFIG es opcional, cada instancia lo declara antes
  // de este script (o no lo declara, y queda esta instancia — Lab —
  // como default). publicBaseUrl vacío/null desactiva Abrir/Copiar
  // link (instancia sin sitio público, ej. embebida en un dashboard).
  // domain (opcional): si la instancia lo declara, title/heading pasan
  // a ser "Ánfora::<domain>" — así se distingue de un vistazo en qué
  // instancia se está parado, sin que cada una hardcodee el string.
  const ANFORA_CONFIG = Object.assign({
    publicBaseUrl: "https://luismulato.github.io/anfora/",
    storageKeyPrefix: "anfora",
    title: "Ánfora",
    heading: "Ánfora",
    lead: "Notas archivadas sobre IA y pensamiento sistémico.",
  }, window.ANFORA_CONFIG || {});

  const domainLabel = ANFORA_CONFIG.domain ? `Ánfora::${ANFORA_CONFIG.domain}` : null;
  document.title = domainLabel || ANFORA_CONFIG.title;
  document.getElementById("anfora-heading").textContent = domainLabel || ANFORA_CONFIG.heading;
  document.getElementById("anfora-lead").textContent = ANFORA_CONFIG.lead;

  const grid = document.getElementById("grid");
  const filtersEl = document.getElementById("filters");
  const resultCount = document.getElementById("result-count");
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");
  const sortDirBtn = document.getElementById("sort-dir-btn");
  const influencersGrid = document.getElementById("influencers-grid");
  const influencersCount = document.getElementById("influencers-count");

  const SORT_DEFAULT_DIR = { title: 1, date: -1, domain: 1, tipo: 1 };

  let notes = [];
  // Subset de `notes` que puede aparecer en grid/filtros/búsqueda/
  // Influencers — excluye "unlisted" (sigue en `notes` para el
  // deep-link por hash, que sí tiene que poder abrirla). Ver
  // visibility.js.
  let listedNotes = [];
  let activeDomain = "all";
  let domainAccentMap = {}; // dominio -> índice de acento (0-2), por posición ordenada
  let sortBy = "date";
  let sortDir = SORT_DEFAULT_DIR[sortBy];

  /* --- Selector de paleta/tema: wiring genérico de catalog-behavior,
     ver ~/Lab/toolkit/catalog-behavior/README.md. Los nombres/colores
     de las 3 paletas (estandar/cyberpunk/solarpunk) son propios de
     Ánfora, definidos en el <style> — initPaletteSystem no los conoce. --- */
  initPaletteSystem({
    paletteStorageKey: `${ANFORA_CONFIG.storageKeyPrefix}-palette`,
    themeStorageKey: `${ANFORA_CONFIG.storageKeyPrefix}-theme`,
    defaultPalette: "estandar",
  });

  // Los atributos HTML crudos en las notas (ej. <img src="...&amp;...">)
  // vienen ya HTML-escapados. Hay que decodificarlos antes de reusar el
  // valor como string plano (URL), o escapeHtml lo escapa doble.
  function unescapeHtmlEntities(s) {
    return (s || "")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  }

  // escapeHtml / renderMarkdown ahora vienen de catalog-behavior.js.
  // La única etiqueta HTML cruda que usan las notas de Ánfora es el
  // <img> de portada (renderMarkdown con allowRawImgTag: true la deja
  // pasar tal cual) — acá se le fuerza referrerpolicy="no-referrer"
  // sobre el HTML ya renderizado, porque algunas fuentes bloquean la
  // carga si detectan un Referer de otro dominio (hotlinking).
  function renderNoteBody(md) {
    return renderMarkdown(md, { allowRawImgTag: true }).replace(/<img /gi, '<img referrerpolicy="no-referrer" ');
  }

  /* --- Parseo liviano del header de cada nota --- */
  function parseNote(path, raw) {
    const lines = raw.split("\n");
    let title = path;
    let portada = null;
    let fuente = null;
    let fechaArchivado = null;
    let tipo = null;
    let canalNombre = null;
    let canalUrl = null;
    let canalInfo = null;
    let visibilidadRaw = null;
    let bodyStartIdx = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const h1 = line.match(/^#\s+(.*)$/);
      if (h1 && title === path) {
        title = h1[1].trim();
        continue;
      }
      const img = line.match(/<img[^>]*\ssrc="([^"]+)"/i);
      if (img && !portada) { portada = unescapeHtmlEntities(img[1]); continue; }
      const fu = line.match(/^\*\*Fuente:\*\*\s*(.*)$/);
      if (fu) { fuente = fu[1].trim(); continue; }
      const fe = line.match(/^\*\*Fecha archivado:\*\*\s*(.*)$/);
      if (fe) { fechaArchivado = fe[1].trim(); continue; }
      const ti = line.match(/^\*\*Tipo:\*\*\s*(.*)$/);
      if (ti) { tipo = ti[1].trim(); continue; }
      const ca = line.match(/^\*\*Canal:\*\*\s*\[([^\]]+)\]\(([^)]+)\)(?:\s*—\s*(.*))?$/);
      if (ca) { canalNombre = ca[1].trim(); canalUrl = ca[2].trim(); canalInfo = (ca[3] || "").trim(); continue; }
      const vi = line.match(/^\*\*Visibilidad:\*\*\s*(.*)$/);
      if (vi) { visibilidadRaw = vi[1].trim(); continue; }
      const isMetaLine = h1 || img || fu || fe || ti || ca || vi || line.trim() === "";
      if (!isMetaLine) { bodyStartIdx = i; break; }
    }

    const visibilidad = normalizeVisibilidad(visibilidadRaw);

    const bodyLines = lines.slice(bodyStartIdx);
    const bodyMd = bodyLines.join("\n");

    const resumenIdx = bodyLines.findIndex((l) => /^##\s*Resumen/i.test(l));
    let excerpt = "";
    if (resumenIdx >= 0) {
      for (let i = resumenIdx + 1; i < bodyLines.length; i++) {
        if (bodyLines[i].trim()) { excerpt = bodyLines[i].trim(); break; }
      }
    } else {
      excerpt = bodyLines.find((l) => l.trim() && !l.trim().startsWith("#")) || "";
    }
    excerpt = excerpt.replace(/[*_`]/g, "");
    if (excerpt.length > 150) excerpt = excerpt.slice(0, 150).trim() + "…";

    const domain = path.split("/")[0];

    return { path, title, portada, fuente, fechaArchivado, tipo, canalNombre, canalUrl, canalInfo, visibilidad, domain, excerpt, bodyMd };
  }

  function loadNotes() {
    const rawByPath = window.ANFORA_NOTES || {};
    return Object.entries(rawByPath).map(([path, raw]) => parseNote(path, raw));
  }

  function buildFilters() {
    const domains = [...new Set(listedNotes.map((n) => n.domain))].sort();
    // Índice por posición ordenada, no por hash — con hash, dos
    // dominios pueden caer en el mismo accent-N por pura coincidencia
    // (ej. "neurociencia" y "systems-thinking" mod 3). Por posición,
    // mientras haya <= 3 dominios, los 3 acentos quedan siempre
    // distintos.
    domainAccentMap = {};
    domains.forEach((d, i) => { domainAccentMap[d] = i % 3; });
    filtersEl.innerHTML = `<span class="filter-chip active" data-domain="all">Todas</span>` +
      domains.map((d) => `<span class="filter-chip domain-chip accent-${domainAccentMap[d]}" data-domain="${escapeHtml(d)}">${escapeHtml(d)}</span>`).join("");

    bindFilterChips(filtersEl, {
      onSelect: (ds) => { activeDomain = ds.domain; render(); },
    });
  }

  /* --- Tab Influencers: agrupa notas por canal de YouTube (**Canal:** en la nota) --- */
  function buildInfluencers() {
    const byChannel = new Map();
    for (const n of listedNotes) {
      if (!n.canalUrl) continue;
      const prev = byChannel.get(n.canalUrl);
      if (!prev || (n.fechaArchivado || "") >= (prev.fechaArchivado || "")) {
        byChannel.set(n.canalUrl, { nombre: n.canalNombre, url: n.canalUrl, info: n.canalInfo, fechaArchivado: n.fechaArchivado, count: (prev ? prev.count : 0) + 1 });
      } else {
        prev.count += 1;
      }
    }
    const channels = [...byChannel.values()].sort((a, b) => b.count - a.count);

    influencersCount.textContent = `${channels.length} canal${channels.length === 1 ? "" : "es"}`;
    influencersGrid.innerHTML = channels.length
      ? channels.map((c) => `
        <div class="item-card channel-card">
          <span class="channel-name"><a href="${escapeHtml(c.url)}" target="_blank" rel="noopener">${escapeHtml(c.nombre || c.url)}</a></span>
          <span class="channel-stats">${c.count} video${c.count === 1 ? "" : "s"} en Ánfora</span>
          ${c.info ? `<p class="channel-info">${escapeHtml(c.info)}</p>` : ""}
        </div>`).join("")
      : `<div class="empty-state">Todavía no hay notas con canal identificado.</div>`;
  }

  function sortKey(n) {
    switch (sortBy) {
      case "date": return n.fechaArchivado || "";
      case "domain": return n.domain || "";
      case "tipo": return n.tipo || "";
      case "title":
      default: return n.title || "";
    }
  }

  function sortNotes(list) {
    return [...list].sort((a, b) => {
      const ka = sortKey(a).toLowerCase();
      const kb = sortKey(b).toLowerCase();
      if (ka === kb) return a.title.localeCompare(b.title);
      return ka.localeCompare(kb) * sortDir;
    });
  }

  function updateSortDirBtn() {
    sortDirBtn.classList.toggle("desc", sortDir === -1);
  }

  function matchesSearch(note, q) {
    if (!q) return true;
    const hay = `${note.title} ${note.fuente || ""} ${note.tipo || ""} ${note.excerpt} ${note.bodyMd}`.toLowerCase();
    return hay.includes(q.toLowerCase());
  }

  function noteCard(note) {
    const thumb = note.portada
      ? `<img class="note-thumb" src="${escapeHtml(note.portada)}" alt="" loading="lazy" referrerpolicy="no-referrer">`
      : "";
    const accentClass = `accent-${domainAccentMap[note.domain] ?? 0}`;
    return `
      <div class="item-card" tabindex="0" data-path="${escapeHtml(note.path)}">
        ${thumb}
        <div class="note-head">
          <span class="item-title">${escapeHtml(note.title)}</span>
          <div class="badge-row">
            ${note.tipo ? `<span class="badge-tipo ${accentClass}">${escapeHtml(note.tipo)}</span>` : ""}
            <span class="badge-domain ${accentClass}">${escapeHtml(note.domain)}</span>
          </div>
        </div>
        <p class="item-desc ${note.excerpt ? "" : "empty"}">${escapeHtml(note.excerpt || "Sin resumen")}</p>
        ${note.fechaArchivado ? `<div class="item-stats"><span>${escapeHtml(note.fechaArchivado)}</span></div>` : ""}
      </div>`;
  }

  function render() {
    const q = searchInput.value.trim();
    const filtered = listedNotes.filter((n) => (activeDomain === "all" || n.domain === activeDomain) && matchesSearch(n, q));
    const sorted = sortNotes(filtered);

    resultCount.textContent = `${sorted.length} de ${listedNotes.length} notas`;
    grid.innerHTML = sorted.length
      ? sorted.map(noteCard).join("")
      : `<div class="empty-state">No hay notas que coincidan.</div>`;

    grid.querySelectorAll(".item-card").forEach((card) => {
      const open = () => openModal(notes.find((n) => n.path === card.dataset.path));
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => { if (e.key === "Enter") open(); });
    });
  }

  const modal = createModal({
    overlayId: "modal-overlay",
    titleId: "modal-title",
    metaId: "modal-meta",
    bodyId: "modal-body",
    closeId: "modal-close",
  });

  const modalOverlay = document.getElementById("modal-overlay");
  const openNoteLinkBtn = document.getElementById("open-note-link-btn");
  const copyNoteLinkBtn = document.getElementById("copy-note-link-btn");
  const maximizeBtn = document.getElementById("modal-maximize-btn");

  // URL pública real del sitio (GitHub Pages) — fija a propósito, NO
  // derivada de location.*: si la app se abre con file:// (doble
  // click, ver comentario arriba del todo) location.pathname es una
  // ruta de filesystem, y si corre embebida en el iframe de un
  // dashboard es la URL del shell. Ninguna de las dos sirve para
  // compartir/abrir la nota — siempre tiene que ser esta. Viene de
  // ANFORA_CONFIG (ver arriba); si la instancia no tiene sitio
  // público, queda vacía y se ocultan los botones de abrir/copiar.
  const PUBLIC_BASE_URL = ANFORA_CONFIG.publicBaseUrl || "";
  if (!PUBLIC_BASE_URL) {
    openNoteLinkBtn.hidden = true;
    copyNoteLinkBtn.hidden = true;
  }

  const EXPAND_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>';
  const COMPRESS_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>';

  let currentNote = null;

  // Barra de direcciones: hash-routing simple (#nota/<path>) solo
  // para reflejar la nota actual en location mientras el modal está
  // abierto (útil para recargar/back-forward). history.replaceState
  // (no pushState) a propósito: no ensucia el historial con una
  // entrada por nota abierta. Sin relación con lo que se copia/abre
  // (ver PUBLIC_BASE_URL arriba) — esto es solo la barra local.
  function setLocationForNote(path) {
    history.replaceState(null, "", noteHash(path));
  }
  function clearLocationHash() {
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  }

  function setMaximized(on) {
    modalOverlay.classList.toggle("modal-maximized", on);
    maximizeBtn.innerHTML = on ? COMPRESS_ICON : EXPAND_ICON;
    maximizeBtn.title = on ? "Restaurar tamaño" : "Maximizar";
    maximizeBtn.setAttribute("aria-label", on ? "Restaurar tamaño de la nota" : "Maximizar nota");
  }

  maximizeBtn.addEventListener("click", () => {
    setMaximized(!modalOverlay.classList.contains("modal-maximized"));
  });

  openNoteLinkBtn.addEventListener("click", () => {
    if (!currentNote) return;
    window.open(publicNoteUrl(PUBLIC_BASE_URL, currentNote.path), "_blank", "noopener");
  });

  copyNoteLinkBtn.addEventListener("click", () => {
    if (!currentNote) return;
    copyToClipboard(publicNoteUrl(PUBLIC_BASE_URL, currentNote.path)).then(() => flashCopied(copyNoteLinkBtn)).catch(() => {});
  });

  [modalOverlay, document.getElementById("modal-close")].forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el === modalOverlay && e.target !== modalOverlay) return;
      clearLocationHash();
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.isOpen()) clearLocationHash();
  });

  function youtubeEmbedUrl(url) {
    if (!url) return null;
    const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{6,})/);
    return m ? { embedUrl: `https://www.youtube.com/embed/${m[1]}`, isShort: /\/shorts\//.test(url) } : null;
  }

  function openModal(note, opts) {
    if (!note) return;
    opts = opts || {};
    const metaParts = [];
    if (note.tipo) metaParts.push(`<span class="badge">${escapeHtml(note.tipo)}</span>`);
    if (note.fechaArchivado) metaParts.push(escapeHtml(note.fechaArchivado));
    if (note.fuente) {
      metaParts.push(`<span class="fuente-group"><a href="${escapeHtml(note.fuente)}" target="_blank" rel="noopener">Fuente ↗</a><button type="button" class="copy-link-btn" data-url="${escapeHtml(note.fuente)}" title="Copiar link" aria-label="Copiar link de la fuente"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg></button></span>`);
    }

    const yt = youtubeEmbedUrl(note.fuente);
    const embedHtml = yt
      ? `<div class="note-embed${yt.isShort ? " portrait" : ""}"><iframe src="${escapeHtml(yt.embedUrl)}" title="Video embebido" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>`
      : "";

    modal.open({
      title: note.title,
      metaHtml: metaParts.join(" · "),
      bodyHtml: renderNoteBody(note.bodyMd) + embedHtml,
    });

    currentNote = note;
    setMaximized(false);
    if (!opts.skipHashUpdate) setLocationForNote(note.path);

    document.querySelectorAll("#modal-meta .copy-link-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        copyToClipboard(btn.dataset.url).then(() => flashCopied(btn)).catch(() => {});
      });
    });
  }

  searchInput.addEventListener("input", render);

  sortSelect.addEventListener("change", () => {
    sortBy = sortSelect.value;
    sortDir = SORT_DEFAULT_DIR[sortBy];
    updateSortDirBtn();
    render();
  });

  sortDirBtn.addEventListener("click", () => {
    sortDir *= -1;
    updateSortDirBtn();
    render();
  });

  document.getElementById("view-tabs").querySelectorAll(".view-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".view-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById("view-notas").hidden = tab.dataset.view !== "notas";
      document.getElementById("view-influencers").hidden = tab.dataset.view !== "influencers";
    });
  });

  try {
    notes = await loadNotes();
    listedNotes = notes.filter((n) => isListable(n.visibilidad));
    updateSortDirBtn();
    buildFilters();
    render();
    buildInfluencers();

    // Deep link: si se llegó con #nota/<path> (link copiado o
    // compartido), abrir esa nota directo — sin volver a tocar el
    // hash, ya está puesto.
    const deepLinkPath = notePathFromHash(location.hash);
    if (deepLinkPath) {
      const deepLinkNote = notes.find((n) => n.path === deepLinkPath);
      if (deepLinkNote) openModal(deepLinkNote, { skipHashUpdate: true });
    }
  } catch (err) {
    grid.innerHTML = `<div class="error-state">No se pudieron cargar las notas: ${escapeHtml(err.message)}</div>`;
  }
})();
