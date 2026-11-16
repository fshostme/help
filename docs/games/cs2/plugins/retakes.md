---
description: "Bomb site retake practice on your CS2 Pro server with Retakes and RetakesAllocator: how to start it, weapon commands and the spawn editor."
---

# Retakes Plugin

Bomb site retakes with automatic weapon allocation.

::: warning Pro Server Only
The Retakes plugin is available on Pro servers only.
:::

## Overview

Retakes drops players into the situation after the bomb has been planted: Counter-Terrorists retake the site, Terrorists defend the plant. The plugin puts players on teams, picks the bomb site and spawns, and gives everyone a loadout, so rounds follow each other without buying.

Retakes mode on a Pro server loads four plugins:

| Plugin | What it does |
|--------|--------------|
| **RetakesPlugin** | Teams, bomb sites, spawns and the plant |
| **RetakesAllocator** | Weapons, armor and grenades for each round |
| **InstadefusePlugin** | Defuses the bomb at once when no Terrorist is alive, no grenade or fire threatens the defuser, and there is enough time left |
| **CS2-Remove-Map-Weapons** | Removes weapons that lie on the map |

FSHOST runs builds of [b3none/cs2-retakes](https://github.com/b3none/cs2-retakes) and [yonilerner/cs2-retakes-allocator](https://github.com/yonilerner/cs2-retakes-allocator).

## Starting Retakes

Retakes is installed on every Pro server but does not run until you start it. See [Installed vs. Loaded](/games/cs2/plugins#installed-vs-loaded).

An admin with the `g` (map) flag types in chat:

```bash
!retake
```

This unloads MatchZy and the other game mode plugins and loads the four retakes plugins. `!retakes` does the same.

To leave retakes, start another mode, for example `!matchzy` or `!pracc`. See [Pro Server Commands](/games/cs2/commands#game-mode-commands).

Retakes needs bomb sites. On a map without them, such as an aim map, the map change plugin unloads Retakes.

## Round Types

Every round is one of three types, and the weapons depend on it:

| Round type | Weapons | Armor |
|------------|---------|-------|
| Pistol | Pistols only | Kevlar, no helmet |
| HalfBuy | Shotguns and SMGs | Kevlar and helmet |
| FullBuy | Rifles, snipers and machine guns | Kevlar and helmet |

## Player Commands

| Command | What it does |
|---------|--------------|
| `!guns` | Opens the weapon menu in chat, where you set your preferred weapons for each team and round type. `/guns` does the same |
| `!gunsmenu` | Opens the weapon menu in the middle of the screen. `!gunmenu` does the same |
| `!gun <weapon> [T\|CT]` | Sets a preferred weapon directly. The round type is worked out from the weapon |
| `!removegun <weapon> [T\|CT]` | Removes a preferred weapon |
| `!awp` | Joins or leaves the AWP queue |
| `!nextround` | Opens a vote for the type of the next round |
| `!voices` | Turns the bomb site voice announcements on or off for you |
| `!queue` | Shows your place in the waiting queue when the server is full |

Your weapon choices are saved, so they come back the next time you play retakes on the server.

## Admin Commands

See [Become a Server Admin](/games/cs2/become-admin) for admin flags.

| Command | Flag | What it does |
|---------|------|--------------|
| `!scramble` | `b` | Scrambles the teams at the start of the next round. `!scrambleteams` does the same |
| `!forcebombsite <A\|B>` | `z` | Plays every round on one bomb site |
| `!forcebombsitestop` | `z` | Goes back to random bomb sites |
| `!setnextround <P\|H\|F>` | `z` | Sets the next round to Pistol, HalfBuy or FullBuy |

### Spawn Editor

The spawn editor needs the `z` (root) flag.

| Command | What it does |
|---------|--------------|
| `!showspawns <A\|B>` | Shows the spawns of a bomb site and starts editing it. `!spawns` and `!edit` do the same |
| `!addspawn <T\|CT> [Y\|N]` | Adds a spawn where you stand, facing where you look, to the bomb site being shown. For a T spawn, `Y` or `N` says whether the bomb planter can spawn there. `!add` does the same |
| `!removespawn` | Removes the spawn nearest to you. `!remove` and `!delete` do the same |
| `!nearestspawn` | Teleports you to the nearest spawn. `!nearest` does the same |
| `!hidespawns` | Stops editing and hides the spawns. `!done` and `!exitedit` do the same |

To set up spawns:

1. Type `!showspawns A`
2. Stand where a player should spawn and look in the direction they should face
3. Type `!addspawn CT`, or `!addspawn T Y` for a T spawn the planter may use
4. Repeat for every spawn, then do the same for B with `!showspawns B`
5. Type `!hidespawns` when you are done

A spawn too close to an existing one is refused.

## Troubleshooting

::: details `!retake` does nothing
`!retake` needs the `g` (map) admin flag. See [Become a Server Admin](/games/cs2/become-admin), or ask the server owner to run it. The owner can also send `exec custom/retakes` in the **Console** tab of the Pro Panel.
:::

::: details The weapon menu does not open
Type `!guns` or `/guns` on its own in chat, with nothing after it. For the menu in the middle of the screen, type `!gunsmenu`.
:::

::: details Retakes stopped after a map change
The new map has no bomb sites, so Retakes was unloaded. Change to a bomb defusal map and type `!retake` again.
:::

## Related Pages

- [Installed vs. Loaded](/games/cs2/plugins#installed-vs-loaded) - Which plugins run at start
- [Pro Server Commands](/games/cs2/commands) - Game mode commands
- [Become a Server Admin](/games/cs2/become-admin) - Admin flags
