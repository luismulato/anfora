# Lm.AIDesign — Metodología de diseño de páginas web con IA

**Fuente:** Metodología propia de Luis Mulato (runbook canónico en Clarity: laboral/01 Lib-general/Lm.AIDesign - Metodología de diseño de páginas web con IA.md)
**Fecha archivado:** 2026-11-15
**Tipo:** Metodología propia

## Resumen

Flujo por fases para diseñar páginas web con Claude Code: brief, referencias, dirección (2 o 3 variantes), elección humana, pulido, verificación en navegador real y publicación, con fases opcionales de movimiento, scroll, componentes y video. Una herramienta principal por fase más herramientas de apoyo.

## Idea central

Un modelo, sin guía, genera páginas genéricas. Entonces separamos el trabajo en fases con una herramienta principal por fase: primero se define la dirección, después se elige a mano, después se pule y al final se verifica en un navegador real. El humano elige y aprueba; la IA genera, critica y verifica.

Marca: ✅ instalada · ⬇️ falta instalar · ⭕ fase o herramienta opcional.

## Fases núcleo

| Fase | Qué se hace | Principal | Apoyo |
|---|---|---|---|
| **0. Brief** | Objetivo, público, tono, hipótesis que valida la página. Cerrar decisiones bloqueantes. | Documento de hipótesis y kanban del proyecto | Super Memory ⬇️ (persistir decisiones entre sesiones) |
| **1. Referencias** | Sacar paleta, tipografía y layout de 2 o 3 sitios que gusten. | `destilar-sitio-web` ✅ | Awesome Design ⬇️ · `apple-design` ✅ |
| **2. Dirección** | Generar 2 o 3 variantes distintas de la página. | **`design-taste-frontend`** ✅ | Frontend Design de Anthropic ⬇️ · `nuevo-prototipo` ✅ · Image to Code ⬇️ |
| **3. Elección** | Elegir una variante a mano, en celular y compu. | Humano | — |
| **4. Pulido** | Jerarquía, tipografía, responsive, accesibilidad, copy. | **`impeccable`** ✅ | `redesign-existing-projects` ✅ · Web Design Guidelines de Vercel ⬇️ |
| **5. Verificación** | Revisar a 390 y 1280 px, claro y oscuro, consola y Lighthouse. Obligatoria: cierra el ciclo. | Chrome DevTools y claude-in-chrome ✅ | Playwright MCP ✅ |
| **6. Publicar** | Pasar a producción, desplegar, conectar dominio. | Scripts de deploy del proyecto | Cloudflare Security Audit Skill (revisar antes de prod) |

## Fases opcionales ⭕

| Fase | Cuándo conviene | Principal | Apoyo |
|---|---|---|---|
| **⭕ A. Movimiento** | Si la animación suma al mensaje. | `animate` ✅ | `animation-vocabulary` ✅ · `find-animation-opportunities` ✅ · `emil-design-eng` ✅ · `improve-animations` ✅ (auditar después) |
| **⭕ B. Scroll avanzado** | Efectos tipo Apple al hacer scroll. | GSAP + ScrollTrigger ⬇️ | Dependencia: justificar por escrito y fijar versión exacta |
| **⭕ C. Sistema de componentes** | Sitio con varias páginas o login, en React. | Astryx (Meta) ⬇️ | No aplica a una landing de un solo HTML |
| **⭕ D. Video y motion graphics** | Hero en video o reels del sitio. | Remotion ⬇️ | HyperFrames (HTML) como alternativa |
| **⭕ E. Mantenimiento de herramientas** | Cuando falta una skill en alguna fase. | Find Skill ⬇️ | — |

## Reglas

- Una fase = una tarjeta del kanban del proyecto; termina en Verify y la aprueba el humano (ver AIDev).
- Las variantes de la fase 2 son distintas entre sí (otra dirección, no otro color). Si se parecen, se descartan.
- Antes de tocar la página en producción, guardar una copia versionada.
- Instaladas el 2026-11-15: Frontend Design (Anthropic), Web Design Guidelines (Vercel) y Playwright MCP (fijado en 0.0.84), que refuerzan las fases 2, 4 y 5. Las de apoyo restantes, según necesidad. Las ⭕ B, C y D solo si la hipótesis lo pide.
- Si el sitio es un solo HTML sin dependencias (caso luismulato.co), quedan fuera Astryx, Remotion y GSAP salvo decisión explícita.

