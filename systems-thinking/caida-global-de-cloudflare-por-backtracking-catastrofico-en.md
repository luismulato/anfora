# Caída Global de Cloudflare por Backtracking Catastrófico en WAF Regex (2019)

**Fuente:** https://youtube.com/shorts/-T_6QbhTRH0
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Expediente Dev](https://www.youtube.com/@ExpedienteDev) — 1.82 mil suscriptores (Hackeos, fallas, ciberataques y tragedias digitales contados como expedientes.Reconstruimos casos reales de…)

## Resumen

Análisis de la caída global de Cloudflare en julio de 2019, provocada por una expresión regular mal optimizada en su WAF que generó backtracking catastrófico y saturó las CPU de su red mundial al 100%.

## Recursos clave mencionados

- Video original: https://youtube.com/shorts/-T_6QbhTRH0
- Canal oficial: Expediente Dev
- Publicación post-mortem de referencia: *Cloudflare outage caused by bad software deploy* (2 de julio de 2019)
- Motores de regex de tiempo lineal recomendados: Google RE2, `regex` crate (Rust)

## Hallazgos

- **Insight clave:** «Una regex es código que se ejecuta; si no sabés cuánto tarda en el peor caso, no sabés qué desplegaste.»
- **Causa raíz técnica (Backtracking catastrófico):** La inclusión de dos cuantificadores codiciosos consecutivos (`.*.*`) dentro de una regla de detección provocó complejidad temporal exponencial ($O(2^n)$) frente a textos que no coincidían con el patrón esperado.
- **Riesgo en modos de simulación:** Aunque la regla operaba en modo pasivo/simulación sin bloquear tráfico, el motor evaluaba el cómputo sobre cada solicitud HTTP entrante a escala global.
- **Eliminación accidental de salvaguardas:** Durante una refactorización previa del WAF, se había removido inadvertidamente el mecanismo de *guardrail* que imponía un límite estricto de uso de CPU a la ejecución de expresiones regulares.
- **Despliegue sin canary:** La configuración se propagó a escala planetaria de manera instantánea, dejando sin margen de contención al clúster de servidores de borde.
- **Mitigación en tres capas:**
  1. *Motor:* Migrar a motores de autómatas finitos deterministas (DFA) con complejidad temporal lineal garantizada (como RE2 o Rust Regex) que no utilicen backtracking.
  2. *Testing continuo:* Evaluar reglas en CI con entradas patológicas y umbrales estrictos de ciclos de CPU antes de permitir el merge.
  3. *Rollout escalonado:* Implementar despliegues tipo canary a nivel de data center individual con monitoreo automático de saturación de cómputo.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Incidente inicial:** Saturación del 82% del tráfico en Cloudflare y respuesta masiva de errores HTTP 502 durante 27 minutos.
- **[00:00:16] Despliegue de regla en WAF:** Ejecución global instantánea de una regla de inspección en modo simulación.
- **[00:00:27] Mecánica del backtracking:** Cuantificadores codiciosos enfrentados que dispararon el consumo de CPU al 100% en todos los data centers.
- **[00:00:54] Pérdida del limitador de recursos:** Eliminación accidental del control de cuota de CPU en refactorizaciones previas y mitigación por *global kill*.
- **[00:01:10] Estrategia de prevención:** Uso de motores de tiempo lineal (RE2/Rust), pruebas con cadenas patológicas en CI y despliegues canary por fases.
