# Optimización y reducción de consumo de tokens en Claude Code

**Fuente:** https://www.youtube.com/watch?v=WvJB-csh5bQ
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Andrea Eskailet](https://www.youtube.com/@andrea.eskailet) — 12.5 mil suscriptores (Hola, soy Andrea. Construyo contigo.Soy quien está detrás de Eskailet. Llevo más de 10 años montando sistemas )

## Resumen

Análisis empírico sobre el consumo de contexto en Claude Code. Contrasta herramientas de terceros frente a prácticas nativas de gestión de sesión (`/clear`, `/rewind`), evaluando límites técnicos basales, relectura de contexto, búsqueda en bases de código y mitigación de costos.

## Recursos clave mencionados

- **Claude Code CLI** (Anthropic)
- **Plugins oficiales de indexación de código de Anthropic** (reducción documentada ~13% por Marmelab)
- **Ponytail** (reducción documentada ~10% por JetBrains mediante enfoque minimalista)
- **RTK** (filtro/resumen de salida de terminal)
- **Graphify** (generador visual de mapas de dependencias y grafos de código)
- **Comandos internos de Claude Code:** `/clear`, `/rewind`, `/usage`

## Hallazgos

- **Mecánica de relectura de contexto:** En flujos multi-paso (15–20 pasos por instrucción), Claude Code relee la totalidad de la conversación acumulada en cada iteración, constituyendo la principal fuente de gasto de tokens frente al output generado.
- **Suelo basal ineludible:** Cada sesión arranca con un piso estructural de herramientas e instrucciones de sistema que supera los 20.000 tokens en cada petición, además del costo fijo de razonamiento (*thinking*) y el límite de 1 hora del cache de memoria rápida.
- **Efectividad limitada de herramientas de compresión:** Herramientas como RTK reducen ruido visual en la terminal pero tienen impacto marginal o neutro en facturación real según benchmarks de JetBrains. Herramientas basadas en grafos (Graphify) aportan valor en arquitectura e inspección, pero no garantizan reducciones significativas de tokens debido a la variabilidad en los caminos de resolución del modelo.
- **Eficiencia por reducción de pasos:** Las herramientas con impacto medible (~10% a 13%) operan disminuyendo la cantidad de pasos de búsqueda (plugins de indexación de código de Anthropic) o simplificando la complejidad de la solución solicitada (Ponytail).
- **Control nativo de contexto:** La higiene operativa supera a las herramientas externas:
  - Uso de `/clear` para aislar tareas y no arrastrar historial irrelevante.
  - Uso de `/rewind` ante iteraciones fallidas para purgar intentos infructuosos del historial.
  - Fijación estática del modelo (Sonnet vs. Opus) y nivel de *thinking* desde el inicio de la sesión para evitar reprocesamiento completo del contexto.
  - Monitoreo continuo mediante `/usage`.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Planteamiento y pruebas de consumo:** Contraste entre promesas de ahorro (hasta 90%) y mediciones empíricas en proyectos reales.
- **[00:00:44] Mecánica de consumo en Claude Code:** Explicación del ciclo de relectura completa del historial en cada paso y ejecución de herramientas.
- **[00:01:43] Costos basales no reducibles:** Carga inicial del prompt de sistema (>20k tokens), tiempo de expiración del cache (1 hora) y tokens de razonamiento.
- **[00:03:08] Análisis de RTK:** Evaluación del resumen de terminal y resultados de pruebas de JetBrains sobre costos reales.
- **[00:04:08] Plugins de Anthropic y Ponytail:** Mecanismos de localización directa de código y simplificación de tareas (ahorros medidos del 10% al 13%).
- **[00:05:25] Experimento con Graphify:** Mapeo de repositorios grandes y comparación de consumo en pruebas repetidas con y sin mapas de dependencias.
- **[00:07:15] Casos de uso válidos para grafos de código:** Utilidad de Graphify en onboarding de proyectos heredados, análisis de impacto y arquitectura.
- **[00:08:20] Buenas prácticas operativas nativas:** Estrategias de ahorro sin extensiones: partición de sesiones con `/clear`, retroceso con `/rewind`, selección temprana de modelo y diagnóstico con `/usage`.
