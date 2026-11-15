# Fundamentos y Arquitectura de Inteligencia Artificial en CS50

<img src="https://cs50.ai/static/img/ddb50.png" alt="Imagen de portada: Fundamentos y Arquitectura de Inteligencia Artificial en CS50" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://youtu.be/-9bo8HlSxwQ
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [CS50](https://www.youtube.com/@cs50) — 117 mil suscriptores (From the team that brought you CS50 at Harvard, Yale, and Oxford, this is the Fifty Foundation, led by David J)

## Resumen

Clase magistral de CS50 que expone la evolución algorítmica desde árboles de decisión y Minimax hasta aprendizaje por refuerzo, redes neuronales y transformers (LLM), ejemplificando su integración pedagógica mediante asistentes de código y el pato de goma virtual.

## Recursos clave mencionados

- Plataforma y asistente pedagógico: https://cs50.ai / https://cs50.dev
- Entorno de desarrollo: Visual Studio Code con extensión GitHub Copilot
- Librería oficial de OpenAI en Python: `import openai` / `client.responses.create`

## Hallazgos

- Los árboles de decisión y el algoritmo Minimax resuelven entornos acotados deterministas cuantificando recompensas y castigos, pero se vuelven inviables computacionalmente ante la explosión combinatoria de juegos complejos como ajedrez o Go.
- El aprendizaje por refuerzo optimiza trayectorias en espacios desconocidos equilibrando explotación (rutas de alta recompensa conocidas) y exploración (inyección probabilística de aleatoriedad $\epsilon$).
- Las redes neuronales profundas ajustan millones de pesos matemáticos sobre datos masivos para modelar funciones no lineales complejas sin requerir reglas de inferencia programadas manualmente.
- Los modelos de lenguaje autorregresivos (LLM) procesan representaciones vectoriales multidimensionales (embeddings) y mecanismos de atención para predecir probabilísticamente el token siguiente según el contexto del prompt del sistema y de usuario.

## Temas abordados en el video (orden cronológico)

- **[00:00:44] Introducción y técnica del Rubber Duck Debugging:** Origen del pato de goma y su virtualización inicial en CS50.dev.
- **[00:02:31] Evolución pedagógica hacia IA generativa:** Transición del bot interactivo a modelos tutores que guían sin revelar soluciones directas.
- **[00:03:13] Evaluación perceptual de generación artificial:** Test interactivo comparando fotorrealismo facial sintético y textos de primaria vs. LLM.
- **[00:07:25] Arquitectura de CS50.ai e ingeniería de prompts:** Definición técnica de prompts de sistema vs. prompts de usuario e integración vía API de OpenAI en Python.
- **[00:11:03] Demostración de asistencia de código con Copilot:** Resolución automatizada de funciones en C (tablas hash y algoritmos iterativos) dentro de VS Code.
- **[00:17:44] Fundamentos de IA clásica y árboles de decisión:** Análisis de lógica booleana y estructuras condicionales aplicadas a juegos como Breakout.
- **[00:22:19] Algoritmo Minimax en juegos de suma cero:** Ponderación matemática de estados para optimización de jugadas y prevención de derrotas en Tic-Tac-Toe.
- **[00:28:10] Límites combinatorios y transición a Machine Learning:** Explosión del espacio de búsqueda en ajedrez y Go frente a modelos de aprendizaje inductivo.
- **[00:29:52] Aprendizaje por refuerzo y trade-off exploración vs. explotación:** Modelado de recompensas/penalizaciones y parámetro épsilon en robótica y videojuegos.
- **[00:37:26] Aprendizaje supervisado vs. no supervisado:** Limitaciones de escalabilidad del etiquetado manual e introducción a arquitecturas profundas.
- **[00:38:36] Redes neuronales artificiales y clasificación lineal:** Representación en grafos, planos n-dimensionales y optimización de pesos y parámetros.
- **[00:43:03] Transformers, embeddings y modelos LLM:** Tokenización de texto, vectores densos flotantes, matrices de atención, probabilidad estadística y alucinaciones.
