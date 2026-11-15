# Soup: Fine-tuning de LLMs mediante Layer Streaming en GPUs de 4 GB

**Fuente:** https://youtube.com/shorts/xFgOFgMDyEs
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [revolutia](https://www.youtube.com/@revolutia-ia) — 33.8 mil suscriptores

## Resumen

Soup es una herramienta CLI de código abierto desarrollada por Alpamys Makazhan que automatiza el fine-tuning de LLMs mediante un único archivo YAML, permitiendo ajustar modelos de 8B en GPUs de 4 GB vía layer streaming.

## Recursos clave mencionados

- **Sitio web oficial:** https://trysoup.dev/
- **Repositorio oficial en GitHub:** https://github.com/MakazhanAlpamys/Soup
- **Instalación CLI básica:** `pip install "soup-cli[train]"` o `pipx install "soup-cli[train]"`
- **Flujo de comandos:**
  - Inicialización: `soup init --template chat`
  - Entrenamiento: `soup train --config soup.yaml`

## Hallazgos

- **Técnica de Layer Streaming:** Permite mantener el modelo base congelado fuera de la memoria VRAM y transmitir secuencialmente capa por capa a la GPU, logrando entrenar modelos como Llama-3.1-8B-Instruct (NF4/LoRA) con un pico de consumo de ~3.32 GB de VRAM en hardware de gama de entrada (ej. RTX 3050 Laptop).
- **Abstracción del pipeline:** Elimina la necesidad de scripts de infraestructura complejos y clústeres en la nube; automatiza la gestión de lotes (*batch size*), asignación de memoria, cuantización y parámetros de entrenamiento a partir de una plantilla declarativa YAML.
- **Flujo de trabajo unificado:** Soporta el ciclo completo de inicialización, afinamiento, inferencia de prueba (`soup chat`), fusión de adaptadores LoRA (`soup merge`) y exportación a formatos cuantizados como GGUF (`soup export`).
- **Templates especializados:** Incorpora configuraciones listas para casos de uso específicos como chat, razonamiento, modelos médicos, llamadas a herramientas (*tool-calling*), visión y alineación por preferencias (DPO, ORPO, GRPO).

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Contexto del desarrollador y hardware:** Presentación de Alpamys Makazhan y el hito de entrenar IA en GPUs de 4 GB.
- **[00:00:16] Barreras tradicionales del fine-tuning:** Costos de computación en la nube y complejidad técnica de scripts a medida.
- **[00:00:31] Funcionamiento declarativo de Soup:** Configuración guiada por datos e inferencia de hiperparámetros en un solo comando.
- **[00:00:40] Casos de adopción y modelos:** Aplicación en asistentes especializados (médicos, razonamiento) en ordenadores portátiles estándar.
