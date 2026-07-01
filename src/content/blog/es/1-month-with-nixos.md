---
title: "Mi experiencia tras un mes usando NixOS"
description: "El sistema operativo inmutable y reproducible"
pubDate: "2026-07-01"
---

 # ¿Qué es NixOS y para qué se usa?
 NixOS es una distribución de Linux la cual se basa en la idea de tener un sistema reproducible e inmutable, esto lo hace usando el gestor de paquetes Nix y el lenguaje Nix.
 Todo el sistema operativo y las aplicaciones que hay en él pueden ser configuradas desde un mismo archivo, con el mismo lenguaje para todo. ¿Suena bien, verdad?
 
# Algunos conceptos sobre NixOS

 ## Nix (Lenguaje)
 Es un lenguaje funcional que es el que usarás para configurar tu sistema operativo.

 ## Nix (Gestor de paquetes)
 Es un gestor de paquetes como el de otras distros como apt o pacman pero hace algo distinto y es que cada paquete está aislado lo cual evita problemas como el dependency hell.

 ## Canales
 NixOS tiene diferentes canales los cuales tienen diferentes versiones de cada paquete, principalmente hay 2 variantes:
 - unstable
 - YY-MM: Esta es la rama estable la cual se actualiza aproximadamente cada 6 meses y contiene el año y el mes (YY.04 y YY.11)

 ## Generaciones
 Una generación es como una copia de seguridad de la configuración de tu ordenador, cada vez que se aplica una configuración una nueva generación se crea y se establece como la que se usará, se puede cambiar entre generaciones lo cual permite volver atrás si se rompió algo al cambiar la configuración, es como tener git para tu sistema operativo.

 ## Nix Store
 Aquí es donde todo lo que instalas se guardará en `/nix/store/[hash]/bin/[bin-name]`, por ejemplo si hacemos `whereis ls` veremos un ejemplo de dónde se guarda ese binario.
 ```bash
 whereis ls
 ls: /nix/store/qjlnzpnzx53hl7m3pjfak57ixaad0jbp-system-path/bin/ls
 ```
 Como cada paquete tiene su carpeta hace que los paquetes no se rompan entre sí ya que cada instalación está aislada de la otra.

 ## Flakes
 Los **flakes** son la forma moderna de gestionar configuraciones en Nix, resuelven el problema de los canales tradicionales. Un flake define unos *inputs* (los paquetes, archivos o repositorios que actúan como dependencias) y produce unos *outputs*. Al compilarlo, se creará el archivo `flake.lock` que fijará las versiones exactas de los *inputs*, asegurando que al compilarlo en cualquier otro sistema se descarguen exactamente las mismas versiones de las dependencias, creando así un entorno **100% reproducible**.

## Home Manager
Home Manager es la forma de aplicar configuraciones a nivel de usuario, de esta manera cada usuario tiene los programas que quiere y además podemos configurar estos programas usando el lenguaje Nix lo cual ayuda más con la reproducibilidad.

# Lo mejor de NixOS: Stylix
[Stylix](https://github.com/nix-community/stylix) permite configurar un esquema de colores, fuentes y fondo de pantalla, y él se encargará de aplicarlo en todas las aplicaciones compatibles (desde el editor de código hasta Spotify). Esto hace que tu sistema tenga una apariencia unificada sin tener que lidiar con la configuración manual de los temas de GTK y Qt.

# Dificultades
Home Manager es lo que más problemas me ha dado porque no sabía cómo configurar ciertas opciones ni dónde encontrarlas, pero descubrí una [web](https://home-manager-options.extranix.com/) que permite ver todas las opciones disponibles. Aun así, esto solo se aplica a los repositorios oficiales, no a flakes de terceros como el que tuve que usar para Zen Browser. Siempre lo he configurado usando la UI, pero ahora que iba a usar NixOS la forma correcta de configurarlo era usando Nix; para ello tuve que usar un [flake](https://github.com/0xc000022070/zen-browser-flake), el cual en el README tenía varios ejemplos de las configuraciones disponibles, pero era un poco confuso ya que algunos ajustes tenían distintas maneras de aplicarlos y algunos no se aplicaban.

Otra dificultad que tuve fue con las AppImages: uso [FluffyChat](https://fluffychat.im) para comunicarme y siempre lo había usado con AppImages, pero no conseguí hacer que funcionase, así que tuve que acabar usando Flatpak, el cual fue muy fácil de configurar. A día de hoy sigo sin poder instalar AppImages, aunque por ahora ninguno de los programas que uso ha estado disponible únicamente como AppImage; siempre tienen una versión de Flatpak o están en los repositorios oficiales.

Como editor de código uso [Zed](https://zed.dev/) y, a la hora de programar, este descarga el LSP del lenguaje que detecta. Al hacer eso, da error ya que en NixOS no puedes simplemente descargar un binario y ejecutarlo. La solución fácil es simplemente instalar estos lenguajes y LSP con Home Manager, pero entonces pierdes la reproducibilidad y la opción de usar varias versiones, así que para eso existe [devenv](https://devenv.sh/), el cual permite definir en un archivo los lenguajes y binarios que se usarán en ese proyecto; entonces, cada vez que abras esa carpeta tendrás disponibles en el *path* los programas definidos en él. Esto es un poco tedioso porque hace que cada vez que abro un proyecto debo crear un devenv.nix si quiero tener un LSP o compilar el proyecto.

# Conclusiones
NixOS es una distro increíble la cual tiene una curva de aprendizaje bastante difícil, pero una vez superada no querrás volver a usar nunca más ninguna otra distro. Ya no habrá que rezar para que al actualizar paquetes se rompa algo, porque siempre puedes volver atrás con un solo comando, ni usar distintos lenguajes para cada programa: solo usar Nix y ya, ya no habrá más `it works on my machine`.
