# Replica Skill para Claude Code

**Fuente:** https://www.youtube.com/watch?v=-PItFh9VLa4
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [revolutia](https://www.youtube.com/@revolutia-ia) — 33.8 mil suscriptores

## Resumen

Replica Skill es un paquete modular de once habilidades open-source para Claude Code que ejecuta ingeniería inversa funcional en aplicaciones comerciales. Reconstruye interfaces, lógica y testing bajo metodología clean-room, integrando análisis de opiniones de usuarios para resolver deficiencias de mercado.

## Recursos clave mencionados

- **Video analizado:** [Clona Cualquier App Con Claude Y Véndela Mejorada: Replica Skill (YouTube Shorts)](https://www.youtube.com/watch?v=-PItFh9VLa4)
- **Repositorio oficial:** [Jakeschincariol/replica-skill (GitHub)](https://github.com/Jakeschincariol/replica-skill)
- **Instalación como plugin en Claude Code:**
  ```bash
  /plugin marketplace add Jakeschincariol/replica-skill
  /plugin install replica-skill@replica-skill

Instalación global manual:

Bash
git clone [https://github.com/Jakeschincariol/replica-skill.git](https://github.com/Jakeschincariol/replica-skill.git)
cp -r replica-skill/replica-* ~/.claude/skills/

```

## Hallazgos

- **Flujo en 11 etapas especializadas:** Estructura modular dividida en roles de agente (replica-recon, replica-architect, replica-design, replica-build, replica-test, replica-diff, replica-entrepreneur, replica-brand, replica-launch, entre otros).

- **Metodología Clean-Room:** Reconstruye la experiencia de usuario y la arquitectura de flujo sin copiar código fuente propietario, logos, marcas registradas ni activos con copyright del software analizado.

- **Módulo replica-entrepreneur:** Extrae feedback público, quejas y límites de planes de usuarios en tiendas y foros de la aplicación original para priorizar funciones ausentes y resolver puntos de fricción.

- **Validación automatizada de paridad:** Incluye scripts (parity.py, imgdiff.py) para contrastar precisión estructural de UI y cobertura de casos de uso entre la solución reconstruida y el objetivo.

- **Rebranding obligatorio:** El módulo de despliegue (sweep.py, replica-brand) inspecciona el código para verificar que no queden identificadores o marcas de la aplicación de referencia antes de permitir el lanzamiento.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación de Replica Skill:** Introducción a las 11 skills modulares para Claude Code orientadas a clonación funcional.

- **[00:00:10] Pipeline de ingeniería inversa y testing:** Mapeo de interfaz, reconstrucción de componentes y detección automatizada de errores.

- **[00:00:20] Skill replica-entrepreneur:** Análisis de reseñas reales de usuarios para identificar carencias del producto objetivo y agregarlas como ventajas competitivas.

- **[00:00:38] Instalación y despliegue:** Proceso de incorporación del repositorio y configuración de las skills en el entorno de Claude.
