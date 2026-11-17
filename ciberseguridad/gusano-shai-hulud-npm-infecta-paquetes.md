# El gusano de npm que usaba tu cuenta para infectar a otros (Shai-Hulud)

<img src="https://www.datocms-assets.com/75231/1758030724-shai-hulud.png" alt="Ilustración de Wiz sobre Shai-Hulud, el gusano de la cadena de suministro de npm" width="100%" style="border-radius: 8px; max-width: 1280px;" />

**Fuente:** https://www.youtube.com/watch?v=Hun3NKUEtCM
**Fecha archivado:** 2026-11-16
**Tipo:** Video de YouTube
**Canal:** [Expediente Dev](https://www.youtube.com/@ExpedienteDev) — 1.83 mil suscriptores (Hackeos, fallas, ciberataques y tragedias digitales contados como expedientes.Reconstruimos casos reales de…)

## Resumen

Shai-Hulud (septiembre de 2025) fue un gusano de npm: un script de instalación buscaba tokens con TruffleHog, inyectaba código en los paquetes publicables de la cuenta y los republicaba automáticamente, infectando más de 500 paquetes.

## Recursos clave mencionados

- [Video original en YouTube](https://www.youtube.com/watch?v=Hun3NKUEtCM)
- [Shai-Hulud: npm supply chain worm (Wiz)](https://www.wiz.io/blog/shai-hulud-npm-supply-chain-attack)
- ["Shai-Hulud" Worm Compromises npm Ecosystem (Unit 42)](https://unit42.paloaltonetworks.com/npm-supply-chain-attack/)
- [Widespread Supply Chain Compromise Impacting npm Ecosystem (CISA)](https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem)
- [TruffleHog](https://github.com/trufflesecurity/trufflehog) (detección de credenciales filtradas)

## Hallazgos

- **Vector:** un script de instalación (corre con todos los permisos del usuario) buscaba secretos con TruffleHog; si hallaba un token de npm con permiso de publicación, inyectaba su código en los paquetes de esa cuenta y publicaba versiones nuevas sin intervención humana.
- **Propagación:** cada persona que instalaba esos paquetes repetía el ciclo; los secretos robados terminaban en repositorios públicos de GitHub. Se infectaron más de quinientos paquetes, algunos con millones de descargas semanales.
- **Causa de fondo:** no era un error de npm; los scripts funcionaban como fueron diseñados. El problema es la confianza que se da al código de un desconocido en el momento de instalarlo.
- **Pregunta de cierre:** si un paquete recién descargado puede correr con las mismas credenciales con las que se publica.
