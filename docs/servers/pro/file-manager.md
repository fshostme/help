---
description: "Which folders you can reach over FTP on your Pro server, per game, and which files FTP accepts."
---

# File Manager

::: warning Pro Server Only
FTP is only available on Pro servers, and only for some games. The [pricing page](https://fshost.me/pro/pricing) for your game says whether FTP is included.
:::

With FTP, you get access to the folders that hold configs, plugins and mods for your game, not the whole server. The folders differ per game, see [Important Directories](#important-directories).

::: warning Support After Changes
We can enable FTP for your server, but our support is limited once you install your own plugins or mods, or make major changes to the files.
:::

## Accessing FTP

See [FTP Access](/servers/pro/ftp) for how to request FTP, where to find your login details and how to connect with FileZilla or WinSCP.

## Important Directories

When you log in with FTP, each folder you have access to shows up at the top level. These are the folders a server gets by default:

| Game | FTP folders |
|------|-------------|
| Counter-Strike 2 | `addons`, `cfg` |
| Counter-Strike 1.6 | `cstrike`, `fastdl` |
| Counter-Strike: Source | `cstrike`, `fastdl` |
| Counter-Strike: Global Offensive | `addons`, `cfg`, `fastdl` |
| Half-Life Deathmatch | `valve`, `fastdl` |
| Team Fortress 2 | `tf` |
| Call of Duty 2 | `fastdl` |
| Call of Duty 4 | `fastdl` |
| Medal of Honor: Allied Assault | `server` |
| Minecraft | `server` |
| Hytale | `server` |
| Palworld | `config`, `saves` |

`fastdl` is for [FastDL](/servers/pro/ftp#fastdl-fast-downloads) files. If you need a folder that is not listed, ask on your FTP ticket.

### Counter-Strike 2

```
/addons/   - Metamod, CounterStrikeSharp and plugins
/cfg/      - Configuration files. Edit cfg/pro/fshost_template_<id>.cfg
```

See [CS2 Config Files](/games/cs2/config-files) for which file to edit.

CS2 demos are not on FTP. Download them from **Demo files** on the **Files** tab. See [CSTV](/games/cs2/cstv#accessing-demos).

### Counter-Strike 1.6

```
/cstrike/   - Maps, configs, AMX Mod X and Metamod
/fastdl/    - Copies of files players download
```

See [CS 1.6 Config Files](/games/cs16/config-files), [AMX Mod X Plugins](/games/cs16/plugins) and [Custom Maps and FastDL](/games/cs16/custom-maps).

### Minecraft

The `server` folder is the whole Minecraft server, for example:

```
/server/server.properties   - Main config
/server/world/              - World save files
/server/plugins/            - Plugins (Paper)
/server/mods/               - Mods (Fabric)
```

### Palworld

```
/config/   - Server settings
/saves/    - Save games
```

## What FTP Accepts

Some files are refused when you upload them, to keep the server safe:

- Scripts and programs: `.sh`, `.exe`, `.bat`, `.cmd`, `.ps1`
- `.vcfg` files
- File names that start with a dot, such as `.htaccess`
- File and folder names that contain any of `;` `&` `|` `<` `>` `*` `?` `{` `}` `\` `"` `'` `$` or a backtick

The game's own server program is hidden and cannot be changed. You also cannot change file permissions or create links.

The `fastdl` folder only accepts files players download: `.bsp`, `.bz2`, `.ff`, `.iwd`, `.spr`, `.mdl`, `.wav`, `.bmp`, `.wad`, `.tga` and `.nav`.

## Storage Quota

Your FTP uploads have a storage limit. The **Files** tab shows **Storage used** with how much of it you have used.

The limit is shared by all your Pro servers on the same location. The **Files** tab then says which other servers it is **Shared with**. `.log` and `.dem` files do not count toward it.

To get more space, delete files you no longer need or click **Request more storage** to open a ticket.

## Before Editing Files

See [Before You Modify Files](/servers/pro/before-you-modify) for a full checklist. Keep a copy of every file you change on your own computer, and restart the server from the Pro Panel after uploading.

## Troubleshooting

::: details Upload refused
Check the file name and extension against [What FTP Accepts](#what-ftp-accepts). In the `fastdl` folder, only map, model, sound and texture files are allowed.
:::

::: details "Upload limit reached"
You have used your whole storage quota. Delete files you no longer need, or click **Request more storage** on the **Files** tab. See [Storage Quota](#storage-quota).
:::

::: details A file has no effect after uploading
Check that the file is in the right folder with the right name, then restart the server. See [FTP Access](/servers/pro/ftp#troubleshooting).
:::

## Need Help?

- **[Pro Support](https://fshost.me/pro/support)** - Open a ticket with the **FTP** category
