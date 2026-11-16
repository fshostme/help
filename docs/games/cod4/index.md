---
description: "Get started with your Call of Duty 4: Modern Warfare server on FSHOST.me: connect, log in to RCON, change map and game mode, pick a mod, and compare Free and Pro."
---

# Call of Duty 4: Modern Warfare

Guides for running your Call of Duty 4 server on FSHOST.

## New Here? Start With These

Follow the path for the server you have.

### Free Server

1. **Connect to your server.** Find the IP and port on the [Free Server Panel](https://fshost.me/free-panel), then open the console (`~`) and type `/connect IP:PORT`
2. **Log in to RCON** with the password from the panel: [Log into RCON](/games/cod4/rcon#log-into-rcon)
3. **Change the map or game mode:** [Map Commands](/games/cod4/rcon#map-commands) and [Game Modes](/games/cod4/rcon#game-modes)
4. **Set up your mod.** If you picked one when creating the server, see its page under [Mods](#mods)

### Pro Server

1. **Connect to your server.** The IP and port are at the top of your server's page at [fshost.me/pro/servers](https://fshost.me/pro/servers)
2. **Log in to RCON.** The password is the **RCON password** field in **Game settings**: [Log into RCON](/games/cod4/rcon#log-into-rcon)
3. **Change the map or game mode:** [Map Commands](/games/cod4/rcon#map-commands), [Game Modes](/games/cod4/rcon#game-modes) and [Map Rotation](/games/cod4/rcon#map-rotation)
4. **Change the mod, version or PunkBuster** in **Game settings** on the Pro Panel: [Managing Your Server](/servers/pro/managing-server)

## Guides

- [RCON Commands](/games/cod4/rcon) - Maps, game modes, map rotation, hostname, password, kicks and bans

## Game Modes

| Mode | `g_gametype` |
|------|--------------|
| Free For All | `dm` |
| Team Deathmatch | `war` |
| Search & Destroy | `sd` |
| Domination | `dom` |
| Headquarters | `koth` |
| Sabotage | `sab` |

```bash
/rcon g_gametype sd
/rcon map_restart
```

::: tip Restart After Changing Mode
The new game mode only takes effect after `/rcon map_restart` or a map change.
:::

## Mods

Pick a mod when you create the server. Each page covers its settings and commands.

- [Promod LIVE v2.20](/games/cod4/mods/promodlive) - Competition mod with match modes set through `promod_mode`
- [FPSChallenge.eu Promod](/games/cod4/mods/fps-promod) - FPSChallenge.eu's match mod based on Promod LIVE
- [GunGame v1.0](/games/cod4/mods/gungame) - Each kill moves you up to the next weapon
- [CoDJumper v3.12b](/games/cod4/mods/codjumper) - Bounce and jump mod for parkour-style maps
- [Stock Custom Maps](/games/cod4/mods/stock-custom-maps) - Custom maps with stock game settings

## Free vs Pro

| Feature | Free | Pro |
|---------|------|-----|
| RCON access | Yes | Yes |
| Version v1.7, [CoD4x](https://cod4x.ovh) v20 or CODTV | Yes | Yes |
| Mods listed above | Yes | Yes |
| Cracked (players without a valid CD key) | Yes | Yes |
| PunkBuster on or off | Yes | Yes |
| Change the mod after creation | No | Yes |
| Your own custom mod | No | Yes |
| CoD4x or CODTV auth token for master server listing | No | Yes |
| **Disable IPv6** and **Enable cheats** settings | No | Yes |
| FTP access and FastDL (on request) | No | Yes |
| Hostname advert required | Yes | No |

[Create Free Server →](https://fshost.me/free/cod4) · [View Pro Plans →](https://fshost.me/pro) · [Full comparison](/servers/free-vs-pro)

## FAQ

::: details Why must I keep the advert in my hostname?
Free servers must keep `free @ fshost.me` at the end of the hostname. The advert is only in the hostname, not in chat. If it is removed, it is added back automatically. Pro servers have no advert.
:::

::: details How do I change the mod on a Free server?
The mod is chosen when you create the server and cannot be changed on the Free Server Panel. Stop the server and create a new one with the mod you want. On Pro servers, change **Mod** in **Game settings**.
:::

::: details Which version should I pick?
v1.7 is the official latest version. We also run the latest CoD4x (v20) and CoD4x CODTV versions. CODTV players need the CODTV client to join a CODTV server.
:::

::: details Can I turn PunkBuster off?
Yes. Free servers choose PunkBuster **On** or **Off** when the server is created. Pro servers have a **PunkBuster** toggle in **Game settings**.
:::

::: details Why does my Pro server restart every day?
New Pro CoD4 servers get a daily scheduled restart. Change or turn it off under [Automation](/servers/pro/managing-server#automation).
:::
