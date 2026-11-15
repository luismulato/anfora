# Optimización y Debloat de Android TV Mediante ADB y Agentes de Código

**Fuente:** https://www.youtube.com/watch?v=5sAgyByYjHE
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Menkian](https://www.youtube.com/@Menkian) — 33.5 mil suscriptores (En este canal vas a encontrar, Reviews, Unboxing, Guías, para armar tu computadora y ademas Entrevistas…)

## Resumen

Método de optimización para televisores con Android TV o Google TV mediante conexión ADB inalámbrica y agentes de código (Claude Code, Gemini). Automatiza la desinstalación de bloatware, la configuración de DNS bloqueador de publicidad y el reemplazo del launcher original.

## Recursos clave mencionados

- **Clean Your TV:** Guía y prompt de automatización para debloat en Android TV/Google TV.
- **Herramientas de CLI y Agentes:** Claude Code, Codex o Gemini CLI.
- **Protocolo de control:** Android Debug Bridge (ADB) inalámbrico sobre red local.

## Hallazgos

- **Sin requerimiento de root:** El proceso aprovecha las opciones de desarrollador nativas de Android TV, requiriendo únicamente depuración por USB y depuración inalámbrica sobre la misma subred Wi-Fi.
- **Automatización por agente:** El modelo interactúa en tiempo real con el dispositivo mediante comandos de terminal ADB, validando la marca, capturando la pantalla del televisor y solicitando la dirección IP local para la sesión.
- **Reducción de consumo de recursos:** Indicado especialmente para dispositivos de hardware modesto o baja memoria RAM, permitiendo remover apps no deseadas de fábrica e inyectar launchers minimalistas sin telemetría ni publicidad integrada.
- **Filtrado publicitario:** Posibilidad de configurar DNS privados directamente a nivel de sistema para mitigar anuncios integrados del launcher base.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación de Clean Your TV:** Alcance del script y concepto de bloatware en Android TV y Google TV.
- **[00:00:17] Habilitación de ADB:** Pasos para activar el modo de desarrollador y la depuración inalámbrica en el sistema.
- **[00:00:34] Ejecución con agente de código:** Configuración del prompt en Claude Code e inicio de la vinculación IP.
- **[00:00:54] Proceso de debloat y cambio de launcher:** Selección de paquetes a desinstalar, configuración de DNS y carga del nuevo launcher.
- **[00:01:33] Personalización y resultado:** Ajuste visual mediante capturas de referencia y comparación de rendimiento final.
