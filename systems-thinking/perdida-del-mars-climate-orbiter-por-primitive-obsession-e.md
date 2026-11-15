# Pérdida del Mars Climate Orbiter por Primitive Obsession e Interfaces sin Esquema (1999)

**Fuente:** https://youtube.com/shorts/wv9Dpt7bEn8
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Expediente Dev](https://www.youtube.com/@ExpedienteDev) — 1.82 mil suscriptores (Hackeos, fallas, ciberataques y tragedias digitales contados como expedientes.Reconstruimos casos reales de…)

## Resumen

Análisis de la pérdida del Mars Climate Orbiter en 1999, causada por un error de *primitive obsession* y ausencia de contratos tipados que provocó la ingesta de unidades en libras-fuerza segundo en lugar de newtons-segundo.

## Recursos clave mencionados

- Video original: https://youtube.com/shorts/wv9Dpt7bEn8
- Canal oficial: Expediente Dev
- Informe oficial de la misión: NASA Mars Climate Orbiter Mishap Investigation Board Report (1999)
- Patrones arquitectónicos: NewType pattern, Phantom Types (C++/Rust), Contract Testing en CI/CD

## Hallazgos

- **Insight clave:** «Un float sin tipo de dominio no es un dato, es un bug en producción esperando su momento.»
- **Antipatrón de Obsesión Primitiva (*Primitive Obsession*):** La transmisión de magnitudes físicas como tipos primitivos numéricos (`float`/`double`) desprovistos de tipado fuerte o metadatos de unidad impidió que el compilador o linter identificara la discrepancia semántica.
- **Ruptura de contrato en interfaces:** El contrato especificaba unidades del Sistema Internacional (N·s), pero el software emisor (Lockheed Martin) enviaba unidades imperiales (lbf·s) tras una refactorización legacy donde se removió la conversión.
- **Corrupción silenciosa de datos (*Silent Corruption*):** La discrepancia (un factor de escala de 4,45 veces menor) operó inadvertida durante 9 meses debido a la falta de validación de esquemas en archivos planos, ausencia de aserciones de rango e inexistencia de validaciones de invariantes en runtime.
- **Estrategias arquitectónicas de prevención:**
  - *Type Safety en compilación:* Empleo de patrones como *NewType* o *Phantom Types* en lenguajes fuertemente tipados para rechazar operaciones entre magnitudes de unidades incompatibles en build time.
  - *Serialización con esquemas estrictos:* Reemplazo del parsing ciego de texto plano por esquemas estructurados y tipados que validen metadatos y rangos al deserializar.
  - *Contract Testing:* Implementación de pruebas automatizadas de contrato en pipelines de CI/CD para comprobar payloads con casos de prueba conocidos entre subsistemas integrados.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Incidente del Mars Climate Orbiter:** Pérdida de 125 millones de dólares por colisión atmosférica en septiembre de 1999.
- **[00:00:15] Interfaz y discrepancia de unidades:** Comunicación entre Lockheed Martin y NASA mediante archivos planos y desalineación entre N·s y lbf·s.
- **[00:00:34] Refactorización y fallo de detección:** Eliminación inadvertida de la rutina de conversión y ausencia de validación semántica en tipos primitivos.
- **[00:00:54] Impacto de la corrupción silenciosa:** Ingesta acumulada durante 9 meses y trayectoria descendente crítica a 57 km de la superficie marciana.
- **[00:01:09] Medidas de prevención arquitectónica:** Adopción de type safety (NewType/Phantom Types), esquemas estructurados y contract testing en CI/CD.