## Recursos

Página con todo para usar la metodología (copias locales de las skills, instalador y fuentes): https://bucky.taild11f63.ts.net/luis.jobs/apps/lm-aidesign/ (solo tailnet). Carpeta de origen: `apps/lm-aidesign/` en el Lab.

**Skills con copia local** (paquete `recursos/lm-aidesign-skills.zip` + `instalar.sh`, copia a `~/.claude/skills/` sin pisar): design-taste-frontend, impeccable, destilar-sitio-web, apple-design, redesign-existing-projects, animate, animation-vocabulary, find-animation-opportunities, emil-design-eng, improve-animations. `nuevo-prototipo` queda afuera: depende del toolkit del Lab.

**Fuentes de lo que falta instalar** (repos verificados el 2026-11-15; falta confirmar que sean lo mismo que mostraron los videos):
- Frontend Design (Anthropic): https://github.com/anthropics/skills (skills/frontend-design)
- Web Design Guidelines (Vercel): https://github.com/vercel-labs/agent-skills (skills/web-design-guidelines)
- Playwright MCP: https://github.com/microsoft/playwright-mcp
- Awesome Design: https://github.com/VoltAgent/awesome-design-md
- Super Memory: https://github.com/supermemoryai/claude-supermemory
- Find Skill: https://github.com/vercel-labs/skills
- GSAP + ScrollTrigger: https://github.com/greensock/GSAP
- Astryx (Meta): https://github.com/meta/astryx
- Remotion: https://github.com/remotion-dev/remotion
- HyperFrames: https://github.com/heygen-com/hyperframes
- Cloudflare Security Audit: https://github.com/cloudflare/security-audit-skill
- Image to Code: sin repo identificado todavía.

**Notas en Ánfora** (se abren dentro de Ánfora, en el sitio público y en la tailnet):
- [5 herramientas y skills de diseño para Claude Code](#nota/ia%2Fcinco-herramientas-y-skills-de-diseno-para-claude-code.md)
- [Agent Skills esenciales para Claude](#nota/ia%2Fagent-skills-esenciales-para-claude.md)
- [Astryx, sistema de diseño de Meta](#nota/ia%2Fastryx-sistema-diseno-meta-react.md)
- [GSAP y ScrollTrigger](#nota/ia%2Fgsap-scrolltrigger-animaciones-3d.md)
- [HyperFrames](#nota/ia%2Fhyperframes-motor-programatico-de-video-basado-en-html-para.md)
- [Skillry: animaciones y video con Claude](#nota/ia%2Frepositorio-skillry-de-generacion-de-animaciones-y-video-con.md)
- [Cloudflare Security Audit](#nota/ia%2Fcloudflare-security-audit-skill.md)
- [Cloudflare Security Audit (2)](#nota/ia%2Fcloudflare-security-audit-skill-2.md)
- [Find Skills](#nota/ia%2Ffind-skills-para-claude.md)
- [Find Skills de Vercel Labs](#nota/ia%2Ffind-skills-vercel-labs-gestor-habilidades.md)
- [Selección de skills para Claude Code](#nota/ia%2Fseleccion-de-skills-para-claude-code-planificacion.md)
- [Buenas prácticas para crear skills](#nota/ia%2Fbuenas-practicas-para-la-creacion-de-skills-en-agentes-de-ia.md)

## Pendientes

- Verificar las fuentes exactas (repos) de cada herramienta ⬇️ antes de instalarla: las notas de Ánfora solo traen los nombres.
- Probar la metodología completa en luismulato.co y ajustar a v0.2.
- Decidir si se convierte en skill (`md-design-run`, por ejemplo) y, en ese caso, correr `update-skills-catalog`.
- Agregar al `~/.claude/CLAUDE.md` un puntero, como se hizo con AIDev.

## Notas de Ánfora de las que sale

- Cinco herramientas y skills de diseño para Claude Code (Taste skill, Awesome Design, Image to Code, Playwright).
- Agent Skills esenciales para Claude (Frontend Design, Web Design Guidelines, Remotion, Super Memory, Find Skill).
- GSAP ScrollTrigger y Astryx (sistema de diseño de Meta).
