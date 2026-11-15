# Incidente de Pérdida de Datos y Fallo de Backups en GitLab (2017)

**Fuente:** https://youtube.com/shorts/2vcA_8zv3Ck
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Expediente Dev](https://www.youtube.com/@ExpedienteDev) — 1.82 mil suscriptores (Hackeos, fallas, ciberataques y tragedias digitales contados como expedientes.Reconstruimos casos reales de…)

## Resumen

Análisis retrospectivo del incidente de GitLab en 2017, donde la eliminación accidental del directorio de datos de producción reveló fallos simultáneos e inadvertidos en cinco mecanismos independientes de respaldo, requiriendo recuperación manual de contingencia.

## Recursos clave mencionados

- Video original: https://youtube.com/shorts/2vcA_8zv3Ck
- Canal oficial: Expediente Dev
- Tecnologías involucradas: PostgreSQL (`pg_basebackup`, `pg_dump`), Azure / S3 storage snapshots.

## Hallazgos

- **Insight clave:** «Un backup que nunca restauraste no es un backup, es fe.»
- **Falsa sensación de redundancia:** Existían cinco sistemas teóricos de copia de seguridad (dumps de PostgreSQL, snapshots de disco, réplicas, etc.), pero ninguno era validado periódicamente.
- **Incompatibilidad silenciosa de tooling:** `pg_dump` ejecutaba la versión 9.2 contra un motor PostgreSQL 9.6, fallando diariamente en segundo plano sin intervención correctiva.
- **Punto ciego en alertas y monitoreo:** Los correos de notificación de error eran rebotados por el propio servidor de correo saliente, impidiendo advertir los fallos acumulados.
- **Riesgo operativo en mitigación manual:** El uso de terminales simultáneas con privilegios elevados durante incidentes de alta fatiga facilita errores destructivos (`rm -rf` en nodo primario en lugar de réplica).

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Error operativo:** Ejecución accidental de `rm -rf` en el nodo primario de base de datos (`db1`).
- **[00:00:08] Contexto de carga:** Saturación por spam y desincronización de réplica `db2` en PostgreSQL.
- **[00:00:38] Fallo de redundancias:** Diagnóstico fallido de los cinco métodos automáticos de backup.
- **[00:00:58] Recuperación y secuelas:** Restauración mediante snapshot manual de staging y balance de impacto.
