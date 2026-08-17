# Desarrollo de software con LLM local mediante Qwen 27B MTP y llama.cpp

**Fuente:** https://www.youtube.com/watch?v=vEq5eGE8lak
**Fecha archivado:** 2026-08-16
**Tipo:** Video de YouTube
**Canal:** [HolaMundo](https://www.youtube.com/@HolaMundoDev) — 976 mil suscriptores

## Resumen

Demostración técnica de desarrollo de software utilizando modelos LLM locales cuantizados (Qwen 27B con Speculative Decoding MTP) sobre llama.cpp y backend Vulkan, aplicando especificación guiada con OpenSpec e iteración por fases frente a prompts one-shot.

## Recursos clave mencionados

- Repositorio y motor de inferencia: https://github.com/ggml-org/llama.cpp
- Modelo base: Familia Qwen (Qwen 27B MTP / Multi-Token Prediction) — GGUF cuantizado: https://huggingface.co/froggeric/Qwen3.6-27B-MTP-GGUF
- Framework de especificación: OpenSpec
- Motor de renderizado 3D: https://threejs.org/
- Entorno de ejecución: GPU AMD Radeon RX 7900 XTX, distribución Linux basada en Arch, backend Vulkan / ROCm

## Hallazgos

- La arquitectura MTP (Multi-Token Prediction / Speculative Decoding) acelera la inferencia ejecutando un modelo secundario liviano para predecir secuencias de tokens sintácticos antes de ser validados por el modelo principal de 27B.
- La inferencia mediante el backend Vulkan proporciona mayor velocidad de generación de tokens por segundo que ROCm en hardware AMD, optimizando el ciclo de retroalimentación en desarrollo asistido.
- La ejecución local de modelos cuantizados guiada por especificaciones técnicas estructuradas y control arquitectónico genera software funcional con calidad comparable a APIs de frontera comerciales.
- El enfoque iterativo dividido en fases y tareas modulares evita la propagación y acumulación de deuda técnica y errores de diseño característicos de los enfoques one-shot.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Introducción:** Viabilidad de modelos LLM locales frente a modelos de frontera comerciales para ingeniería de software.
- **[00:00:34] Entorno de hardware e inferencia:** Configuración de GPU AMD RX 7900 XTX, entorno Linux, llama.cpp y comparativa de backends Vulkan vs. ROCm.
- **[00:02:18] Arquitectura MTP (Multi-Token Prediction):** Mecánica de aceleración mediante predicción y validación especulativa de tokens en Qwen 27B.
- **[00:04:33] Diseño de la aplicación y especificación:** Definición del simulador 3D con Three.js y uso de OpenSpec para estructurar fases y arquitectura de archivos.
- **[00:06:40] Metodología iterativa vs. One-shot:** Mitigación de errores arquitectónicos mediante desarrollo modular por hitos de control.
- **[00:10:25] Tiempos de desarrollo e historial de control de versiones:** Flujo de trabajo, tiempo de desarrollo (~1.5 horas) y verificación de cambios en Git.
- **[00:14:06] Inspección de la aplicación generada:** Evaluación del renderizado 3D del sistema solar, shaders, texturas y controles de cámara.
- **[00:17:18] Detección de acoplamiento y buenas prácticas:** Identificación de código acoplado en un único módulo y pautas para dirigir agentes de código con fundamentos de ingeniería de software.
