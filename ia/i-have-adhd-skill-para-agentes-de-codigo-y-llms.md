# i-have-adhd: Skill para agentes de código y LLMs

<img src="https://opengraph.githubassets.com/09e21ce5e56c7ad38149437282e1d7605deaf47b97ffbede1e53dab08d0099d4/ayghri/i-have-adhd" alt="Imagen de portada: i-have-adhd: Skill para agentes de código y LLMs" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://www.youtube.com/watch?v=k5LPgC4HYps
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Andrea Eskailet](https://www.youtube.com/@andrea.eskailet) — 12.5 mil suscriptores (Hola, soy Andrea. Construyo contigo.Soy quien está detrás de Eskailet. Llevo más de 10 años montando sistemas )

## Resumen

`i-have-adhd` es un plugin/skill open-source para Claude Code, Codex y asistentes compatibles. Optimiza el formato de respuesta eliminando preámbulos y despedidas, priorizando acciones inmediatas, estimaciones temporales precisas y pasos numerados directos.

## Recursos clave mencionados

- Video analizado: https://www.youtube.com/watch?v=k5LPgC4HYps
- Repositorio oficial en GitHub: https://github.com/ayghri/i-have-adhd
- Instalación mediante Skills CLI:
  ```bash
  npx skills add [https://github.com/ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) --skill i-have-adhd

```

## Hallazgos

- **Persistencia frente a prompt manual:** Pedir brevedad en un chat habitual se degrada tras pocos turnos; un manual de comportamiento en formato skill garantiza consistencia constante.

- **Estructura estricta de salida:** Las respuestas inician obligatoriamente con la acción ejecutable (código, ruta o comando), suprimen introducciones vacías y acotan pasos secuenciales.

- **Reducción de carga cognitiva y tokens:** En benchmarks prácticos, la respuesta de soporte se redujo de 465 a 219 palabras, guiando al clic operativo desde la primera línea.

- **Compatibilidad amplia:** Aunque originado en principios de diseño amigables con TDAH, funciona como optimizador técnico para flujos de desarrollo ágiles en Claude Code, Cursor, Codex y OpenAI.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Limitación de los prompts conversacionales:** Pérdida de memoria del LLM ante pedidos manuales de brevedad y solución mediante skills.

- **[00:00:11] Definición de la skill i-have-adhd:** Introducción del repositorio y adopción comunitaria en GitHub.

- **[00:00:24] Formato de respuesta accionante:** Supresión de cortesías iniciales, estimación de tiempo de ejecución y siguiente paso definido.

- **[00:00:37] Prueba comparativa real:** Caso de abandono de carrito en Shopify (465 palabras vs. 219 palabras).

- **[00:00:57] Mecánica de instalación:** Integración directa mediante URL en Claude Code y Codex.
