# Config Files

Where your CS2 Pro server keeps its config, which file to edit, and when your changes take effect.

::: warning Pro Server Only
Config files are edited over [FTP](/servers/pro/ftp), which is only available on Pro servers. Free servers are configured with [commands](/games/cs2/commands-free).
:::

## How the Config Works

Your server does not use `server.cfg`. It loads its own config from the `cfg/pro` folder, and the Pro Panel builds that file for you.

Over FTP, the folder is `cfg/pro`. It holds two files for your server, where `1234` stands for your server number (the number in **P1234**):

| File | What it is |
|------|------------|
| `fshost_template_1234.cfg` | Your template. **Edit this one.** |
| `<random>_1234.cfg` | The file the server loads. It starts with 12 random letters and digits. Do not edit it |

Each time you click **Save changes** in **Game settings**, the panel copies your template over the loaded file and fills in the values from the panel. Anything you changed in the loaded file is lost.

::: danger Edit the Template
Changes made to `<random>_1234.cfg` are overwritten the next time anyone saves **Game settings**. Always edit `fshost_template_1234.cfg`.
:::

## Settings the Panel Controls

Some values come from **Game settings**. The template has placeholders that the panel fills in. Keep these lines as they are, or the panel setting stops working.

| Placeholder | Filled from |
|-------------|-------------|
| `REPLACE_SERVER_NAME` | **Hostname** |
| `REPLACE_SV_PASSWORD` | **Join password** |
| `REPLACE_RCON_PASSWORD` | **RCON password** |
| `REPLACE_DISCORD_WEBHOOK` | **Discord webhook URL (optional)** under **CSTV** |

These are set when the server starts, so setting them in the template has no effect:

| Setting | Where to change it |
|---------|--------------------|
| Player slots | **Slots** |
| Game mode and map group | **Game mode** |
| Start map, Workshop map and collection | **Map**. See [Workshop Maps](/games/cs2/workshop-maps) |
| Bots on or off | **Bots** |
| VAC | **VAC** |
| CSTV | **Enable CSTV** |

## Step 1: Connect With FTP

FTP is set up on request. See [FTP Access](/servers/pro/ftp) for how to ask for it and how to log in. On CS2 you get two folders, `addons` and `cfg`.

## Step 2: Download a Backup

Open `cfg/pro`, download `fshost_template_1234.cfg` and keep the copy on your computer. A server reinstall resets the template, so keep your copy after every change. See [Before You Modify Files](/servers/pro/before-you-modify).

## Step 3: Edit the Template

Open the template in a text editor, such as Notepad++ or VS Code, and add or change the values you want. For example:

```bash
mp_maxrounds 24
mp_overtime_enable 1
mp_freezetime 15
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

Restart the server from the Pro Panel. Then check a value in the game console:

```bash
fake_rcon mp_maxrounds
```

## Game Mode Configs

The game mode and match configs, such as the ones loaded by `!esl5on5`, `!scrim` and `!prac`, are separate files in the `cfg` folder. They can set the same values as your template, so a value you set may change when one of them is loaded. See [RCON Commands](/games/cs2/rcon) for the chat commands that load them.

## Plugin Configs

CounterStrikeSharp plugin configs are in the `addons` folder, under `addons/counterstrikesharp/configs/plugins/<PluginName>/`.

## Troubleshooting

::: details My changes are gone
You edited `<random>_1234.cfg` instead of the template, and someone saved **Game settings** afterwards. Make the change again in `fshost_template_1234.cfg`.
:::

::: details My template change has no effect
- Click **Save changes** in **Game settings**, then restart. A restart on its own does not copy the template
- Check that the setting is not in the [panel-controlled list](#settings-the-panel-controls)
- A game mode config or a plugin such as MatchZy may set the same value later. Check the value in game with `fake_rcon <setting>`
:::

::: details The server name or password is wrong
A `REPLACE_` placeholder is missing from your template. Put the line back from your backup, then save **Game settings** and restart. If you have no backup, open a ticket on [Pro Support](https://fshost.me/pro/support).
:::
