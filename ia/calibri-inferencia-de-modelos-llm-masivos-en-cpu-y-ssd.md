# Calibri: Inferencia de modelos LLM masivos en CPU y SSD

**Fuente:** https://www.youtube.com/shorts/CaHT7D_B03s
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [InsiderForce](https://www.youtube.com/@InsiderForce) — 89.1 mil suscriptores (• I study how businesses use AI to scale from 0 to 1M. • Then I reverse-engineer business growth.🤝 Collabs …)

## Resumen

Calibri permite ejecutar modelos abiertos masivos (como GLM 5.2 de 744B) en laptops estándar sin GPU mediante streaming de capas desde el SSD a la RAM bajo demanda. Desarrollado en C puro sin dependencias externas ni consumo en la nube.

## Recursos clave mencionados

- Video original: https://www.youtube.com/shorts/CaHT7D_B03s
- Herramienta analizada: Calibri (motor de inferencia en C para LLMs masivos en CPU/SSD)
- Modelo de referencia: GLM 5.2 (744B parámetros)

## Hallazgos

- **Mecanismo de streaming de memoria:** El motor mantiene en memoria RAM únicamente los pesos requeridos para el cómputo activo en cada paso, cargando el resto dinámicamente desde el SSD, lo que elimina el requisito de 372 GB de VRAM.
- **Eficiencia de recursos mínimos:** Permite operar modelos de 744 mil millones de parámetros en equipos con 25 GB de RAM sin aceleración por GPU.
- **Penalización de rendimiento (*trade-off*):** La tasa de generación ronda 1 token por segundo debido a las limitaciones de ancho de banda del bus de almacenamiento local frente a VRAM.
- **Arquitectura de software liviana:** Implementación nativa en C puro con cero dependencias externas de librerías o entornos Python.
- **Privacidad local estricta:** Ejecución enteramente *offline* en hardware local, garantizando que ningún dato abandone el dispositivo.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación de Calibri:** Introducción de la herramienta y el objetivo de ejecutar modelos de 744B parámetros sin GPU dedicada.
- **[00:00:13] Problema de requerimientos de VRAM:** Barrera de hardware tradicional de ~372 GB de memoria de video para modelos de frontera como GLM 5.2.
- **[00:00:26] Arquitectura de streaming SSD-RAM:** Explicación técnica de la retención selectiva en RAM y la carga bajo demanda desde disco.
- **[00:00:42] Rendimiento y especificaciones:** Ejecución en 25 GB de RAM, velocidad promedio (~1 token/s) y reducción total de costos de infraestructura.
- **[00:01:10] Detalles técnicos de implementación:** Construcción en C puro, ausencia de dependencias de Python y tracción en la comunidad de código abierto.
