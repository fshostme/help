# Config Files

Where your Counter-Strike 1.6 Pro server keeps its config, which file to edit, and when your changes take effect.

::: warning Pro Server Only
Config files are edited over [FTP](/servers/pro/ftp), which is only available on Pro servers. Free servers are configured with [RCON commands](/games/cs16/rcon).
:::

## How the Config Works

Your server does not use `server.cfg`. It loads its own config from the `cfg/pro` folder, and the Pro Panel builds that file for you.

Over FTP, the folder is `cstrike/cfg/pro`. It holds two files for your server, where `1234` stands for your server number (the number in **P1234**):

| File | What it is |
|------|------------|
| `fshost_template_1234.cfg` | Your template. **Edit this one.** |
| `<random>_1234.cfg` | The file the server loads. It starts with 12 random letters and digits. Do not edit it |

Each time you click **Save changes** in **Game settings**, the panel copies your template over the loaded file and fills in your hostname. Anything you changed in the loaded file is lost.

::: danger Edit the Template
Changes made to `<random>_1234.cfg` are overwritten the next time anyone saves **Game settings**. Always edit `fshost_template_1234.cfg`.
:::

## Settings the Panel Controls

Some settings come from **Game settings** in the Pro Panel. Change them there, not in the template.

| Setting | Where to change it |
|---------|--------------------|
| `hostname` | **Hostname**. The template has a `REPLACE_SERVER_NAME` placeholder that the panel fills in. Keep that line, or the panel hostname stops working |
| `sv_password` | **Join password**. Leave it out of the template, or the template value replaces the panel's |
| `rcon_password` | **RCON password**. Leave it out of the template, or the template value replaces the panel's |
| `maxplayers` | **Slots** |
| Start map | **Map** |
| PODBot | **Bots** |
| VAC | **VAC** |

## Step 1: Connect With FTP

FTP is set up on request. See [FTP Access](/servers/pro/ftp) for how to ask for it and how to log in with FileZilla or WinSCP.

## Step 2: Download a Backup

Open `cstrike/cfg/pro`, download `fshost_template_1234.cfg` and keep the copy on your computer. If a change breaks something, upload the copy again. A server reinstall resets the template, so keep your copy after every change. See [Before You Modify Files](/servers/pro/before-you-modify).

## Step 3: Edit the Template

Open the template in a text editor, such as Notepad++ or VS Code, and change the values you want. For example:

```bash
mp_timelimit 30
mp_roundtime 2.5
mp_freezetime 3
mp_friendlyfire 0
sv_alltalk 0
```

Upload the file back to the same folder with the same name.

## Step 4: Save Game Settings

1. Go to the [Pro Panel](https://fshost.me/pro/servers)
2. Click on your server name
3. Open the **Settings** tab
4. Click **Save changes** in **Game settings**

![Save bar with Save changes](https://help.fshost.me/img/pro-save-changes.png)

The panel says **Saving pushes the config to your server. Restart it for changes to take effect.** This copies your template into the file the server loads. You do not have to change any field first.

::: tip Restart Alone Is Not Enough
A restart does not rebuild the config. It only loads the file that is already there. Save **Game settings** first, then restart.
:::

## Step 5: Restart the Server

Restart the server from the Pro Panel. Then check a value with RCON, for example:

```bash
rcon mp_roundtime
```

## Other Config Files

Everything else in `cstrike` works like on any CS 1.6 server. Common files:

| File | Purpose |
|------|---------|
| `cstrike/mapcycle.txt` | Map rotation, one map name per line |
| `cstrike/motd.txt` | Message of the day shown when players join |
| `cstrike/addons/amxmodx/configs/` | AMX Mod X settings, admins and plugin list. See [Plugins](/games/cs16/plugins) |
| `cstrike/addons/metamod/plugins.ini` | Metamod plugin list |

::: warning Do Not Edit the PODBot Line
The panel turns PODBot on and off by commenting the `podbot_mm` line in `addons/metamod/plugins.ini`. Use **Bots** in **Game settings** instead of editing that line.
:::

## Troubleshooting

::: details My changes are gone
You edited `<random>_1234.cfg` instead of the template, and someone saved **Game settings** afterwards. Make the change again in `fshost_template_1234.cfg`.
:::

::: details My template change has no effect
- Click **Save changes** in **Game settings**, then restart. A restart on its own does not copy the template
- Check that the setting is not in the [panel-controlled list](#settings-the-panel-controls)
- Check the **Console** tab for errors such as `Unknown command` when the server starts. A typo makes the server skip that line
:::

::: details The server name is wrong
The `REPLACE_SERVER_NAME` placeholder is missing from your template. Put back the `hostname` line from your backup, or add it again:

```bash
hostname "REPLACE_SERVER_NAME"
```

Then save **Game settings** and restart.
:::

::: details I broke the config
Upload your backup copy of the template, save **Game settings** and restart. If you have no backup, open a ticket on [Pro Support](https://fshost.me/pro/support).
:::
