# VS Code Remote - SSH vs Remote - Tunnels

**Fuente:** Análisis propio (comparación armada en conversación, sin recurso externo puntual)
**Fecha archivado:** 2026-09-04
**Tipo:** Nota / análisis

## Resumen

Ambas extensiones de Microsoft permiten abrir carpetas remotas en VS Code como si fueran locales, pero resuelven la conexión por caminos de red totalmente distintos: Remote - SSH conecta punto a punto por SSH estándar dentro de la red local; Remote - Tunnels pasa por los servidores de Microsoft (relay vía cuenta GitHub/Microsoft) para permitir acceso desde cualquier lugar sin configurar VPN ni puertos.

### Comparativa directa

| Criterio | Remote - SSH | Remote - Tunnels |
| --- | --- | --- |
| **Cómo conecta** | Conexión **directa punto a punto** por protocolo SSH estándar (puerto 22) en la red local. | Conexión a través de los **servidores de Microsoft** (relay seguro vía GitHub/Microsoft account). |
| **Dependencia de internet** | **Ninguna.** Funciona 100% offline o en red Wi-Fi local sin salida a internet. | **Total.** Requiere conexión a internet activa en ambas máquinas para negociar el túnel. |
| **Velocidad y latencia en casa** | **Máxima.** La latencia es de 1 a 2 ms (tráfico directo entre tus Macs por Wi-Fi). | **Buena, pero variable.** Aunque intenta hacer conexión directa WebRTC, la señal inicial y la autenticación pasan por la nube de Microsoft. |
| **Acceso fuera de casa** | Complejo: requiere configurar VPN (Tailscale/WireGuard) o abrir puertos en el router. | **Automático y transparente.** Te conectás desde cualquier lugar del mundo sin configurar routers ni VPNs. |
| **Acceso desde navegador** | No (requiere cliente SSH / app de escritorio). | **Sí.** Podés programar desde un navegador web (`vscode.dev`) incluso en un iPad o compu ajena. |
| **Configuración inicial** | Activar "Inicio de sesión remoto" en macOS y configurar claves SSH. | Iniciar sesión con tu cuenta de GitHub/Microsoft en VS Code y activar el túnel. |

### En profundidad

#### Remote - SSH

- **Lo mejor:** Estabilidad absoluta dentro de tu red local. El tráfico viaja directamente de una Mac a la otra a la velocidad máxima de tu Wi-Fi sin salir de tu casa/oficina ni depender de servidores externos.
- **Lo peor:** Si salís con tu MacBook a un café o espacio de coworking, no vas a poder entrar a la Mac de tu casa a menos que tengas armada una red virtual como Tailscale.

#### Remote - Tunnels

- **Lo mejor:** Comodidad extrema para movilidad. Dejás la Mac principal encendida con el túnel activo y podés conectarte desde cualquier lugar del mundo con solo loguearte en GitHub, sin tocar puertos ni configurar el router de tu proveedor.
- **Lo peor:** Si se corta internet (pero tu red Wi-Fi local sigue funcionando), te quedás sin poder programar. Además, estás sumando un intermediario en la nube para conectar dos máquinas que tenés a dos metros de distancia.

### Recomendación

1. **Elegí Remote - SSH si:**
   - Tus 3 Macs están siempre (o casi siempre) en el mismo lugar físico conectadas al mismo Wi-Fi.
   - Priorizás la **latencia cero**, velocidad pura en la terminal integrada y cero dependencia de servicios en la nube o fallas de internet.

2. **Elegí Remote - Tunnels si:**
   - Te movés habitualmente con una laptop y necesitás seguir programando en la Mac fija desde cualquier otra red sin complicarte configurando VPNs.
   - Querés la puesta en marcha más sencilla posible: solo iniciar sesión con tu usuario de GitHub.

**Veredicto para este caso:** dado que Obsidian ya se resolvió de forma 100% local con Syncthing, Remote - SSH encaja mejor con esa filosofía: rápido, privado, directo por Wi-Fi y sin intermediarios.

## Recursos clave mencionados

- Remote - SSH (Marketplace, ms-vscode-remote): https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh
- Remote - SSH — docs oficiales: https://code.visualstudio.com/docs/remote/ssh
- Remote - Tunnels (Marketplace, ms-vscode.remote-server): https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-server
- Remote Tunnels — docs oficiales: https://code.visualstudio.com/docs/remote/tunnels
