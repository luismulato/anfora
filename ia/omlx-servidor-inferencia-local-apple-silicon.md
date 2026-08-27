# oMLX: Servidor de inferencia local para Apple Silicon

<img src="https://omlx.ai/images/omlx_dashboard_light.png" alt="Panel de control web de oMLX mostrando serving stats, endpoints compatibles con OpenAI y Anthropic, y configuración de Claude Code" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://youtube.com/shorts/r8l_5752Bfk
**Fecha archivado:** 2026-08-27
**Tipo:** Video de YouTube
**Canal:** [Javi Niguez](https://www.youtube.com/@JaviNiguez) — 103 mil suscriptores (Fundador de FirstAI; contenido sobre crear, lanzar y monetizar mini SaaS con IA)

## Resumen

oMLX es un servidor de inferencia para Apple Silicon basado en MLX. Introduce caché KV escalonada en RAM y SSD con procesamiento por lotes continuo, acelerando flujos de trabajo con agentes como Claude Code mediante APIs compatibles con OpenAI y Anthropic.

## Recursos clave mencionados

- Video analizado: https://youtube.com/shorts/r8l_5752Bfk
- Repositorio oficial de GitHub: https://github.com/jundot/omlx
- Sitio oficial: https://omlx.ai
- Comando de instalación (Homebrew):
  ```bash
  brew tap jundot/omlx https://github.com/jundot/omlx
  brew install jundot/omlx/omlx
  omlx start
  ```

## Hallazgos

- **Arquitectura de caché KV en dos niveles:** mantiene bloques frecuentes en RAM y transfiere el excedente a SSD en formato safetensors, eliminando la necesidad de recomputar prefijos en contextos largos tras cambios de turno.
- **Continuous batching nativo:** gestiona solicitudes concurrentes mediante mlx-lm, alcanzando mejoras significativas de throughput sin encolar peticiones individuales de forma bloqueante.
- **Compatibilidad API dual:** expone endpoints directos compatibles con las especificaciones de OpenAI (`/v1/chat/completions`) y Anthropic (`/v1/messages`), facilitando la integración con herramientas como Claude Code, Cursor y OpenClaw.
- **Servidor multimodelo:** permite la carga simultánea de LLMs, modelos de visión (VLM), embeddings y rerankers, gestionando la memoria mediante políticas de desalojo LRU (Least Recently Used) y fijación manual de modelos.
- **Aplicación nativa de macOS:** interfaz integrada en la barra de menú desarrollada en código nativo (no Electron) con panel web de control en `/admin` para métricas en tiempo real.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación de oMLX:** introducción como alternativa optimizada a Ollama y LM Studio en hardware Apple Silicon.
- **[00:00:06] Gestión de memoria y caché:** persistencia del caché KV entre RAM y SSD para evitar recalcular contextos previos.
- **[00:00:17] Servicio multimodelo y compatibilidad de APIs:** ejecución simultánea de modelos bajo endpoints compatibles con OpenAI y Anthropic.
- **[00:00:23] Integración con asistentes de código:** optimización de latencia para herramientas de desarrollo como Claude Code.
