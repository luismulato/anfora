# Memoria unificada en Apple Silicon para ejecución de LLMs locales

**Fuente:** https://youtube.com/shorts/3IaJWJK3_zM
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Fazt](https://www.youtube.com/@FaztTech) — 693 mil suscriptores (Fazt es un canal en donde podrás encontrar una variedad de videos de programación, desarrollo Web y muchos…)

## Resumen

Análisis de la arquitectura de memoria unificada en procesadores Apple Silicon (chips M) frente a la separación RAM/VRAM en PC tradicionales. Permite alojar modelos de lenguaje completos en el espacio accesible por la GPU sin cuellos de botella de transferencia.

## Recursos clave mencionados

- **Video analizado:** https://youtube.com/shorts/3IaJWJK3_zM
- **Arquitectura de hardware de referencia:** Apple Silicon (SoC serie M con Unified Memory Architecture)

## Hallazgos

- **Eliminación del bus de transferencia PCIe:** En arquitecturas de PC tradicionales, la partición de un modelo entre RAM de sistema y VRAM de tarjeta gráfica genera una latencia sustancial por copia de datos; en memoria unificada, CPU y GPU leen del mismo direccionamiento.
- **Acceso a gran capacidad para GPU:** Modelos que superan el tamaño de una VRAM dedicada estándar pueden ejecutarse íntegramente asignando la mayoría de la memoria del sistema a la GPU integrada.
- **Compensaciones y límites técnicos:** 
  - Competencia de recursos: las aplicaciones del sistema operativo restan memoria directamente utilizable para inferencia.
  - Imposibilidad de ampliación: memoria soldada en el encapsulado del SoC.
  - Velocidad pura: las GPUs dedicadas de gama alta conservan mayor ancho de banda y velocidad bruta siempre que el modelo quepa íntegramente en VRAM.
- **Tendencia de la industria:** Adopción de conceptos similares de memoria compartida en consolas (PS5) y nuevos equipos basados en SoCs unificados con aceleración neuronal.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Planteo del problema:** Disparidad de rendimiento entre PC y Mac con idéntica cantidad de memoria al cargar modelos locales.
- **[00:00:14] Arquitectura tradicional de PC:** Separación estricta entre CPU (RAM) y GPU (VRAM) y cuello de botella de transferencia.
- **[00:00:47] Arquitectura de memoria unificada:** Integración de CPU y GPU en un solo chip y acceso al mismo bloque de memoria sin copias redundantes.
- **[00:01:07] Impacto en inferencia de IA:** Capacidad de cargar modelos completos en memoria accesible por GPU sin partición forzada con CPU.
- **[00:01:25] Limitaciones y consideraciones:** Competencia de memoria por apps de fondo, memoria no ampliable y comparación de velocidad bruta vs. GPUs dedicadas.
- **[00:01:58] Tendencias de hardware unificado:** Expansión del paradigma de memoria unificada en otros dispositivos de cómputo.
