---
description: "CS2-SimpleAdmin commands for CS2 Pro servers: ban, kick, gag, mute and manage players, with the admin flag each command needs."
---

# CS2-SimpleAdmin Plugin

Admin commands for banning, kicking, muting and managing players on CS2 Pro servers.

::: warning Pro Server Only
CS2-SimpleAdmin is available on Pro servers only.
:::

## Overview

CS2-SimpleAdmin loads when the server starts, together with its Fun Commands module. It gives admins commands and an in-game menu for punishing and managing players. FSHOST runs a build of [daffyyyy/CS2-SimpleAdmin](https://github.com/daffyyyy/CS2-SimpleAdmin).

Who is an admin, and with which flags, is set on the **Server admins** page in the Pro Panel. See [Become a Server Admin](/games/cs2/become-admin) and [FSH-AdminManager](/games/cs2/plugins/adminmanager#permission-flags).

::: info Command Prefixes
The `!` and `/` prefixes are interchangeable in chat. This page writes the commands with `!`, for example `!ban`. In the console, type the same command with `css_` in front, for example `css_ban`.
:::

## Choosing a Player

Commands that take a `<player>` accept part of a player's name, or `#` followed by their user ID, for example `#5`. Put a name with spaces in quotes. Use `!players` to list the players with their user IDs.

Times are in minutes. `0` means permanent.

## Admin Menu

```bash
!admin
```

Opens the admin menu, where you pick a player and an action instead of typing the command. Needs the `b` flag.

## Bans

| Command | Flag | What it does |
|---------|------|--------------|
| `!ban <player> [time] [reason]` | `d` | Bans a player on the server |
| `!addban <steamid64> [time] [reason]` | `d` | Bans a player who is not on the server |
| `!banip <ip> [time] [reason]` | `d` | Bans an IP address |
| `!unban <steamid64, name or ip> [reason]` | `e` | Removes a ban |
| `!kick <player> [reason]` | `c` | Kicks a player |
| `!warn <player> [time] [reason]` | `c` | Warns a player |
| `!unwarn <steamid64, name or ip>` | `c` | Removes a warning |

```bash
!ban "Player Name" 1440 "Cheating"
!addban 76561198000000000 0 "Ban evasion"
!kick #5 "AFK"
```

## Chat and Voice

A gag blocks text chat, a mute blocks voice chat, and a silence blocks both.

| Command | Flag | What it does |
|---------|------|--------------|
| `!gag <player> [time] [reason]` | `j` | Blocks text chat |
| `!mute <player> [time] [reason]` | `j` | Blocks voice chat |
| `!silence <player> [time] [reason]` | `j` | Blocks text and voice chat |
| `!addgag`, `!addmute`, `!addsilence <steamid64> [time] [reason]` | `j` | The same, for a player who is not on the server |
| `!ungag`, `!unmute`, `!unsilence <steamid64 or name> [reason]` | `j` | Lifts the punishment |

```bash
!gag "Spammer" 30 "Chat spam"
!mute #7 60 "Mic spam"
!unmute "Player Name"
```

## Player Actions

| Command | Flag | What it does |
|---------|------|--------------|
| `!slay <player>` | `f` | Kills a player |
| `!slap <player> [damage]` | `f` | Slaps a player, with optional damage |
| `!team <player> <ct\|t\|spec>` | `c` | Moves a player to another team |
| `!rename <player> <new name>` | `c` | Renames a player |
| `!tp <player>` | `c` | Teleports you to a player |
| `!bring <player>` | `c` | Teleports a player to you |

### Fun Commands

| Command | Flag | What it does |
|---------|------|--------------|
| `!god <player>` | `n` | Turns god mode on or off |
| `!noclip <player>` | `n` | Turns noclip on or off |
| `!respawn <player>` | `n` | Respawns a player |
| `!give <player> <weapon>` | `n` | Gives a player a weapon |
| `!strip <player>` | `f` | Takes all weapons from a player |
| `!freeze <player> [duration]` | `f` | Freezes a player |
| `!unfreeze <player>` | `f` | Unfreezes a player |
| `!hp <player> <health>` | `f` | Sets a player's health |
| `!speed <player> <speed>` | `f` | Sets a player's speed |
| `!gravity <player> <gravity>` | `f` | Sets a player's gravity |
| `!money <player> <money>` | `f` | Sets a player's money |

## Messages

| Command | Flag | What it does |
|---------|------|--------------|
| `!say <message>` | `j` | Writes in chat as admin |
| `!csay <message>` | `j` | Shows a message in the middle of the screen |
| `!hsay <message>` | `j` | Shows a message on the HUD |
| `!psay <player> <message>` | `j` | Sends a private message to one player |
| `!asay <message>` | `j` | Writes to the other admins only |

## Information

| Command | Flag | What it does |
|---------|------|--------------|
| `!players` | `b` | Lists the players with their user IDs |
| `!who <player>` | `b` | Shows information about a player |
| `!history <player or steamid64> [bans\|gags\|mutes\|silences\|warns]` | `c` | Prints a player's punishment history to the console |
| `!banlist [pattern]` | `d` | Lists bans |
| `!penalties` | None | Shows your own active punishments. `!mypenalties` and `!comms` do the same |

## Server Commands

| Command | Flag | What it does |
|---------|------|--------------|
| `!cvar <cvar> <value>` | `h` | Changes a server setting |
| `!rcon <command>` | `m` | Runs a command on the server |
| `!vote <question> <answer1> <answer2> ...` | `b` | Starts a vote |

## Troubleshooting

::: details A command says I have no permission
Your admin entry is missing the flag the command needs. Each table above lists the flag. Ask the server owner to add it on the **Server admins** page, see [Become a Server Admin](/games/cs2/become-admin).
:::

::: details The command cannot find the player
Use a longer part of the name, put a name with spaces in quotes, or use the user ID from `!players`, for example `#5`.
:::

::: details A player I banned by mistake cannot join
Unban them with `!unban <steamid64>`. The owner can also send `css_unban <steamid64>` in the **Console** tab of the Pro Panel.
:::

## Related Pages

- [Become a Server Admin](/games/cs2/become-admin) - Add admins and set flags
- [FSH-AdminManager](/games/cs2/plugins/adminmanager) - Admin roles and permission flags
- [RCON](/games/cs2/rcon) - Run server commands from your game console
