---
description: "Run free-for-all deathmatch on your CS2 Pro server with the Deathmatch plugin: how to start it, player commands and admin commands."
---

# Deathmatch Plugin

Free-for-all deathmatch with instant respawns and a weapon menu.

::: warning Pro Server Only
The Deathmatch plugin is available on Pro servers only.
:::

## Overview

The Deathmatch plugin turns the server into free-for-all deathmatch: players respawn right after they die, pick their weapons from a menu, and get spawn protection for a moment after each respawn. It rotates through a set of modes, such as Only Headshot or Only Pistols, and the screen shows which mode comes next and when.

FSHOST runs a build of [NockyCZ/CS2-Deathmatch](https://github.com/NockyCZ/CS2-Deathmatch).

## Starting Deathmatch

Deathmatch is installed on every Pro server but does not run until you start it. See [Installed vs. Loaded](/games/cs2/plugins#installed-vs-loaded).

An admin with the `g` (map) flag types in chat:

```bash
!dmon
```

This unloads MatchZy and the other game mode plugins, loads Deathmatch and runs the FSHOST deathmatch settings. `!dmmulticfg` does the same.

To leave deathmatch, start another mode, for example `!matchzy`, `!pracc` or `!retake`. See [Pro Server Commands](/games/cs2/commands#game-mode-commands).

The `!` and `/` prefixes are interchangeable in chat. This page writes them with `!`.

## Player Commands

| Command | What it does |
|---------|--------------|
| `!dm` | Opens the Deathmatch menu with weapons and your own settings. `!deathmatch` does the same |
| `!gun` | Lists the weapons allowed in the current mode |
| `!gun <weapon>` | Picks a weapon by name, for example `!gun ak47`. `!weapon`, `!w` and `!g` do the same |
| `!ak`, `!m4`, `!m4a1`, `!awp`, `!usp`, `!glock`, `!deagle` | Shortcuts for one weapon. `!m4` is the M4A4 and `!m4a1` the M4A1-S |
| `!hs` | Turns headshot-only on or off for you. `!onlyhs` does the same |
| `!noprimary` | Turns playing without a primary weapon on or off. `!primary` does the same |
| `!hud` | Turns the HUD messages on or off |
| `!damage` | Turns the damage info on or off. `!dmg` does the same |

In a mode with random weapons, picking a weapon is turned off and the command says so.

## Modes

By default the plugin switches between these modes, in random order:

| Mode | Length |
|------|--------|
| Default | 5 minutes |
| Only Headshot | 5 minutes |
| Only Deagle | 2 minutes |
| Only Pistols | 3 minutes |
| Only SMG | 3 minutes 20 seconds |

Each mode has its own list of weapons, so `!gun` shows different choices depending on the mode.

## Admin Commands

These need the `z` (root) flag. See [Become a Server Admin](/games/cs2/become-admin).

| Command | What it does |
|---------|--------------|
| `!dm_startmode <id>` | Switches to a mode by its number, for example `!dm_startmode 2` for Only Deagle. The default modes are numbered from `0` (Default) to `4` (Only SMG) in the order of the table above |
| `!dm_editor` | Opens the spawn editor menu. `!dm_spawns` and `!dm_spawnseditor` do the same. You must be alive |
| `!dm_checkdistance <units>` | Draws a red circle around you with that radius for 10 seconds, to judge how far apart spawns should be. You must be alive |

## Troubleshooting

::: details `!dmon` does nothing
`!dmon` needs the `g` (map) admin flag. See [Become a Server Admin](/games/cs2/become-admin), or ask the server owner to run it. The owner can also send `exec custom/dmon` in the **Console** tab of the Pro Panel.
:::

::: details I cannot pick a weapon
The current mode either has random weapons or does not allow that weapon. Type `!gun` to see what is allowed, or wait for the next mode.
:::

::: details Deathmatch is still running after I switched mode
Start the other mode with its chat command, for example `!matchzy`. Each mode command unloads the plugins of the previous one. To check what is loaded, run `css_plugins list` in the **Console** tab.
:::

## Related Pages

- [Installed vs. Loaded](/games/cs2/plugins#installed-vs-loaded) - Which plugins run at start
- [Pro Server Commands](/games/cs2/commands) - Game mode commands
- [Become a Server Admin](/games/cs2/become-admin) - Admin flags
