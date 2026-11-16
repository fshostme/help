---
description: "Chat commands on CS2 Pro servers for switching game modes, changing maps, loading Workshop maps and running server commands."
---

# Pro Server Commands

Chat commands for switching game modes, changing maps and running server commands on a CS2 Pro server.

::: warning Pro Server Only
These commands are for Pro servers. On a Free server, see [Free Server Commands](/games/cs2/commands-free).
:::

::: tip Admin Access Required
Most commands on this page need admin rights on the server. The mode and map commands need the `g` (Changemap) flag, and `!rcon` needs the `m` (Rcon) flag. The `z` flag covers both. See [Become a Server Admin](/games/cs2/become-admin).
:::

Type these commands in the in-game chat. The `!` and `/` prefixes are interchangeable, so `!dmon` and `/dmon` do the same thing. The `.` prefix only works for commands that support it, such as the MatchZy commands. This page uses `!`.

<!--@include: ./parts/_where-to-type.md-->

## Game Mode Commands

A new Pro server starts in competitive mode with [MatchZy](/games/cs2/plugins/matchzy) loaded. These commands switch the server to another mode. Only one mode runs at a time, so starting a mode turns off the one before it, MatchZy included.

| Command | Also works as | What it starts |
|---------|---------------|----------------|
| `!matchzy` | `!matchzyon`, `!matchon` | Competitive match with MatchZy, which records the demo |
| `!pracc` | `!prac` | MatchZy practice mode: grenades, noclip and bots |
| `!matchoff` | `!matchzyoff` | Standard server with MatchZy off |
| `!retake` | `!retakes` | [Retakes](/games/cs2/plugins/retakes) |
| `!dmon` | `!dmmulticfg` | [Deathmatch](/games/cs2/plugins/deathmatch) |
| `!prefireon` | | [OpenPrefirePrac](/games/cs2/plugins/prefire) prefire practice |
| `!casual` | | Casual mode |
| `!ar` | `!armsrace` | Arms Race |
| `!wingman` | `!2v2` | Wingman (2v2) |

When a mode is started, everyone on the server sees a chat message that names the admin and the new mode. If the new mode needs different game rules, the server reloads the current map.

::: tip Competitive Means MatchZy
There is no separate `!comp` command. Use `!matchzy` for a competitive match.
:::

### Information Commands

These work for every player, admin or not:

| Command | What it shows |
|---------|---------------|
| `!gm` | All game mode commands. Also works as `!gmode` and `!gamemode` |
| `!mode` | The mode the server is in right now |
| `!help` | Every command on the server. Commands you have no permission for are marked `(admin)` |
| `!lang <code>` | Changes the language of the plugin messages for you, for example `!lang en` |

Admins can also use `!maps` to see the map commands.

## Map Commands

### Official and Uploaded Maps

```bash
!map de_mirage
```

`!changemap` and `!changelevel` do the same as `!map`. You can type part of the name: `!map mirage` loads `de_mirage` if no other map matches. If several maps match, the chat lists them so you can type the full name.

```bash
!maplist
```

`!maplist` lists the map commands on your server, including any short commands such as `!dust2` that are set up for a map.

### Workshop Maps

```bash
!workmap 3070238628
```

`!workshopmap` does the same. Replace the number with the map's Workshop ID. The chat says **Map will change once it's downloaded, please allow 10-90 seconds depending on map size.**

`!wsmap` from [CS2-SimpleAdmin](/games/cs2/plugins/cs2-simpleadmin) also changes to a Workshop map, by ID or name.

If the server runs a Workshop collection, these commands work on the maps in it:

| Command | What it does |
|---------|--------------|
| `!listwsmaps` | Lists the maps in the collection, numbered |
| `!setwsmap <number or name>` | Changes to a map from the list |
| `!nextwsmap` | Skips to the next map in the collection |
| `!wsmapinfo` | Shows the collection rotation |

See [Workshop Maps](/games/cs2/workshop-maps) to set a Workshop map or collection in the Pro Panel.

### Map Changes While CSTV Records

If CSTV is recording a demo, a map change from `!map` first stops the recording, then changes the map 5 seconds later, so the demo is saved. A `changelevel` sent from RCON while a recording runs is refused with **Cannot change the level while recording. Stop recording first!**

## Server Commands From Chat

`!rcon` runs a server console command from the chat:

```bash
!rcon mp_restartgame 1
!rcon mp_maxrounds 24
```

`!rcon` refuses commands that change the game mode or load plugins: `game_type`, `game_mode`, `game_alias`, `sv_game_mode_flags`, `sv_skirmish_id` and `css_plugins`. Use the [game mode commands](#game-mode-commands) instead.

For commands from the developer console, see [RCON Commands](/games/cs2/rcon).

## Plugin Commands

Each plugin has its own commands:

- [MatchZy](/games/cs2/plugins/matchzy) - Ready, pause and practice commands
- [CS2-SimpleAdmin](/games/cs2/plugins/cs2-simpleadmin) - Kick, ban, mute and other admin commands
- [FSH-AdminManager](/games/cs2/plugins/adminmanager) - Add and remove admins in game
- [WeaponPaints](/games/cs2/plugins/weapon-skins) - Weapon skins
- [Custom Commands](/games/cs2/plugins/customcommands) - Make your own chat commands. The mode commands on this page are Custom Commands files

## Troubleshooting

::: details A command says I do not have permission
Your admin entry is missing the flag for that command. Mode and map commands need `g`, `!rcon` needs `m`. Check your entry on the **Server admins** page, see [Become a Server Admin](/games/cs2/become-admin).
:::

::: details "A mode switch is already running. Try again in a few seconds."
Another mode switch has not finished yet. Wait a few seconds and send the command again.
:::

::: details A command does nothing when typed in the console
These are chat commands. Type them in the in-game chat, or put `say` in front of them in the console, for example `say !dmon`.
:::
