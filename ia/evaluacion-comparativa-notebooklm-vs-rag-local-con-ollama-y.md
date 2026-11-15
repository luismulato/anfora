# Evaluación comparativa: NotebookLM vs. RAG local con Ollama y ChromaDB

**Fuente:** https://youtu.be/YQfkabM3bF0?si=kp4LSjv5hC1zwLms
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Código Espinoza - IA y Machine Learning](https://www.youtube.com/@codigoespinozaIA) — 9.59 K suscriptores (Este es el espacio donde la inteligencia artificial y Python se encuentran para crear proyectos sorprendentes.)

## Resumen

Evaluación comparativa entre NotebookLM (Gemini) y un pipeline RAG local en Python (Ollama con Qwen 3 8B, ChromaDB y Nomic-Embed-Text) sobre 200 documentos PDF, analizando tasa de acierto, procesamiento de escaneados y riesgo de citas falsas.

## Recursos clave mencionados

- **Herramienta evaluada:** NotebookLM / Gemini Notebook (Google).
- **Stack RAG local:** Ollama, Qwen 3 (8B parámetros), ChromaDB, `nomic-embed-text`.
- **Librerías sugeridas de entorno:** `pip install chromadb ollama`

## Hallazgos

- **Alucinaciones con citas espurias:** NotebookLM inventó datos en 4 de 40 consultas (incluyendo cláusulas y porcentajes inexistentes asignados a páginas reales), mientras que el RAG local reportó desconocimiento ("no encontré") ante datos ausentes.
- **Control determinista del umbral:** A diferencia del prompting en modelos cerrados, un RAG local permite implementar filtros de similitud vectorial por código (corte duro) que impiden invocar al LLM si la distancia del fragmento supera la tolerancia.
- **Capacidades multimodales/OCR:** NotebookLM indexó y leyó de forma nativa tablas complejas y 15 facturas escaneadas sin capa de OCR explícita agregada por el usuario, frente a la extracción tradicional por texto plano del RAG básico que requiere un pipeline OCR complementario.
- **Límites de escala y privacidad:** NotebookLM impone restricciones de fuentes según nivel de suscripción (50 en tier gratuito, hasta 300 en Pro), mientras que una base de vectores local escala según almacenamiento en disco y mantiene confidencialidad estricta sin salida de red.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Diseño del benchmark:** Configuración del dataset de prueba con 200 PDFs (contratos, manuales y facturas escaneadas) y tipología de las 40 preguntas formuladas.
- **[00:01:40] Arquitectura y límites de NotebookLM:** Cuotas de fuentes por cuaderno según tiers de servicio, ventana de contexto y funcionamiento de las citas referenciales.
- **[00:03:33] Implementación técnica del RAG local:** Componentes del pipeline en Python (ChromaDB, modelo de embeddings Nomic, inferencia local con Qwen 3 8B en Ollama) y estrategia de chunking con solapamiento.
- **[00:05:27] Resultados de la comparativa:** Contraste de métricas de precisión, análisis de fallos y detección de alucinaciones en preguntas trampa.
- **[00:08:25] Procesamiento de documentos escaneados y tablas:** Rendimiento de NotebookLM frente a la extracción directa sin OCR en el pipeline local.
- **[00:09:24] Criterios de adopción:** Casos de uso recomendados para entornos exploratorios rápidos frente a despliegues en producción y tratamiento de información confidencial.
