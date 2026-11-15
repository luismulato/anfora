# Everything Claude Code (ECC): Framework open source de subagentes y skills

<img src="https://opengraph.githubassets.com/237d61cf9d86336f2f6a70ec4ebb625dec2893c9df53082ff39ec9ec928d84c5/affaan-m/ECC" alt="Imagen de portada: Everything Claude Code (ECC): Framework open source de subagentes y skills" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://youtube.com/shorts/fwSkYsg66mI?si=YPb1eJBJWj8Lwqz2
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Jack Roberts](https://www.youtube.com/@Itssssss_Jack) — 342 mil suscriptores (Before YouTube, I built and sold a tech start-up with 60,000+ customers (Top-100 UK Start-ups)I founded Glaido)

## Resumen

Everything Claude Code (ECC) es un framework open source desarrollado por Affaan Mustafa que dota a asistentes de programación de 68 subagentes y 286 skills modulares, optimizando memoria persistente, auditoría de seguridad y ejecución multiplataforma.

## Recursos clave mencionados

- **Video original:** https://youtube.com/shorts/fwSkYsg66mI?si=YPb1eJBJWj8Lwqz2
- **Repositorio oficial en GitHub:** https://github.com/affaan-m/ECC
- **Sitio web oficial:** https://ecc.tools
- **Comando de instalación guiada (universal):**
  ```bash
  npx ecc-universal setup

Instalación como plugin nativo en Claude Code:

Bash
/plugin marketplace add affaan-m/everything-claude-code
/plugin install everything-claude-code@everything-claude-code

```

## Hallazgos

- **Estructura agéntica desacoplada:** Incorpora 68 subagentes especializados (planificación, revisión de código, arquitectura, corrección de builds) y más de 280 skills en Markdown para aislar ventanas de contexto y evitar la degradación de atención en la sesión principal.

- **Persistencia y memoria continua:** Utiliza hooks de ciclo de vida (SessionStart, Stop) para retener aprendizajes, decisiones de arquitectura y patrones entre sesiones de trabajo mediante su capa de Continuous Learning.

- **Seguridad integrada:** Cuenta con módulos específicos para escanear vulnerabilidades de código fuente, configuraciones MCP y permisos de herramientas locales antes de la ejecución.

- **Compatibilidad agnóstica de harness:** Aunque nació optimizado para Claude Code tras ganar un hackathon oficial de Anthropic, opera de forma transversal con Cursor, Codex, OpenCode y Gemini.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Liberación de Everything Claude Code:** Publicación del repositorio open source gestado tras 10 meses de desarrollo y su concepción como equipo de desarrollo colegiado.

- **[00:00:16] Módulos de seguridad y memoria:** Capacidades de análisis de vulnerabilidades en código, depuración de memoria de contexto y persistencia entre sesiones.

- **[00:00:24] Soporte multientorno y validación:** Compatibilidad cruzada con Cursor, Codex y Gemini, destacando su validación práctica al ganar el hackathon de Anthropic.
