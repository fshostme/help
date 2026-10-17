# Installing AMX Mod X Plugins

How to add your own AMX Mod X plugins to a Counter-Strike 1.6 Pro server.

::: warning Pro Server Only
Plugins are installed over [FTP](/servers/pro/ftp), which is only available on Pro servers. Free servers come with a fixed set of plugins.
:::

::: warning Support After Changes
Our support is limited once you install your own plugins. If a plugin breaks the server, remove it first. See [Before You Modify Files](/servers/pro/before-you-modify).
:::

## What Your Server Runs

CS 1.6 Pro servers run our forked builds of these:

| Component | Purpose |
|-----------|---------|
| **ReHLDS** and **ReGameDLL** | Server engine and game logic |
| **Metamod-R** | Loads server addons such as AMX Mod X and PODBot |
| **AMX Mod X** | Plugin system for admin commands, votes, stats and more |

There is no plugin manager in the Pro Panel for CS 1.6. Everything on this page is done by hand over FTP.

## Before You Start

- You need FTP access. Ask for it on a ticket with the **FTP** category, see [FTP Access](/servers/pro/ftp)
- You need the compiled plugin, a file ending in `.amxx`
- Download the plugin from a source you trust, such as the [AlliedModders forums](https://forums.alliedmods.net/forumdisplay.php?f=8)

::: tip Only Have a .sma File?
A `.sma` file is source code. The server cannot run it. Compile it to `.amxx` on your own computer with the compiler that comes with [AMX Mod X](https://www.amxmodx.org/downloads.php), or use the web compiler on the AlliedModders forums.
:::

## Step 1: Upload the Plugin

1. Connect with FTP
2. Open `cstrike/addons/amxmodx/plugins`
3. Upload the `.amxx` file

If the plugin comes with other files, upload them to the folders the plugin's instructions name. Common ones:

| File type | Folder |
|-----------|--------|
| `.amxx` | `cstrike/addons/amxmodx/plugins` |
| Plugin config (`.cfg`, `.ini`) | `cstrike/addons/amxmodx/configs` |
| Translations (`.txt`) | `cstrike/addons/amxmodx/data/lang` |
| Sounds, models, sprites | `cstrike/sound`, `cstrike/models`, `cstrike/sprites` |

If players need to download sounds or models, also put them on [FastDL](/games/cs16/custom-maps#step-4-add-the-files-to-fastdl).

## Step 2: Enable the Plugin

1. Open `cstrike/addons/amxmodx/configs`
2. Download `plugins.ini` and keep a copy as a backup
3. Add the plugin's file name on a new line at the bottom:

```bash
my_plugin.amxx
```

4. Upload `plugins.ini` back to the same folder

To turn a plugin off later, put a `;` at the start of its line:

```bash
;my_plugin.amxx
```

## Step 3: Restart the Server

Restart the server from the [Pro Panel](https://fshost.me/pro/servers). AMX Mod X reads `plugins.ini` when a map loads, so a restart is the simplest way to load a new plugin.

## Step 4: Check It Loaded

Log in with RCON and list the plugins:

```bash
rcon amxx plugins
```

Your plugin should show with the status `running`. You can also see load errors on the **Console** tab when the server starts.

## Adding Admins

Admins are added in `cstrike/addons/amxmodx/configs/users.ini` on Pro servers, so they stay after a restart. See [Become Admin](/games/cs16/becomeadmin) for the access flags.

## Troubleshooting

::: details The plugin shows "bad load"
- The plugin needs a module that is not enabled. Check the plugin's instructions for modules such as `fakemeta`, `hamsandwich` or `engine`, and remove the `;` in front of them in `configs/modules.ini`
- The plugin was compiled for a newer AMX Mod X version than the server runs. Compile it again or use an older release of the plugin
- Read the full error with `rcon amxx plugins` or on the **Console** tab
:::

::: details The plugin is not in the list
- Check the file name in `plugins.ini` matches the uploaded file exactly, including `.amxx`
- Check there is no `;` at the start of the line
- Check the file is in `addons/amxmodx/plugins`, not in a subfolder
- Restart the server
:::

::: details The server does not start after adding a plugin
Put a `;` in front of the plugin's line in `plugins.ini`, restart, and check the **Console** tab for the error. If the server still does not start, upload your backup of `plugins.ini`.
:::

::: details I uploaded a .sma file
The server cannot load `.sma` files. Compile it to `.amxx` first, see [Before You Start](#before-you-start).
:::

::: details Players do not hear the plugin's sounds
The sound files are missing on the players' side. Upload them to FastDL, see [Custom Maps and FastDL](/games/cs16/custom-maps).
:::
