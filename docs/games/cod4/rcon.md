---
description: "RCON commands for managing a Call of Duty 4 server: logging in, maps, game modes and players."
---

# RCON Commands

Remote console commands for managing your Call of Duty 4 server.

## Log into RCON

Open console in-game (~) and run the login command to gain access to all the following commands. The RCON password will be displayed on your [free panel](https://fshost.me/free-panel) or [Pro server settings](https://fshost.me/pro/servers).

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

After changing any map settings, like the game mode, it is required to restart the map so it can change.

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
Please note that you are required to keep the advert part in the hostname.
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

### Game Modes

Changing the game mode is done with these commands, but it will only take effect after a map change or restart.

**Set game mode:**
```bash
/rcon g_gametype gametypehere
```

Then restart:
```bash
/rcon map_restart
```

**Available game modes:**

| Command | Name |
|---------|------|
| `/rcon g_gametype dm` | Free For All / Deathmatch |
| `/rcon g_gametype war` | Team Deathmatch |
| `/rcon g_gametype sd` | Search & Destroy |
| `/rcon g_gametype dom` | Domination |
| `/rcon g_gametype koth` | Headquarters |
| `/rcon g_gametype sab` | Sabotage |

### Map Rotation

**Changing the gametype and map rotation:**
```bash
/rcon sv_maprotation "gametype sd map mp_backlot map mp_citystreets map mp_crash map mp_strike map mp_crossfire"
```

**Several game types in one rotation:**
```bash
/rcon sv_maprotation "gametype sd map mp_crash gametype war map mp_backlot"
```

Each `gametype` entry applies to the maps after it.

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
/rcon clientkick clientslot or id
```

Kick a player using their slot number or ID.

**Kick all:**
```bash
/rcon kickall
```

Kick all players from the server.

### Ban Commands

**Permanent ban:**
```bash
/rcon banClient id
```

Permanently bans a player by their ID.

**Temporary ban by name:**
```bash
/rcon tempBanUser name
```

Kicks and temporarily bans a player by their name.

**Temporary ban by ID:**
```bash
/rcon tempBanClient id
```

Kicks and temporarily bans a player by their ID.

## Related Resources

- [Promod LIVE](/games/cod4/mods/promodlive) - Competitive mod
