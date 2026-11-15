# Colapso Financiero de Knight Capital por Despliegue Manual y Deuda Técnica (2012)

**Fuente:** https://youtube.com/shorts/YUWwxOAQc1g
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Expediente Dev](https://www.youtube.com/@ExpedienteDev) — 1.82 mil suscriptores (Hackeos, fallas, ciberataques y tragedias digitales contados como expedientes.Reconstruimos casos reales de…)

## Resumen

Análisis del incidente de Knight Capital en 2012, donde un despliegue manual omitió un servidor y reactivó código obsoleto mediante reutilización de feature flags, provocando 440 millones de dólares en pérdidas y la quiebra institucional.

## Recursos clave mencionados

- Video original: https://youtube.com/shorts/YUWwxOAQc1g
- Canal oficial: Expediente Dev
- Algoritmo heredado involucrado: `Power Peg` (rutina en desuso activa desde 2003)
- Marco normativo de referencia: Informe SEC Release No. 70694 (Knight Capital Group, Inc.)

## Hallazgos

- **Insight clave:** «Si hacés un deploy a mano, el bug sos vos.»
- **Antipatrón de reutilización de feature flags:** Reutilizar flags existentes para funciones nuevas sin purgar la lógica legacy puede activar inadvertidamente rutinas obsoletas en entornos con versiones heterogéneas.
- **Riesgo crítico del despliegue manual:** La ausencia de pipelines de CI/CD automatizados y verificación de consistencia entre nodos permitió que 1 de 8 servidores ejecutara binarios desactualizados.
- **Bucles sin condición de salida:** El código reactivado (`Power Peg`) carecía de validación acumulada de órdenes ejecutadas, disparando ráfagas continuas al mercado a precios desfavorables.
- **Ventana de reacción tardía:** Se procesaron 4 millones de ejecuciones en 45 minutos antes de mitigar los procesos, generando un descalce financiero irreversible.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Incidente de Knight Capital:** Introducción a la pérdida de 440 millones de dólares en agosto de 2012.
- **[00:00:09] Fallo en el despliegue:** Copia manual de binarios sin CI/CD y omisión inadvertida del octavo servidor.
- **[00:00:25] Reactivación de código muerto:** Reutilización de feature flag y activación de la rutina obsoleta `Power Peg`.
- **[00:00:37] Bucle infinito de órdenes:** Emisión masiva de transacciones al mercado sin validación de estado acumulado.
- **[00:00:53] Consecuencias y mitigación:** Quiebra de la firma, reglas de prevención y lección operativa final.
