---
title: "My experience after one month of using NixOS"
description: "The immutable and reproducible operating system"
pubDate: "2026-07-01"
---

 # What is NixOS and what is it used for?
 NixOS is a Linux distribution based on the concept of a reproducible and immutable system. It achieves this by using the Nix package manager and the Nix language.
 The entire operating system and the applications on it can be configured from a single file, using the same language for everything. If an option is missing, you can create a flake yourself to make it possible.
 
# Some concepts about NixOS

 ## Nix (Language)
 It is a functional language that you will use to configure your operating system.

 ## Nix (Package manager)
 It is a package manager like those of other distros (such as apt or pacman), but it does something different: each package is isolated, which avoids problems like dependency hell.

 ## Channels
 NixOS has different channels containing different versions of each package. There are mainly two variants:
 - unstable
 - YY-MM: this is the stable branch, which is updated approximately every 6 months and is named after the year and month of release (e.g., YY.04 and YY.11).

 ## Generations
 A generation is like a backup of your computer's configuration. Every time you apply a configuration, a new generation is created and set as active. You can roll back or switch between generations, allowing you to go back if something broke after changing your configuration. It is like having Git for your operating system.

 ## Nix Store
 This is where everything you install is saved (under `/nix/store/[hash]/bin/[bin-name]`). For example, if we run `whereis ls`, we can see an example of where this binary is stored:
 ```bash
 whereis ls
 ls: /nix/store/qjlnzpnzx53hl7m3pjfak57ixaad0jbp-system-path/bin/ls
 ```
 Since each package is kept in its own directory, packages do not break one another as every installation is isolated.

 ## Flakes
 **Flakes** are the modern way to manage configurations in Nix; they solve the drawback of traditional channels. A flake defines some *inputs* (packages, files, or repositories acting as dependencies) and produces *outputs*. Upon building it, the `flake.lock` file is created, locking the exact versions of the *inputs*. This ensures that building it on any other system downloads the exact same versions of the dependencies, thereby creating a **100% reproducible** environment.

## Home Manager
Home Manager is the tool used to apply configurations at the user level. This way, each user has their preferred programs, and we can configure these programs using the Nix language, which further improves reproducibility.

# The best of NixOS: Stylix
[Stylix](https://github.com/nix-community/stylix) allows you to configure a color scheme, fonts, and wallpaper, and it will handle applying them to all supported applications (from your code editor to Spotify). This gives your system a unified appearance without having to manually deal with styling GTK and Qt themes.

# Difficulties
Home Manager is what gave me the most trouble because I did not know how to configure certain options or where to find them, but I discovered a [website](https://home-manager-options.extranix.com/) that lets you search all available options. Even so, this only applies to the official repositories, not to third-party flakes like the one I had to use for Zen Browser. I had always configured Zen Browser using the UI, but now that I was on NixOS, the correct way to configure it was using Nix. To do this, I had to use a [flake](https://github.com/0xc000022070/zen-browser-flake), which had several configuration examples in its README, but it was a bit confusing because some settings had multiple ways to be applied, and some of them did not seem to take effect.

Another difficulty I faced was with AppImages. I use [FluffyChat](https://fluffychat.im) to communicate and had always used it as an AppImage, but I couldn't get it to work here. I ended up using Flatpak, which was very easy to configure. However, to this day I still cannot run AppImages, though luckily none of the programs I use are exclusively available as an AppImage; they always have a Flatpak version or are present in the official repositories.

As for my code editor, I use [Zed](https://zed.dev/). When coding, Zed tries to download the LSP for the detected language automatically. This throws an error on NixOS because you cannot just download and run a precompiled binary. The easy solution is simply installing these languages and LSPs via Home Manager, but doing so compromises reproducibility and the ability to use multiple versions. To solve this, there is [devenv](https://devenv.sh/), which lets you define the languages and binaries for each project in a file. Whenever you enter that folder, the programs defined in it are made available in your *path*. This can be slightly tedious because I have to create a `devenv.nix` every time I open a new project if I want to have LSP support or compile the code.

# Conclusions
NixOS is an incredible distribution with a rather steep learning curve. However, once you overcome it, you won't ever want to use any other distro again. You no longer have to cross your fingers and hope that package updates won't break your system, because you can always roll back with a single command. You also don't have to deal with different configuration formats for each program: it's just Nix all the way. No more "it works on my machine" issues.
