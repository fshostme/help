# Before You Modify Files

Read this before you install your own plugins, upload maps or edit configs on a Pro server. A few minutes of preparation saves you a broken server.

::: warning Pro Server Only
FTP is only available on Pro servers.
:::

::: warning Support After Changes
We can enable FTP for your server, but our support is limited once you install your own plugins or mods, or make major changes to the files. If something breaks after a change, undo the change first.
:::

## Step 1: Make a Backup

Download every file you are about to change and keep it on your computer. Put the date in the folder name, for example `backup-2026-10-14`, so you know which copy is which.

We do not back up files you change over FTP, and a server reinstall resets the server, including your config template. Keep your own copy.

## Step 2: Change One Thing at a Time

Install one plugin or make one config change, restart, and check it works. If you change five things at once and the server breaks, you do not know which change caused it.

## Step 3: Edit the Right File

Both CS2 and CS 1.6 load a config the Pro Panel builds from a template. Edit the template, not the generated file, or your changes are overwritten.

- [CS2 Config Files](/games/cs2/config-files)
- [CS 1.6 Config Files](/games/cs16/config-files)

## Step 4: Use a Plain Text Editor

Edit configs with a plain text editor such as [Notepad++](https://notepad-plus-plus.org/) or [VS Code](https://code.visualstudio.com/). Word processors add formatting that breaks config files.

- Save as plain text, UTF-8
- Keep the file extension, for example `.cfg` or `.ini`
- File and folder names are case sensitive on our servers. `Maps` and `maps` are different folders

## Step 5: Restart and Check

Most games only read config and plugin files when they start. After a change:

1. Save **Game settings** if you changed the config template
2. Restart the server from the [Pro Panel](https://fshost.me/pro/servers)
3. Watch the **Console** tab while it starts. Errors about your change show up there
4. Join the server and check the change works

## Rolling Back

If the server does not start or behaves wrong after a change:

1. Upload your backup copy of the file over the changed one
2. If you added a plugin, remove it or turn it off
3. Save **Game settings** if you restored the config template
4. Restart the server

## Where to Get Plugins

Only install plugins from sources you trust, such as the author's GitHub **Releases** page or the [AlliedModders forums](https://forums.alliedmods.net/). A plugin runs with full access to your server, and a bad one can crash it, leak your RCON password or get your server banned.

| Game | How to install plugins |
|------|------------------------|
| CS2 | Ask on a ticket at [Pro Support](https://fshost.me/pro/support) |
| CS 1.6 | Over FTP, see [Installing AMX Mod X Plugins](/games/cs16/plugins) |

## When to Ask Us

Open a ticket on [Pro Support](https://fshost.me/pro/support) if:

- You need FTP access or FastDL
- You need access to a folder you cannot see
- You need more FTP storage
- The server does not start even after you restored your backup
- You want a map from our map library installed

Say what you changed and when. It helps staff find the problem faster.
