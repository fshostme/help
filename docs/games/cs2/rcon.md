# RCON Commands

Guide to accessing and using RCON (Remote Console) on your CS2 server.

## What RCON Is

RCON stands for Remote Console. It lets you send commands to your server from your own game client, so you can change the map, kick a player or adjust settings without touching the panel.

::: danger Valve RCON Is Currently Broken
Valve's built-in RCON system for CS2 is not working, with no fix date announced. Any guide telling you to use the `rcon` or `rcon_password` command will fail on CS2.

FSHOST installs a plugin called **FakeRcon** that does the same job. Every command on this page uses `fake_rcon` instead of `rcon`. This is the supported method on both Free and Pro servers.
:::

## Before You Start

You need three things in place before any command on this page works.

### Step 1: Turn On the Developer Console

In CS2, open **Settings** → **Game** → set **Enable Developer Console (~)** to **Yes**.

The console is off by default in a fresh CS2 install, which is why commands appear to do nothing for most first-time server owners.

### Step 2: Open the Console

Press the **`** key (backtick or tilde, above Tab on most keyboards) while in game. Press it again to close.

::: tip Console Key Does Nothing
On some keyboard layouts the default key does not register. Rebind it in **Settings** → **Keyboard/Mouse** → **UI Keys** → **Toggle Console**.
:::

### Step 3: Join Your Own Server

RCON commands are sent to the server you are currently connected to, so you must be in your server, not in the main menu.

Find the IP and port on your panel, then connect from the console:

```bash
connect 123.45.67.89:27015
```

::: warning Commands Do Nothing in the Main Menu
Typing `fake_rcon` from the main menu produces no output and no error. If nothing happens, check that you are actually connected to your server.
:::

## Where to Type Commands

CS2 servers accept two different kinds of commands, and mixing them up is the most common reason a command appears to be ignored.

| Type | Looks like | Where to type it | Used for |
|------|-----------|------------------|----------|
| Console command | `fake_rcon status` | Developer console (**`**) | Server settings, cvars, admin control |
| Chat command | `!map dust2` | In-game chat (**Y** or **U**) | Game modes, map presets, plugin features |

A chat command can also be sent from the console by putting `say` in front of it:

```bash
say !map dust2
```

This is the same as typing `!map dust2` in chat. Both forms appear on this page.

## Getting RCON Access

### For Free Servers

