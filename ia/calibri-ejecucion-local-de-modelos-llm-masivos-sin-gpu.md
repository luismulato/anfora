# Calibri: Ejecución local de modelos LLM masivos sin GPU dedicada

**Fuente:** https://youtube.com/shorts/WYJxGSfXLZQ
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Jordan Blake](https://www.youtube.com/@ai_vanta_ai) — 15.9 mil suscriptores (Hey, I’m Jordan — AI creative tools, demos &amp; real workflows 🎬🎬 AI presenter Adobe⚡ Cut demo render…)

## Resumen

Calibri permite ejecutar modelos de lenguaje a gran escala, como GLM 5.2 (744B), en ordenadores portátiles sin GPU dedicada. Utiliza una técnica de streaming desde disco a memoria RAM, cargando dinámicamente solo los pesos requeridos para la computación activa.

## Recursos clave mencionados

- **Video original:** [Calibri runs 744B parameter AI on laptop without a GPU using GLM 5.2](https://youtube.com/shorts/WYJxGSfXLZQ)
- **Modelo de referencia:** GLM 5.2 (744B parámetros; ~370 GB en almacenamiento)
- **Comandos de ejecución en terminal:**
  - `kaye chat`: Inicia sesión interactiva en la terminal en modo offline.
  - `kaye serve`: Expone una API local compatible con los endpoints de OpenAI.

## Hallazgos

- **Mecanismo de streaming:** Reduce el requerimiento de memoria manteniendo únicamente alrededor de 10 GB en RAM correspondientes al bloque en ejecución, cargando progresivamente el resto desde la unidad de almacenamiento.
- **Inferencia desacoplada de aceleradores:** Prescinde de GPUs con gran VRAM para la carga de modelos fundacionales masivos a nivel local.
- **Servidor compatible con OpenAI:** Proporciona un endpoint sustitutivo para despliegues locales, eliminando costos por consumo de tokens externos y procesando datos completamente en local.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Inferencia de 744B sin GPU:** Presentación del hito técnico usando el modelo abierto GLM 5.2 en un portátil estándar.
- **[00:00:17] Arquitectura de Calibri:** Explicación del funcionamiento mediante retención de 10 GB en RAM y streaming continuo de parámetros desde el disco.
- **[00:00:33] Instalación y despliegue:** Proceso de clonación, requerimiento de almacenamiento (370 GB) e interacción mediante interfaz CLI.
- **[00:00:45] API local compatible:** Modo `kaye serve` para integración transparente con bibliotecas cliente de OpenAI y privacidad total de datos.
