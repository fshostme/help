# RCON Commands

Guide to accessing and using RCON (Remote Console) on your CS2 server.

::: danger Valve RCON Currently Non-Functional
The official RCON system for CS2 servers is currently broken with no estimated fix date. Use `fake_rcon` as the recommended workaround for all administrative tasks.
:::

## Getting RCON Access

### For Free Servers

Access RCON using your server's password displayed on the [Free Server Panel](/servers/free/creating-server).

**Step 1 - Authenticate:**
```
fake_rcon_password your_rcon_password
```

**Step 2 - Verify Access:**
```
fake_rcon say Test message
```

**Expected Output:**
```
[Client] You can now use the fake_rcon command
Console: Test message
```

### For Pro Servers

Pro servers use a more advanced admin system. See the [Server Admin Guide](/games/cs2/become-admin) for complete setup instructions.

## Essential Commands

### Server Information

**View connected players and server status:**
```
fake_rcon status
```

**List available maps:**
```
fake_rcon maps *
```

### Player Management

| Command | Description | Example |
|---------|-------------|---------|
| `fake_rcon kick <name/id>` | Remove player from server | `fake_rcon kick "Player1"` |
| `fake_rcon say <message>` | Broadcast to all players | `fake_rcon say "Match starting soon"` |

### Map Control

**Change map (preserves server state):**
```
fake_rcon changelevel de_dust2
```

**Load map (full reset):**
```
fake_rcon map de_mirage
```

**Quick map change via chat:**
```
say !map dust2
say_team !map nuke
```

Available maps: `ancient`, `anubis`, `dust2`, `inferno`, `mirage`, `nuke`, `overpass`, `vertigo`, `train`

## Game Configuration

### Match Settings

**Restart current game:**
```
fake_rcon mp_restartgame 5
```
*Restarts after 5 seconds (Free servers only)*

**Starting money:**
```
fake_rcon mp_startmoney 800
fake_rcon mp_startmoney 16000  # Max money start
```
*Default: 800*

**Maximum rounds:**
```
fake_rcon mp_maxrounds 30
```

### Round Timing

```
fake_rcon mp_roundtime 1.92        # Round duration (1:55 for competitive)
fake_rcon mp_freezetime 15         # Freeze time at start
fake_rcon mp_buytime 20            # Buy period in seconds
fake_rcon mp_c4timer 40            # Bomb timer
```

::: tip Competitive Standard
For standard competitive matches, use `mp_roundtime 1.92` which equals 1 minute 55 seconds.
:::

### Economy Settings

```
fake_rcon mp_startmoney 800
fake_rcon mp_maxmoney 16000
fake_rcon cash_player_killed_enemy_default 300
```

## Server Settings

### Server Identity

**Change server name:**
```
fake_rcon hostname "Your Custom Name - free @ fshost.me"
```

::: warning Branding Requirement
Free servers must retain the FSHOST branding in the hostname.
:::

### Access Control

**Set server password:**
```
fake_rcon sv_password "mypassword"
```

**Remove password:**
```
fake_rcon sv_password ""
```

## Movement & Physics

**Auto bunny hopping:**
```
fake_rcon sv_autobunnyhopping 1  # Enable
fake_rcon sv_autobunnyhopping 0  # Disable (default)
```

## Development Commands

::: warning Cheat Commands
These commands should only be used in practice environments.
:::

**Enable cheat commands:**
```
fake_rcon sv_cheats 1
```

**Disable cheat commands:**
```
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

```
say !map ancient
say !map dust2
say !map mirage
```

## Troubleshooting

::: details RCON command not working
Verify you've entered `fake_rcon_password` correctly. Check for typos in your password.
:::

::: details Messages not appearing in-game
Commands with spaces require quotes:
```
fake_rcon say "Your message here"
```
:::

::: details Console not showing output
Enable developer console in CS2 settings. Press `~` (tilde) to open.
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
