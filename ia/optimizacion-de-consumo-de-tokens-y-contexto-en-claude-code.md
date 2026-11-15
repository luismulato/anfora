# Optimización de consumo de tokens y contexto en Claude Code

**Fuente:** https://youtu.be/TZ1Uh4MZXsk
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Andrea Eskailet](https://www.youtube.com/@andrea.eskailet) — 12.5 mil suscriptores (Hola, soy Andrea. Construyo contigo.Soy quien está detrás de Eskailet. Llevo más de 10 años montando sistemas )

## Resumen

Guía técnica enfocada en mitigar el agotamiento prematuro de límites en Claude Code mediante la gestión eficiente del contexto acumulado, salidas de terminal verbosas, expiración del prompt caching e invocación desmedida de subagentes en flujos de trabajo extensos.

## Recursos clave mencionados

- **Documentación oficial:** Anthropic Claude Code Docs.
- **Herramientas y comandos CLI de Claude Code:**
  - `/context`: Visualización de distribución de tokens en memoria.
  - `/clear`: Reinicio de contexto a cero para aislar tareas.
  - `/compact`: Compresión y resumen del historial conversacional activo.
  - `/model`: Selección del modelo subyacente (ej. Sonnet vs. Opus).
  - `/effort`: Modulación de tokens de razonamiento/pensamiento del modelo.
  - `/usage` y `/status`: Diagnóstico de consumo discriminado por sesiones y subagentes.
- **Archivos de configuración:** `CLAUDE.md` (instrucciones persistentes del repositorio, limitado preferentemente a <200 líneas) y hooks de preprocesamiento de terminal.

## Hallazgos

- **Relectura acumulativa de historial:** En sesiones largas, hasta el 96.9% del procesamiento de tokens corresponde a la relectura continua del historial y salidas previas en cada paso o ejecución de herramienta.
- **Impacto de terminal:** Alrededor del 75% del contexto acumulado proviene de logs extensos de compilación, tests y comandos. Se mitiga mediante filtros (`grep`, hooks personalizados) o resúmenes ejecutados a nivel de sistema antes de ingresar al contexto.
- **Costo de archivos multimodales:** Los PDF son procesados tanto por texto como por imagen (sumando entre 1.000 y 3.000 tokens por página más la representación visual). Conviene extraer texto plano o recortar capturas.
- **Sobrecosto de subagentes:** Los subagentes inicializan su propio contexto base y duplican el consumo si no se limitan a tareas complejas o no se configuran con modelos livianos; su caché expira a los 5 minutos de inactividad.
- **Invalidación de caché tras pausas (TTL de caché):** La memoria rápida (prompt caching) de Anthropic vence típicamente tras 1 hora de inactividad (o 5 minutos si se opera en sobregiro de créditos). Reanudar una sesión masiva tras este lapso fuerza el re-procesamiento completo y re-escritura a costo pleno de entrada.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Introducción al problema de tokens en Claude Code:** Explicación del funcionamiento de las ventanas de contexto frente al volumen real generado por el usuario.
- **[00:01:34] Fuga 1 - Historial acumulado y relectura:** El costo exponencial de mantener sesiones abiertas versus el uso de `/clear` y `/compact`.
- **[00:03:00] Fuga 2 - Salidas de terminal y logs de comandos:** Saturación del búfer mediante herramientas CLI y solución con hooks y comandos filtrados.
- **[00:04:47] Fuga 3 - Ingesta de archivos pesados, imágenes y PDFs:** Costo dual de tokens en documentos multimodales y conveniencia de procesar texto plano.
- **[00:06:04] Fuga 4 - Selección de modelo y nivel de esfuerzo:** Balance entre Opus y Sonnet mediante `/model` (estrategia Opus plan) y ajuste de `/effort`.
- **[00:07:17] Fuga 5 - Invocación no controlada de subagentes:** Consumo paralelo de contexto independiente y ciclo de vida de caché reducido a 5 minutos.
- **[00:08:32] Fuga 6 - Sobrecarga de la "mochila" y CLAUDE.md:** Carga persistente de instrucciones iniciales, optimización modular con skills e impacto de conectores MCP.
- **[00:09:44] Fuga 7 - Expiración de caché tras pausas prolongadas:** El impacto de pausar la sesión por más de una hora y reactivarla sin resetear el contexto.
- **[00:11:34] Diagnóstico y síntesis de mitigación:** Uso de `/usage` y `/status` para auditar el origen del consumo.
