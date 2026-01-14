# Call of Duty 2 Documentation

Comprehensive guides for managing and configuring your Call of Duty 2 game server on FSHOST.

## Quick Start Guides

Essential documentation to get your server running.

### Server Setup
- [RCON Commands](/games/cod2/rcon) - Remote console command reference
- [Screenshots](https://fshost.me/screenshots) - View server screenshots

### Server Management
- **RCON Access** - Full remote control via in-game console
- **Game Mode Configuration** - Multiple game modes available
- **Map Management** - Stock and custom map rotation
- **PunkBuster Support** - Anti-cheat system

## Server Types

### Free Servers
Perfect for casual play and testing:
- Quick deployment
- All game modes available
- Custom map support
- PunkBuster anti-cheat
- RCON access

[Create Free Server →](https://fshost.me/free/cod2)

### Pro Servers
Advanced features for competitive play:
- Priority hardware
- Advanced configurations
- Custom settings
- Priority support
- Extended map library
- No advertisements

[View Pro Plans →](https://fshost.me/pro)

## Available Game Modes

### Multiplayer Modes

| Mode | Command | Description |
|------|---------|-------------|
| **Deathmatch** | `g_gametype dm` | Free-for-all combat |
| **Team Deathmatch** | `g_gametype tdm` | Team-based elimination |
| **Search and Destroy** | `g_gametype sd` | Bomb plant/defuse mode |
| **Capture the Flag** | `g_gametype ctf` | Classic flag capture mode |
| **Headquarters** | `g_gametype hq` | Control point capture |
| **Strat / Training** | `g_gametype strat` | Practice and strategy mode |

## Common Tasks

### Server Configuration

**Change hostname:**
```bash
/rcon sv_hostname "^6Your Server Name ^7- free @ fshost.me"
```

**Set password:**
```bash
/rcon g_password "password123"
```

**Remove password:**
```bash
/rcon g_password ""
```

**Toggle friendly fire:**
```bash
/rcon scr_friendlyfire 1    # Enable
/rcon scr_friendlyfire 0    # Disable
```

### Game Mode Setup

**Change to Search and Destroy:**
```bash
/rcon g_gametype sd
/rcon map_restart
```

**Change to Team Deathmatch:**
```bash
/rcon g_gametype tdm
/rcon map_restart
```

**Enable Strategy Mode:**
```bash
/rcon g_gametype strat
/rcon map_restart
```

::: tip Map Restart Required
After changing game modes, you must restart the map for changes to take effect.
:::

### Map Management

**Change map:**
```bash
/rcon map mp_toujane
```

**Quick restart:**
```bash
/rcon fast_restart
```

**Full restart:**
```bash
/rcon map_restart
```

## RCON Setup

### Logging In

**Open console in-game and login:**
```bash
/rcon login your_rcon_password
```

Find your RCON password on your [server panel](https://fshost.me/free-panel).

::: info CoD2 Login
Note that CoD2 uses `/rcon login` (not `/rconpassword` like CoD1).
:::

### Basic Commands

**Check server status:**
```bash
/rcon status
```

**Kick player:**
```bash
/rcon clientkick slot_number
```

**Kick all players:**
```bash
/rcon kickall
```

## Player Management

### Status and Information

**View connected players:**
```bash
/rcon status
```

Shows:
- Slot number
- Player name
- GUID
- IP address
- Connection info

**PunkBuster player list:**
```bash
/rcon pb_sv_plist
```

Get PunkBuster player list (if PB is enabled).

### Moderation

**Kick player:**
```bash
/rcon clientkick 3
```

Kicks player in slot 3.

**Take screenshot:**
```bash
/rcon pb_sv_getss slot_number
```

Captures player screenshot via PunkBuster.

## Map Rotation

### Stock Maps

Call of Duty 2 includes authentic WWII maps:
- **Western Front** - European theater maps
- **Eastern Front** - Russian campaign maps
- **North Africa** - Desert warfare maps
- **Urban Combat** - City-based battles

### Popular Maps

**Competitive favorites:**
- mp_toujane
- mp_burgundy
- mp_carentan
- mp_dawnville
- mp_matmata

### Custom Maps

FSHOST supports custom maps. Contact support to request additional maps for your server.

## Configuration Examples

### Competitive Setup

**Search and Destroy:**
```bash
/rcon g_gametype sd
/rcon scr_friendlyfire 1
/rcon sv_hostname "^1Competitive S&D ^7- free @ fshost.me"
/rcon map_restart
```

### Public Server

**Team Deathmatch:**
```bash
/rcon g_gametype tdm
/rcon scr_friendlyfire 0
/rcon g_password ""
/rcon sv_hostname "^6Public TDM Server ^7- free @ fshost.me"
/rcon map_restart
```

### Practice Server

**Strategy Mode:**
```bash
/rcon g_gametype strat
/rcon sv_hostname "^3Practice Server ^7- free @ fshost.me"
/rcon map_restart
```

## PunkBuster Anti-Cheat

### Features

**Enabled by default on FSHOST servers:**
- Real-time cheat detection
- Screenshot capability
- Player tracking
- Ban management
- Automated updates

### PunkBuster Commands

**View PB status:**
```bash
/rcon pb_sv_plist
```

**Take screenshot:**
```bash
/rcon pb_sv_getss player_slot
```

::: info PunkBuster
PunkBuster helps maintain fair play by detecting and preventing cheating. Screenshots can be used to verify suspicious behavior.
:::

## Getting Support

### Resources
- **Documentation:** Browse these guides for answers
- **Discord:** [Join FSHOST Community](https://fshost.me/discord)
- **Screenshots:** [View Server Screenshots](https://fshost.me/screenshots)
- **Support Channels:**
  - Free users: `#free-support`
  - Pro users: `#pro-support`

### Common Questions

::: details How do I change the game mode?
Use the `g_gametype` command followed by the mode code:
```bash
/rcon g_gametype sd
/rcon map_restart
```
See [Available Game Modes](#available-game-modes) for all codes.
:::

::: details How do I enable friendly fire?
Use the friendly fire cvar:
```bash
/rcon scr_friendlyfire 1
```
Set to 0 to disable friendly fire.
:::

::: details Why must I keep the advert in hostname?
Free servers require the "free @ fshost.me" advert as part of the hostname. This is a requirement for using our free hosting service.
:::

::: details How do I add custom maps?
Contact FSHOST support via [Discord](https://fshost.me/discord) with your custom map requests and download links.
:::

::: details What is Strategy mode?
Strategy mode (strat) is designed for practice and training. It typically has relaxed settings to help teams practice tactics and strategies.
:::

## Feature Comparison

| Feature | Free | Pro |
|---------|------|-----|
| All Game Modes | ✓ | ✓ |
| RCON Access | ✓ | ✓ |
| Friendly Fire Control | ✓ | ✓ |
| PunkBuster | ✓ | ✓ |
| Custom Maps | Limited | Extended |
| Map Rotation | ✓ | ✓ |
| Advanced Config | ✕ | ✓ |
| Priority Support | ✕ | ✓ |
| No Advertisements | ✕ | ✓ |

## Server Administration Tips

### Best Practices

::: tip Server Management
- **Regular monitoring** - Check player activity
- **Fair moderation** - Use kick/ban responsibly
- **Map variety** - Rotate different maps and modes
- **Friendly fire** - Configure based on server style
- **Clear rules** - Establish server guidelines
:::

### Security

::: warning Protect Your Server
- Never share RCON password publicly
- Don't type RCON password in game chat
- Change password if compromised
- Use PunkBuster for anti-cheat
- Monitor player behavior
:::

## Advanced Topics

### Color Codes

Use color codes in hostname:
- `^1` - Red
- `^2` - Green
- `^3` - Yellow
- `^4` - Blue
- `^5` - Cyan
- `^6` - Pink/Magenta
- `^7` - White (default)

**Example:**
```bash
/rcon sv_hostname "^6Awesome ^1CoD2 ^2Server ^7- free @ fshost.me"
```

### Server Variables

Common server settings:
- `g_gametype` - Game mode
- `g_password` - Server password
- `sv_hostname` - Server name
- `scr_friendlyfire` - Friendly fire setting
- `sv_maxclients` - Max players

Full reference: [RCON Commands](/games/cod2/rcon)

### Friendly Fire Modes

**Disabled (0):**
- Most public servers
- Forgiving for new players
- Less teamwork required

**Enabled (1):**
- Competitive servers
- Realistic gameplay
- Requires team coordination
- Higher skill ceiling

## WWII Authenticity

Call of Duty 2 features:
- **Historical accuracy** - Authentic WWII settings
- **Faction-based gameplay** - Allied vs Axis forces
- **Period weapons** - WWII-era arsenal
- **Classic maps** - Based on real battles

## Next Steps

1. **Configuration:** Review [RCON Commands](/games/cod2/rcon)
2. **Game Modes:** Experiment with different modes
3. **Friendly Fire:** Choose appropriate setting
4. **Screenshots:** Check [Server Screenshots](https://fshost.me/screenshots)
5. **Get Help:** Join [Discord](https://fshost.me/discord)

---

**Need Help?** Visit our [Discord](https://fshost.me/discord) or browse the documentation sections above.
