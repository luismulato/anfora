 # Guía de buenas prácticas: optimizar el consumo de tokens en Claude Code

 **Fuente:** https://code.claude.com/docs/en/costs.md
 **Fecha archivado:** 2026-08-14
 **Visibilidad:** public
 **Tipo:** Guía / Documentation

 Basada en tus métricas de uso reciente:

 - **93% del uso ocurrió con >150k de contexto**
 - **83% del uso vino de sesiones activas 8+ horas**
 - **20% del uso vino de sesiones con muchos subagentes**

 Cada sección de abajo ataca directamente una de estas tres causas, con acciones concretas.

 ---

 ## 1. Gestiona el contexto de forma proactiva (ataca el 93% en >150k)

 El costo escala con el tamaño del contexto: cuanto más contexto procesa Claude, más tokens consumes. Claude Code manda **toda la conversación en cada request**, así que una sesión larga sigue "pagando" por todo su historial aunque tu mensaje actual sea de una línea.

 **Acciones:**

 - **`/clear` al cambiar de tarea.** Si vas a trabajar en algo no relacionado, no sigas en la misma sesión. El contexto viejo se queda "pagando peaje" en cada mensaje nuevo aunque ya no lo necesites.

 - Usa `/rename` antes de `/clear` para poder encontrar la sesión después, y `/resume` si necesitas volver a ella.
 - **`/compact` a mitad de una tarea larga**, no al final. Compactar resume el historial y libera espacio, pero ten en cuenta que compactar en sí mismo es un request grande (lee toda la conversación que va a resumir), así que hazlo quirúrgicamente, no como reflejo constante.

 - Puedes guiar qué preservar: `/compact Enfócate en los cambios de código y los resultados de los tests`
 - También puedes definir esto una sola vez en tu `CLAUDE.md`:

 ```
 # Compact instructions
 Al compactar, enfócate en la salida de tests y los cambios de código.
 ```
 - **Revisa `/context`** para ver qué está ocupando espacio (MCP tools, archivos leídos, CLAUDE.md, etc.) antes de decidir si compactar o limpiar.
 - **Muestra el uso de contexto en tu status line** (`/statusline`) para tener visibilidad continua en vez de enterarte tarde.

 ---

 ## 2. Sé intencional con sesiones largas (ataca el 83% en 8+ horas)

 Una sesión abierta muchas horas no es gratis aunque estés inactivo. Causas típicas de gasto "fantasma" en sesiones largas:

 - **Cache misses**: si pasa más de la vida útil del caché (1 hora en plan de suscripción, 5 minutos con créditos de uso o en API/cloud) sin actividad, tu próximo mensaje reprocesa *todo* el contexto desde cero, sin descuento de caché.
 - **Tareas programadas (`/loop`, scheduled tasks)** que disparan en su intervalo aunque la sesión esté inactiva, mandando el contexto completo cada vez.
 - **Mensajes entre sesiones (cross-session messaging)**: si otra de tus sesiones te manda un mensaje, se entrega como turno nuevo y reprocesa todo el contexto. Si no lo necesitas en tiempo real, puedes configurar `crossSessionInbound: hold` en tus settings.
 - **Compañeros de equipo de agentes (agent teammates)** activos siguen consumiendo tokens hasta que salen o termina la sesión.

 **Acciones:**

 - Pregúntate si la sesión "en loop" o de background realmente necesita seguir corriendo, o si ya cumplió su propósito y deberías cerrarla.
 - Si usas sesiones de background/loop de forma habitual, considera limitarlas a una ventana horaria específica en vez de dejarlas corriendo indefinidamente.
 - Si vuelves a una sesión grande después de una pausa larga, en planes Pro/Max Claude Code te ofrece **reanudar desde un resumen** — acéptalo cuando te lo proponga, evita cargar el historial completo otra vez.
 - Cierra explícitamente (o deja expirar) sesiones que ya no estás usando activamente en vez de dejarlas "vivas" de fondo.

 ---

 ## 3. Sé deliberado con los subagentes (ataca el 20% de sesiones subagent-heavy)

 Cada subagente corre su **propio contexto y sus propios requests** — es multiplicar, no sumar. Los "agent teams" en particular pueden usar ~7 veces más tokens que una sesión estándar cuando los teammates corren en modo plan, porque cada uno mantiene su propia ventana de contexto como una instancia separada de Claude.

 **Acciones:**

 - **Configura un modelo más barato para subagentes simples.** En la definición del subagente puedes fijar, por ejemplo, `model: haiku` para tareas que no requieren razonamiento profundo (búsquedas, lectura de logs, tareas repetitivas).
 - **Usa Sonnet, no Opus, para coordinación de equipos de agentes** — balancea capacidad y costo mejor para ese tipo de tarea.
 - **Delega operaciones "ruidosas" a subagentes** (correr tests, traer documentación, procesar logs largos) para que la salida verbosa se quede en el contexto del subagente y solo un resumen vuelva a tu conversación principal — esto reduce tu contexto principal aunque el subagente use tokens propios.
 - **Mantén los equipos pequeños** y las tareas acotadas: el uso de tokens es más o menos proporcional al tamaño del equipo.
 - **Cuida el prompt de invocación (spawn prompt)**: aunque el subagente carga automáticamente CLAUDE.md, MCP servers y skills, todo lo que pongas explícitamente en el prompt de invocación se suma a su contexto desde el inicio.
 - **Apaga a los teammates cuando terminen su trabajo** — cada uno activo sigue consumiendo tokens hasta que sale o termina la sesión.
 - Antes de lanzar un subagente, pregúntate si realmente necesitas paralelismo/aislamiento de contexto, o si es más barato resolverlo en la conversación principal.

 ---

 ## 4. Prácticas generales de eficiencia (aplican siempre)

 - **Elige el modelo correcto para la tarea.** Sonnet resuelve bien la mayoría de tareas de código y cuesta menos que Opus. Reserva Opus para decisiones arquitectónicas complejas o razonamiento multi-paso. Cambia con `/model` o fija un default en `/config`.
 - **Ajusta el "extended thinking"** cuando no lo necesites: baja el nivel de esfuerzo con `/effort`, desactiva el thinking en `/config`, o baja el presupuesto de thinking con la variable de entorno `MAX_THINKING_TOKENS` (p. ej. `MAX_THINKING_TOKENS=8000`) en modelos con presupuesto fijo.
 - **Prefiere herramientas CLI sobre MCP cuando existan** (`gh`, `aws`, `gcloud`, etc.): no agregan overhead de listado de herramientas al contexto, a diferencia de los servidores MCP.
 - **Desactiva servidores MCP que no uses** con `/mcp`.
 - **Instala plugins de "code intelligence"** para lenguajes tipados: dan navegación precisa de símbolos en vez de búsquedas de texto, reduciendo lecturas de archivos innecesarias.
 - **Usa hooks para preprocesar salidas grandes.** Ejemplo: en vez de que Claude lea un log de 10,000 líneas, un hook puede filtrar solo las líneas con `ERROR` antes de que lleguen al contexto.
 - **Mueve instrucciones detalladas de CLAUDE.md a skills.** CLAUDE.md se carga siempre al inicio de sesión, aunque no lo necesites ese día. Los skills cargan solo cuando se invocan. Mantén tu CLAUDE.md por debajo de ~200 líneas.
 - **Escribe prompts específicos.** Pedidos vagos ("mejora este código") disparan escaneos amplios de archivos. Pedidos específicos ("agrega validación de input a la función login en auth.ts") permiten trabajar con lecturas mínimas.
 - **Para tareas complejas:**

 - Usa **modo plan** (Shift+Tab) antes de implementar, para evitar retrabajo costoso si la dirección inicial está mal.
 - **Corrige el rumbo temprano**: si Claude va por mal camino, presiona Escape de inmediato; usa `/rewind` para volver a un checkpoint anterior.
 - **Da objetivos de verificación** (tests, capturas de pantalla, salida esperada) para que Claude valide su propio trabajo.
 - **Prueba de forma incremental**: escribe un archivo, pruébalo, continúa — así los errores se detectan baratos.

 ---

 ## 5. Cómo monitorear si estás mejorando

 - **`/usage`**: muestra el costo y consumo de tokens de la sesión actual, y en planes Pro/Max/Team/Enterprise también una desagregación por skills, subagentes, plugins y servidores MCP, además de "behavior flags" (como contexto largo o cache misses) cuando representan 10%+ del uso reciente.
 - **`/insights`**: genera un reporte HTML sobre patrones de uso (fricciones, tareas típicas, sugerencias) analizando tus sesiones recientes.
 - **Status line con uso de contexto** (`/statusline`): visibilidad continua sin tener que pedirla explícitamente.

 ---

 ## Resumen accionable (top 5 hábitos de mayor impacto)

 1. `/clear` al cambiar de tarea — no arrastres contexto viejo a trabajo nuevo.
 2. No dejes sesiones "vivas" indefinidamente — ciérralas cuando ya cumplieron su propósito.
 3. Antes de lanzar un subagente, pregúntate si de verdad lo necesitas; si sí, usa un modelo barato (haiku/sonnet) para tareas simples.
 4. Usa el modelo correcto según la complejidad real de la tarea (Sonnet por defecto, Opus solo si hace falta).
 5. Revisa `/usage` e `/insights` periódicamente para detectar patrones de gasto antes de que se acumulen.

 ---

 *Fuente: documentación oficial de Claude Code — [docs.claude.com/en/docs/claude-code/costs](https://code.claude.com/docs/en/costs.md) y páginas relacionadas.*
