# Ánfora

Notas archivadas sobre IA y pensamiento sistémico, publicadas con
[GitHub Pages](https://pages.github.com/).

Este repo es un espejo público, solo-notas, de mi knowledge-base
personal (`anfora-repo`). El material fuente (PDFs, libros, papers)
se queda privado — acá solo van las notas en Markdown.

## Link directo a una nota + maximizar

Cada nota tiene un link propio dentro de la web (`#nota/<path>`,
armado por `note-url.js`) y tres acciones en el modal de detalle
(solo ícono, sin mostrar la URL como texto):

- **Abrir** (ícono de "abrir en pestaña nueva", estilo Notion): abre
  esa nota en una pestaña nueva.
- **Copiar link**: copia el link directo a esa nota. Existe *aparte*
  del botón "Fuente ↗" que ya había — ese copia la URL externa
  (YouTube, artículo, etc.), este copia la URL de Ánfora que reabre la
  nota.
- **Maximizar** (ícono junto a cerrar): expande el modal a pantalla
  completa dentro de la interfaz.

Abrir y copiar usan siempre `PUBLIC_BASE_URL` (constante en `app.js`,
la URL real de GitHub Pages) — **nunca** `location.*`. Es a propósito:
si la web se abre con `file://` (doble click) `location.pathname` es
una ruta de filesystem, y si corre embebida en el iframe de un
dashboard es la URL del shell — ninguna de las dos sirve para
compartir la nota. `location.hash` sí se sigue actualizando por
separado al abrir una nota (`history.replaceState`, sin ensuciar el
historial) solo para que la barra de direcciones *local* la refleje
mientras el modal está abierto (recargar, back/forward) — si Ánfora
corre embebida en un dashboard esa barra no es visible para quien
mira, por eso abrir/copiar no dependen de ella.

### Proceso de desarrollo: TDD para la lógica, BDD manual para la UI

Este proyecto es intencionalmente sin build y sin dependencias (ver
`~/Lab/toolkit/catalog-behavior/README.md`), así que el ciclo de test
usa lo que ya trae Node — sin instalar nada:

1. **TDD** para la única lógica pura y sin DOM de la feature —
   armar/parsear el hash `#nota/<path>` y armar la URL pública
   (`note-url.js`) — con `tests/note-url.test.js` (`node:test` +
   `node:assert`, sin dependencias). Rojo → verde en cada función,
   incluyendo la regresión reportada (`publicNoteUrl` siempre a partir
   de una base fija, nunca de `location.*`).
   ```sh
   node --test
   ```
2. **BDD manual** para el wiring de UI (botones, modal, hash del
   browser), verificado con Chrome headless (`--screenshot`,
   interceptando `window.open`/`copyToClipboard` desde un driver en un
   iframe) contra un server estático local, cubriendo estos
   escenarios:
   - *Dado* que hago clic en una tarjeta, *cuando* se abre el modal,
     *entonces* la barra de direcciones local muestra `#nota/<path>` y
     el modal solo expone los íconos de abrir/copiar (sin texto de
     URL).
   - *Dado* el modal abierto, *cuando* hago clic en abrir o en copiar,
     *entonces* ambos usan `PUBLIC_BASE_URL` — nunca
     `location.origin`/`location.pathname`.
   - *Dado* que cargo la web con `#nota/<path>` en la URL, *cuando*
     termina de cargar, *entonces* esa nota se abre sola (deep link).
   - *Dado* el modal abierto, *cuando* hago clic en maximizar,
     *entonces* ocupa toda la interfaz y el ícono cambia a
     "restaurar".
   - *Dado* el modal abierto, *cuando* lo cierro (X, Esc o clic
     afuera), *entonces* la URL local vuelve a la de la lista (sin
     hash).
