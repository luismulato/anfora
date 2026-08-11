// Ánfora — catálogo que lee los .md en vivo (fetch), sin contenido
// pre-generado. files.json es solo una lista de rutas relativas.

(async function () {
  const grid = document.getElementById("grid");
  const filtersEl = document.getElementById("filters");
  const resultCount = document.getElementById("result-count");
  const searchInput = document.getElementById("search-input");

  let notes = [];
  let activeDomain = "all";

  function escapeHtml(s) {
    return (s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

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

  /* --- Mini renderer Markdown -> HTML (sin dependencias externas) --- */
  function renderInline(text) {
    let t = escapeHtml(text);
    t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
    t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return t;
  }

  function renderMarkdown(md) {
    const lines = (md || "").split("\n");
    let html = "";
    let inCode = false;
    let listType = null;
    const closeList = () => {
      if (listType) { html += `</${listType}>`; listType = null; }
    };

    for (const rawLine of lines) {
      const line = rawLine.replace(/\r$/, "");

      // Passthrough para la imagen de portada (<img ...>), la única
      // etiqueta HTML cruda que usan las notas de Ánfora.
      if (/^\s*<img\s/i.test(line)) {
        closeList();
        html += line.trim();
        continue;
      }

      if (line.trim().startsWith("```")) {
        if (!inCode) {
          closeList();
          html += "<pre><code>";
          inCode = true;
        } else {
          html += "</code></pre>";
          inCode = false;
        }
        continue;
      }
      if (inCode) {
        html += escapeHtml(line) + "\n";
        continue;
      }

      const heading = line.match(/^(#{1,4})\s+(.*)$/);
      if (heading) {
        closeList();
        const level = heading[1].length;
        html += `<h${level}>${renderInline(heading[2])}</h${level}>`;
        continue;
      }

      const ordered = line.match(/^\s*\d+\.\s+(.*)$/);
      const unordered = line.match(/^\s*[-*]\s+(.*)$/);
      if (ordered || unordered) {
        const tag = ordered ? "ol" : "ul";
        if (listType !== tag) {
          closeList();
          html += `<${tag}>`;
          listType = tag;
        }
        html += `<li>${renderInline((ordered || unordered)[1])}</li>`;
        continue;
      }
      closeList();

      if (line.trim() === "") continue;
      html += `<p>${renderInline(line)}</p>`;
    }
    closeList();
    if (inCode) html += "</code></pre>";
    return html;
  }

  /* --- Parseo liviano del header de cada nota --- */
  function parseNote(path, raw) {
    const lines = raw.split("\n");
    let title = path;
    let portada = null;
    let fuente = null;
    let fechaArchivado = null;
    let tipo = null;
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
      const isMetaLine = h1 || img || fu || fe || ti || line.trim() === "";
      if (!isMetaLine) { bodyStartIdx = i; break; }
    }

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

    return { path, title, portada, fuente, fechaArchivado, tipo, domain, excerpt, bodyMd };
  }

  async function loadNotes() {
    const manifestRes = await fetch("files.json", { cache: "no-store" });
    if (!manifestRes.ok) throw new Error("No se pudo cargar files.json");
    const paths = await manifestRes.json();

    const loaded = await Promise.all(
      paths.map(async (path) => {
        const res = await fetch(path, { cache: "no-store" });
        if (!res.ok) return null;
        const raw = await res.text();
        return parseNote(path, raw);
      })
    );
    return loaded.filter(Boolean);
  }

  function buildFilters() {
    const domains = [...new Set(notes.map((n) => n.domain))].sort();
    filtersEl.innerHTML = `<span class="filter-chip active" data-domain="all">Todas</span>` +
      domains.map((d) => `<span class="filter-chip" data-domain="${escapeHtml(d)}">${escapeHtml(d)}</span>`).join("");

    filtersEl.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        activeDomain = chip.dataset.domain;
        filtersEl.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        render();
      });
    });
  }

  function matchesSearch(note, q) {
    if (!q) return true;
    const hay = `${note.title} ${note.fuente || ""} ${note.tipo || ""} ${note.excerpt} ${note.bodyMd}`.toLowerCase();
    return hay.includes(q.toLowerCase());
  }

  function noteCard(note) {
    const thumb = note.portada
      ? `<img class="note-thumb" src="${escapeHtml(note.portada)}" alt="" loading="lazy">`
      : "";
    return `
      <div class="note-card" tabindex="0" data-path="${escapeHtml(note.path)}">
        ${thumb}
        <div class="note-head">
          <div>
            <span class="note-title">${escapeHtml(note.title)}</span>
            <span class="note-domain">${escapeHtml(note.domain)}</span>
          </div>
          ${note.tipo ? `<span class="badge">${escapeHtml(note.tipo)}</span>` : ""}
        </div>
        <p class="note-excerpt ${note.excerpt ? "" : "empty"}">${escapeHtml(note.excerpt || "Sin resumen")}</p>
        ${note.fechaArchivado ? `<div class="note-stats"><span>${escapeHtml(note.fechaArchivado)}</span></div>` : ""}
      </div>`;
  }

  function render() {
    const q = searchInput.value.trim();
    const filtered = notes.filter((n) => (activeDomain === "all" || n.domain === activeDomain) && matchesSearch(n, q));

    resultCount.textContent = `${filtered.length} de ${notes.length} notas`;
    grid.innerHTML = filtered.length
      ? filtered.map(noteCard).join("")
      : `<div class="empty-state">No hay notas que coincidan.</div>`;

    grid.querySelectorAll(".note-card").forEach((card) => {
      const open = () => openModal(notes.find((n) => n.path === card.dataset.path));
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => { if (e.key === "Enter") open(); });
    });
  }

  const modalOverlay = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalMeta = document.getElementById("modal-meta");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  function openModal(note) {
    if (!note) return;
    modalTitle.textContent = note.title;
    const metaParts = [];
    if (note.tipo) metaParts.push(`<span class="badge">${escapeHtml(note.tipo)}</span>`);
    if (note.fechaArchivado) metaParts.push(escapeHtml(note.fechaArchivado));
    if (note.fuente) metaParts.push(`<a href="${escapeHtml(note.fuente)}" target="_blank" rel="noopener">Fuente ↗</a>`);
    modalMeta.innerHTML = metaParts.join(" · ");
    modalBody.innerHTML = `<div class="note-body">${renderMarkdown(note.bodyMd)}</div>`;
    modalOverlay.classList.add("open");
    modalClose.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  searchInput.addEventListener("input", render);

  try {
    notes = await loadNotes();
    notes.sort((a, b) => (b.fechaArchivado || "").localeCompare(a.fechaArchivado || ""));
    buildFilters();
    render();
  } catch (err) {
    grid.innerHTML = `<div class="error-state">No se pudieron cargar las notas: ${escapeHtml(err.message)}</div>`;
  }
})();
