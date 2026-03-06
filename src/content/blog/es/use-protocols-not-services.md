---
title: "Usa protocolos, no servicios"
description: "El internet moderno está lleno de servicios que generan vendor lock-in. Es hora de recuperar nuestra libertad."
pubDate: "2026-03-06"
heroImage: "https://assets.gerarddupre.dev/blog/use-protocols-not-services.svg"
---

El internet moderno se está volviendo menos anónimo y mucho más centralizado. Dependemos cada vez más de unas pocas grandes empresas que nos ofrecen "servicios gratuitos" a cambio de nuestros datos personales.

El internet fue diseñado originalmente sin identidad incorporada a nivel de protocolo. Sin embargo, en la práctica, hoy en día los usuarios somos rastreados sin cesar mediante direcciones IP, cookies, cuentas obligatorias y huellas del dispositivo. Los servicios modernos conectan nuestra actividad a identidades persistentes, usan esos datos para mostrarnos anuncios hiperpersonalizados y mantenernos enganchados a sus plataformas.

Eso genera un problema, ya que otorga a estas megaempresas un gran poder sobre lo que vemos, leemos y compramos. Además, estos servicios cerrados rara vez son interoperables. Atrapan tus datos en sus servicios, haciendo increíblemente difícil cambiar de proveedor cuando no estás satisfecho.

En los primeros días de internet, las interacciones se construían sobre protocolos abiertos y estándares compartidos que permitían a diferentes sistemas comunicarse entre sí. Hoy en día, nuestras vidas digitales están encerradas tras servicios propietarios que se niegan a compartir.

## Por qué importan los protocolos

Para construir un internet más abierto y resiliente, necesitamos alejarnos de los servicios cerrados y volver hacia los protocolos abiertos.

Si “protocolo” suena demasiado técnico, en realidad usas uno todos los días: el correo electrónico.

El correo electrónico es un ejemplo perfecto de pila de protocolos interoperable. Puedes crear una cuenta con un proveedor que respete la privacidad, y tu amigo puede usar Gmail. Aunque usen empresas y aplicaciones distintas, aún pueden enviarse mensajes sin problemas. Si decides que no te gusta tu proveedor, puedes mover tus datos a otro lugar. Puedes confiar en proveedores, o incluso alojar tu propio servidor de correo y mantener el control total.

Históricamente, FTP cumplía un papel parecido para la transferencia de archivos. IRC fue el estándar para el chat. Cualquiera podía construir una aplicación que se conectara a esas redes. Esa es la libertad que perdemos cuando dependemos totalmente de ecosistemas cerrados como Discord o WhatsApp.

## Ejemplo reciente: verificación de identidad en Discord

Cuando estás encerrado en un servicio, estás completamente a su merced. Un ejemplo reciente es el controvertido despliegue de verificación de edad e identidad por parte de Discord.

Porque Discord es un servicio centralizado, los usuarios no tuvieron otra opción que cumplir o perder acceso a sus comunidades. Informes posteriores indicaron que más de 70,000 imágenes sensibles de verificación fueron expuestas en una filtración de un sistema de moderación de terceros. Esto empujó a muchas personas a buscar alternativas más seguras.

Sin embargo, cuando la gente abandona una plataforma como Discord, a menudo simplemente salta a otro servicio cerrado. En su lugar, deberíamos adoptar protocolos abiertos, que eliminan permanentemente este tipo de vendor lock-in a largo plazo.

