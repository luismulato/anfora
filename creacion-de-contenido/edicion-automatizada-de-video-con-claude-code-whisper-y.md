# Edición automatizada de video con Claude Code, Whisper y FFmpeg

**Fuente:** https://youtube.com/shorts/BCgSf1yrzeo?si=cGhRRrdbN5XT--TD
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Alan Daitch](https://www.youtube.com/@AlanDaitch) — 102 mil suscriptores (💡 Aprende Inteligencia Artificial SIN HUMO. Desde hace más de dos décadas, soy fanático de la tecnología…)

## Resumen

Flujo de edición automatizada para video corto utilizando Claude Code como orquestador CLI, Whisper para detección temporal de silencios y tomas, FFmpeg para procesamiento multimedia y archivos de skill iterativos como memoria de estilo.

## Recursos clave mencionados

- Video analizado: https://youtube.com/shorts/BCgSf1yrzeo?si=cGhRRrdbN5XT--TD
- Claude Code (CLI de Anthropic): `claude`
- Whisper (transcripción y alineación temporal a nivel de palabra): `openai-whisper`
- FFmpeg (corte, ensamble y renderizado de subtítulos/animaciones): `ffmpeg`

## Hallazgos

- **Arquitectura modular por capacidades:** El sistema estructura el agente en cuatro componentes: Whisper como entrada de audio/tiempo para ubicar silencios y tomas repetidas; FFmpeg como ejecutor de edición y subtitulado; la visión multimodal de Claude para validar fotogramas clave en hojas de contacto (contact sheets); y un archivo de skill como memoria persistente.
- **Validación visual por fotogramas:** Dado que los modelos de lenguaje analizan imágenes estáticas y no secuencias de video continuas, el agente extrae capturas de cada corte en una sola imagen compuesta para auditar el resultado antes de la entrega.
- **Iteración de reglas en el Skill:** Los fallos de edición iniciales (subtítulos desplazados, cortes abruptos, duraciones inadecuadas de texto) se resuelven agregando restricciones y directivas explícitas al archivo de skill, transformando errores en reglas operativas acumulativas.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación del flujo:** Demostración de edición completa generada por Claude Code a partir de metraje en bruto.
- **[00:00:16] Configuración de herramientas:** Integración de Whisper para transcripción temporal y FFmpeg para cortes y subtítulos.
- **[00:00:35] Inspección visual y memoria:** Extracción de fotogramas clave para revisión multimodal y definición de reglas en un archivo de skill.
- **[00:00:55] Proceso iterativo y refinamiento:** Metodología para corregir fallos agregando directivas al skill y personalización de estilos mediante prompts de entrevista.
