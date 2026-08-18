/* catalog-behavior v1.3.0 — companion JS de catalog-ui.
   Funciones chicas, agnósticas a la forma de los datos de cada app.
   Sin build, sin dependencias, expone window.CatalogBehavior.
   Contrato completo: ~/Lab/toolkit/catalog-behavior/README.md */
(function (global) {
  "use strict";

  /* --- HTML --- */

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* --- Mini renderer Markdown -> HTML (sin dependencias externas) ---
     Soporta: encabezados #-####, listas ordenadas/no ordenadas,
     checkboxes "- [ ]"/"- [x]" (li.task/li.task.done — el contrato de
     catalog.css desde 1.0.0, hasta ahora sin implementación
     compartida), bloques de código ```, tablas GFM, y en línea:
     `code`, **bold**, *italic*, [link](url). Con opts.allowRawImgTag:
     true, deja pasar tal cual una línea que empiece con "<img " (uso
     de Ánfora para su portada) — por
     default NO, para no inyectar HTML crudo sin que la app lo pida. */
  function renderInline(text) {
    let t = escapeHtml(text);
    t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
    t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return t;
  }

  function renderMarkdown(md, opts) {
    const allowRawImgTag = !!(opts && opts.allowRawImgTag);
    const lines = (md || "").split("\n");
    let html = "";
    let inCode = false;
    let listType = null;
    let tableRows = null;

    const closeList = () => {
      if (listType) { html += `</${listType}>`; listType = null; }
    };
    const isTableRow = (l) => /^\s*\|.*\|\s*$/.test(l);
    const isTableSep = (l) => /^\s*\|?(\s*:?-+:?\s*\|)+\s*:?-+:?\s*\|?\s*$/.test(l);
    const parseTableRow = (l) => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
    const flushTable = () => {
      if (!tableRows) return;
      if (tableRows.length < 2 || !isTableSep(tableRows[1])) {
        for (const l of tableRows) html += `<p>${renderInline(l.trim())}</p>`;
        tableRows = null;
        return;
      }
      const header = parseTableRow(tableRows[0]);
      const bodyRows = tableRows.slice(2).map(parseTableRow);
      html += "<table><thead><tr>" +
        header.map((c) => `<th>${renderInline(c)}</th>`).join("") +
        "</tr></thead><tbody>" +
        bodyRows.map((r) => "<tr>" + r.map((c) => `<td>${renderInline(c)}</td>`).join("") + "</tr>").join("") +
        "</tbody></table>";
      tableRows = null;
    };

    for (const rawLine of lines) {
      const line = rawLine.replace(/\r$/, "");

      if (allowRawImgTag && /^\s*<img\s/i.test(line)) {
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

      if (isTableRow(line)) {
        tableRows = tableRows ? [...tableRows, line] : [line];
        continue;
      }
      if (tableRows) flushTable();

      const heading = line.match(/^(#{1,4})\s+(.*)$/);
      if (heading) {
        closeList();
        const level = heading[1].length;
        html += `<h${level}>${renderInline(heading[2])}</h${level}>`;
        continue;
      }

      const checkbox = line.match(/^\s*[-*]\s+\[( |x|X)\]\s+(.*)$/);
      const ordered = !checkbox && line.match(/^\s*\d+\.\s+(.*)$/);
      const unordered = !checkbox && !ordered && line.match(/^\s*[-*]\s+(.*)$/);
      if (checkbox || ordered || unordered) {
        const tag = ordered ? "ol" : "ul";
        if (listType !== tag) {
          closeList();
          html += `<${tag}>`;
          listType = tag;
        }
        if (checkbox) {
          const checked = /x/i.test(checkbox[1]);
          html += `<li class="task${checked ? " done" : ""}"><span class="task-box">${checked ? "☑" : "☐"}</span> ${renderInline(checkbox[2])}</li>`;
        } else {
          html += `<li>${renderInline((ordered || unordered)[1])}</li>`;
        }
        continue;
      }
      closeList();

      if (line.trim() === "") continue;
      html += `<p>${renderInline(line)}</p>`;
    }
    closeList();
    if (tableRows) flushTable();
    if (inCode) html += "</code></pre>";
    return html;
  }

  /* --- Clipboard ---
     copyToClipboard: Promise-based, usa navigator.clipboard y cae a un
     textarea + execCommand("copy") si no está disponible o falla.
     flashCopied: prende la clase .copied en el elemento por `duration`
     ms — la app define en su CSS qué significa visualmente ".copied"
     (color, ícono vía ::before, etc.). No toca innerHTML por su cuenta;
     si una app quiere además reemplazar el ícono temporalmente (como
     hace lm-skills con un checkmark), lo hace en su propio callback. */
  function copyToClipboard(text) {
    if (global.navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    }
    return fallbackCopy(text);
  }

  function fallbackCopy(text) {
    return new Promise((resolve, reject) => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        resolve();
      } catch (e) {
        reject(e);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  function flashCopied(el, duration) {
    const ms = duration || 1200;
    el.classList.add("copied");
    setTimeout(() => el.classList.remove("copied"), ms);
  }

  /* --- Modal ---
     createModal({overlayId, titleId, metaId, bodyId, closeId}) arma un
     controlador reusable: pone/saca la clase .open en el overlay,
     cablea Esc + click afuera + botón de cerrar (re-cableando en cada
     open/close, sin listeners que se acumulen). El título se setea con
     textContent (texto plano); meta y body con innerHTML — si la app
     necesita cablear algo más adentro (ej. un botón de copiar en el
     meta), lo hace después de open(), igual que hoy con
     document.getElementById(...) tal como hacían las 3 apps. */
  function createModal(ids) {
    const overlay = document.getElementById(ids.overlayId);
    const titleEl = ids.titleId ? document.getElementById(ids.titleId) : null;
    const metaEl = ids.metaId ? document.getElementById(ids.metaId) : null;
    const bodyEl = ids.bodyId ? document.getElementById(ids.bodyId) : null;
    const closeBtn = ids.closeId ? document.getElementById(ids.closeId) : null;
    if (!overlay) throw new Error("createModal: no se encontró el overlay #" + ids.overlayId);

    function close() {
      overlay.classList.remove("open");
      if (closeBtn) closeBtn.removeEventListener("click", close);
      overlay.removeEventListener("click", onOverlayClick);
      document.removeEventListener("keydown", onKeydown);
    }
    function onOverlayClick(e) {
      if (e.target === overlay) close();
    }
    function onKeydown(e) {
      if (e.key === "Escape") close();
    }

    function open(content) {
      content = content || {};
      if (titleEl && content.title !== undefined) titleEl.textContent = content.title;
      if (metaEl && content.metaHtml !== undefined) metaEl.innerHTML = content.metaHtml;
      if (bodyEl && content.bodyHtml !== undefined) bodyEl.innerHTML = content.bodyHtml;
      overlay.classList.add("open");
      if (closeBtn) {
        closeBtn.addEventListener("click", close);
        closeBtn.focus();
      }
      overlay.addEventListener("click", onOverlayClick);
      document.addEventListener("keydown", onKeydown);
    }

    function isOpen() {
      return overlay.classList.contains("open");
    }

    return { open, close, isOpen };
  }

  /* --- Filter chips ---
     Delegación de click sobre un contenedor de .filter-chip: saca
     .active de todos, la pone en el clickeado, y llama onSelect con su
     dataset completo (cada app lee la key que use — data-scope,
     data-cat, data-domain, etc.) y el elemento. */
  function bindFilterChips(container, opts) {
    opts = opts || {};
    container.addEventListener("click", (e) => {
      const chip = e.target.closest(".filter-chip");
      if (!chip || !container.contains(chip)) return;
      container.querySelectorAll(".filter-chip.active").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      if (opts.onSelect) opts.onSelect(chip.dataset, chip);
    });
  }

  /* --- Selector de paleta/tema (companion de catalog-ui/palette-system.css) ---
     Wiring genérico: abre/cierra el menú, aplica data-palette/
     data-theme al <html>, persiste en localStorage (con storage keys
     configurables para que dos apps en el mismo origen no choquen), y
     mantiene el estado activo del menú sincronizado. No conoce los
     nombres/colores de las paletas — esos los define la app en su
     propio CSS (ver catalog-ui/palette-system.css).

     config: {
       pickerId, triggerId, menuId, themeToggleId (default:
         "palette-picker"/"palette-trigger"/"palette-menu"/"theme-toggle"),
       paletteStorageKey, themeStorageKey (default: "catalog-palette"/"catalog-theme"),
       defaultPalette (default: "default"),
       sharedThemeStorageKey — opcional, de solo lectura: si la app
         todavía no tiene su propio theme guardado (primera vez, o
         nunca tocó su toggle), se usa como default inicial en lugar
         de seguir el sistema directamente. Pensado para que un shell
         (ej. dashboard-ui, ver ~/Lab/toolkit/theme-picker/) le diga a
         cada app embebida con qué tema arrancar, sin pisar la
         elección propia de la app una vez que existe. Esta función
         nunca escribe en esa key, solo la lee.
       onChange({palette, theme}) — opcional, se llama tras cada cambio.
     }
     Devuelve null si no encuentra el picker/trigger/menu en el DOM
     (permite que una app sin selector de paleta llame esto sin
     romper). Si encuentra todo, devuelve {getPalette, getTheme, setPalette}. */
  function initPaletteSystem(config) {
    config = config || {};
    const picker = document.getElementById(config.pickerId || "palette-picker");
    const trigger = document.getElementById(config.triggerId || "palette-trigger");
    const menu = document.getElementById(config.menuId || "palette-menu");
    const themeToggle = document.getElementById(config.themeToggleId || "theme-toggle");
    if (!picker || !trigger || !menu) return null;

    const paletteStorageKey = config.paletteStorageKey || "catalog-palette";
    const themeStorageKey = config.themeStorageKey || "catalog-theme";
    const defaultPalette = config.defaultPalette || "default";
    const notify = () => { if (config.onChange) config.onChange({ palette, theme }); };

    let palette = localStorage.getItem(paletteStorageKey) || defaultPalette;
    document.documentElement.setAttribute("data-palette", palette);

    function updateMenuUI() {
      menu.querySelectorAll(".palette-option").forEach((opt) => {
        opt.classList.toggle("active", opt.dataset.palette === palette);
      });
    }

    function setPalette(p) {
      palette = p;
      document.documentElement.setAttribute("data-palette", p);
      localStorage.setItem(paletteStorageKey, p);
      updateMenuUI();
      notify();
    }

    trigger.addEventListener("click", () => {
      const willOpen = menu.hasAttribute("hidden");
      if (willOpen) { menu.removeAttribute("hidden"); picker.classList.add("open"); }
      else { menu.setAttribute("hidden", ""); picker.classList.remove("open"); }
    });
    menu.querySelectorAll(".palette-option").forEach((opt) => {
      opt.addEventListener("click", () => {
        setPalette(opt.dataset.palette);
        menu.setAttribute("hidden", "");
        picker.classList.remove("open");
      });
    });
    document.addEventListener("click", (e) => {
      if (!picker.contains(e.target)) {
        menu.setAttribute("hidden", "");
        picker.classList.remove("open");
      }
    });
    updateMenuUI();

    let theme = localStorage.getItem(themeStorageKey); // "light" | "dark" | null (sigue al sistema)
    if (theme === null && config.sharedThemeStorageKey) {
      theme = localStorage.getItem(config.sharedThemeStorageKey);
    }

    function applyTheme() {
      if (theme) document.documentElement.setAttribute("data-theme", theme);
      else document.documentElement.removeAttribute("data-theme");
      if (themeToggle) {
        themeToggle.querySelectorAll(".theme-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.theme === theme);
        });
      }
    }

    if (themeToggle) {
      themeToggle.querySelectorAll(".theme-btn").forEach((b) => {
        b.addEventListener("click", () => {
          // Click de nuevo sobre el activo = volver a seguir el sistema.
          theme = theme === b.dataset.theme ? null : b.dataset.theme;
          if (theme) localStorage.setItem(themeStorageKey, theme);
          else localStorage.removeItem(themeStorageKey);
          applyTheme();
          notify();
        });
      });
    }
    applyTheme();

    return {
      getPalette: () => palette,
      getTheme: () => theme,
      setPalette,
    };
  }

  global.CatalogBehavior = {
    escapeHtml,
    renderInline,
    renderMarkdown,
    copyToClipboard,
    flashCopied,
    createModal,
    bindFilterChips,
    initPaletteSystem,
  };
})(window);
