# RCON Commands

Remote console commands for managing your Call of Duty server.

## Log into RCON

Open console in-game and run the login command to gain access to all the following commands. The RCON password will be displayed on your [panel](https://fshost.me/free-panel).

**Login command:**
```
/rconpassword type_rcon_pass_here
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

**Map rotation:**
```
/rcon map_rotate
```

Load next map in rotation.

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

Changing the game mode is easy with this command but remember to restart the map after setting the game mode.

**Set game mode:**
```
/rcon g_gametype gametypehere
```

**Available game modes:**

| Command | Name |
|---------|------|
| `/rcon g_gametype bas` | Base Assault |
| `/rcon g_gametype bel` | Behind Enemy Lines |
| `/rcon g_gametype ctf` | Capture the Flag |
| `/rcon g_gametype dm` | Deathmatch |
| `/rcon g_gametype dom` | Domination |
| `/rcon g_gametype hq` | Headquarters |
| `/rcon g_gametype re` | Retrieval |
| `/rcon g_gametype sd` | Search and Destroy |
| `/rcon g_gametype tdm` | Team Deathmatch |

## Policing Your Server

### Player Management

**Status:**
```
/rcon status
```

Shows the Slot Number (the player's position/index in the server's player list), Name, GUID, IP, and other info of the players connected.

**PunkBuster player list:**
```
/rcon pb_sv_plist
```

Get PunkBuster (PB) player list, if PunkBuster anti-cheat is enabled on your server.

**Kick player:**
```
/rcon clientkick clientslot
```

Kick a player using their slot number.

**Kick all:**
```
/rcon kickall
```

Kick all players from the server.

### Screenshots

**Take screenshot:**
```
/rcon pb_sv_getss clientslot
```

Take a screenshot (you will need PunkBuster (PB) enabled for this).

## Related Resources

- [Screenshots](https://fshost.me/screenshots) - View server screenshots
- [Support](https://fshost.me/discord) - Get help
