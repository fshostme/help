---
description: "How to log in to RCON on your CS2 server with fake_rcon and use it to run commands and change server settings."
---

# RCON Commands

How to log in to RCON (Remote Console) on your CS2 server and use it to send commands.

## What RCON Is

RCON lets you send commands to your server from your own game client, so you can change the map, kick a player or change a setting while you play.

::: danger Valve RCON Does Not Work on CS2
Valve's built-in `rcon` and `rcon_password` commands do not work on CS2.

FSHOST servers run a plugin called **FakeRcon** that does the same job. Every command on this page uses `fake_rcon` instead of `rcon`. This works on both Free and Pro servers.
:::

## Before You Start

You need three things in place before any command on this page works.

### Step 1: Turn On the Developer Console

In CS2, open **Settings** → **Game** → set **Enable Developer Console (~)** to **Yes**.

The console is off in a fresh CS2 install, which is why commands appear to do nothing for most first-time server owners.

### Step 2: Open the Console

Press the **`** key (backtick or tilde, above Tab on most keyboards) while in game. Press it again to close.

::: tip Console Key Does Nothing
On some keyboard layouts the default key does not register. Rebind it in **Settings** → **Keyboard/Mouse** → **UI Keys** → **Toggle Console**.
:::

### Step 3: Join Your Own Server

RCON commands are sent to the server you are connected to, so you must be on your server, not in the main menu.

Find the IP and port on your panel, then connect from the console:

```bash
connect 123.45.67.89:27015
```

::: warning Commands Do Nothing in the Main Menu
Typing `fake_rcon` in the main menu produces no output and no error. If nothing happens, check that you are connected to your server.
:::

## Where to Type Commands

CS2 servers accept two kinds of commands, and mixing them up is the most common reason a command appears to be ignored.

| Type | Looks like | Where to type it | Used for |
|------|-----------|------------------|----------|
| Console command | `fake_rcon status` | Developer console (**`**) | Server settings and cvars |
| Chat command | `!map de_dust2` | In-game chat (**Y** or **U**) | Plugin features, such as map and game mode commands |

A chat command can also be sent from the console by putting `say` in front of it:

```bash
say !map de_dust2
```

This is the same as typing `!map de_dust2` in chat. The chat commands are listed in [Free Server Commands](/games/cs2/commands-free) and [Pro Server Commands](/games/cs2/commands).

## Log In

### Find Your RCON Password

| Server | Where the password is |
|--------|-----------------------|
| Free | You pick it under **RCON Password** when you create the server. The [Free Server Panel](https://fshost.me/free-panel) shows it next to the `connect` command |
| Pro | The **RCON password** field in **Game settings** on the **Settings** tab of the [Pro Panel](https://fshost.me/pro/servers). The **Connection info** box on the server page also shows it |

### Step 1: Send the Password

In the console, type `fake_rcon_password` followed by your password:

```bash
fake_rcon_password your_rcon_password
```

Replace `your_rcon_password` with the password from the panel. The console answers:

```bash
RCON admin authentication successful.
Privileges granted.
```

The chat also shows **[RCON] Authentication successful**. A wrong password gives `Bad rcon_password.` instead.

The login is saved for your Steam account for 2 hours, so you stay logged in if you reconnect within that time. After 2 hours, log in again.

### Step 2: Test It

```bash
fake_rcon say Test message
```

If the message appears in the in-game chat, RCON works and every command below is available to you.

::: danger Never Type Your Password in Chat
`fake_rcon_password` belongs in the console only. Typed in chat, every player on the server can read it. If that happens, change your password: on Pro, change the **RCON password** in **Game settings** and save. On Free, stop the server and create a new one with a new password.
:::

### Log Other People Out

```bash
fake_rcon fake_rcon_cache_clean
```

This removes every saved login except your own, so everyone else has to log in again. Use it after you change the password.

## Server Information

**Players and server status:**
```bash
fake_rcon status
```

**Message to all players:**
```bash
fake_rcon say Match starting soon
```

**Kick a player:**
```bash
fake_rcon kick PlayerName
```

## Map Control

```bash
fake_rcon changelevel de_mirage
```

Map names are not case sensitive here. `de_MIRAGE` is changed to `de_mirage` for you.

On Pro servers, a Workshop map loads by its ID:

```bash
fake_rcon host_workshop_map 3070238628
```

See [Workshop Maps](/games/cs2/workshop-maps).

## Game Settings

Any cvar can be set with `fake_rcon`. Some common ones:

```bash
fake_rcon mp_restartgame 1        # Restart the game after 1 second
fake_rcon mp_maxrounds 24         # Rounds in a match
fake_rcon mp_startmoney 800       # Money at the start of each half
fake_rcon mp_maxmoney 16000       # Most money a player can have
fake_rcon mp_freezetime 15        # Freeze time at round start, in seconds
fake_rcon mp_buytime 20           # Buy time, in seconds
fake_rcon mp_c4timer 40           # Bomb timer, in seconds
fake_rcon sv_autobunnyhopping 1   # Auto bunny hopping on
```

To see the current value of a cvar, send it without a value:

```bash
fake_rcon mp_maxrounds
```

::: tip Settings Can Be Changed Back
A game mode change or a config such as MatchZy's can set the same cvars again. On Pro servers, put settings you always want in your config template. See [Config Files](/games/cs2/config-files).
:::

## Server Name and Password

**Change the server name:**
```bash
fake_rcon hostname "My Server - free @ fshost.me"
```

Free servers must keep `- free @ fshost.me` at the end of the name. On Pro servers, set the name under **Hostname** in **Game settings**, so it stays after a restart.

**Set the join password:**
```bash
fake_rcon sv_password mypassword
```

On Pro servers, change or clear **Join password** in **Game settings** instead, so the change stays after a restart.

## Cheats

Only use these on a practice server:

```bash
fake_rcon sv_cheats 1
fake_rcon sv_cheats 0
```

## Pro Panel Console

Pro servers also have a **Console** tab in the Pro Panel, which sends commands to the server without joining it and without `fake_rcon`. It only accepts letters, numbers, spaces, `_`, `-` and `/`, so commands with quotes or dots still need RCON. See [Console Access](/servers/pro/console).

## Troubleshooting

::: details RCON command not working
Check in this order:
1. You are connected to your server, not sitting in the main menu
2. You ran `fake_rcon_password` and got `RCON admin authentication successful.`
3. The password matches the one on the panel, with no trailing space. It is case sensitive
4. You used `fake_rcon`, not `rcon`
:::

::: details "You have not been authenticated."
You are not logged in, or your login is more than 2 hours old. The chat shows **[RCON] You are not logged in**. Run `fake_rcon_password` again.
:::

::: details "No command specified."
You sent `fake_rcon` without a command after it. Add the command, for example `fake_rcon status`.
:::

::: details Nothing happens when I press the console key
The console is off by default. See [Before You Start](#before-you-start) to turn it on in **Settings** → **Game**.
:::

::: details A command works for other people but not for me
Check whether it is a chat command or a console command. See [Where to Type Commands](#where-to-type-commands). Chat commands starting with `!` or `/` do not work when typed straight into the console.
:::
