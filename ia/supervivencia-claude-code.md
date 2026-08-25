# Guía rápida de supervivencia — Claude Code

<img src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/68309ab48369f7ad9b4a40e1_open-graph.jpg" alt="Claude Code by Anthropic" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** [Documentación oficial de Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)
**Fecha archivado:** 2026-08-14
**Visibilidad:** public
**Tipo:** Guía / Documentation

## Resumen

Lo mínimo para no volarte el contexto ni gastar de más mientras trabajás.

## 1. Regla práctica: qué modelo usar

Modelo
Cuándo usarlo

**Haiku**
Tareas simples, mecánicas, de alto volumen, o para correr como subagente (buscar archivos, renombrar, tareas repetitivas). El más rápido y económico.

**Sonnet**
Tu trabajo principal de código/análisis. Es el default razonable para el día a día: redacción de informes, desarrollo/revisión de código, análisis de datos.

**Opus**
Solo cuando hay decisiones arquitectónicas complejas o razonamiento multi-paso difícil (investigación, matemática avanzada, arquitectura de código compleja). Más lento y más caro.

**Fable / Mythos**
Nivel de vanguardia, reservado para planes empresariales/Max. Pensado para operación autónoma en tareas de largo horizonte e investigación analítica de nivel experto.

**Regla general:** usá el modelo más pequeño que resuelva el problema, y subí de nivel solo si la tarea exige más razonamiento.

**Tip:** empezá en Sonnet. Subí a Opus solo si el problema lo exige; bajá a Haiku para las partes mecánicas o para subagentes que no necesitan "pensar mucho".

## 2. Comandos clave

Comando
Qué hace

`/`
Muestra el menú de todos los comandos disponibles. Desde ahí también podés ajustar: **switch model** (cambiar de modelo), **effort** (nivel de esfuerzo/profundidad de la respuesta) y **thinking** (activar/desactivar el razonamiento extendido).

`/model`
Cambia el modelo activo de la sesión (Haiku / Sonnet / Opus).

`/context`
Muestra un desglose visual de qué está ocupando tu ventana de contexto (útil para diagnosticar antes de decidir si compactar o limpiar).

`/mcp`
Lista los servidores MCP conectados y su estado (útil para depurar integraciones externas).

`claude auth status`
Comando de terminal (no dentro de una sesión) que muestra el estado de autenticación: si estás logueado, método de auth (`claude.ai` vs API key), proveedor de API, email/org de la cuenta y tipo de suscripción — en JSON. Útil para diagnosticar problemas de login o confirmar bajo qué cuenta corre una sesión.

`/clear`
Borra por completo el historial de la conversación. Úsalo al cambiar de tarea, cuando la anterior ya no aporta nada.

`/compact`
Resume la conversación preservando lo importante, liberando espacio sin perder el hilo. Úsalo cuando seguís en la misma tarea pero necesitás "aire".

`/compact <foco>`
Igual que `/compact`, pero le decís qué priorizar al resumir. Ej: `/compact conservá el esquema de la base de datos y las decisiones de arquitectura, descartá los intentos fallidos`

## 3. Cuándo usar cada cosa

- **`/clear`** → terminaste una tarea y empezás otra sin relación. Evita que contexto viejo "contamine" lo nuevo.
- **`/compact`** → seguís en la misma tarea pero la conversación ya pesa mucho. Mantiene continuidad, pero es más lento y algo más lossy que `/clear`.
- **`/context`** → antes de decidir entre `/clear` o `/compact`, mirá esto para saber qué te está comiendo el contexto (herramientas, archivos, historial).
- **`/model`** → bajá o subí de modelo según la complejidad real de lo que sigue, no por costumbre.
- **`/mcp`** → si algo falla al usar una herramienta externa, primero revisá acá si el servidor está conectado.

## 5. Cuándo tienes que cuidar el contexto

Usá `/context` para revisar el contexto. Ahí fijate en estas acciones clave a monitorear:

- **% de ventana ocupado** → si ya pasaste ~70-80%, es momento de compactar o limpiar antes de que las respuestas empiecen a degradarse.
- **Archivos grandes cargados** → documentos, logs o outputs extensos que ya cumplieron su función y siguen "pesando" en el historial.
- **Resultados de herramientas (tool calls)** → salidas largas de búsquedas, lecturas de archivos o comandos que ya no aportan y solo ocupan espacio.
- **Historial de conversación viejo** → turnos de tareas anteriores que no tienen relación con lo que estás haciendo ahora.
- **MCP y servidores conectados** → cada servidor activo puede sumar contexto extra (definiciones de herramientas); desconectá los que no uses en la sesión.
- **Repetición de contenido** → mismo archivo leído varias veces, o el mismo resumen pegado más de una vez.

**Regla rápida:** si `/context` muestra que gran parte del espacio lo ocupan cosas que ya no necesitás → `/compact <foco>` para quedarte solo con lo esencial, o `/clear` si ya cambiaste de tarea.

## 6. Combo mental para no perder tiempo

1. Sesión larga y las respuestas empiezan a "perder el hilo" → `/context` para ver qué pasa.
2. Si es la misma tarea → `/compact <foco>` indicando qué conservar.
3. Si es tarea nueva → `/clear` y arrancás limpio.
4. Antes de una tarea difícil → `/model` y evaluá si de verdad necesitás Opus, o si Sonnet alcanza.
5. Tareas repetitivas/mecánicas → delegalas a Haiku (subagente) en vez de gastar el modelo principal en eso.
