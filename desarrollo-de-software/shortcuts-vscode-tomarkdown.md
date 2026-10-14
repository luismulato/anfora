# Shortcuts de VS Code para escribir Markdown

**Fecha archivado:** 2026-10-14
**Tipo:** Nota propia (compilación)
**Base:** [atajos-teclado-vscode-edicion.md](atajos-teclado-vscode-edicion.md) (MoureDev) + keybindings personalizados de Luis

## Resumen

Atajos generales de edición en VS Code (heredados de la nota de MoureDev) más los atajos propios para escribir Markdown rápido: links, tareas, viñetas y alinear tablas. Los propios están en `keybindings.json` (ver [guia-abrir-keybindings-json-vscode.md](guia-abrir-keybindings-json-vscode.md)) y dependen de la extensión **Markdown All in One** (`yzhang.markdown-all-in-one`).

## Recursos clave

- Markdown All in One: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
- Key Bindings de VS Code: https://code.visualstudio.com/docs/getstarted/keybindings

## Edición general (de la nota de MoureDev)

- `Alt + Flecha Arriba/Abajo`: mueve la línea o bloque activo sin cortar y pegar.
- `Ctrl + D`: suma a la selección la siguiente coincidencia idéntica (edición simultánea).
- `F2`: renombra una variable/identificador en todo el proyecto (por Language Server, no texto plano).
- `Alt + Clic`: crea múltiples cursores en posiciones arbitrarias.
- `Cmd + Clic` (macOS): abre el enlace bajo el cursor en un archivo Markdown.

## Específicos de Markdown (keybindings propios)

Todos solo actúan en archivos `markdown` con el foco en el editor.

| Atajo | Qué hace | Detalle |
|---|---|---|
| `Cmd + K` | Envolver en link | Con texto seleccionado lo convierte en `[texto]()` y deja el cursor dentro de los paréntesis para pegar la URL. Sin selección no hace nada. |
| `Cmd + L` | Convertir línea en tarea | Pone `- [ ] ` al inicio de la línea. Si ya era una viñeta (`- texto`), reemplaza el guion por la tarea. |
| `Cmd + Shift + L` | Marcar/desmarcar tarea | Alterna `[ ]` ↔ `[x]` (comando `markdown.extension.checkTaskList`). |
| `Cmd + U` | Viñetas | Alterna la línea como lista (`markdown.extension.editing.toggleList`). |
| `Shift + Alt + F` | Alinear tabla | Format Document: Markdown All in One reformatea las tablas y alinea las columnas. |

### Notas

- `Cmd + L` pisa el atajo nativo de VS Code "expandir selección de línea", y `Cmd + Shift + L` pisa "seleccionar todas las coincidencias". Por eso `keybindings.json` los desactiva primero con las entradas `-expandLineSelection` y `-editor.action.selectHighlights`.
- Para alinear tablas no hay un atajo propio: es el `Shift + Alt + F` de Format Document, con Markdown All in One como formateador del lenguaje. También se puede usar desde la paleta (`Cmd + Shift + P` → "Format Document"). Si querés un atajo dedicado, se asigna al comando de la extensión desde `keybindings.json`.
- Otros atajos útiles de la misma extensión: `Cmd + B` negrita, `Cmd + I` cursiva, `Alt + C` marcar tarea.
