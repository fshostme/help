---
description: "Get started with your Counter-Strike 2 server on FSHOST.me: connect, log in to RCON, become admin, add plugins and Workshop maps, and compare Free and Pro."
---

# Counter-Strike 2

Guides for running your CS2 server on FSHOST.

## New Here? Start With These

Follow the path for the server you have.

### Free Server

1. **Connect to your server.** Find the IP and port on the [Free Server Panel](https://fshost.me/free-panel), then open the CS2 console and type `connect IP:PORT`
2. **Turn on the developer console.** [Setup steps](/games/cs2/rcon#before-you-start), needed for most server commands
3. **Log in to RCON** with the password from the panel: [RCON guide](/games/cs2/rcon)
4. **Learn the chat commands** for maps and game modes: [Free Server Commands](/games/cs2/commands-free)

### Pro Server

1. **Connect to your server.** The IP and port are at the top of your server's page at [fshost.me/pro/servers](https://fshost.me/pro/servers). Click **Join via Steam**, or use **Other ways to join** → **Copy console command** and paste it into the CS2 console
2. **Make yourself an admin.** [Become a Server Admin](/games/cs2/become-admin), the Pro Panel method takes four steps
3. **Learn the in-game commands** for maps, game modes and admin actions: [Pro Server Commands](/games/cs2/commands)
4. **Add the features you want.** [Plugin Overview](/games/cs2/plugins) covers match management, deathmatch, skins and demos
5. **Play a Workshop map** by setting its ID in **Game settings**: [Workshop Maps](/games/cs2/workshop-maps)

## Guides

- [Free Server Commands](/games/cs2/commands-free) - Chat commands on Free servers
- [Pro Server Commands](/games/cs2/commands) - Chat commands on Pro servers
- [RCON Commands](/games/cs2/rcon) - Console commands for server settings and cvars
- [Become a Server Admin](/games/cs2/become-admin) - Add admins in the Pro Panel (Pro)
- [CSTV](/games/cs2/cstv) - Spectating and demo recording (Pro)
- [Workshop Maps](/games/cs2/workshop-maps) - Run Steam Workshop maps and collections (Pro)
- [Config Files](/games/cs2/config-files) - Which config file to edit over FTP (Pro)
- [Automation](/games/cs2/automation) - Automatic game updates and scheduled restarts (Pro)
- [Team Access](/servers/pro/team-access) - Let teammates control the server from their own accounts (Pro)

## Plugins

Pro servers come with a set of plugins. Some run from the start and some are switched on by you. See the [Plugin Overview](/games/cs2/plugins) for which is which.

- [MatchZy](/games/cs2/plugins/matchzy) - Scrims, matches and practice
- [CS2-SimpleAdmin](/games/cs2/plugins/cs2-simpleadmin) - Ban, kick, mute and manage players
- [Deathmatch](/games/cs2/plugins/deathmatch), [Retakes](/games/cs2/plugins/retakes) and [OpenPrefirePrac](/games/cs2/plugins/prefire) - Extra game modes
- [WeaponPaints](/games/cs2/plugins/weapon-skins) - Custom weapon skins
- [Discord Demo Links](/games/cs2/plugins/cstv-discord) - Post demo download links to Discord

## Free vs Pro

| Feature | Free | Pro |
|---------|------|-----|
| RCON access | Yes | Yes |
| VAC on or off | Yes | Yes |
| Official maps | Yes | Yes |
| Steam Workshop maps and collections | No | Yes |
| Choose the game mode in the panel | No | Yes |
| Bots | No | Yes |
| CSTV spectating and demos | No | Yes |
| Plugins such as MatchZy and CS2-SimpleAdmin | No | Yes |
| **Skins (WeaponPaints)** | No | Yes |
| **Server admins** page in the panel | No | Yes |
| Steam GSLT | No | Yes |
| FTP access (on request) | No | Yes |
| Hostname advert required | Yes | No |

[Create Free Server →](https://fshost.me/free/cs2) · [View Pro Plans →](https://fshost.me/pro/pricing/cs2) · [Full comparison](/servers/free-vs-pro)

## FAQ

::: details Why must I keep the advert in my hostname?
Free servers have `- free @ fshost.me` at the end of the hostname. The advert is only in the hostname, not in chat. Pro servers have no advert.
:::

::: details Why did my Free server stop?
Free servers stop automatically when they are empty. Join within 5 minutes of starting the server, or it stops again.
:::

::: details How do I access my server files?
Free servers have no file access. Pro servers can get FTP access to the `addons` and `cfg` folders by opening a ticket on [Pro Support](https://fshost.me/pro/support). See [FTP Access](/servers/pro/ftp).
:::

::: details Do I need a GSLT?
No. CS2 runs fine without one. Add a token in **Steam GSLT (optional)** under **Game settings** on the Pro Panel only if you want your server listed in the Steam server browser, or a Steam ID that stays the same after restarts for Steam Datagram Relay. If players cannot join, clear this field first. An expired, banned or reused token stops people from connecting.
:::

::: details Why does my Pro server restart every day?
New Pro CS2 servers get a daily scheduled restart. Change or turn it off under [Automation](/games/cs2/automation).
:::

::: details Can I get a plugin that is not in the list?
Ask on a ticket at [Pro Support](https://fshost.me/pro/support). You can also install it yourself over FTP, which we set up on request. See [FTP Access](/servers/pro/ftp) and [Before You Modify Files](/servers/pro/before-you-modify).
:::
