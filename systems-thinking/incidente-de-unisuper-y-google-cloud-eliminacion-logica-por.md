# Incidente de UniSuper y Google Cloud: eliminación lógica por valor predeterminado inseguro

**Fuente:** https://youtube.com/shorts/JzMw2C23AvI?si=cO3bcBdE491An3iU
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube (Short)
**Canal:** [Expediente Dev](https://www.youtube.com/@ExpedienteDev) — 1.82 mil suscriptores (Hackeos, fallas, ciberataques y tragedias digitales contados como expedientes.Reconstruimos casos reales de…)

## Resumen

Análisis del incidente de mayo de 2024 donde Google Cloud eliminó la infraestructura de UniSuper tras aplicar silenciosamente un valor predeterminado de caducidad de un año ante un parámetro de aprovisionamiento vacío, evidenciando riesgos críticos en la automatización del ciclo de vida.

## Recursos clave mencionados

- Video original: [YouTube Shorts - Expediente Dev](https://youtube.com/shorts/JzMw2C23AvI?si=cO3bcBdE491An3iU)
- Servicios y plataformas involucradas: Google Cloud VMware Engine (GCVE), Google Cloud Storage

## Hallazgos

- **Mecanismo de falla (default inseguro):** Durante el aprovisionamiento de un entorno en 2023, una herramienta interna de Google Cloud no rechazó un parámetro de duración en blanco y asignó silenciosamente una caducidad fija de 12 meses.
- **Límites de la redundancia por zona:** Aunque la arquitectura estaba distribuida en dos zonas de disponibilidad, la replicación de infraestructura no protege frente a eliminaciones lógicas del recurso principal a nivel de plano de control.
- **Falta de observabilidad en desaprovisionamiento:** El sistema de gestión del ciclo de vida ejecutó el borrado automático programado sin disparar las alertas o advertencias habituales de destrucción de infraestructura.
- **Estrategia multicloud y backups fuera de banda:** La restauración de servicios críticos exigió reconstruir redes, aplicaciones y VMs desde respaldos aislados en Google Cloud Storage y un segundo proveedor cloud alternativo.
- **Medidas correctivas:** Google descontinuó la herramienta interna de despliegue involucrada y redefinió las políticas de validación para evitar que campos omitidos actúen como confirmaciones destructivas.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Impacto inicial en UniSuper:** Caída masiva de servicios para más de 600.000 afiliados sin presencia de ransomware o brechas externas.
- **[00:00:14] Causa raíz en Google Cloud VMware Engine:** Omisión de un parámetro de duración en el aprovisionamiento inicial y asignación predeterminada de un año de vida útil.
- **[00:00:40] Ejecución de la eliminación lógica:** Borrado total ejecutado automáticamente por el ciclo de vida sin activación de alertas preventivas.
- **[00:00:52] Ineficacia de zonas y proceso de recuperación:** Limitaciones de la alta disponibilidad zonal ante órdenes del plano de control y restauración desde copias de seguridad híbridas/multicloud.
- **[00:01:06] Lección arquitectónica y correcciones de Google:** Retiro de la herramienta de despliegue y análisis del patrón de falla de diseño por valores obligatorios no validados.
