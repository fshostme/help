---
description: "Practice prefire angles against bots on competitive maps with OpenPrefirePrac on your CS2 Pro server: how to start it and all commands."
---

# OpenPrefirePrac Plugin

Prefire practice against bots on competitive maps.

::: warning Pro Server Only
OpenPrefirePrac is available on Pro servers only.
:::

## Overview

OpenPrefirePrac places bots on the common angles along a route through a map. You walk the route and clear the angles one by one. Several players can practice at the same time.

::: tip Practicing With Several Players
Each player's route needs its own bots, which can go above the usual 5 players per team. Turn on **Max players override (-maxplayers_override)** in the **Advanced** section of **Game settings**, save and restart the server.
:::

FSHOST runs a build of [lengran/OpenPrefirePrac](https://github.com/lengran/OpenPrefirePrac).

## Starting Prefire Mode

OpenPrefirePrac is installed on every Pro server but does not run until you start it. See [Installed vs. Loaded](/games/cs2/plugins#installed-vs-loaded).

### Step 1: Turn On Prefire Mode

An admin with the `g` (map) flag types in chat:

```bash
!prefireon
```

This unloads MatchZy and the other game mode plugins and loads OpenPrefirePrac. If nothing happens, you are not an admin with that flag. See [Become a Server Admin](/games/cs2/become-admin), or ask the server owner to run it.

### Step 2: Open the Menu

Once prefire mode is on, any player can type:

```bash
!prefire
```

The menu lets you pick a route, the map, the difficulty, the training mode, the bot weapons and the language, or stop practicing.

To leave prefire mode, start another mode, for example `!matchzy` or `!pracc`. See [Pro Server Commands](/games/cs2/commands#game-mode-commands).

## Commands

The `!` and `/` prefixes are interchangeable in chat. This page writes them with `!`.

| Command | What it does |
|---------|--------------|
| `!prefire` | Opens the main menu |
| `!prefire prac <number>` | Starts a route by its number. Without a number it shows how many routes there are |
| `!prefire map <map>` | Changes to another map with routes, for example `!prefire map de_mirage`. Only works while nobody is practicing |
| `!prefire df <1-6>` | Sets the difficulty |
| `!prefire mode <rand\|full>` | Sets the training mode |
| `!prefire bw <rand\|ump\|ak\|sct\|awp>` | Sets the bots' weapon |
| `!prefire lang <en\|pt\|zh>` | Sets the language to English, Portuguese or Chinese |
| `!prefire exit` | Stops practicing |
| `!prefire help` | Shows the list of shortcuts |

### Difficulty

The difficulty sets how much health you get back, not how well the bots aim:

| Level | Health |
|-------|--------|
| `1` | +500 HP per kill |
| `2` | +100 HP per kill |
| `3` | Back to 100 HP after a kill |
| `4` | +25 HP per kill |
| `5` | 500 HP |
| `6` | 100 HP |

### Training Mode

| Mode | What it does |
|------|--------------|
| `full` | Spawns every bot on the route |
| `rand` | Spawns only part of the bots |

### Bot Weapons

| Value | Weapon |
|-------|--------|
| `rand` | Random |
| `ump` | UMP-45 |
| `ak` | AK-47 |
| `sct` | SSG 08 |
| `awp` | AWP |

## Maps With Routes

Routes are included for these maps:

- `de_ancient`
- `de_anubis`
- `de_cache`
- `de_dust2`
- `de_inferno`
- `de_mirage`
- `de_nuke`
- `de_overpass`
- `de_train`
- `de_vertigo`

`!prefire map` only accepts these maps.

## Troubleshooting

::: details `!prefire` does nothing
Prefire mode is not on. An admin has to type `!prefireon` first. The owner can also send `exec custom/prefireon` in the **Console** tab of the Pro Panel.
:::

::: details `!prefire map` does not change the map
Either someone is practicing a route right now, or the map has no routes. Wait until everyone has stopped with `!prefire exit`, and pick a map from the list above.
:::

## Related Pages

- [MatchZy](/games/cs2/plugins/matchzy) - Practice mode with grenade and spawn tools
- [Pro Server Commands](/games/cs2/commands) - Game mode commands
- [Become a Server Admin](/games/cs2/become-admin) - Admin flags
