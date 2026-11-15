# Therac-25: Análisis de fallos de software crítico, concurrencia e interlocks físicos

**Fuente:** https://youtube.com/shorts/z1qteVVAG44
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Expediente Dev](https://www.youtube.com/@ExpedienteDev) — 1.82 mil suscriptores (Hackeos, fallas, ciberataques y tragedias digitales contados como expedientes.Reconstruimos casos reales de…)

## Resumen

Análisis retrospectivo del acelerador médico Therac-25, explorando cómo la eliminación de salvaguardas mecánicas y la delegación de seguridad en código concurrente con race conditions e integer overflows provocaron sobredosis masivas de radiación en pacientes.

## Recursos clave mencionados

- **Video analizado:** [YouTube Short - Expediente Dev](https://youtube.com/shorts/z1qteVVAG44)
- **Documentación de referencia:** Investigación histórica de Nancy Leveson (*Medical Devices: The Therac-25 Stories*).
- **Entorno tecnológico implicado:** PDP-11 (código ensamblador y RTOS).

## Hallazgos

- **Eliminación indebida de interlocks físicos:** La supresión de seguros electromecánicos para abaratar costos convirtió al software en el único punto de falla, exponiendo defectos de diseño preexistentes en código heredado.
- **Condición de carrera por memoria compartida:** La modificación de parámetros en menos de 8 segundos por parte del operador alteraba variables en memoria mientras la rutina de posicionamiento de motores seguía activa, disparando el haz crudo a 25 MeV sin el colimador/blanco de tungsteno.
- **Desbordamiento aritmético (Integer Overflow):** Un contador de 8 bits utilizado para chequear la seguridad del colimador pasaba de 255 a 0; el software interpretaba el valor nulo como estado seguro e iniciaba el disparo.
- **Diseño de interfaces e información opaca:** Errores crípticos (como `Malfunction 54`) en pantalla inducían al operador a realizar reintentos a ciegas sin constatar que la radiación ya había sido emitida.
- **Principios de arquitectura para software crítico:** Necesidad imperiosa de desacoplar la seguridad del bus de datos (hardware watchdog y paros de emergencia independientes), concurrencia determinista con exclusión mutua estricta y diseños de estado seguro (*fail-safe*).

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Contexto del incidente Therac-25:** Descripción de los accidentes de radiación y el impacto de software defectuoso en entornos clínicos.
- **[00:00:25] Eliminación de seguros de hardware y código heredado:** Reutilización de rutinas de modelos previos sin pruebas formales y eliminación de enclavamientos electromecánicos.
- **[00:00:46] Condición de carrera en rutinas de entrada:** Colisión temporal entre la edición en el teclado del operador y la calibración física de motores mecánicos.
- **[00:01:14] Desbordamiento de 8 bits y error de interfaz:** Explicación técnica del byte que volvía a cero y provocaba la notificación `Malfunction 54`.
- **[00:01:34] Lecciones para ingeniería de sistemas críticos:** Principios de seguridad física desacoplada, concurrencia atómica verificada formalmente y arquitectura fail-safe con corte de energía.
