# Raspberry Pi AI HAT+ 2: Acelerador NPU Hailo con 8 GB de RAM dedicada

**Fuente:** https://www.youtube.com/shorts/tu1amrfflb8
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [NetworkChuck](https://www.youtube.com/@NetworkChuck) — 78.9 mil suscriptores (Welcome to NetworkChuck!I LOVE Information Technology!! My goal is to help as MANY PEOPLE AS POSSIBLE jump…)

## Resumen

Raspberry Pi presenta el módulo AI HAT+ 2, equipado con acelerador Hailo, disipador integrado y 8 GB de memoria RAM dedicada. Permite ejecutar modelos de lenguaje (LLMs) de forma 100% local en Raspberry Pi 5 sin consumir memoria del sistema.

## Recursos clave mencionados

- **Hardware:** Raspberry Pi 5 (16 GB) + Raspberry Pi AI HAT+ 2.
- **Software y stack:** Hailo AI Software Suite, Docker y Open WebUI.
- **Enlace del recurso:** https://www.youtube.com/shorts/tu1amrfflb8

## Hallazgos

- **RAM dedicada integrada:** A diferencia de la versión anterior que compartía y restaba memoria al host para visión computacional básica, el AI HAT+ 2 incorpora 8 GB de RAM propia para modelos de mayor tamaño.
- **Gestión térmica pasiva obligatoria:** El incremento de consumo y disipación exige la instalación de un disipador térmico con tornillos de resorte incluido en el kit.
- **Ejecución local desacoplada:** El stack utiliza el driver/servicio de Hailo montado sobre Docker; el acelerador gestiona inferencia de texto y LLMs sin dependencias de APIs en la nube.
- **Interfaz y consumo:** Es compatible con despliegues de Open WebUI en contenedor local o mediante interacción directa vía CLI.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación y limitaciones del modelo previo:** Comparativa con el AI HAT anterior sin RAM integrada.
- **[00:00:33] Unboxing y hardware:** Características del AI HAT+ 2, disipador térmico y especificación de 8 GB de RAM.
- **[00:00:54] Instalación física:** Montaje sobre Raspberry Pi 5, espaciadores, elevador de pines GPIO y fijación.
- **[00:01:28] Configuración de software:** Flasheo de Raspberry Pi OS, instalación del software Hailo y servicio en Docker.
- **[00:01:45] Inferencia y frontend:** Descarga de LLM, pruebas vía terminal y conexión con Open WebUI.
