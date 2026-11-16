---
description: "RCON commands for a Counter-Strike 1.6 server: logging in, changing maps, managing players, server settings and PODBot bots."
---

# RCON Commands

Remote console commands for managing your Counter-Strike 1.6 server.

## Log into RCON

1. Join your server
2. Open the console with the key below **Esc**, which is **~** on US keyboards and **§** on some European ones
3. Log in with your RCON password:

```bash
rcon_password your_rcon_password
```

| Server | Where the password is |
|--------|-----------------------|
| Free | The [Free Server Panel](https://fshost.me/free-panel) shows it next to the `connect` command |
| Pro | The **RCON password** field in **Game settings** on the **Settings** tab of the [Pro Panel](https://fshost.me/pro/servers). The **Connection info** box on the server page also shows it |

Then put `rcon` in front of each command, for example `rcon status`. Log in again after you reconnect.

::: danger Never Type Your Password in Chat
`rcon_password` belongs in the console only. Typed in chat, every player on the server can read it.
:::

::: tip Settings Reset on Map Change
The server runs its config again each time a map loads, so a setting you change with RCON can go back to the config value after a map change. On Pro servers, put settings you always want in your config template, see [Config Files](/games/cs16/config-files).
:::

## Map Commands

**List the maps on the server:**
```bash
rcon maps *
```

**Change the map:**
```bash
rcon changelevel de_dust2
```

This works for stock maps and for custom maps on the server. Free servers can use the maps in the [map library](https://dl.fsho.st/cs16/maps/).

**Restart the round after a number of seconds:**
```bash
rcon sv_restart 3
```

## Server Settings

**Join password:**
```bash
rcon sv_password "newpassword"
rcon sv_password ""
```

The empty value removes the password. On Pro servers, change **Join password** in **Game settings** instead, so the change stays after a restart.

**Server name:**
```bash
rcon hostname "My Server - free @ fshost.me"
```

Free servers must keep `- free @ fshost.me` at the end of the name. On Pro servers, set the name under **Hostname** in **Game settings**.

## Player Commands

| Command | What it does |
|---------|--------------|
| `rcon status` | Lists the players with their user ID, name, SteamID and IP |
| `rcon users` | Lists the players |
| `rcon kick PlayerName` | Kicks a player by name |
| `rcon kick # 12` | Kicks a player by the user ID from `rcon status` |
| `rcon say Hello` | Sends a message to all players |

## Gameplay Settings

| Command | What it sets |
|---------|--------------|
| `rcon mp_startmoney 800` | Money players start with, from 800 to 16000 |
| `rcon mp_buytime 1.5` | Buy time, in minutes |
| `rcon mp_roundtime 2` | Round time, in minutes |
| `rcon mp_freezetime 6` | Freeze time at round start, in seconds |
| `rcon mp_c4timer 35` | Time from bomb plant to explosion, in seconds |
| `rcon mp_timelimit 20` | Time on each map, in minutes. `0` means no limit |
| `rcon mp_friendlyfire 1` | Friendly fire on (`1`) or off (`0`) |
| `rcon mp_autoteambalance 1` | Team balancing on (`1`) or off (`0`) |
| `rcon mp_autokick 1` | Kicks idle players and team killers, on (`1`) or off (`0`) |
| `rcon sv_alltalk 1` | Both teams hear each other's voice chat, on (`1`) or off (`0`) |
| `rcon sv_voiceenable 1` | Voice chat on (`1`) or off (`0`) |
| `rcon sv_gravity 800` | Gravity. `800` is normal |

To see the current value, send the command without a value, for example `rcon mp_roundtime`.

::: warning Cheats
`rcon sv_cheats 1` turns on cheat commands such as `impulse 101`. It takes effect after the next map change. Only use it on a practice server.
:::

## PODBot Commands

::: warning Pro Server Only
Bots are only available on Pro servers. Turn on **Bots** in **Game settings** on the Pro Panel, save and restart the server.
:::

The easiest way to control bots is the bot menu. As an admin, type this in the console:

```bash
amx_pbmenu
```

You need to be an admin on the server, see [Become a Server Admin](/games/cs16/becomeadmin).

You can also use RCON:

| Command | What it does |
|---------|--------------|
| `rcon pb add 50` | Adds a bot. The number is the skill, from 1 to 100 |
| `rcon pb removebots` | Removes the bots |

See the [PODBot MM documentation](http://podbotmm.bots-united.com/doc_v3/html/pbmm_configuration.html) for all bot commands and settings.

## Pro Panel Console

Pro servers also have a **Console** tab in the Pro Panel, which sends commands to the server without joining it and without `rcon`. It only accepts letters, numbers, spaces, `_`, `-` and `/`, so commands with quotes or dots still need RCON. See [Console Access](/servers/pro/console).

## Troubleshooting

::: details RCON password not working
- Copy the password from the panel again rather than typing it. It is case sensitive
- Use `rcon_password`, not `rcon login`, which is for Call of Duty
- Log in again after you reconnect
:::

::: details Can't change map
- Check the spelling of the map name, without `.bsp`
- Use `rcon maps *` to list the maps on the server
- On Pro, check that your custom map is uploaded to `cstrike/maps`. See [Custom Maps and FastDL](/games/cs16/custom-maps)
:::

::: details Commands not executing
- Log in with `rcon_password` first
- Put `rcon` in front of the command
- Test with a simple command such as `rcon status`
:::

## Related

- [Become a Server Admin](/games/cs16/becomeadmin) - Add admins with AMX Mod X
- [RCON overview](/rcon) - RCON on all games
