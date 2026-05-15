---
title: "Migrando mi homelab a Komodo"
description: "Tener que editar archivos compose y ejecutar comandos de docker en diferentes servidores no tiene por qué ser una molestia. Komodo facilita la gestión de todos los servicios de tu homelab desde una única interfaz."
pubDate: "2026-05-15"
heroImage: "https://raw.githubusercontent.com/moghtech/komodo/main/screenshots/Dark-Dashboard.png"
---

He tenido un homelab durante varios años, y ha sido una gran experiencia de aprendizaje. A lo largo de los años, he experimentado con muchas herramientas, sistemas operativos y servicios diferentes pero siempre no me acababa de gustar lo que usaba y terminaba usando el terminal

### El problema de la gestión

Lo que mas me molestaba era gestionar todos los diferentes servicios y aplicaciones que tenía en funcionamiento. Tenía que acceder por SSH al servidor cada vez que algo no funcionaba, cada vez que quería revisar los logs o si necesitaba actualizar un archivo Compose. Era incomodo y aun mas si intentaba hacerlo desde el movil.

### Mejorando con Dockge

Una de las primeras herramientas que utilicé para solucionar esto fue [Dockge](https://github.com/louislam/dockge). Es una herramienta sencilla pero potente que te permite gestionar tus contenedores Docker desde una interfaz web, revisar logs, actualizarlos y reiniciarlos, todo utilizando archivos Compose estándar, por lo que no hay vendor lock-in si decido dejar de usarlo ese era uno de los requisitos que tenia a la hora de elegir una herramienta de este tipo.

Sin embargo, Dockge seguía siendo un poco limitado para mis necesidades. Quería funciones más potentes, como desplegar una aplicación directamente desde un repositorio Git. Fue entonces cuando descubrí [Komodo](https://github.com/moghtech/komodo) mientras leía la newsletter [selfh.st](https://selfh.st/) la cual recomiendo mucho, es una de mis favoritas.

### Descubriendo Komodo

Komodo era exactamente la aplicación que estaba buscando. Tiene todas las funciones de Dockge y más, incluyendo la capacidad de clonar repositorios, compilarlos y desplegarlos, actualizaciones automáticas de contenedores, alertas de caídas y todo esto sin perder la simplicidad de usar archivos Compose estándar para el despliegue de contenedores.

La instalación es muy fácil con un archivo Docker Compose. Una vez en funcionamiento, conectar servidores adicionales solo requiere un comando para ejecutar en el servidor de destino y ya puedes gestionar todos tus servidores desde una única interfaz.

### Las desventajas

No todo es perfecto, por supuesto. Por ejemplo, las acciones "importantes" como detener o eliminar un contenedor piden confirmación requiriendo que escribas el nombre del recurso. Si bien esta es una buena manera de prevenir accidentes pero creo que cosas como un reinicio no requieren tanto y que estaria bien que se puediese desactiver ya que puede ser molesto a la 1 de la mañana cuando intentas descubrir por qué algo no funciona y tienes que seguir escribiendo nombres solo para reiniciar contenedores.

En general, Komodo es una gran herramienta. La recomiendo encarecidamente a cualquiera que tenga un servidor y quiera gestionarlo de una manera más eficiente.
