# Competencias y proyectos clave para el rol de Ingeniero de IA

**Fuente:** https://www.youtube.com/watch?v=dWyB3EcpNLQ
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Fazt](https://www.youtube.com/@FaztTech) — 693 mil suscriptores (Fazt es un canal en donde podrás encontrar una variedad de videos de programación, desarrollo Web y muchos…)

## Resumen

Análisis de las habilidades de ingeniería de software requeridas en entornos productivos de IA, estructuradas en cinco implementaciones: servidores MCP, arquitecturas RAG, capas de persistencia y memoria para agentes, frameworks de evaluación comparativa (Evals) y diseño de runtimes (harness).

## Recursos clave mencionados

- **MCP (Model Context Protocol):** Estándar abierto para conectar modelos con herramientas y fuentes de datos locales o remotas.
- **RAG & Vector Stores:** LangChain, LlamaIndex, PostgreSQL con extensión `pgvector`.
- **Memoria de Agentes:** Mem0, Letta (anteriormente MemGPT).
- **Evaluación y Benchmarking:** Promptfoo.
- **Harness / Agentes de CLI y Código:** Claude Code, Codex.

## Hallazgos

- **Demanda del mercado:** Las organizaciones no requieren entrenar LLMs desde cero, sino integrar modelos con sistemas existentes, controlar herramientas externas, persistir contexto y mitigar alucinaciones mediante pruebas sistemáticas.
- **Interoperabilidad con MCP:** Permite exponer APIs y bases de datos a clientes compatibles como Claude y ChatGPT a través de interfaces estandarizadas y reutilizables.
- **RAG contextual:** Sustituye la generación libre por consultas indexadas en bases de datos vectoriales y relacionales para reducir errores fácticos y citar fuentes directamente.
- **Capa de memoria desacoplada:** La separación del almacenamiento contextual respecto al modelo permite compartir el estado y las conversaciones entre diferentes interfaces de desarrollo (ej. Cursor, Claude Code).
- **Evaluación automatizada (Evals):** Uso de suites de testeo estructuradas (como Promptfoo) para medir regresiones de prompt, precisión y costo-efectividad al contrastar modelos comerciales versus modelos locales.
- **Arquitectura de Harness:** Construcción de un ciclo REPL/agentic loop donde el modelo razona, ejecuta herramientas locales (comandos, inspección de ficheros) y evalúa la salida de manera iterativa.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Requisitos técnicos reales:** Habilidades demandadas en ingeniería de IA más allá de crear modelos fundacionales.
- **[00:00:15] Proyecto 1 - Servidores MCP:** Creación y despliegue de conectores bajo el protocolo Model Context Protocol.
- **[00:00:36] Proyecto 2 - RAG:** Integración de búsqueda semántica con LangChain, LlamaIndex y bases de datos vectoriales.
- **[00:01:10] Proyecto 3 - Memoria externa:** Persistencia de estado de agentes utilizando herramientas desacopladas (Mem0, Letta).
- **[00:01:31] Proyecto 4 - Evals (Evaluaciones de IA):** Pruebas automatizadas de rendimiento, costo y calidad con Promptfoo.
- **[00:02:06] Proyecto 5 - Harness y ciclo de ejecución:** Desarrollo del entorno que envuelve al modelo para control de herramientas y bucles de decisión.
