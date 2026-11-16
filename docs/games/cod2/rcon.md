---
description: "RCON commands for managing a Call of Duty 2 server: logging in, maps, game modes and players."
---

# RCON Commands

Remote console commands for managing your Call of Duty 2 server.

## Log into RCON

Open the console in-game and run the login command to gain access to all the following commands. The RCON password will be displayed on your [panel](https://fshost.me/free-panel).

**Login command:**
```bash
/rcon login type_rcon_pass_here
```

## General Settings

### Map Commands

**Change map:**
```bash
/rcon map mp_mapnamehere
```

You can change the current map to any stock one or we have a custom map list.

**Restart map:**
```bash
/rcon map_restart
```

After changing any map settings, like the game mode, you must restart the map so the changes can take effect.

**Fast restart:**
```bash
/rcon fast_restart
```

Reset the scores and map.

### Server Settings

**Password:**
```bash
/rcon g_password ""
```

You can change or remove the password to join your server by leaving the value empty.

**Hostname:**
```bash
/rcon sv_hostname "^6CUSTOM HOSTNAME ^7- free @ fshost.me"
```

You can change the hostname on the request form or if you want to change it after you've started it, you can do so using this command.

::: warning Required Advert
Please note that you must keep the advert part in the hostname.
:::

**Color codes** for the hostname:

| Code | Color |
|------|-------|
| `^0` | Black |
| `^1` | Red |
| `^2` | Green |
| `^3` | Yellow |
| `^4` | Blue |
| `^5` | Cyan |
| `^6` | Pink |
| `^7` | White |

**Friendly fire:**
```bash
/rcon scr_friendlyfire 0/1
```

You can disable (0) or enable (1) friendly fire.

### Game Modes

It's easy to change the game mode with this command, but please remember to restart the map after setting the game mode.

**Set game mode:**
```bash
/rcon g_gametype gametypehere
```

**Available game modes:**

| Command | Name |
|---------|------|
| `/rcon g_gametype dm` | Deathmatch |
| `/rcon g_gametype tdm` | Team Deathmatch |
| `/rcon g_gametype sd` | Search and Destroy |
| `/rcon g_gametype ctf` | Capture the Flag |
| `/rcon g_gametype hq` | Headquarters |
| `/rcon g_gametype strat` | Strat / Training |

## Policing Your Server

### Player Management

**Status:**
```bash
/rcon status
```

Shows the Slot Number, Name, GUID, IP, and other info of the players connected.

**PunkBuster player list:**
```bash
/rcon pb_sv_plist
```

Get PB player list, if PB is enabled.

**Kick player:**
```bash
/rcon clientkick clientslot
```

Kick a player using their slot number.

**Kick all:**
```bash
/rcon kickall
```

Kick all players from the server.

### Screenshots

**Take screenshot:**
```bash
/rcon pb_sv_getss clientslot
```

Take a screenshot of a player's screen (you will need PunkBuster (PB) enabled for this).
