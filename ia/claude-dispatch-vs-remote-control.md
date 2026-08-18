# Claude Dispatch vs. Remote Control

<img src="https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69050ff880f9a5c13932b7df_og_claude-for-chrome.jpg" alt="Put Claude to work on your computer - Claude by Anthropic" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://claude.com/blog/dispatch-and-computer-use
**Fecha archivado:** 2026-08-18
**Tipo:** Artículo / Anuncio oficial + comparación de funciones

## Resumen

Dispatch es una función de Anthropic dentro de Claude Cowork y Claude Code (anunciada el 23 de marzo de 2026) que actúa como un control remoto asíncrono: se envían instrucciones desde el celular y la ejecución real ocurre en la computadora de escritorio (abre programas, interactúa con el sistema de archivos, ejecuta comandos), con persistencia de sesión para dejar tareas corriendo y revisarlas después. En el contexto técnico de Claude Code, `/dispatch` (skill de comunidad, no función core) distribuye tareas complejas a agentes secundarios en paralelo para no saturar el contexto del hilo principal.

`/remote-control` es una función distinta y oficial de Claude Code: convierte una sesión interactiva local del CLI o VS Code en algo controlable en tiempo real desde claude.ai o la app — un espejo de la terminal, no una delegación asíncrona.

## Diferencias clave

**1. Intención (Delegar vs. Continuar)**
- **Dispatch:** delegación asíncrona — "aquí tienes una tarea, ejecútala y avisame cuando termines". Se envía un mensaje corto y arranca una tarea nueva en segundo plano.
- **`/remote-control`:** continuidad y supervisión en tiempo real — toma control de una sesión técnica que ya está abierta en la terminal o el editor.

**2. Entorno y herramientas**
- **Dispatch:** corre vía Claude Desktop (vinculado a Claude Cowork). Trabaja con archivos en un entorno de usuario general y automatizaciones cotidianas.
- **`/remote-control`:** exclusivo del CLI de Claude Code y entornos de desarrollo (VS Code). Acceso total e interactivo a servidores locales, bases de datos, repos Git y MCP servers.

**3. Interacción**
- **Dispatch:** minimiza el ida y vuelta — tarea de "un solo disparo", se cierra la app y el agente sigue trabajando.
- **`/remote-control`:** el dispositivo móvil o navegador es un espejo directo de la terminal — interacción síncrona/multiturno, permite debugging paso a paso y aprobar/rechazar cambios sobre la marcha.

**4. Requisitos**
- **Dispatch:** cero configuración (escaneo de código QR); la computadora debe permanecer encendida, con internet y Claude Desktop activo.
- **`/remote-control`:** requiere iniciar sesión en la terminal con el comando (`claude remote-control` / `claude rc`, o `/remote-control` en VS Code, v2.1.79+); en planes Team/Enterprise está desactivado por defecto hasta que un Owner lo habilita.

## Recursos clave mencionados

- Anuncio oficial de Dispatch y Computer Use: https://claude.com/blog/dispatch-and-computer-use
- Centro de ayuda — Asignar tareas desde cualquier lugar en Claude Cowork: https://support.claude.com/en/articles/13947068-assign-tasks-from-anywhere-in-claude-cowork
- Centro de ayuda — Dejar que Claude use tu computadora en Cowork: https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork
- Documentación oficial de Remote Control: https://code.claude.com/docs/en/remote-control
- Skill de comunidad `/dispatch` (no oficial, orquestación de agentes en paralelo dentro de Claude Code): https://github.com/bassimeledath/dispatch — instalación: `npx skills add bassimeledath/dispatch -g`
