---
description: "Fixes for Pro server FTP logins, config and plugin changes that have no effect, Workshop maps and missing demos."
---

# Pro Files and Plugins

What to check when FTP, a config change, a plugin, a map or a demo does not work as expected on a Pro server. Each block below covers one symptom.

::: warning Pro Server Only
FTP, config templates, Workshop maps and demo downloads are only available on Pro servers. Free servers run a fixed setup and are changed with commands. See [Free Server Commands](/games/cs2/commands-free) for CS2.
:::

Before you change files, read [Before You Modify Files](/servers/pro/before-you-modify). Most problems on this page come from skipping a step there.

## FTP

::: details The Files tab says FTP is not set up
The **Files** tab shows **FTP access hasn't been set up for this server yet.** until we set it up for you. Open a ticket on [Pro Support](https://fshost.me/pro/support) with the **FTP** category. See [FTP Access](/servers/pro/ftp#step-1-request-ftp-access).
:::

::: details FTP login fails
- Copy the **Host**, **Username** and **Password** from the **Files** tab with the copy icons
- Set **Encryption** to **Require explicit FTP over TLS** in FileZilla, or **TLS/SSL Explicit encryption** in WinSCP
- Use port `21`

See [FTP Access](/servers/pro/ftp#troubleshooting).
:::

::: details FTP connects, but the folder list times out or is empty
A timeout when listing folders means your client is using active mode. Switch it to passive mode. An empty list means the folders are not set up yet, so open a ticket with the **FTP** category. See [FTP Access](/servers/pro/ftp#troubleshooting).
:::

::: details I cannot see the folder I need
You only get the folders we set up for you. Ask on a ticket for access to another folder. See [What You Can Access](/servers/pro/ftp#what-you-can-access).
:::

::: details Upload fails because the disk is full
Delete files you no longer need, such as unused maps, or ask on a ticket for more space. See [FTP Access](/servers/pro/ftp#troubleshooting).
:::

::: details My teammate cannot use FTP
FTP belongs to the server owner. Team members do not get FTP access. See [Team Members](/servers/pro/ftp#team-members).
:::

## Config Changes

::: details My config change has no effect
Both CS2 and CS 1.6 load a config the Pro Panel builds from a template. After editing the template:

1. Click **Save changes** in **Game settings**. A restart on its own does not copy the template
2. Restart the server

Settings the Pro Panel controls, such as the server name and join password, are set in the panel, not in the template. See [CS2 Config Files](/games/cs2/config-files#troubleshooting) or [CS 1.6 Config Files](/games/cs16/config-files#troubleshooting).
:::

::: details My config changes are gone
You edited the generated config instead of the template, and someone saved **Game settings** afterwards. Make the change again in the template file. See [CS2 Config Files](/games/cs2/config-files#how-the-config-works).
:::

::: details The server name or password is wrong after editing the config
A `REPLACE_` placeholder is missing from your CS2 template. Put the line back from your backup, save **Game settings** and restart. See [CS2 Config Files](/games/cs2/config-files#troubleshooting).
:::

::: details The server does not start after a change
Undo the change from your backup and restart. Watch the **Console** tab to see the error. See [Rolling Back](/servers/pro/before-you-modify#rolling-back) and [Server Problems](/troubleshooting/server-problems).
:::

## Plugins

::: details A CS2 plugin is installed but does nothing
Deathmatch, Retakes and Prefire Practice are installed but off until you turn them on. Only one game mode runs at a time. See [Installed vs. Loaded](/games/cs2/plugins#installed-vs-loaded).

To see what is loaded right now, send this in the Pro Panel **Console** tab:

```bash
css_plugins list
```
:::

::: details I want to add my own CS2 plugin
Ask on a ticket at [Pro Support](https://fshost.me/pro/support), or install the plugin yourself over FTP, which we set up on request. See [Before You Modify Files](/servers/pro/before-you-modify#where-to-get-plugins).
:::

::: details A CS 1.6 plugin shows "bad load" or is not in the list
Check the modules the plugin needs, the entry in `plugins.ini` and the file location. See [Installing AMX Mod X Plugins](/games/cs16/plugins#troubleshooting).
:::

## Maps

::: details My CS2 Workshop map does not load
- Check that the map is public on the Steam Workshop, and that it is a CS2 map, not a CS:GO map
- The first start downloads the map, so give it a few minutes. Follow progress on the **Console** tab

See [Workshop Maps](/games/cs2/workshop-maps#troubleshooting), which also lists the messages **Save changes** shows for a wrong ID.
:::

::: details The server is back on a normal map after a restart
The server always starts on the map set under **Map** in **Game settings**. Set your Workshop map there. See [Workshop Maps](/games/cs2/workshop-maps#troubleshooting).
:::

::: details CS 1.6 players get "missing file" or downloads are slow
The map needs files that are not on the server or not on FastDL, or FastDL is not set up. See [Custom Maps and FastDL](/games/cs16/custom-maps#troubleshooting).
:::

## Demos

::: details My CS2 demo is not in the Demo files list
- Wait a minute. The list refreshes every minute, and a demo only appears once recording has stopped
- Demos older than 7 days are deleted automatically
- Without CSTV nothing is recorded

See [CSTV](/games/cs2/cstv#troubleshooting) and [Demo Monitor](/games/cs2/plugins/demomonitor#troubleshooting).
:::

::: details No Discord message when a demo finishes
See [Discord Demo Links](/games/cs2/plugins/cstv-discord#troubleshooting).
:::
