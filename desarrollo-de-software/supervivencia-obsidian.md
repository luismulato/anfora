# Guía rápida de supervivencia — Obsidian

**Fuente:** Nota propia
**Fecha archivado:** 2026-08-27
**Visibilidad:** public
**Tipo:** Guía / Cheat sheet

## Resumen

Operaciones que en Obsidian no son obvias y cuestan tiempo hasta que
se aprenden. Se va sumando un truco por vez a medida que aparece la
necesidad.

## Mover un bullet con todos sus hijos

El problema: reordenar un ítem de una lista anidada sin que se te
queden atrás los sub-bullets.

**Solución:** extensión [Outliner](https://github.com/vslinko/obsidian-outliner)
(community plugin) + un shortcut asignado a mano.

| Shortcut | Acción | Qué hace |
|---|---|---|
| `Cmd+Shift+↑` | Outliner: Move list item up | Sube el bullet y **arrastra con él todos sus hijos y descendientes**, respetando la indentación. |
| `Cmd+Shift+↓` | Outliner: Move list item down | Igual, hacia abajo. |

Estos comandos vienen sin tecla asignada por defecto. Para asignarlos:

1. En macOS, `Cmd+,` abre las preferencias de Obsidian.
2. En el menú izquierdo, elegí **Atajos de teclado** (*Hotkeys*).
3. Buscá "Move list item up/down" y bindealos a `Cmd+Shift+↑` /
   `Cmd+Shift+↓`.

Sin el plugin, el atajo nativo de Obsidian es `Option+↑` / `Option+↓`
("Move line up/down"), pero opera línea por línea: mueve solo el
bullet actual y deja los hijos donde estaban. Por eso el plugin.

## Otras operaciones de lista (Outliner + nativas)

| Shortcut | Acción |
|---|---|
| `Tab` / `Shift+Tab` | Indentar / desindentar el bullet (y sus hijos) un nivel. Nativo. |
| `Cmd+.` | Plegar / desplegar el bullet bajo el cursor. Nativo (requiere "Fold indent" activado en Settings → Editor). |
| Click en el gutter del bullet | Plegar/desplegar ese sub-árbol con el mouse. |
| `Cmd+A` (repetido) | Selección progresiva: primero el bullet, después el sub-árbol, después toda la nota. Comportamiento de Outliner. |
| `Cmd+L` (macOS) | Convertir la línea o el bullet bajo el cursor en un to-do (`- [ ] …`). Alterna entre ítem normal y checklist. |

## Referencias

- [Obsidian Outliner — repo y docs](https://github.com/vslinko/obsidian-outliner)
- `Cmd+,` → **Atajos de teclado** es donde se asignan/reasignan todos
  estos atajos.
