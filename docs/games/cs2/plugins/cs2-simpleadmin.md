# CS2-SimpleAdmin Plugin

Essential admin commands and server management tools for CS2 Pro servers.

::: info Command Prefixes
Most commands work with either `/` or `!` prefix. Examples: `/css_ban` or `!css_ban`
:::

## Player Management

### Banning Players

**Ban connected player:**
```bash
/css_ban <player> [time] [reason]
```

- **player** - Player name (use quotes for spaces) or Steam ID
- **time** - Duration in minutes (0 = permanent)
- **reason** - Ban reason (optional, use quotes if it contains spaces)

**Examples:**
```bash
/css_ban "PlayerName" 30 "Cheating"
/css_ban STEAM_1:0:12345 0 "Permanent ban"
/css_ban "Toxic Player" 1440 "24 hour timeout"
```

**Ban offline player:**
```bash
/css_addban <SteamID64> [time] [reason]
```

**Examples:**
```bash
/css_addban 76561198975357634 60 "Griefing"
/css_addban 76561198975357634 0 "Repeated violations"
```

::: tip Time Calculations
Common ban durations:
- 60 minutes = 1 hour
- 1440 minutes = 24 hours
- 10080 minutes = 7 days
- 43200 minutes = 30 days
- 0 = Permanent
:::

**Remove ban:**
```bash
/css_unban <steamid|ip>
```

**Example:**
```bash
/css_unban STEAM_1:0:12345
/css_unban 192.168.1.100
```

### IP Banning

**Ban IP address:**
```bash
/css_banip <ip> [time] [reason]
```

**Example:**
```bash
/css_banip 192.168.1.1 60 "VPN detected"
/css_banip 10.0.0.50 0 "Permanent IP ban"
```

### Kicking Players

**Kick player from server:**
```bash
/css_kick <player> [reason]
```

**Examples:**
```bash
/css_kick "PlayerName"
/css_kick STEAM_1:0:12345 "AFK"
/css_kick "Disruptive Player" "Warning for team damage"
```

## Communication Management

### Muting and Gagging

**Mute text chat:**
```bash
/css_mute <player>
```

**Gag voice chat:**
```bash
/css_gag <player>
```

**Silence both text and voice:**
```bash
/css_silence <player>
```

**Examples:**
```bash
/css_mute "SpammingPlayer"
/css_gag "LoudMic"
/css_silence "DisruptivePlayer"
```

::: tip Unmuting
Use the same command again to toggle the mute/gag/silence status, or use corresponding unmute commands if available.
:::

## Player Actions

### Slap and Slay

**Slap player:**
```bash
/css_slap <player> [damage]
```

Pushes the player and optionally deals damage.

**Examples:**
```bash
/css_slap "PlayerName" 5
/css_slap "PlayerName" 0    # No damage, just push
```

**Kill player:**
```bash
/css_slay <player>
```

Instantly kills the specified player.

**Example:**
```bash
/css_slay "PlayerName"
```

## Server Management

### RCON Execution

**Execute RCON command:**
```bash
/css_rcon <command> [arguments]
```

**Examples:**
```bash
/css_rcon sv_cheats 1
/css_rcon mp_restartgame 5
/css_rcon changelevel de_dust2
```

### Console Variables

**View or set CVAR:**
```bash
/css_cvar <cvar> [value]
```

**Examples:**
```bash
/css_cvar sv_gravity          # View current value
/css_cvar sv_gravity 600      # Set to 600
/css_cvar mp_roundtime 2      # Set round time
```

## Communication Commands

### Broadcasting Messages

**Public message to all:**
```bash
/css_say <message>
```

**Example:**
```bash
/css_say "Server restarting in 5 minutes"
```

**Center screen message:**
```bash
/css_csay <message>
```

Displays message in the center of players' screens.

**Example:**
```bash
/css_csay "Match starting in 1 minute!"
```

**Hint message:**
```bash
/css_hsay <message>
```

Displays as a hint notification.

**Example:**
```bash
/css_hsay "Type !help for available commands"
```

**Private message:**
```bash
/css_psay <player> <message>
```

Send a message visible only to the specified player.

**Example:**
```bash
/css_psay "PlayerName" "Please follow server rules"
```

## User Commands

Available to all players:

**View available commands:**
```bash
/help
/commands
```

**Check time remaining:**
```bash
/timeleft
```

**View next map:**
```bash
/nextmap
```

## Common Admin Tasks

### Handling Cheaters

```bash
/css_ban "SuspectedCheater" 0 "Cheating detected"
```

### Managing Toxic Players

```bash
/css_silence "ToxicPlayer"
/css_kick "ToxicPlayer" "Toxic behavior - warning"
```

For repeat offenders:
```bash
/css_ban "ToxicPlayer" 1440 "Repeated toxic behavior"
```

### Server Maintenance

```bash
/css_say "Server maintenance in 5 minutes"
/css_csay "Please finish your rounds"
/css_rcon mp_restartgame 1
```

### Quick Moderation

```bash
/css_gag "Player"              # Stop voice spam
/css_mute "Player"             # Stop text spam
/css_slap "Player" 5           # Warning slap
/css_kick "Player" "Warning"   # Remove from server
```

## Permission Levels

Admin commands require appropriate permissions:

- Basic moderation: kick, mute, gag
- Advanced moderation: ban, slay, slap
- Server control: rcon, cvar
- Full access: All commands

See the [Admin Setup Guide](/games/cs2/become-admin) for configuring permissions.

## Troubleshooting

::: details Command not working
Verify you have admin permissions for the command. Use `/help` to see available commands for your access level.
:::

::: details Ban not persisting
Bans are stored in the database. Ensure your server has proper database connection configured.
:::

::: details Player identifier issues
When using player names with spaces, always use quotes: `/css_kick "Player Name"`

For reliability, use Steam IDs instead of names when possible.
:::

## Additional Resources

For more advanced admin commands and features:
- [Official CS2-SimpleAdmin Documentation](https://cs2-simpleadmin.daffyy.dev/)
- [Admin Hierarchy Setup](/games/cs2/become-admin)
- [RCON Commands](/games/cs2/rcon)

## Ban Appeal Error

If you see this error:
```
your client is not allowed to join this server.
```

You've been banned from the server. If you believe this is a mistake:
1. Contact server admins on [Discord](https://fshost.me/discord)
2. Provide your SteamID64
3. Explain the situation

::: warning Self-Bans
If you accidentally banned yourself, contact support with your SteamID64 for assistance.
:::
