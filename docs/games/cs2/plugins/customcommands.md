# Custom Commands Plugin

Create your own chat commands for your CS2 server using simple JSON files. No coding required.

::: tip Pro Feature
The Custom Commands plugin is available exclusively on Pro servers.
:::

## Overview

Custom Commands lets you define your own commands, for example `/discord`, `/ws` or `/knife`, in small JSON files. When a player types the command in chat, the plugin can reply to that player, print a message to everyone, or run server console commands. The plugin watches your JSON files and reloads itself automatically when you change them, so new commands go live within a minute of saving.

Typical uses:

- An info command like `/discord` that prints your community's Discord invite
- A `/restart` shortcut for admins that runs `mp_restartgame 1`
- A themed command that announces something in chat with colors and the player's name

## How It Works

1. You create a JSON file with one or more command definitions
2. You upload it to the plugin's config folder on the server
3. The plugin checks for new or changed files every 60 seconds and reloads itself
4. Players can now use the command with the `.`, `!` or `/` prefix in chat, for example `.discord`, `!discord` or `/discord`

Each command can do three things, in any combination:

| Action | What it does |
|--------|-------------|
| Reply message | Sends chat lines only to the player who typed the command |
| All message | Prints chat lines to every player on the server |
| Execute commands | Runs server console commands, optionally after a delay |

## File Location

Command files live in the plugin's config folder:

```bash
csgo/addons/counterstrikesharp/configs/plugins/CustomCommands/
```

Every `.json` file in this folder is loaded as a command file, except `CustomCommands.json`, which is the plugin's own configuration. You can keep everything in one file or split commands into several files, for example `info.json` and `admin.json`.

