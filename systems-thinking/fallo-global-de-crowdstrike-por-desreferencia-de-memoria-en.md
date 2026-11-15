# Fallo Global de CrowdStrike por Desreferencia de Memoria en Kernel (2024)

**Fuente:** https://youtube.com/shorts/uhZO-56TzKc
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Expediente Dev](https://www.youtube.com/@ExpedienteDev) — 1.82 mil suscriptores (Hackeos, fallas, ciberataques y tragedias digitales contados como expedientes.Reconstruimos casos reales de…)

## Resumen

Análisis del incidente global de CrowdStrike del 19 de julio de 2024, originado por una desreferencia de memoria fuera de límites en un archivo de configuración de canal para un driver de nivel de kernel de Windows.

## Recursos clave mencionados

- Video original: https://youtube.com/shorts/uhZO-56TzKc
- Canal oficial: Expediente Dev
- Componente afectado: Sensor Falcon de CrowdStrike (`C-00000291*.sys`, Channel File 291)
- Sistema operativo: Microsoft Windows (arquitectura de drivers en Ring 0 / Kernel)

## Hallazgos

- **Insight clave:** «La configuración también es código: si no la desplegás de a poco, el canario es el planeta entero.»
- **Causa raíz técnica:** Desajuste entre campos: la nueva regla de detección requería 21 entradas de entrada, pero el sensor proveyó únicamente 20. El intento de acceso al índice 21 provocó una lectura fuera de límites (*out-of-bounds read*) en memoria no asignada.
- **Impacto a nivel de kernel (Ring 0):** Al ejecutarse como controlador de inicio temprano (*boot driver*), la violación de memoria desencadenó una excepción no controlada (`PAGE_FAULT_IN_NONPAGED_AREA`), provocando un bucle infinito de Pantallas Azules de la Muerte (BSOD).
- **Inoperancia de mitigación remota:** Las estaciones colapsadas no lograban completar el arranque para obtener la revocación del archivo de configuración, forzando intervención presencial en modo seguro, remoción manual del archivo e ingreso de claves BitLocker.
- **Fallas en la arquitectura de pruebas:** Los tests automatizados emplearon comodines (*wildcards*) que eludieron la lectura real del campo 21, impidiendo detectar la inconsistencia antes de la distribución masiva.
- **Ausencia de despliegues escalonados (*Canary Deployments*):** Las actualizaciones de configuración omitieron etapas de evaluación gradual por porcentaje de clientes, impactando simultáneamente a 8,5 millones de terminales críticas.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Incidente inicial:** Manifestación de pantallas azules en cadenas comerciales y aeropuertos globales.
- **[00:00:13] Mecánica del error:** Distribución masiva de archivo de configuración con desajuste de 21 campos vs. 20 provistos.
- **[00:00:40] Bucle en espacio de kernel:** Excepción a nivel de driver que impide el arranque y bloquea remediaciones remotas.
- **[00:00:52] Proceso de recuperación manual:** Intervención manual en modo seguro y desbloqueo de volúmenes BitLocker.
- **[00:01:12] Medidas preventivas:** Validación de límites de array en código, tests con datos reales y esquemas de despliegue canary.