Your RCON password is shown on the [Free Server Panel](https://fshost.me/free-panel). It is the same password used for server administration.

**Step 1 - Authenticate:**

In the console, type `fake_rcon_password` followed by your password:

```bash
fake_rcon_password your_rcon_password
```

Replace `your_rcon_password` with the password from the panel. You only need to do this once per game session.

**Step 2 - Verify Access:**
```bash
fake_rcon say Test message
```

**Expected Output:**
```bash
[Client] You can now use the fake_rcon command
Console: Test message
```

If you see the message appear in the in-game chat, RCON is working and every command below is available to you.

::: danger Never Type Your Password in Chat
`fake_rcon_password` belongs in the console only. Typed in chat, it is sent to every player on the server. If that happens, change your password in the panel straight away.
:::

### For Pro Servers

Pro servers use a full admin system with per-user permissions instead of a single shared password. See the [Server Admin Guide](/games/cs2/become-admin) for setup instructions.

## Essential Commands

### Server Information

**View connected players and server status:**
```bash
fake_rcon status
```

**List available maps:**
```bash
fake_rcon maps *
```

### Player Management

| Command | Description | Example |
|---------|-------------|---------|
| `fake_rcon kick <name/id>` | Remove player from server | `fake_rcon kick "Player1"` |
| `fake_rcon say <message>` | Broadcast to all players | `fake_rcon say "Match starting soon"` |

### Map Control

**Change map (preserves server state):**
```bash
fake_rcon changelevel de_dust2
```

**Load map (full reset):**
```bash
fake_rcon map de_mirage
```

**Quick map change via chat:**
```bash
say !map dust2
say_team !map nuke
```

Available maps: `ancient`, `anubis`, `dust2`, `inferno`, `mirage`, `nuke`, `overpass`, `vertigo`, `train`

## Game Configuration

### Match Settings

**Restart current game:**
```bash
fake_rcon mp_restartgame 5
```
*Restarts after 5 seconds (Free servers only)*

**Starting money:**
```bash
fake_rcon mp_startmoney 800
fake_rcon mp_startmoney 16000  # Max money start
```
*Default: 800*

**Maximum rounds:**
```bash
fake_rcon mp_maxrounds 30
```

### Round Timing

```bash
fake_rcon mp_roundtime 1.92        # Round duration (1:55 for competitive)
fake_rcon mp_freezetime 15         # Freeze time at start
fake_rcon mp_buytime 20            # Buy period in seconds
fake_rcon mp_c4timer 40            # Bomb timer
```

::: tip Competitive Standard
For standard competitive matches, use `mp_roundtime 1.92` which equals 1 minute 55 seconds.
:::

### Economy Settings

```bash
fake_rcon mp_startmoney 800
fake_rcon mp_maxmoney 16000
fake_rcon cash_player_killed_enemy_default 300
```

## Server Settings

### Server Identity

**Change server name:**
```bash
fake_rcon hostname "Your Custom Name - free @ fshost.me"
```

::: warning Branding Requirement
Free servers must retain the FSHOST branding in the hostname.
:::

### Access Control

**Set server password:**
```bash
fake_rcon sv_password "mypassword"
```

**Remove password:**
```bash
fake_rcon sv_password ""
```

## Movement & Physics

**Auto bunny hopping:**
```bash
fake_rcon sv_autobunnyhopping 1  # Enable
fake_rcon sv_autobunnyhopping 0  # Disable (default)
```

## Development Commands

::: warning Cheat Commands
These commands should only be used in practice environments.
:::

**Enable cheat commands:**
```bash
fake_rcon sv_cheats 1
```

**Disable cheat commands:**
```bash
fake_rcon sv_cheats 0
```

## Free Server Presets

Quick configuration presets available via chat commands.

### Game Modes

| Command | Mode | Notes |
|---------|------|-------|
| `!dm` | Deathmatch | Classic FFA deathmatch |
| `!wingman` | Wingman | 2v2 competitive |
| ~~`!retake`~~ | ~~Retakes~~ | Currently disabled due to Valve bug |

### Match Configurations

| Command | Config | Details |
|---------|--------|---------|
| `!esl5on5` | ESL 5v5 | Standard competitive (no ready system) |
| `!scrim` | Scrim | All rounds enabled (no pause/unpause) |
| `!prac` | Practice | Basic practice (no commands) |

::: tip Pro Features
For full practice commands like `.throw`, `.bot`, etc., a Pro server is required.
:::

### Quick Map Loading

```bash
say !map ancient
say !map dust2
say !map mirage
```

## Troubleshooting

::: details RCON command not working
Check in this order:
1. You are connected to your server, not sitting in the main menu
2. You ran `fake_rcon_password` this session, and it returned `[Client] You can now use the fake_rcon command`
3. The password matches the one on the panel, with no trailing space
4. You used `fake_rcon`, not `rcon`, which is the broken Valve command
:::

::: details Nothing happens when I press the console key
The console is disabled by default. See [Before You Start](#before-you-start) to enable it in **Settings** → **Game**.
:::

::: details Messages not appearing in-game
Commands with spaces require quotes:
```bash
fake_rcon say "Your message here"
```
:::

::: details A command works for other people but not for me
Check whether it is a chat command or a console command. See [Where to Type Commands](#where-to-type-commands). Chat commands starting with `!` or `/` do not work when typed directly into the console.
:::

## Usage Examples

```bash
# Start a competitive match
fake_rcon mp_maxrounds 30
fake_rcon mp_startmoney 800
fake_rcon mp_roundtime 1.92

# Change map and configure deathmatch
say !map dust2
say !dm

# Practice configuration
say !prac
fake_rcon sv_cheats 1

# Announce to players
fake_rcon say "Tournament starting in 10 minutes"
```
