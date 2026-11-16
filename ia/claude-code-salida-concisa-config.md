# Configuración de salida concisa en Claude Code

<img src="https://claude-code.mintlify.site/docs/_mintlify/api/og/v2?division=Model+and+responses&title=Output+styles&description=Change+Claude+Code%27s+role%2C+tone%2C+and+response+format+with+a+built-in+output+style+such+as+Concise+or+Explanatory%2C+or+write+a+custom+style.&theme=e2d30309a4005a9870b526a1&signature=800f27e9089ff286147a7a511540de90bd2e54f628aacbb51fbeb3b59a0d5235" alt="Imagen de portada: Claude Code Docs, Output styles" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://www.youtube.com/watch?v=8T1OT6cN3gI
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [midudev](https://www.youtube.com/@midudev) — 449 mil suscriptores (Aprende y domina Inteligencia Artificial, Programación y Desarrollo Web forma práctica y directa.En este canal)

## Resumen

Procedimiento de configuración en la CLI de Claude Code mediante `/config` para desactivar la salida detallada y activar el estilo conciso, logrando respuestas técnicas directas y optimización en el consumo de tokens de salida.

## Recursos clave mencionados

- Video original: https://www.youtube.com/watch?v=8T1OT6cN3gI
- Comando interno de configuración: `/config` (dentro de la interfaz CLI de Claude Code)

## Hallazgos

- **Desactivación de verbosidad (`Verbose output`):** Establecer el parámetro `Verbose output` en `false` elimina información secundaria y ruido en la terminal.
- **Activación de estilo conciso (`Output style`):** Configurar `Output style` en `Concise` hace que el modelo priorice resultados directos omitiendo explicaciones extensas.
- **Reducción de costos y tokens:** El ajuste combinado disminuye significativamente la cantidad de tokens generados en la respuesta (ejemplo mostrado: reducción de 1840 a 218 tokens de salida), permitiendo solicitar detalles adicionales únicamente bajo demanda.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Introducción:** Presentación de dos ajustes clave en Claude Code para reducir ruido y ahorrar dinero.
- **[00:00:06] Acceso a configuración:** Ejecución del comando `/config` y filtrado por el término `output`.
- **[00:00:09] Parámetros recomendados:** Ajuste de `Verbose output` a `false` y `Output style` a `Concise`.
- **[00:00:14] Impacto en las respuestas:** Obtención de respuestas más directas, menor consumo de tokens y posibilidad de repreguntar si surgen dudas.