[Fuente](https://proton.me/blog/discord-age-verfication-breach)

## Censura y control

Los servicios cerrados facilitan enormemente que gobiernos y empresas rastreen a los usuarios y censuren contenido. Si un gobierno quiere silenciar un movimiento, solo tiene que ordenar a una sola empresa que desconecte algo o bloquear un único dominio.

Vemos cada vez más intentos de gobiernos y corporaciones por ejercer este control:

#### Exceso de poder gubernamental (Chat Control)

La Unión Europea ha impulsado de forma agresiva la legislación de “Chat Control” (fightchatcontrol.eu), que amenaza con obligar al escaneo masivo de mensajes privados, matando de facto el cifrado de extremo a extremo. Si se aprueba, servicios centralizados como WhatsApp o Discord simplemente se verían forzados a cumplir, escaneando la vida privada de todos.

#### Censura Censura corporativa (La Liga)

En España, La Liga ha emprendido campañas antipiratería extremadamente agresivas, presionando a tribunales e ISP para bloquear dominios, aplicaciones y plataformas con muy poca supervisión. Cuando sitios legítimos quedan atrapados en la red, los usuarios de servicios centralizados pierden el acceso al instante. Puedes leer más sobre esto en [La Liga Gate](https://laligagate.com/).

Los protocolos solucionan esto. Los protocolos abiertos son descentralizados por diseño. Como cualquiera puede implementar su propio servidor o cliente, no hay una única “cabeza” que cortar. Un gobierno o una corporación no puede obligar fácilmente a una red descentralizada global de servidores independientes a implementar vigilancia masiva o censura generalizada.

Además, no hace falta ser un experto en tecnología ni ejecutar tu propio servidor para beneficiarte de esto. Puedes registrarte en servicios construidos sobre protocolos abiertos que priorizan tus derechos. Por ejemplo, proveedores de correo como ProtonMail o Tuta ofrecen cifrado de extremo a extremo, lo que significa que las propias empresas no pueden leer el contenido de tus mensajes. Esto mantiene tus conversaciones privadas a salvo de la vigilancia masiva.

Un apunte: los metadatos siguen expuestos y contienen líneas de asunto, destinatarios y otra información, pero esto es una superficie de ataque mucho menor que el contenido de los mensajes y viene de cómo están diseñados los protocolos de correo, no de los proveedores.

## Alternativas de protocolo a servicios

Aquí tienes algunas alternativas populares:

- Mensajería (WhatsApp, Discord): pasa al protocolo Matrix. (Prueba apps como Element o FluffyChat).

- Redes sociales (Twitter, Facebook): pasa a ActivityPub. (Prueba Mastodon).

- Vídeo (YouTube, Twitch): pasa a PeerTube.

- Almacenamiento en la nube (Google Drive): usa WebDAV o SFTP. (Prueba Nextcloud).

- Correo (Gmail, Outlook): confía en SMTP/IMAP. (Prueba ProtonMail o Tuta).

- Calendario y contactos (Google): usa CalDAV y CardDAV.

- Blogs/newsletters (Medium, Substack): confía en RSS.

No uso todos estos servicios ni todos los protocolos, pero intento usar tantos protocolos abiertos como sea posible y evitar quedarme atascado con un único proveedor. Por ejemplo, YouTube sigue siendo un gran servicio y aún no he encontrado un reemplazo completo. Pero dejé de usar Discord y migré a Matrix, que alojo yo mismo con [tuwunel](https://github.com/matrix-construct/tuwunel) (el autoalojamiento es opcional). Algunos de mis amigos también usan Matrix; no todos son expertos en tecnología, y aún así lo usan sin problemas.

## ¿Cómo empezar?

La mejor forma de empezar es identificar el servicio del que más dependes, como el correo, y cambiarlo primero.

Busca alternativas a Gmail, Outlook o iCloud, y comienza a usarlas. No tienes que hacerlo todo de golpe; puedes migrar gradualmente cambiando la dirección de correo en tus cuentas más importantes y configurando reenvío automático desde tu antiguo buzón al nuevo. Así no pierdes acceso a nada mientras haces la transición.

## Conclusión

No uso unicamente estos protocolos, y no he abandonado cada gran servicio de la noche a la mañana. Por ejemplo, YouTube sigue siendo una plataforma enorme y no he encontrado un reemplazo completo.

Dejé de usar Discord por completo y migré a Matrix, que actualmente alojo con tuwunel (aunque el selfhosting es totalmente opcional). Algunos amigos usan Matrix conmigo ahora los cuales no son muy técnicos, pero como las aplicaciones modernas están muy pulidas, las usan sin problema.

Internet debería ser un lugar donde podamos comunicarnos y compartir información libremente, sin estar rehén de unas pocas compañías gigantes. Al elegir aplicaciones construidas sobre protocolos abiertos en lugar de servicios cerrados, recuperamos nuestros datos, resistimos la censura y construimos una web verdaderamente descentralizada.
