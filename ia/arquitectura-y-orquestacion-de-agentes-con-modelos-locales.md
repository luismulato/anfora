# Arquitectura y orquestación de agentes con modelos locales en hardware dedicado

**Fuente:** https://www.youtube.com/watch?v=m39RZLNxBds
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Erik Taveras](https://www.youtube.com/@ErikTaverasT) — 21.7 mil suscriptores (En este canal encuentras automatización real aplicada a negocios: n8n, WhatsApp Business API, agentes con IA…)

## Resumen

Configuración y orquestación de cuatro modelos locales ejecutados en hardware con Ryzen AI Max sin servicios en la nube. Automatiza clasificación, transcripción, generación de embeddings y agentes de razonamiento durante la noche con consumo inferior a 36 GB de RAM unificada.

## Recursos clave mencionados

- **Hardware base:** Mini PC / equipo con procesador Ryzen AI Max (APU con GPU integrada y memoria compartida).
- **Modelos de lenguaje y audio:**
  - Modelo de razonamiento principal de 35B parámetros (contexto extendido de hasta 256k tokens).
  - Qwen 3.5 (4B) para clasificación ultrarrápida y filtrado de seguridad de comandos (*guardrail* / portero).
  - Qwen Embedding (0.6B) para vectorización y persistencia en pipeline RAG.
  - Whisper Large v3 Turbo para transcripción acelerada de audio y video.
- **Plataforma de orquestación:** Hermes (configuración de perfiles de agentes, permisos y ejecución de herramientas).

## Hallazgos

- **Optimización de recursos locales:** La coexistencia de cuatro modelos especializados (razonamiento, clasificación, embeddings y transcripción de voz) se mantiene por debajo de los 36 GB de RAM en arquitectura APU.
- **Segregación de roles por modelo:**
  - El modelo de mayor escala (35B) asume tareas cognitivas complejas: redacción contextual, evaluación/crítica mediante simulación multi-agente y gestión de CRM/correo.
  - El modelo liviano (4B) opera como clasificador de baja latencia (~2 s por consulta) y capa de supervisión (*guardrail*) antes de ejecutar comandos del sistema.
  - El modelo de embeddings indexa permanentemente notas, emails y publicaciones para recuperación semántica.
  - Whisper Large v3 Turbo procesa material audiovisual a razón de ~1 hora de audio en 3 minutos.
- **Procesamiento batch nocturno:** Las tareas pesadas de actualización, resumen de noticias, depuración de CRM y monitoreo de HomeLab se agendan de 00:00 a 07:00 con generación de un reporte ejecutivo matutino.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Arquitectura de hardware y modelos cargados:** Presentación del equipo con Ryzen AI Max y el ecosistema de 4 modelos consumiendo menos de 36 GB de RAM.
- **[00:00:28] Modelo principal de razonamiento:** Desempeño a ~97 tokens/s, 256k de contexto y orquestación de agentes en Hermes para soporte, CRM y generación de contenido.
- **[00:01:03] Modelos auxiliares (clasificación, RAG y transcripción):** Uso de modelo 4B como filtro/guardrail, modelo de 0.6B para vectorización RAG y Whisper Large v3 Turbo para ingesta de audio.
- **[00:01:49] Cronograma y automatización batch:** Ventana operativa nocturna (00:00 a 07:00), asignación de permisos por perfil y entrega de reporte de estado diario.
