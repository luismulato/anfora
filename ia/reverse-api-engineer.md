# Reverse API Engineer

**Fuente:** https://www.youtube.com/shorts/fDpuRX6yr08
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Nick Automates](https://www.youtube.com/@nickautomates) — 64.9 mil suscriptores (🚀 | Founder, Maker School🧠 | Helping 2000+ beginners land their First AI client🤖 | Teaching AI automations +…)

## Resumen

Reverse API Engineer es una herramienta CLI de código abierto que inspecciona el tráfico de red de un sitio web para generar clientes API tipados y funcionales mediante modelos de IA, reemplazando el web scraping tradicional frágil y costoso.

## Recursos clave mencionados

- **Video original:** https://www.youtube.com/shorts/fDpuRX6yr08
- **Sitio web oficial:** https://reverseapi.dev
- **Repositorio oficial de GitHub:** https://github.com/kalil0321/reverse-api-engineer
- **Comando de instalación (CLI):** `uv tool install reverse-api-engineer` o `pip install reverse-api-engineer`

## Hallazgos

- **Captura de tráfico real:** Un agente de navegación (o el propio usuario) recorre el sitio web de destino y registra todo el tráfico HTTP subyacente en formato HAR.
- **Generación de clientes tipados:** Los modelos de IA analizan las solicitudes y respuestas de los endpoints reales para escribir clientes limpios en múltiples lenguajes (Python, TypeScript, Go, entre otros).
- **Resiliencia ante rediseños:** Al conectarse a las mismas APIs privadas utilizadas por la interfaz web, las integraciones no se rompen ante modificaciones cosméticas de la UI o selectores DOM.
- **Compatibilidad con agentes de código:** Se integra de forma directa con flujos de trabajo en Claude Code, Cursor y entornos de agentes autónomos.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación de Reverse API Engineer:** Introducción al problema del scraping de pago y propuesta de generación de APIs directas.
- **[00:00:10] Arquitectura y flujo operativo:** Explicación del funcionamiento como herramienta open source, captura de peticiones e integración con Claude Code.
- **[00:00:22] Ventajas frente al scraping tradicional:** Beneficios de estabilidad frente a rediseños de interfaces al interactuar directamente con los endpoints del sitio.
