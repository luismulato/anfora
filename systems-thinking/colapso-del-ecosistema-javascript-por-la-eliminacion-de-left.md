# Colapso del Ecosistema JavaScript por la Eliminación de left-pad (2016)

**Fuente:** https://youtube.com/shorts/sxtYz-d9bfM
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Expediente Dev](https://www.youtube.com/@ExpedienteDev) — 1.82 mil suscriptores (Hackeos, fallas, ciberataques y tragedias digitales contados como expedientes.Reconstruimos casos reales de…)

## Resumen

Análisis del incidente de 2016 donde la despublicación voluntaria de `left-pad` (módulo de 11 líneas) en npm quebró dependencias transitivas críticas como Babel y React, paralizando pipelines globales de integración continua.

## Recursos clave mencionados

- Video original: https://youtube.com/shorts/sxtYz-d9bfM
- Canal oficial: Expediente Dev
- Gestores y proxies de dependencias: `npm ci`, Verdaccio, JFrog Artifactory
- Comando de inspección de dependencias: `npm ls`
- API nativa sustituta en JavaScript moderno: `String.prototype.padStart()`

## Hallazgos

- **Insight clave:** «Tu proyecto es tan sólido como la dependencia más chica que nunca revisaste.»
- **Fragilidad por dependencias transitivas:** Ningún proyecto principal consumía `left-pad` de forma intencional; se encontraba anidado a tres niveles de profundidad dentro de la jerarquía de dependencias de Babel.
- **Falla en cadena por indisponibilidad de paquetes:** La ejecución de `npm unpublish` generó errores HTTP 404 instantáneos en miles de procesos de integración continua alrededor del mundo.
- **Intervención y cambio de políticas en npm:** El registro intervino republicando el paquete sin la autorización del autor y modificó las reglas de la plataforma para impedir la eliminación arbitraria de librerías con dependientes activos.
- **Estrategia de mitigación en tres capas para cadena de suministro:**
  1. *Bloqueo de versiones:* Versionar obligatoriamente `package-lock.json` y desplegar en pipelines exclusivamente con `npm ci`.
  2. *Caché y proxy interno:* Implementar registros privados intermediarios (Verdaccio, Artifactory) para mantener copias locales y evitar fallos por eliminaciones externas.
  3. *Auditoría activa del árbol:* Evaluar con `npm ls` y depurar micro-dependencias cuyas operaciones ya estén cubiertas de manera nativa por el estándar del lenguaje.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Impacto inicial:** Fallo simultáneo en compilaciones de Babel, React y pipelines mundiales de CI.
- **[00:00:07] Conflicto de propiedad y despublicación:** Disputa de marca sobre `kik` y ejecución masiva de `npm unpublish` por parte del autor.
- **[00:00:25] Arquitectura de left-pad e impacto transitivo:** Una función simple de 11 líneas que provocó errores 404 en cascada.
- **[00:00:56] Intervención de npm y cambio de políticas:** Republicación forzosa del paquete y restricción de borrado de dependencias.
- **[00:01:07] Capas de defensa y prevención:** Implementación de `npm ci`, registros artefacto proxy y auditoría del árbol de dependencias.
