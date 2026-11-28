---
title: "Building a game engine in C++"
description: "Making a multiplatform game engine in C++ with scripting support, a visual editor, and WebAssembly compilation"
pubDate: "2026-11-28"
heroImage: "https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/r-type-game-playing.gif"
---

## The task
I'm a 3rd-year software engineering student, and one of this year's projects was building a game engine and then making the [R-Type](https://en.wikipedia.org/wiki/R-Type) game with it. The task was to build a game engine in C++ based on [ECS](https://en.wikipedia.org/wiki/Entity_component_system) with multiplatform support and multiplayer, but we wanted to do more. So we went above and beyond and implemented a lot more features, including:
  - Visual Scene Editor
  - Lua scripting
  - Wave spawner
  - WebAssembly compilation
  - UI components
  - Prefabs
  - Animation system
  - MCP
  - Code editor
  - CLI
  - Collision system
  - Multiplayer compression
  - Input mapping for keyboard, mouse, and gamepads

## What is ECS?
ECS is a data-oriented software pattern used in game development that focuses on composition rather than inheritance. It works with entities, components, and systems. This pattern allows to reuse a lot of code without having the problems that OOP can introduce.

### What is an Entity?
An entity is just a number used to identify a group of components. With that entity identifier, you can query its components.

### What is a Component?
A component is just a struct that stores data for an entity, for example, its position, velocity, or sprite.

### What is a System?
A system is a function that runs continuously, queries entities with specific components, and updates their data depending on what happened. An example of a system is the player movement system: it constantly checks the pressed keys and updates the player's position accordingly.

## Visual Scene Editor
This was one of the coolest features we built. Using [Dear ImGui](https://github.com/ocornut/imgui) and [raylib](https://www.raylib.com/), we created an editor that allows you to fully build a game without leaving the program, you don't need anything else. From here, you can create entities and modify their properties like starting position by clicking on the left panel (which shows a list of entities in the scene) and editing them in the right panel. If you right-click in the right panel, you can also add components like sound or Lua scripts.
![visual game editor screenshot](https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/visual-scene-editor.png)
At the bottom of the screenshot, you can see the list of files in the project. One of the folders is called `scripts`, and if you open it and click on one of the scripts, you can edit the code directly inside the engine. The editor even has an LSP to show errors if the syntax is not valid. For the scripting integration itself, we used [sol2](https://github.com/ThePhD/sol2) to bind our C++ engine, which is used as a library by the editor and its ECS components to Lua.
![code editor](https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/code-editor.png)
Thanks to Dear ImGui's docking, all the tabs you see can be moved and arranged however you want. For example, you can grab the tab that says **Inspector** and move it to the left or bottom.

## Wave spawning
Depending on the type of game, you may want to spawn a lot of enemies in certain formations that stay together. We implemented different patterns like V, line, and grid. This allows the user to specify a Prefab (which is like a template you can create so all enemies of the same type look and behave the same), a starting position, enemy count, and the formation. Once the camera reaches the specified position, the enemies spawn in that formation, saving the developer from having to calculate the starting position of each enemy manually just to keep a certain shape.
![wave spawning settings](https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/wave-spawning.png)

## Multiplayer
Multiplayer was one of the hardest things to build. Keeping all clients synced and fluid, even with a not-so-great internet connection, was not easy. In the end, with optimizations like [varint](https://en.wikipedia.org/wiki/Variable-length_integer) encoding and compression, we achieved a smooth multiplayer experience where some parts don't even need coding. For example, with enemy spawning, whether in waves or individually you just add the multiplayer component and choose who has authority, and the enemies will automatically spawn on all clients. We also have functions that let a user sync custom variables between client and server (such as a player's health) and decide who has authority over each variable.
![multiplayer settings](https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/multiplayer-settings.png)

## WebAssembly compilation
We were asked to make a multiplatform engine that could run on Linux, Windows, and Mac, and we did it, but we thought, why not run it on the most compatible OS of all? The web browser. Maybe it's not an OS, but almost: it has its own "syscalls", its own filesystem, and can run more than one thing at a time. If it runs on the web, it can run on anything. We did that by compiling the game using [Emscripten](https://en.wikipedia.org/wiki/Emscripten), a compiler that transforms [LLVM](https://en.wikipedia.org/wiki/LLVM) to [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly). There are still a few bugs, for example, multiplayer was implemented before we even thought about WebAssembly, and it was developed using UDP, which gets simulated over WebSockets in the browser. You can [test](https://gerardpollorebozado.github.io/r-type/game) one of the games we made right in your browser.

## Conclusion
Building a game engine was a very fun project and also very hard. Some things in game development are way harder than I thought (multiplayer games should be illegal so nobody has to suffer developing them), but in the end we are very proud of the final product we achieved in which we even won the Best Project of the Month award at our university. We learned a lot, like how to render and manage a game loop with raylib, build tooling with Dear ImGui, embed Lua in C++ with sol2, detect collisions between objects with different shapes, and develop multiplayer games with UDP. The UI and the Engine are two separate projects, so if a developer does not want the UI, they can simply use the engine as a library and code in C++ without losing any features as everything available in the UI, like wave spawning, can also be coded in C++ or Lua by calling the exact same functions the editor calls. You can check out the repository of the project on [GitHub](https://github.com/GerardPolloRebozado/r-type).
<img src="https://assets.gerarddupre.dev/blog/lucky-n-pozzo-game-engine/award.jpg" alt="Best Project of the Month trophy" style="max-width: 350px; width: 100%; height: auto; display: block; margin: 1.5rem auto;" />

This project was developed alongside [Alejandro](https://github.com/alejandrolaguna20), [Nico](https://github.com/nicoepitech), [Pol](https://github.com/polcortadellas), and [Ana](https://github.com/pallaresrod).
