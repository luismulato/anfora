# WordCraft y GridCraft: Reimplementaciones open source de Office escritas en Rust

**Fuente:** https://youtu.be/n0ryH4Banqs
**Fecha archivado:** 2026-11-15
**Tipo:** Video de YouTube
**Canal:** [Manuel Cabrera Caballero](https://www.youtube.com/@DriveMeca) — 43.5 mil suscriptores (Blogger en drivemeca.com buscando que todos aprendan opensource sin necesidad de que sean ingenieros.Llegue a…)

## Resumen

Análisis de WordCraft y GridCraft (suite ArtCraft), alternativas abiertas y nativas a Microsoft Word y Excel programadas en Rust mediante Claude Code. Destacan por su renderizado rápido, soporte multiplataforma y compatibilidad con formatos DOCX y XLSX.

## Recursos clave mencionados

- **Enlace analizado:** https://youtu.be/n0ryH4Banqs
- **Sitio web oficial del ecosistema:** ArtCraft Apps (https://getartcraft.com/apps)
- **Repositorio de WordCraft:** https://github.com/storytold/wordcraft
- **Repositorio de GridCraft:** https://github.com/storytold/gridcraft
- **Instalación y compilación con Cargo:**
  ```bash
  git clone [https://github.com/storytold/wordcraft.git](https://github.com/storytold/wordcraft.git)
  cd wordcraft
  cargo run --release -p wordcraft

```

## Hallazgos

- **Desarrollo acelerado asistido por IA:** La suite es desarrollada por Brandon Thomas (ArtCraft) utilizando Claude Code como copiloto técnico para reimplementar en Rust limpio interfaces y lógica ofimática privativa.

- **Arquitectura nativa en Rust:** Aplicaciones de escritorio sin wrappers web o Electron; integran soporte para servidores MCP (Model Context Protocol), canales JSON y CLI para control mediante agentes autónomos.

- **Licenciamiento y distribución:** Publicadas bajo doble licencia permisiva (MIT y Apache 2.0) en formatos AppImage, Flatpak, Deb, RPM y binarios para FreeBSD, Windows, macOS y WebAssembly.

- **Nivel de madurez (Alpha):** GridCraft soporta renderizado de gráficos y más de 500 funciones de Excel; no obstante, carecen aún de soporte para macros VBA y diccionarios ortográficos completos en español.

## Temas abordados en el video (orden cronológico)

- **[00:00:00] Presentación de Office Craft:** Introducción a las reimplementaciones de Word y Excel creadas tras los clones de Adobe.

- **[00:01:06] Origen del proyecto y uso de Claude Code:** Contexto del desarrollo acelerado con inteligencia artificial y base de código en Rust.

- **[00:02:05] Repositorio y características de WordCraft:** Licenciamiento dual, integración para agentes de IA y paquetes por arquitectura.

- **[00:06:11] Repositorio y capacidades de GridCraft:** Evaluación de la paridad de funciones, hojas de cálculo y reporte de errores en GitHub Issues.

- **[00:08:34] Métodos de instalación en Linux:** Selección de arquitecturas (x86_64 vs. AArch64) y gestión de paquetes AppImage mediante App Man / App-Manager.

- **[00:12:00] Demostración de WordCraft en ejecución:** Prueba de interfaz tipo Ribbon, tablas, formateo y estado de la corrección ortográfica.

- **[00:13:38] Demostración de GridCraft con XLSX:** Carga de un libro de cálculo real con 1251 filas, fórmulas matemáticas y gráficos enlazados.
