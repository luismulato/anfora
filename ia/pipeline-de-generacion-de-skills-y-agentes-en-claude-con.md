# Pipeline de Generación de Skills y Agentes en Claude con Gemini API

**Fuente:** https://www.youtube.com/watch?v=dKLYib1S2z8
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Lautaro Nievas](https://www.youtube.com/@nievaslautaro) — 2.16 mil suscriptores (Soy Lautaro Nievas, fundador de Nievas Consulting.Estás en el canal donde te muestr cómo implementar…)

## Resumen

Integración modular entre Claude y la API de Gemini que procesa videos de YouTube para extraer transcripciones, marcas de tiempo y contexto visual, sintetizando automáticamente dicho conocimiento en nuevas skills o agentes especializados configurados a medida.

## Recursos clave mencionados

- **Google AI Studio:** Plataforma para la obtención de claves de API de Gemini (`https://aistudio.google.com/`).
- **Claude (Anthropic):** Entorno de ejecución y orquestación de agentes mediante skills personalizadas.

## Hallazgos

- **Aprovechamiento multimodal cruzado:** Uso de la API de Gemini para la ingesta y extracción multimodal nativa de videos de YouTube, superando limitaciones nativas de otros LLMs en el procesamiento audiovisual directo.
- **Arquitectura en tres componentes:**
  1. Skill de extracción audiovisual y transcripción con timestamps.
  2. Clave de API de Gemini para procesamiento multimodal de video.
  3. Skill generativa que estructura el aprendizaje y crea dinámicamente un nuevo agente o skill en Claude.
- **Creación procedural de agentes:** Automatización del flujo de entrenamiento de contexto específico (copys, community managers, analistas técnicos) a partir de listas de reproducción o videos temáticos.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Planteo del sistema:** Introducción a la arquitectura de extracción y especialización de Claude basada en videos.
- **[00:00:09] Componente 1 (Skill de visión/ingesta):** Integración de capacidad de análisis de transcripciones, contenido y tiempos en YouTube.
- **[00:00:25] Componente 2 (API de Gemini):** Configuración de credenciales de Google AI Studio para procesamiento multimodal nativo de video.
- **[00:00:35] Componente 3 (Síntesis de agentes):** Conversión automática del conocimiento extraído en skills ejecutables y agentes especializados.
