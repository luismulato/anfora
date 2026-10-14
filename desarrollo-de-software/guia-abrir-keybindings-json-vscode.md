# Guía: abrir el keybindings.json de usuario en VS Code

<img src="https://code.visualstudio.com/opengraphimg/opengraph-home.png" alt="Página oficial de Visual Studio Code" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://code.visualstudio.com/
**Fecha archivado:** 2026-10-09
**Tipo:** Guía

## Resumen

Cómo abrir el archivo `keybindings.json` de usuario de VS Code, donde se definen atajos de teclado personalizados, ya sea desde el propio editor (método recomendado, sin buscar carpetas ocultas) o localizando el archivo físico en disco según el sistema operativo.

## Recursos clave mencionados

- Visual Studio Code: https://code.visualstudio.com/
- Comando de paleta: `Preferences: Open Keyboard Shortcuts (JSON)`

## Método 1 (recomendado): desde VS Code

1. Abrir VS Code.
2. Abrir la paleta de comandos:
   - macOS: `Cmd + Shift + P`
   - Windows / Linux: `Ctrl + Shift + P`
3. Escribir `Preferences: Open Keyboard Shortcuts (JSON)`.
4. Seleccionar el comando y presionar `Enter`.

Se abre directamente tu `keybindings.json` personalizado, listo para pegar o editar la configuración.

## Método 2: ruta física en disco

Útil si necesitás el archivo desde fuera del editor (backup, sincronización, edición con otra herramienta).

| Sistema | Ruta |
|---|---|
| 🍏 macOS | `~/Library/Application Support/Code/User/keybindings.json` |
| 🪟 Windows | `%APPDATA%\Code\User\keybindings.json` |
| 🐧 Linux | `~/.config/Code/User/keybindings.json` |

## Resumen rápido

- ¿Querés editar atajos? → Paleta de comandos → `Preferences: Open Keyboard Shortcuts (JSON)`.
- ¿Querés el archivo en disco? → Tabla de rutas de arriba.
