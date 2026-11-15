# Mecanismo de predicción y muestreo probabilístico en Modelos de Lenguaje (LLMs)

**Fuente:** https://www.youtube.com/watch?v=NznI1U0f0uc
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [MachineLearningToGo](https://www.youtube.com/@Machinelearningtogo) — 410 suscriptores (➡️ Learn real ML code from scratch 🎲 Series from A to Z 🥼 I read about AI development so you don&#39;t have to)

## Resumen

Explicación didáctica sobre la arquitectura fundamental de un LLM mediante un modelo simplificado: conversión de texto a tokens numéricos, cálculo de probabilidades con Softmax y generación autoregresiva estocástica para evitar respuestas deterministas repetitivas.

## Recursos clave mencionados

- **Video original:** https://www.youtube.com/watch?v=NznI1U0f0uc
- **Canal del autor:** MachineLearningToGo (Serie *Machine learning code from scratch*, Parte 11)

## Hallazgos

- **Tokenización y representación:** Los modelos operan exclusivamente con representaciones vectoriales/numéricas; el vocabulario asigna índices discretos a palabras o subpalabras (tokens).
- **Cálculo de distribución de probabilidad:** La capa de salida emplea la función Softmax para normalizar los puntajes acumulados (*logits*) en probabilidades que suman 100% para cada token candidato siguiente.
- **Entrenamiento por gradiente:** La pérdida se define por la probabilidad asignada a tokens erróneos en secuencias pareadas; sucesivas iteraciones ajustan los pesos para concentrar la probabilidad en las secuencias observadas.
- **Muestreo estocástico vs. Greedy Search:** La selección del siguiente token opera como un dado ponderado (*weighted sampling*), lo que genera variabilidad en las respuestas y evita bucles deterministas infinitos.
- **Ventana de contexto:** A diferencia de modelos elementales de n-gramas o 1-token de contexto que producen textos incoherentes, los LLMs en producción evalúan la ventana de contexto completa y aplican alineación post-entrenamiento (*fine-tuning/RLHF*).

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Generación autoregresiva:** Introducción a cómo los LLMs construyen respuestas palabra por palabra mediante estimación.
- **[00:00:26] Tokenización:** Mapeo de palabras e índices numéricos dentro del espacio del modelo.
- **[00:00:45] Normalización vía Softmax:** Conversión de matrices de puntajes brutos en distribuciones de probabilidad.
- **[00:00:59] Ajuste del modelo:** Proceso de lectura pareada, cálculo de error y ajuste iterativo de pesos.
- **[00:01:12] Muestreo estocástico:** Selección ponderada del siguiente token y mecanismo de variabilidad en las respuestas.
- **[00:01:40] Contexto y alineación:** Diferencias estructurales entre modelos reducidos y LLMs con ventana contextual completa y alineación de asistente.
