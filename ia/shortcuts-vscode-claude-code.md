# Shortcuts de VSCode, Claude Code y navegadores (Chrome/Safari)

**Fuente:** Nota propia
**Fecha archivado:** 2026-08-11
**Visibilidad:** public
**Tipo:** Referencia

## Resumen

Cheat sheet propio de shortcuts usados en el día a día para desarrollo
—VSCode, Claude Code en terminal y los navegadores del Mac—. Se va
sumando un comando por vez a medida que se usa.

## Shortcuts

| Shortcut | Herramienta | Qué hace |
|---|---|---|
| `Cmd+Shift+P` | VSCode | Abre el Command Palette (usado, entre otras cosas, para "Reload Window" tras instalar una extensión). |
| `Shift+Tab` | Claude Code (CLI) | Ciclar modos de permisos: `default` → `acceptEdits` → `plan` (y otros según configuración — ver detalle en [claude-code-modos-de-permisos.md](claude-code-modos-de-permisos.md)). |
| `Cmd+Shift+R` | Chrome / Edge / Arc / Firefox (macOS) | Hard reload: recarga la página salteando la caché. Útil cuando un sitio estático servido local/por Tailscale sigue mostrando una versión vieja de un `.js`/`.css`. |
| `Cmd+Option+R` | Safari (macOS) | Hard reload, equivalente al de Chrome. |
| `Cmd+Option+E` | Safari (macOS) | Vacía la caché. Después un `Cmd+R` normal ya trae todo fresco — usar cuando `Cmd+Option+R` no alcanza. |
| _(sin atajo)_ | Safari (iOS) | No hay hard reload en el iPhone/iPad. Abrir la URL en una **pestaña privada** (caché aparte), o Ajustes → Safari → Borrar historial y datos. Truco alternativo: agregar `?v=2` a la URL y cambiar el número. Relevante para leer dashboards servidos por Tailscale desde el celular. |

## Referencias

- [Choose a permission mode — Claude Code Docs](https://code.claude.com/docs/en/permission-modes)
