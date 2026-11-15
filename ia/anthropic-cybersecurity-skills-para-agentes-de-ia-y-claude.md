# Anthropic Cybersecurity Skills para agentes de IA y Claude Code

<img src="https://repository-images.githubusercontent.com/1166506614/38d9aad0-5e51-43d0-8567-21443768d1be" alt="Imagen de portada: Anthropic Cybersecurity Skills para agentes de IA y Claude Code" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://www.youtube.com/watch?v=p6XZePKj5zs
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Lautaro Nievas](https://www.youtube.com/@nievaslautaro) — 2.16 K suscriptores (Soy Lautaro Nievas, fundador de Nievas Consulting.Estás en el canal donde te muestr cómo implementar inteligen)

## Resumen

Librería de código abierto con 818 habilidades estructuradas bajo el estándar agentskills.io. Permite a agentes de IA como Claude Code ejecutar procedimientos auditables alineados con MITRE ATT&CK, NIST CSF 2.0 y marcos corporativos de ciberseguridad.

## Recursos clave mencionados

- **Video original:** https://www.youtube.com/watch?v=p6XZePKj5zs
- **Repositorio analizado:** [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)
- **Instalación rápida vía npx:**
  ```bash
  npx skills add mukul975/Anthropic-Cybersecurity-Skills

Instalación vía Git:

Bash
git clone [https://github.com/mukul975/Anthropic-Cybersecurity-Skills.git](https://github.com/mukul975/Anthropic-Cybersecurity-Skills.git)

```

## Hallazgos

- **Estructuración estandarizada:** Provee 818 habilidades empaquetadas en formato SKILL.md (especificación agentskills.io) para consumo runtime en agentes como Claude Code, Cursor y GitHub Copilot.

- **Mapeo a marcos de auditoría:** Cada procedimiento se alinea con marcos de seguridad reconocidos, incluyendo MITRE ATT&CK v19.1, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF y MITRE F3.

- **Distribución de dominios defensivos:** Cubre 34 dominios de seguridad, destacando 40 habilidades para Identity & Access Management (IAM), 8 orientadas a auditoría de interfaces visuales/superficie de pantalla y 6 destinadas a técnicas de engaño (honeypots/canary tokens).

- **Eficiencia de tokens:** El diseño utiliza revelación progresiva (progressive disclosure), requiriendo únicamente de 30 a 35 tokens por habilidad en la etapa de escaneo inicial de metadatos frontmatter.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación del repositorio:** Introducción a la librería abierta de 818 habilidades de seguridad para Claude Code.

- **[00:00:10] Mapeo con estándares de la industria:** Alineación con marcos de auditoría empresarial y desglose de módulos (accesos, interfaces y trampas/ceñuelos).

- **[00:00:30] Adopción y relevancia:** Crecimiento del repositorio en la comunidad de desarrollo y seguridad para aplicaciones con LLMs.
