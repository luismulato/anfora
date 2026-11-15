# Free Claude Code: Proxy multimodelo y fallback gratuito para agentes CLI

**Fuente:** https://youtube.com/shorts/zNaonqVSfJc?si=cQToFa30x4bpY558
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Marco Andino · IA y Automatización](https://www.youtube.com/@marcoandinoAI) — 997 suscriptores (👋 Soy Marco, Dueño de SocioBot y especialista en automatización con IA.Fundé SocioBot para ayudar a dueños de…)

## Resumen

Capa de proxy de código abierto que redirige las solicitudes de Claude Code hacia modelos gratuitos de terceros (NVIDIA NIM, OpenRouter, DeepSeek), incorporando conmutación por error automática ante caídas de servicio o saturación de cuota de tokens.

## Recursos clave mencionados

- **Repositorio:** `Alishahryar1/free-claude-code` en GitHub.
- **Proveedores compatibles:** NVIDIA NIM (build.nvidia.com), OpenRouter, DeepSeek y más de 60 endpoints adicionales.
- **Herramientas cliente:** Claude Code CLI, Codex, Pi, OpenCode, Cline, Hermes, DeepSeek Harness, Grok Build, Muse Code, Aider, Antigravity CLI y VS Code Chat.
- **Comando de instalación (Linux/macOS):**
  ```bash
  curl -fsSL "[https://raw.githubusercontent.com/Alishahryar1/free-claude-code/main/scripts/install.sh](https://raw.githubusercontent.com/Alishahryar1/free-claude-code/main/scripts/install.sh)" | sh

Comando de instalación (Windows PowerShell):

PowerShell
& ([scriptblock]::Create((irm "[https://raw.githubusercontent.com/Alishahryar1/free-claude-code/main/scripts/install.ps1](https://raw.githubusercontent.com/Alishahryar1/free-claude-code/main/scripts/install.ps1)")))

Comando de ejecución: fcc-claude

```

## Hallazgos

- **Intermediación transparente de API:** Mantiene la interfaz operativa y los flujos nativos de Claude Code pero canaliza la inferencia hacia endpoints externos sin consumir cuota de Anthropic.

- **Sistema de fallback automático:** Detecta interrupciones por agotamiento de tasa/límites de tokens o indisponibilidad del servidor activo y conmuta de inmediato al siguiente modelo disponible en la lista de respaldo configurada.

- **Interoperabilidad multiagente:** La arquitectura no se limita a Claude Code; funciona como gateway unificado para más de 11 herramientas de desarrollo asistido por IA en terminal e IDE.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación de Free Claude Code:** Introducción al proyecto puente open-source para ejecutar Claude Code sin costo de API mediante modelos externos.

- **[00:00:16] Proceso de instalación:** Ejecución del script instalador unificado compatible con macOS, Windows y Linux.

- **[00:00:21] Configuración de credenciales y modelos:** Incorporación de API keys (como NVIDIA NIM) en el panel de administración y comando de inicio fcc-claude.

- **[00:00:31] Mecanismo de fallback dinámico:** Conmutación automática entre proveedores (NVIDIA NIM -> OpenRouter -> DeepSeek) ante límites o caídas.

- **[00:00:38] Compatibilidad de ecosistema:** Soporte extendido a más de 11 agentes de desarrollo (Cline, Aider, OpenCode, Codex) y 61 proveedores LLM.
