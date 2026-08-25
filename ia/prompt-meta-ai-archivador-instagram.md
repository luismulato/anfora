# Prompt para archivado técnico de posts de Instagram vía Meta AI

**Fuente:** Prompt de autoría propia (sin recurso externo asociado)
**Fecha archivado:** 2026-08-23
**Tipo:** Prompt / Plantilla de prompt

## Resumen

Prompt que instruye a Meta AI a analizar un enlace de Instagram y generar una nota técnica estandarizada en Markdown: título, resumen de 30-40 palabras, clasificación por carpeta, recursos clave y hallazgos, con tono neutral y sin CTA.

## Recursos clave mencionados

- Meta AI (dentro de Instagram) como motor de análisis del post/reel
- Estructura de carpetas de clasificación: `ia/`, `neurociencia/`, `systems-thinking/`, `creacion-de-contenido/`

## Hallazgos

- El prompt fuerza un formato de salida único (bloque de código Markdown) para que la nota resultante sea pegable directamente en un flujo de archivado tipo Ánfora.
- Restringe el resumen a un rango exacto de palabras (30-40) para evitar resúmenes verbosos o con relleno editorial.
- Prohíbe explícitamente tono promocional, opiniones y llamadas a la acción — prioriza extracción objetiva de contenido técnico.
- Incluye clasificación temática con una lista cerrada de carpetas, permitiendo proponer una categoría nueva solo cuando ninguna de las existentes encaja.
- La sección de "Temas abordados" es condicional: solo se genera si el contenido original tiene una estructura secuencial o de pasos clara.

## Prompt completo

```md
Actúa como un archivador técnico especializado. Analiza el enlace de Instagram adjunto y genera una nota técnica estandarizada en un único bloque de código Markdown con la siguiente estructura y reglas estrictas:

# REGLAS Y RESTRICCIONES
- Título: Breve, técnico, descriptivo y sin clickbait (enfócate en el concepto, herramienta o innovación concreta).
- Resumen: Entre 30 y 40 palabras exactas. Destaca la novedad principal, tecnología/modelo o concepto clave y su propuesta de valor.
- Tono: Estrictamente técnico, neutral y objetivo. Sin introducciones, conclusiones, opiniones ni llamadas a la acción (CTA).
- Clasificación / Carpeta: Sugiere una única carpeta de esta lista: [ia/, neurociencia/, systems-thinking/, creacion-de-contenido/]. Si no encaja en ninguna, propón una nueva marcándola como "(categoría nueva, no existe todavía)".
- Recursos clave: Enlace analizado + herramientas, fuentes o documentación oficial mencionadas.
- Hallazgos: 3 a 5 bullet points concisos con los puntos clave, aprendizajes técnicos o insights prácticos.
- Temas abordados: Solo si el video o contenido tiene pasos o estructura secuencial clara; de lo contrario, omite esta sección.

# FORMATO DE SALIDA (Genera únicamente este bloque de código Markdown):

# <Título del recurso>

**Fuente:** [Enlace de Instagram]
**Fecha archivado:** <YYYY-MM-DD>
**Tipo:** Post de Instagram / Reel de Instagram
**Carpeta sugerida:** <carpeta/>

## Resumen
<Resumen de 30-40 palabras>

## Recursos clave mencionados
- <Recurso o herramienta 1>
- <Recurso o herramienta 2>

## Hallazgos
- <Punto clave 1>
- <Punto clave 2>
- <Punto clave 3>

## Temas abordados (secuencia/pasos)
- **Paso/Fase 1:** <Descripción breve>
- **Paso/Fase 2:** <Descripción breve>

---
[Inserta aquí tu enlace de Instagram]
```
