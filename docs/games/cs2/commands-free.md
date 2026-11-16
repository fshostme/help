---
description: "How to change the map on a CS2 Free server with RCON and chat commands, and what Free servers do not include."
---

# Free Server Commands

How to change the map and settings on a CS2 Free server.

::: warning Free Servers Only
This page covers Free servers. On a Pro server, see [Pro Server Commands](/games/cs2/commands).
:::

Free servers have a small, fixed setup. You control them with RCON from the game console. The game mode commands, plugins and **Server admins** page of a Pro server are not part of it.

## What a Free Server Runs

| Setting | On a Free server |
|---------|------------------|
| Game mode | Competitive |
| Start map | The map you picked under **Map** when you created the server |
| Bots | Off |
| CSTV | Off |
| RCON | `fake_rcon`, with the **RCON Password** you picked when you created the server |

The **Map** list on the create form has these maps: `de_ancient`, `de_anubis`, `de_cache`, `de_dust2`, `de_inferno`, `de_mirage`, `de_nuke`, `de_overpass`, `de_train`, `de_vertigo`, `cs_office`, and the Arms Race maps `ar_baggage`, `ar_pool_day` and `ar_shoots`.

::: tip Join Within 5 Minutes
Free servers stop when they are empty. Join within 5 minutes of starting the server, or it stops again.
:::

## Step 1: Log In to RCON

Turn on the developer console, join your server and log in with your RCON password:

```bash
fake_rcon_password your_rcon_password
```

The full steps are in [RCON Commands](/games/cs2/rcon#before-you-start). Your RCON password is on the [Free Server Panel](https://fshost.me/free-panel), next to the `connect` command.

## Step 2: Change the Map

Send the map change from the console:

```bash
fake_rcon changelevel de_mirage
```

You can also type part of the map name:

```bash
fake_rcon css_map mirage
```

`css_map` finds the map whose name contains what you typed. If more than one map matches, use the full name.

## Map Commands in Chat

The same map changes also exist as chat commands. The `!` and `/` prefixes are interchangeable. This page uses `!`.

| Command | What it does |
|---------|--------------|
| `!map <name>` | Changes the map. `!changemap` and `!changelevel` do the same |
| `!maplist` | Lists the maps on the server |

Every player on a free server can use `!map`. If a command replies **You don't have permission to use this command.**, use the RCON commands from [Step 2](#step-2-change-the-map) instead.

## Other Settings

Any server command works through `fake_rcon`, for example:

```bash
fake_rcon mp_restartgame 1
fake_rcon mp_maxrounds 24
fake_rcon sv_password newpassword
```

See [RCON Commands](/games/cs2/rcon) for more.

## Not on Free Servers

These need a Pro server:

| Feature | Free | Pro |
|---------|------|-----|
| RCON | Yes | Yes |
| Change the map | Yes | Yes |
| Choose the game mode in the panel | No | Yes |
| Game mode chat commands, such as Deathmatch, Retakes and MatchZy practice | No | Yes |
| Steam Workshop maps and collections | No | Yes |
| Bots | No | Yes |
| CSTV spectating and demos | No | Yes |
| Plugins such as MatchZy and CS2-SimpleAdmin | No | Yes |
| **Server admins** page in the panel | No | Yes |

[View Pro Plans →](https://fshost.me/pro/pricing/cs2) · [Full comparison](/servers/free-vs-pro)

## Troubleshooting

::: details "You are not logged in"
Run `fake_rcon_password` with your RCON password first. See [RCON Commands](/games/cs2/rcon#troubleshooting).
:::

::: details "No maps found with the name"
No map on the server has that name. Check the spelling, or use one of the maps listed in [What a Free Server Runs](#what-a-free-server-runs).
:::

::: details My server stopped
Free servers stop when nobody is playing on them. Create a new one and join it within 5 minutes. See [Creating a Free Server](/servers/free/creating-server).
:::
