# Graphify: Mapa de dependencias y grafos de conocimiento para Claude Code

**Fuente:** https://youtube.com/shorts/WPtHGN3z3BQ?si=DcaAhg-zp3qZHwbx
**Fecha archivado:** 2026-11-14
**Tipo:** Video de YouTube
**Canal:** [Midas IA](https://www.youtube.com/@MidasZeroIA)

## Resumen

Graphify es una herramienta open-source que transforma bases de código, documentación, esquemas SQL y PDFs en un grafo de conocimiento consultable. Permite a asistentes como Claude Code, Cursor, Codex y Gemini CLI navegar proyectos sin leer archivos completos, reduciendo el consumo de tokens.

## Recursos clave mencionados

- Video analizado: https://youtube.com/shorts/WPtHGN3z3BQ?si=DcaAhg-zp3qZHwbx
- Herramienta: Graphify (skill/grafo de conocimiento local basado en análisis AST determinista sin almacén vectorial).
- Comandos mostrados en el video:
  - `uv tool install ...` (instalación vía `uv`)
  - `graphify query "subtítulos"`
  - `graphify query "<pregunta>" --budget 1500`

## Hallazgos

- **Reducción drástica de contexto:** En una prueba de 7 consultas sobre un proyecto de 304 archivos, el consumo de lectura bajó de 381.903 caracteres (búsqueda a ciegas) a 50.449 caracteres utilizando el grafo.
- **Precisión frente a búsqueda tradicional (`grep`):** Mientras `grep -ril` devuelve decenas de coincidencias dispersas (59 archivos en el ejemplo), `graphify query` apunta directamente al nodo, archivo y número de línea exacto (`src/Subtitulos.tsx · L8`).
- **Reglas operativas recomendadas:** Instruir al agente para consultar el grafo antes de abrir archivos (`Antes de abrir un archivo, consulta el mapa`) y exigir la lectura completa del archivo antes de aplicar modificaciones, dado que el grafo presentó imprecisiones en 2 de 7 consultas.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Introducción a Graphify y alcance del proyecto:** Presentación de la herramienta (más de 137.000 estrellas en GitHub) y visualización de un mapa de dependencias de 304 archivos conectados.
- **[00:00:11] Comparativa de búsqueda tradicional vs. mapa:** Contraste entre obtener 59 archivos mediante `grep` frente a localizar directamente el archivo y línea exacta con `graphify query`.
- **[00:00:18] Benchmark de consumo de caracteres:** Medición de 7 preguntas sobre el repositorio, reduciendo la lectura de 381.903 caracteres a 50.449 caracteres.
- **[00:00:27] Instalación y reglas de uso en Claude Code:** Configuración gratuita mediante terminal y definición de restricciones operativas para consultar el mapa antes de abrir o editar archivos.
