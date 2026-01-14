# RCON Commands

Remote console commands for managing your Call of Duty 4 server.

## Log into RCON

Open console in-game (~) and run the login command to gain access to all the following commands. The RCON password will be displayed on your [free panel](https://fshost.me/free-panel) or [Pro server settings](https://fshost.me/pro/servers).

**Login command:**
```
/rcon login type_rcon_pass_here
```

## General Settings

### Map Commands

**Change map:**
```
/rcon map mp_mapnamehere
```

You can change the current map to any stock one or we have a custom map list.

**Restart map:**
```
/rcon map_restart
```

After changing any map settings, like the game mode, it is required to restart the map so it can change.

**Fast restart:**
```
/rcon fast_restart
```

Reset the scores and map.

### Server Settings

**Password:**
```
/rcon g_password ""
```

You can change or remove the password to join your server by leaving the value empty.

**Hostname:**
```
/rcon sv_hostname "^6CUSTOM HOSTNAME ^7- free @ fshost.me"
```

You can change the hostname on the request form or if you want to change it after you've started it, you can do so using this command.

::: warning Required Advert
Please note that you are required to keep the advert part in the hostname.
:::

### Game Modes

Changing the game mode is done with these commands, but it will only take effect after a map change or restart.

**Set game mode:**
```
/rcon g_gametype gametypehere
```

Then restart:
```
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
```
/rcon sv_maprotation "gametype sd map mp_backlot map mp_citystreets map mp_crash map mp_strike map mp_crossfire"
```

## Policing Your Server

### Player Management

**Status:**
```
/rcon status
```

Shows the Slot Number, Name, GUID, IP, and other info of the players connected.

**PunkBuster player list:**
```
/rcon pb_sv_plist
```

Get PB player list, if PB is enabled.

**Kick player:**
```
/rcon clientkick clientslot or id
```

Kick a player using their slot number or ID.

**Kick all:**
```
/rcon kickall
```

Kick all players from the server.

### Ban Commands

**Permanent ban:**
```
/rcon banClient id
```

Permanently bans a player by their ID.

**Temporary ban by name:**
```
/rcon tempBanUser name
```

Kicks and temporarily bans a player by their name.

**Temporary ban by ID:**
```
/rcon tempBanClient id
```

Kicks and temporarily bans a player by their ID.

### Screenshots

**Take screenshot (v1.7):**
```
/rcon pb_sv_getss
```

Take a screenshot for **v1.7** (you will need PB enabled for this).

**Take screenshot (CoD4x):**
```
/rcon getss
```

Take a screenshot on **CoD4x**.

## Related Resources

- [Promod LIVE](/games/cod4/mods/promodlive) - Competitive mod
- [Screenshots](https://fshost.me/screenshots) - View server screenshots
- [Support](https://fshost.me/discord) - Get help
