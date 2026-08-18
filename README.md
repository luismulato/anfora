# Ánfora

Notas archivadas sobre IA y pensamiento sistémico, publicadas con
[GitHub Pages](https://pages.github.com/).

Este repo es un espejo público, solo-notas, de mi knowledge-base
personal (`anfora-repo`). El material fuente (PDFs, libros, papers)
se queda privado — acá solo van las notas en Markdown.

## Link directo a una nota + maximizar

Cada nota tiene un link propio dentro de la web (`#nota/<path>`,
armado por `note-url.js`) y dos acciones en el modal de detalle:

- **Copiar link** (ícono junto a la URL, debajo del título): copia el
  link directo a esa nota. Existe *aparte* del botón "Fuente ↗" que ya
  había — ese copia la URL externa (YouTube, artículo, etc.), este
  copia la URL de Ánfora que reabre la nota.
- **Maximizar** (ícono junto a cerrar): expande el modal a pantalla
  completa dentro de la interfaz.

Al abrir una nota (clic en una tarjeta, o cargar un link `#nota/...`)
la barra de direcciones del browser se actualiza a esa URL
(`history.replaceState`, sin ensuciar el historial por cada nota
abierta). Si Ánfora corre embebida dentro de un dashboard (iframe), esa
URL no es visible para quien mira — para eso está el botón de copiar,
que funciona igual estando embebido o no.

### Proceso de desarrollo: TDD para la lógica, BDD manual para la UI

Este proyecto es intencionalmente sin build y sin dependencias (ver
`~/Lab/toolkit/catalog-behavior/README.md`), así que el ciclo de test
usa lo que ya trae Node — sin instalar nada:

1. **TDD** para la única lógica pura y sin DOM de la feature —
   armar/parsear el hash `#nota/<path>` (`note-url.js`) — con
   `tests/note-url.test.js` (`node:test` + `node:assert`, sin
   dependencias). Rojo → verde: los tests se escribieron contra
   `note-url.js` antes de que el archivo existiera.
   ```sh
   node --test
   ```
2. **BDD manual** para el wiring de UI (botones, modal, hash del
   browser), verificado con Chrome headless (`--screenshot` /
   `--dump-dom`) contra un server estático local, cubriendo estos
   escenarios:
   - *Dado* que hago clic en una tarjeta, *cuando* se abre el modal,
     *entonces* la barra de direcciones muestra `#nota/<path>` y el
     modal muestra esa misma URL con su botón de copiar.
   - *Dado* que cargo la web con `#nota/<path>` en la URL, *cuando*
     termina de cargar, *entonces* esa nota se abre sola (deep link).
   - *Dado* el modal abierto, *cuando* hago clic en maximizar,
     *entonces* ocupa toda la interfaz y el ícono cambia a
     "restaurar".
   - *Dado* el modal abierto, *cuando* lo cierro (X, Esc o clic
     afuera), *entonces* la URL vuelve a la de la lista (sin hash).
