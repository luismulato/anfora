# Hermes AI (Nous Research) vs. Claude Code

**Fecha archivado:** 2026-09-11
**Visibilidad:** public
**Tipo:** Información general (sin fuente externa — comparación generada en conversación, a partir de una descripción de Hermes que trajo el usuario)

## Resumen

Comparación entre el ecosistema Hermes de Nous Research y el uso real de Claude Code de un usuario con un flujo de trabajo ya maduro (multi-sesión paralela sobre un mismo repo, skills curadas a mano con catálogo propio, memoria persistente en archivos, pipelines de release sin supervisión, y acceso móvil vía Remote Control).

**Qué es Hermes**
Dos piezas del mismo colectivo de investigación abierta:
- **Modelos Hermes LLM** (Nous-Hermes, Hermes 2, Hermes 3) — fine-tunes open-weight sobre Llama/Mistral, entrenados para function calling / tool use, salidas estructuradas (JSON), alineación permisiva (sin censura innecesaria, roleplay) y razonamiento paso a paso.
- **Hermes Agent** — framework de agente autónomo persistente: guarda procedimientos resueltos como "skills" reutilizables (auto-aprendizaje), memoria multinivel (preferencias + SQLite/FTS5 local + modelado a largo plazo), conectividad multicanal (terminal, Telegram, Discord, Slack, WhatsApp, Signal), y backends de ejecución (local, Docker, SSH, cloud).

**Dónde Hermes ganaría de verdad**
- **Independencia del estado de la laptop.** Un Remote Control de Claude Code controla una sesión que corre en la máquina local — si está apagada/dormida, no hay nada que controlar. Hermes en un backend Docker/SSH/cloud sigue vivo 24/7 sin depender de eso. Es la única ventaja concreta detectada frente al setup actual.
- Cómputo local/self-hosted con modelos open-weight, si en algún momento pesa más la privacidad de datos de cliente que la capacidad del modelo.
- UX de mensajería nativa (Telegram) para tipear/dictar rápido desde el celular, más cómoda que una vista que espeja terminal/IDE.

**Dónde no ganaría, o perdería**
- **Skills auto-generadas vs. curadas a mano.** El usuario ya tiene un catálogo de skills armado y mantenido (con sincronización automática al crear/editar una skill, y confirmación antes de borrar huérfanas). Que el agente se auto-genere "habilidades" sin ese curado tiende a sprawl/duplicados, no es una ventaja para este caso.
- **Memoria persistente** — ya cubierta con un sistema de archivos de memoria equivalente; no es una capacidad nueva.
- **Fragmentar el agente en dos identidades.** Acceder a Hermes por Telegram significa una memoria y un contexto *aparte* del que corre en Claude Code, salvo que se unifiquen a mano — hoy el usuario tiene un solo estado accesible desde compu o celular indistintamente (Remote Control).
- **Confiabilidad del modelo para tareas sin supervisión.** El usuario corre pipelines de release completos (bump + checks + commit + push + build + publish) sin pedir confirmación en ningún paso intermedio. Los fine-tunes de Llama/Mistral de la familia Hermes no llegan al nivel de razonamiento/código de Sonnet/Opus — para ese tipo de automatización es riesgo, no ventaja.

**En una frase:** el único hueco real que tapa Hermes es "que algo siga corriendo aunque la laptop esté apagada"; todo lo demás (incluido el acceso móvil) ya está cubierto, y con más potencia, por el setup actual de Claude Code.