::: tip FTP Access
Editing files requires FTP access to your server. Request access by opening a ticket on the [Pro Support](https://fshost.me/pro/support) page.
:::

## Preinstalled Command Files

Pro servers come with a set of command files already installed. They power the game mode switching commands you may already know:

| File | Commands | What it does |
|------|----------|--------------|
| `gamemodes.json` | `!comp`, `!casual`, `!ar`, `!wingman` | Switch between game modes |
| `matchzy.json` | `!matchzy`, `!pracc` | Start MatchZy or Practice Mode |
| `matchzyoff.json` | `!matchoff` | Disable MatchZy again |
| `retake.json` | `!retake` | Start Retake Mode |
| `dm.json` | `!dmon` | Start MultiCFG Deathmatch |
| `skinson.json` | `!skinson` | Enable weapon skins |
| `cmds.json` | `!skinsoff`, `!maps`, `!gm`, `!prefireon` | Skins off, map and mode help texts, prefire mode |

These commands require the `@css/map` admin flag. The files are normal command files, so you can open them via FTP to see how they work, edit them, or use them as templates for your own.

## Creating a Command

### Step 1: Create a JSON file

Create a new file in the config folder, for example `mycommands.json`. The file must contain a list of command definitions:

```json
[
  {
    "Name": "discord",
    "Description": "Get our Discord invite",
    "Permission": "",
    "ReplyMessage": [
      "{Green}Join our Discord: {Default}discord.gg/yourserver"
    ]
  }
]
```

### Step 2: Upload the file

Upload the file to the config folder via FTP.

### Step 3: Wait for the reload

The plugin scans for new or changed files every 60 seconds and reloads itself automatically. Watch the server console for:

```bash
[Custom Commands] A new file 'mycommands' has been created, the plugin will be reloaded.
```

### Step 4: Test in-game

Type the command in chat:

```bash
.discord
!discord
/discord
```

All three prefixes work.

## Command Options

Each command definition supports these fields:

| Field | Required | Description |
|-------|----------|-------------|
| `Name` | Yes | The command name without prefix. Comma-separated names create aliases, for example `"discord,dc,ds"` |
| `Description` | Yes | Short text shown in the `/help` list |
| `Permission` | Yes | Admin flag required to use the command, for example `@css/root`. Use `""` to allow everyone |
| `Hidden` | No | Set to `true` to hide the command from `/help`. Default is `false` |
| `ReplyMessage` | No | List of chat lines sent only to the player who typed the command |
| `AllMessage` | No | List of chat lines printed to all players. Supports `{PLAYERNAME}` |
| `ExecuteCommands` | No | List of server console commands to run. Chain several commands in one entry with `;`, for example `"exec custom/casual.cfg;css_plugins unload MatchZy"` |
| `Timer` | No | Delay in seconds before `ExecuteCommands` runs. Default is `0` (instant) |
| `GSLTCheck` | No | Set to `true` to require a Game Server Login Token before the command works. Default is `false` |
| `BlockedCmdMessage` | No | Custom message shown when the command's file has been blocked by an admin |

## Examples

### Info command with aliases

One command reachable under three names. Only the first name appears in `/help`, the rest are listed as aliases:

```json
[
  {
    "Name": "discord,dc,ds",
    "Description": "Get our Discord invite",
    "Permission": "",
    "ReplyMessage": [
      "{Green}Join our Discord: {Default}discord.gg/yourserver"
    ]
  }
]
```

### Admin-only restart command

Requires the `@css/root` admin flag, announces the restart to everyone, then restarts after 3 seconds:

```json
[
  {
    "Name": "rr,restart",
    "Description": "Restart the game",
    "Permission": "@css/root",
    "Timer": 3,
    "AllMessage": [
      "{Red}{PLAYERNAME} {Default}restarted the game!"
    ],
    "ExecuteCommands": [
      "mp_restartgame 1"
    ]
  }
]
```

### Hidden command that runs server commands

Does not show up in `/help` and gives no chat output at all:

```json
[
  {
    "Name": "prac",
    "Hidden": true,
    "Description": "Practice mode",
    "Permission": "@css/root",
    "ExecuteCommands": [
      "sv_cheats 1",
      "mp_limitteams 0",
      "mp_autoteambalance 0",
      "sv_infinite_ammo 1",
      "mp_warmup_start"
    ]
  }
]
```

### Toggle between modes with file blocking

Command files can block and unblock each other, or even themselves. The preinstalled MatchZy commands use this pattern: `!matchzy` starts MatchZy and then blocks its own file, so typing `!matchzy` again shows the `BlockedCmdMessage` instead of starting it twice. `!matchoff` disables MatchZy and unblocks the file again.

From the preinstalled `matchzy.json`:

```json
[
  {
    "Name": "matchzy,matchzyon,matchon",
    "Description": "Start MatchZy!",
    "Permission": "@css/map",
    "BlockedCmdMessage": [
      "{DarkRed}This command is unavailable while MatchZy is already running."
    ],
    "ExecuteCommands": [
      "exec custom/matchzyload.cfg;css_custom_json_off matchzy"
    ]
  }
]
```

And the counterpart in `matchzyoff.json`:

```json
[
  {
    "Name": "matchoff,matchzyoff",
    "Description": "Disable MatchZy!",
    "Permission": "@css/map",
    "ExecuteCommands": [
      "exec custom/matchzyoff.cfg;css_custom_json_on matchzy"
    ]
  }
]
```

## Chat Colors

Messages support color tags. Write the color name in curly braces anywhere in the text:

```json
"ReplyMessage": [
  "{Green}Success! {Default}Your request was {Gold}completed{Default}."
]
```

Available colors:

```bash
{Default} {White} {DarkRed} {Green} {LightYellow} {LightBlue}
{Olive} {Lime} {Red} {LightPurple} {Purple} {Grey}
{Yellow} {Gold} {Silver} {Blue} {DarkBlue} {BlueGrey}
{Magenta} {LightRed} {Orange}
```

Color tags are not case sensitive, so `{GREEN}` and `{Green}` both work.

The `{PLAYERNAME}` placeholder in `AllMessage` lines is replaced with the name of the player who used the command.

## The Help Command

Players can list all available custom commands:

```bash
/help
```

The list shows every command's name, description and aliases. Commands with `"Hidden": true` are left out.

To disable the help command entirely, set `"Allow Help Command": false` in `CustomCommands.json`.

## Plugin Configuration

The plugin's own settings live in `CustomCommands.json` in the same folder:

```json
{
  "Blocked Files": [],
  "Blocked Listeners": [],
  "Allow Help Command": true
}
```

| Setting | Description |
|---------|-------------|
| `Blocked Files` | Command files that are currently disabled. Managed with the block commands below |
| `Blocked Listeners` | Game commands to block completely on the server, for example `kill` |
| `Allow Help Command` | Set to `false` to disable `/help` |

## Blocking a Command File

Admins can disable an entire command file without deleting it. These commands run from the server console only:

**Disable a file:**
```bash
css_custom_json_off mycommands
```

**Enable it again:**
```bash
css_custom_json_on mycommands
```

Use the file name without the `.json` extension. While a file is blocked, its commands reply with a "command is blocked" message, or with the command's own `BlockedCmdMessage` if one is set.

## Troubleshooting

::: details My new command does not work
Wait at least 60 seconds after uploading; the plugin only checks for changes once per minute. Then check the server console for a reload message. If nothing appears, verify the file is in the correct folder and does not have `CustomCommands` in its file name, since such files are skipped as plugin configuration.
:::

::: details The plugin says "No command data found in file"
The JSON structure is wrong. The file must contain a list (square brackets) of command objects, and every command needs at least `Name`, `Description` and `Permission`. Validate your file with a JSON checker such as [jsonlint.com](https://jsonlint.com).
:::

::: details Players get "missing permissions"
The command has a `Permission` value set, for example `@css/root`, and the player does not have that admin flag. Set `"Permission": ""` to allow everyone, or give the player the flag. See [Admin Setup](/games/cs2/become-admin).
:::

::: details Colors show as plain text
Check the spelling of the color tag against the list above. Tags are written in curly braces with no spaces, for example `{Green}`, not `{ green }`.
:::

::: details Command replies that a token is not set
The command has `"GSLTCheck": true` and the server is running without a Game Server Login Token. Either set a GSLT on the server or remove the `GSLTCheck` field from the command.
:::

## Command Summary

**Player Commands:**
```bash
/help                          # List all custom commands
.<command> / !<command> / /<command>   # Use a custom command
```

**Server Console Commands:**
```bash
css_custom_json_off <file>     # Disable a command file
css_custom_json_on <file>      # Enable a command file
```

## Additional Resources

- [Admin Setup](/games/cs2/become-admin) - Gain admin access and permission flags
- [Pro Server Commands](/games/cs2/commands) - All available commands
- [Plugin List](/games/cs2/plugins) - Other available plugins
