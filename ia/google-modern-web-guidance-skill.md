# Google Modern Web Guidance Skill

<img src="https://opengraph.githubassets.com/1/GoogleChrome/modern-web-guidance" alt="Repositorio oficial de Modern Web Guidance de Google Chrome en GitHub" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://www.youtube.com/watch?v=rDnvvxRKGjY
**Fecha archivado:** 2026-11-16
**Tipo:** Video de YouTube
**Canal:** [midudev](https://www.youtube.com/@midudev) — 449 mil suscriptores (Aprende y domina Inteligencia Artificial, Programación y Desarrollo Web forma práctica y directa.En este canal)

## Resumen

Google Chrome lanzó Modern Web Guidance, una skill de código abierto que instruye a agentes de IA (Claude Code, ChatGPT, Gemini) para generar código frontend moderno basado en Baseline, reemplazando patrones obsoletos por estándares web actuales.

## Recursos clave mencionados

- **Video analizado:** https://www.youtube.com/watch?v=rDnvvxRKGjY
- **Repositorio oficial:** `github.com/GoogleChrome/modern-web-guidance`
- **Comando de instalación:** `npx modern-web-guidance@latest install`

## Hallazgos

- Los modelos de IA suelen generar código frontend obsoleto (ej. jQuery `fadeIn()`, `float` con `clearfix`, `XMLHttpRequest`) debido a datos de entrenamiento antiguos.
- Modern Web Guidance actualiza las respuestas de los agentes hacia APIs nativas modernas compatibles con Baseline (`dialog.showModal()`, `display: grid`, `popover`).
- Es agnóstica del agente (funciona en Claude Code, ChatGPT, Gemini y Cursor) y garantiza compatibilidad multi-navegador en Chrome, Edge, Safari y Firefox.
