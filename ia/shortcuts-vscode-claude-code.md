# Shortcuts de VSCode y Claude Code

**Fuente:** Nota propia
**Fecha archivado:** 2026-08-11
**Tipo:** Referencia

## Resumen

Cheat sheet propio de shortcuts usados en el día a día entre VSCode y Claude Code en terminal. Se va sumando un comando por vez a medida que se usa.

## Shortcuts

| Shortcut | Herramienta | Qué hace |
|---|---|---|
| `Cmd+Shift+P` | VSCode | Abre el Command Palette (usado, entre otras cosas, para "Reload Window" tras instalar una extensión). |
| `Shift+Tab` | Claude Code (CLI) | Ciclar modos de permisos: `default` → `acceptEdits` → `plan` (y otros según configuración — ver detalle en [claude-code-modos-de-permisos.md](claude-code-modos-de-permisos.md)). |
| `claude auth status` | Claude Code (CLI) | Muestra el estado de autenticación de la sesión: si está logueado, método de auth (`claude.ai` vs API key), proveedor de API, email de la cuenta, org y tipo de suscripción — en JSON. |

## Referencias

- [Choose a permission mode — Claude Code Docs](https://code.claude.com/docs/en/permission-modes)
