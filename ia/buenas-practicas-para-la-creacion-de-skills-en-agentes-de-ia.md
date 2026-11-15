# Buenas prácticas para la creación de skills en agentes de IA

**Fuente:** https://youtube.com/shorts/PEDCpd7Wgls
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Fazt](https://www.youtube.com/@FaztTech) — 693 mil suscriptores (Fazt es un canal en donde podrás encontrar una variedad de videos de programación, desarrollo Web y muchos…)

## Resumen

Guía práctica sobre el diseño de skills modulares en formato Markdown para agentes de IA. Plantea reducir la complejidad mediante instrucciones concisas, separación de responsabilidades por tarea, captura de flujos repetitivos y ampliación de capacidades mediante herramientas y protocolos MCP.

## Recursos clave mencionados

- **Video original:** [Cómo crear skills perfectas para tu IA 🤖](https://youtube.com/shorts/PEDCpd7Wgls)
- **Herramientas de soporte sugeridas:**
  - `ffmpeg`: Procesamiento, conversión y edición de audio y video.
  - Servidores MCP (Model Context Protocol): Integraciones externas para software de edición como DaVinci Resolve y Adobe Premiere.

## Hallazgos

- **Estructura mínima de un skill:** Se define dentro de un directorio mediante un archivo Markdown que contiene nombre, descripción y pasos secuenciales de ejecución.
- **Concisión instruccional:** Conviene limitar la extensión de las directivas generadas por LLMs a pasos esenciales y comprensibles para evitar ambigüedades operativas.
- **Principio de responsabilidad única:** Descomponer flujos complejos en skills independientes por tarea simplifica la depuración, el mantenimiento y la optimización granular.
- **Extracción de flujos a partir de prompts:** Es viable registrar paso a paso una tarea interactiva y solicitar al modelo que sintetice esa secuencia en un skill reutilizable.
- **Complementariedad con herramientas y MCP:** Los skills actúan como directivas de procedimiento; la ejecución de acciones complejas requiere conectar herramientas externas especializadas o servidores de contexto.

## Temas abordados en el video (orden cronológico)

- **[00:00:04] Anatomía básica de un skill:** Estructura de carpetas, archivos Markdown, metadatos y definición de instrucciones generales.
- **[00:00:15] Concisión y reducción de complejidad:** Estrategia para evitar prompts extensos y priorizar pasos directos y auditables.
- **[00:00:29] Modularidad por tarea:** División de flujos complejos en skills desacoplados para facilitar el mantenimiento.
- **[00:00:44] Automatización de procesos recurrentes:** Técnica para documentar flujos operativos paso a paso y convertirlos en un skill persistente.
- **[00:01:15] Expansión mediante herramientas y MCP:** Integración de utilidades del sistema (`ffmpeg`) y protocolos MCP para ampliar las capacidades prácticas del agente.
