# Evaluación de capacidades y límites de Image 2.5

**Fuente:** https://www.youtube.com/watch?v=rq70-0sFpDU
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Alan Daitch](https://www.youtube.com/@AlanDaitch) — 102 mil suscriptores (💡 Aprende Inteligencia Artificial SIN HUMO. Desde hace más de dos décadas, soy fanático de la tecnología, habi)

## Resumen

Evaluación práctica de Image 2.5 bajo consignas complejas de generación visual. El análisis destaca sesgos en posturas anatómicas, dificultad en acciones concurrentes y la capacidad novedosa de autocorregir inconsistencias lógicas mediante scripting y edición por código.

## Recursos clave mencionados

- https://www.youtube.com/watch?v=rq70-0sFpDU

## Hallazgos

- **Persistencia de sesgos de entrenamiento:** El modelo reproduce patrones dominantes (como el uso de la mano derecha en saludos) y falla en invertir la lateralidad al primer intento debido a la distribución estadística de sus datos base.
- **Dificultad en composición múltiple de instrucciones:** Lograr que un sujeto tenga siete dedos resulta viable de forma aislada, pero falla al intentar combinarlo simultáneamente con una acción motriz como aplaudir.
- **Comprensión musical y motriz limitada:** En digitación sobre instrumentos (guitarra), confunde acordes específicos y la lateralidad del ejecutante, aunque logra corregir la orientación zurda tras feedback iterativo.
- **Resolución lógica mediante código:** Ante la incapacidad de renderizar directamente múltiples zonas horarias en relojes de agujas, el sistema recurre a la generación de scripts para enmascarar, recalcular y redibujar programáticamente los elementos sobre la imagen.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Introducción:** Planteamiento de las pruebas de estrés sobre Image 2.5 frente a fallas del modelo anterior.
- **[00:00:16] Prueba de lateralidad motriz:** Prompt solicitando a dos personas estrecharse la mano izquierda y persistencia del sesgo diestro.
- **[00:00:31] Anatomía no estándar y acción:** Intento de generar manos de siete dedos aplaudiendo y ruptura de la instrucción compuesta.
- **[00:00:41] Digitación instrumental:** Generación de un guitarrista zurdo ejecutando Si menor séptima y corrección iterativa de lateralidad.
- **[00:01:12] Prueba de relojes multizona horaria y corrección programática:** Renderizado de husos horarios y resolución asistida mediante scripting para la corrección de manecillas.
