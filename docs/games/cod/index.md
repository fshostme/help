---
description: "Get started with your Call of Duty server on FSHOST.me: connect, log in to RCON, change map and game mode, and compare Free and Pro."
---

# Call of Duty

Guides for running your Call of Duty (CoD1) server on FSHOST.

## New Here? Start With These

Follow the path for the server you have.

### Free Server

1. **Connect to your server.** Find the IP and port on the [Free Server Panel](https://fshost.me/free-panel), then open the console and type `/connect IP:PORT`
2. **Log in to RCON** with the password from the panel: [Log into RCON](/games/cod/rcon#log-into-rcon)
3. **Change the map or game mode:** [Map Commands](/games/cod/rcon#map-commands) and [Game Modes](/games/cod/rcon#game-modes)

### Pro Server

1. **Connect to your server.** The IP and port are at the top of your server's page at [fshost.me/pro/servers](https://fshost.me/pro/servers)
2. **Log in to RCON.** The password is the **RCON password** field in **Game settings**: [Log into RCON](/games/cod/rcon#log-into-rcon)
3. **Change the map or game mode:** [Map Commands](/games/cod/rcon#map-commands) and [Game Modes](/games/cod/rcon#game-modes)
4. **Change the mod, version or PunkBuster** in **Game settings** on the Pro Panel: [Managing Your Server](/servers/pro/managing-server)

## Guides

- [RCON Commands](/games/cod/rcon) - Maps, game modes, hostname, password and player management

## Game Modes

| Mode | `g_gametype` |
|------|--------------|
| Behind Enemy Lines | `bel` |
| Deathmatch | `dm` |
| Headquarters | `hq` |
| Retrieval | `re` |
| Search and Destroy | `sd` |
| Team Deathmatch | `tdm` |

```bash
/rcon g_gametype sd
/rcon map_restart
```

::: tip Restart After Changing Mode
The new game mode only takes effect after `/rcon map_restart` or a map change.
:::

## Free vs Pro

| Feature | Free | Pro |
|---------|------|-----|
| RCON access | Yes | Yes |
| Version v1.1 or v1.5 | Yes | Yes |
| Mods: Pam 110, CoD1 Mania, CoDBase | Yes | Yes |
| PunkBuster on or off | Yes | Yes |
| Change the mod after creation | No | Yes |
| Your own custom mod | No | Yes |
| FTP access (on request) | No | Yes |
| Hostname advert required | Yes | No |

[Create Free Server →](https://fshost.me/free/cod) · [View Pro Plans →](https://fshost.me/pro) · [Full comparison](/servers/free-vs-pro)

## FAQ

::: details Why must I keep the advert in my hostname?
Free servers must keep `free @ fshost.me` at the end of the hostname. The advert is only in the hostname, not in chat. If it is removed, it is added back automatically. Pro servers have no advert.
:::

::: details How do I change the mod on a Free server?
The mod is chosen when you create the server and cannot be changed on the Free Server Panel. Stop the server and create a new one with the mod you want. On Pro servers, change **Mod** in **Game settings**.
:::

::: details Can I turn PunkBuster off?
Yes. Free servers choose PunkBuster **On** or **Off** when the server is created. Pro servers have a **PunkBuster** toggle in **Game settings**.
:::

::: details Where do I find my RCON password?
Free servers show it on the [Free Server Panel](https://fshost.me/free-panel). On Pro servers it is the **RCON password** field in **Game settings**.
:::
