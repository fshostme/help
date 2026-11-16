---
description: "Get started with your Counter-Strike 1.6 server on FSHOST.me: connect, log in to RCON, become admin, add plugins and maps, and compare Free and Pro."
---

# Counter-Strike 1.6

Guides for running your Counter-Strike 1.6 server on FSHOST.

## New Here? Start With These

Follow the path for the server you have.

### Free Server

1. **Connect to your server.** Find the IP and port on the [Free Server Panel](https://fshost.me/free-panel), then open the console and type `connect IP:PORT`
2. **Log in to RCON** with the password from the panel: [RCON Commands](/games/cs16/rcon#log-into-rcon)
3. **Make yourself an admin** for the session: [Become a Server Admin](/games/cs16/becomeadmin)

### Pro Server

1. **Connect to your server.** The IP and port are at the top of your server's page at [fshost.me/pro/servers](https://fshost.me/pro/servers)
2. **Make yourself an admin:** [Become a Server Admin](/games/cs16/becomeadmin)
3. **Change your settings** in the config template: [Config Files](/games/cs16/config-files)
4. **Add plugins and maps** over FTP: [AMX Mod X Plugins](/games/cs16/plugins) and [Custom Maps and FastDL](/games/cs16/custom-maps)

## Guides

- [Become a Server Admin](/games/cs16/becomeadmin) - Add admins with AMX Mod X
- [RCON Commands](/games/cs16/rcon) - Console commands for maps, players, settings and bots
- [Config Files](/games/cs16/config-files) - Which config file to edit over FTP (Pro)
- [AMX Mod X Plugins](/games/cs16/plugins) - Install your own plugins (Pro)
- [Custom Maps and FastDL](/games/cs16/custom-maps) - Upload maps and set up fast downloads (Pro)

## Free vs Pro

| Feature | Free | Pro |
|---------|------|-----|
| RCON access | Yes | Yes |
| VAC on or off | Yes | Yes |
| Maps from the [map library](https://dl.fsho.st/cs16/maps/) | Yes | Yes |
| Upload your own maps | No | Yes |
| Admins stay after a restart | No | Yes |
| PODBot bots | No | Yes |
| Your own AMX Mod X plugins | No | Yes |
| FTP access and FastDL (on request) | No | Yes |
| Hostname advert required | Yes | No |

[Create Free Server →](https://fshost.me/free/cs16) · [View Pro Plans →](https://fshost.me/pro/pricing/cs16) · [Full comparison](/servers/free-vs-pro)

## FAQ

::: details Why must I keep the advert in my hostname?
Free servers have `- free @ fshost.me` at the end of the hostname. The advert is only in the hostname, not in chat. Pro servers have no advert.
:::

::: details Why did my Free server stop?
Free servers stop automatically when they are empty. Join within 5 minutes of starting the server, or it stops again.
:::

::: details Why do I lose admin after a restart?
On Free servers, admin added with RCON is temporary and resets when the server restarts. On Pro servers, admins in `users.ini` stay after a restart. See [Become a Server Admin](/games/cs16/becomeadmin).
:::

::: details How do I add bots?
Bots are available on Pro servers. Turn on **Bots** in **Game settings** on the Pro Panel and restart the server. Then use `amx_pbmenu` in-game, or the commands in [PODBot Commands](/games/cs16/rcon#podbot-commands).
:::

::: details Can I add custom maps?
Check the [map library](https://dl.fsho.st/cs16/maps/) first. Pro servers can upload their own maps over FTP, see [Custom Maps and FastDL](/games/cs16/custom-maps).
:::

::: details Why does my Pro server restart every day?
New Pro CS 1.6 servers get a daily scheduled restart. Change or turn it off under [Automation](/servers/pro/managing-server#automation).
:::
