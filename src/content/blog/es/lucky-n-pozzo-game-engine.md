---
title: "Creando un motor de videojuegos en C++"
description: "Desarrollando un motor de videojuegos multiplataforma en C++ con soporte para scripting, un editor visual y compilación a WebAssembly"
pubDate: "2026-11-28"
heroImage: "https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/r-type-game-playing.gif"
---

## Que debiamos hacer?
Soy estudiante de 3r año de ingenieria de software, y uno de los proyectos de este año era crear un motor de videojuegos y con este hacer el juego de [R-Type](https://es.wikipedia.org/wiki/R-Type). Debiamos construir un motor de videojuegos en C++ basado en [ECS](https://es.wikipedia.org/wiki/Entidad-componente-sistema), con soporte multiplataforma y multijugador, pero quisimos ir más allá de lo que nos pedían y acabamos implementando muchas más cosas, como por ejemplo:
  - Editor de escenas visual
  - Scripting con Lua
  - Creador de olas de enemigos
  - Compilacion a WebAssembly
  - Componentes de UI
  - Prefabricados
  - Sistema de animaciones
  - MCP
  - Editor de codigo
  - CLI
  - Sistema de colisiones
  - Compresion para el Multijugador
  - Asignaciones de teclas para raton, teclado y mandos

## ¿Que es ECS?
ECS es un patron de software orientado a datos el cual se usa bastante en desarrollo de videojuegos ya que este se centra en los datos en vez de en la herencia como en OOP. ECS funciona con entidades, componentes y sistemas.

### ¿Que es una entidad?
Es simplemente un numero al cual pueden asignarle diferentes componentes para crear por ejemplo un personaje.

### ¿Que es un componente?
Un componente es una estructura la cual guarda datos para esa entidad, por ejemplo un personaje tendria el componente de posicion, imagen, mascara de collision y script. 

### ¿Que es un sistema?
Un sistema es una funcion la cual se ejecuta regularmente para aplicar ciertos valores a los componentes, en el caso de un personaje un systema seria el que se encarga de que cuando presiones una tecla la posicion del personaje cambie.

## Editor visual de escenas
Esta es una de las funciones mas chulas que hemos programado. Utilizando [Dear ImGui](https://github.com/ocornut/imgui) y [raylib](https://www.raylib.com/), hemos creado un editor que permite que construyes un juego sin salir de este, no necesitas nada mas. Desde el editor puedes crear entidades, modificar sus componentes como la posicion al hacer click en el panel izquierdo (el cual muestra las entidades de la escena) y editando estas en el panel derecho. Si haces click derecho, puedes añadir componentes como el sonido o los scripts de Lua.
![editor de escenas visual](https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/visual-scene-editor.png)
En la parte inferior de la imagen, podemos ver la lista de archivos en el proyecto. Una de las carpetas se llama `scripts`, si la abrimos y hacemos click en uno de los scripts, podemos editar el codigo directamente desde el editor, este incluso tiene LSP el cual muestra errores si las syntaxis no es valida. Para la integracion con _scripting_, hemos usado [sol2](https://github.com/ThePhD/sol2) para hacer el _binding_ a nuestro motor en C++ el cual se usa como libreria en el editor.
![code editor](https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/code-editor.png)
Gracias a Dear ImGui, todas las pestañas que se ven se pueden mover y organizar como quieras. Por ejemplo, puedes coger la pestaña que dice **Inspector** y moverla a la izquierda o abajo.


## Creador de olas de enemigos
Dependiendo del tipo de juega, tal vez quieras que aparezcan varios enemigos con ciertas formaciones y que se mantengan juntos. Hemos implementado diferentes patrones para que puedas hacer esto, como por ejemplo en v o en un _grid_. Esto permite que el desarrolador especifique un Prefabricado (que es como una plantilla que puedes crear para que todos los enemigos del mismo tipo se vean iguales), una posicion donde empezar, la cantidad de enemigos y la formacion. Una vez que la camara llega a una posicion, los enemigos aparecen con esa formacion, ahorrando al desarrolador de tener que calcular donde deberia aparecer cada enemigo para que tenga cierta forma.
![wave spawning settings](https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/wave-spawning.png)

## Multijugador
El multijugador ha sido una de las cosas mas dificiles que hemos construido. Mantener a todos los cliente sincronizados, fluido, incluso en conexiones no muy buenas no ha sido facil. Al final, con algunas optimizaciones como los [_varint_](https://en.wikipedia.org/wiki/Variable-length_integer) y un poco de compresion, hemos conseguido un multijugador fluido donde algunas partes no hace falta programarlas ya que son solo un clic. Por ejemplo para la aparicion de enemigos ya sea en oleadas o individualmente, solo debes de añadir el componente de multijugador y decidir quien tiene la autoridad, tambien esta la opcion de sincronizar ciertas variables que el usuario cree como por ejemplo la vida de un jugador y decidir quien tiene autoridad sobre esta.
![ajustes de multijugador](https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/multiplayer-settings.png)

## Compilacion a WebAssembly
Nos pidieron hacer-lo multiplataforma, que debia correr en Linux, Windows y mac, y lo hicimos, pero pensamos, porque no ejecutarlo en el "Sistema operativo" mas compatible de todos? El navegor. Tal vez no es un "SO", pero casi: tiene su propias "syscall", su propio sistema de almacenamiento de datos y puede correr mas de una programa a la vez y de diferentes tipos. Si corre en la web, corre en cualquier sitio. Esto lo hicimos compilando el juego usando [Empscripten](https://es.wikipedia.org/wiki/Emscripten) un compilador que transforma [LLVM](https://es.wikipedia.org/wiki/LLVM) a [WebAssembly](https://es.wikipedia.org/wiki/WebAssembly). Quedaron algunos bugs, por ejemplo, el multijugador se implemento antes de que pensasemos en compilar a WebAssembly, y fue desarrollador usando un protocolo con UDP, el cual es simulado con WebSockets en WebAssembly. Si quieres puedes [probar](https://gerardpollorebozado.github.io/r-type/game) uno de nuestros juegos en tu navegador.

## Conclusion
Contruir una motor de videojuegos no fue facil pero fue un proyecto muy divertido. Algunas cosas fueron bastante mas dificiles de lo que pensamos (los juegos multijugador deberia ser ilegales, nadie deberia sufrir las consecuencias de desarrolar uno), pero al final estamos muy orgullosos de el producto final que hemos conseguido, con el que incluso ganamos el premio al mejor proyecto del mes en nuestra universidad. Hemos aprendido mucho, como por ejemplo como juntar dos lenguages como C++ y Lua, detectar collisiones entre dos objectos de diferentes formas, o como desarollar juegos multijugador con UDP.
La UI y el motor son proyectos independientes, de esta forma si el desarrolador no quiere la interfaz, pueden simplemente usar el motor como libreria y programar en C++ sin perder ninguna funcionalidad ya que todo lo disponible en la UI, como las olas de enemigos, se puede programar con C++ o Lua llamando a las mismas funciones que el editor llama. Si te gustaria ver el proyecto esta disponible en [GitHub](https://github.com/GerardPolloRebozado/r-type).
<img src="https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/award.jpg" alt="Trofeo al mejor proyecto del mes" style="max-width: 350px; width: 100%; height: auto; display: block; margin: 1.5rem auto;" />

Este proyecto ha sido desarrolador junto a [Alejandro](https://github.com/alejandrolaguna20), [Nico](https://github.com/nicoepitech), [Pol](https://github.com/polcortadellas) y [Ana](https://github.com/pallaresrod).
