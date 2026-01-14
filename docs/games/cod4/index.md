# Call of Duty 4 Documentation

Comprehensive guides for managing and configuring your Call of Duty 4: Modern Warfare game server on FSHOST.

## Quick Start Guides

Essential documentation to get your server running.

### Server Setup
- [RCON Commands](/games/cod4/rcon) - Remote console command reference
- [Screenshots](https://fshost.me/screenshots) - View server screenshots

### Server Management
- **RCON Access** - Full remote control via in-game console
- **Mod Support** - Multiple mods available
- **Game Mode Configuration** - Six game modes
- **Map Management** - Stock and custom maps
- **PunkBuster Support** - Anti-cheat system

## Server Types

### Free Servers
Perfect for casual play and testing:
- Quick deployment
- All game modes available
- Multiple mods to choose from
- Custom map support
- PunkBuster anti-cheat
- RCON access

[Create Free Server →](https://fshost.me/free/cod4)

### Pro Servers
Advanced features for competitive play:
- Priority hardware
- CoD4x support
- Advanced configurations
- FTP/SFTP access
- Custom mod configs
- Priority support
- No advertisements

[View Pro Plans →](https://fshost.me/pro)

## Available Game Modes

### Standard Multiplayer Modes

| Mode | Command | Description |
|------|---------|-------------|
| **Free For All** | `g_gametype dm` | Deathmatch - every player for themselves |
| **Team Deathmatch** | `g_gametype war` | Team-based elimination |
| **Search & Destroy** | `g_gametype sd` | Competitive bomb plant/defuse |
| **Domination** | `g_gametype dom` | Control point capture |
| **Headquarters** | `g_gametype koth` | King of the hill style |
| **Sabotage** | `g_gametype sab` | Objective-based bomb mode |

## Server Mods

Enhance your server with these popular mods.

### Competitive Mods

**[Promod LIVE v2.20](/games/cod4/mods/promodlive)**
- Industry standard competitive mod
- Used in tournaments worldwide
- Balanced gameplay
- Professional settings

**[FPSChallenge.eu Promod](/games/cod4/mods/fps-promod)**
- Enhanced Promod variant
- Built-in anti-cheat
- Automatic demo upload
- FSHOST official provider

### Fun Mods

**[GunGame v1.0](/games/cod4/mods/gungame)**
- Progressive weapon gameplay
- Level up with each kill
- First to complete all weapons wins
- Multiple customization options

**[CoDJumper v3.12b](/games/cod4/mods/codjumper)**
- Parkour and movement challenges
- Jump-based gameplay
- Custom jump maps
- Skill-based progression

### Utility Mods

**[Stock Custom Maps](/games/cod4/mods/stock-custom-maps)**
- Use custom maps with stock settings
- No gameplay changes
- Easy map expansion
- Compatible with most maps

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

### Game Mode Setup

**Change to Search and Destroy:**
```bash
/rcon g_gametype sd
/rcon map_restart
```

**Change to Team Deathmatch:**
```bash
/rcon g_gametype war
/rcon map_restart
```

::: tip Map Restart Required
After changing game modes, always restart the map for changes to take effect.
:::

### Map Management

**Change map:**
```bash
/rcon map mp_crash
```

**Quick restart:**
```bash
/rcon fast_restart
```

**Map rotation example:**
```bash
/rcon sv_maprotation "gametype sd map mp_backlot map mp_crash map mp_strike"
```

## RCON Setup

### Logging In

**Open console (~) and login:**
```bash
/rcon login your_rcon_password
```

Find your RCON password on:
- [Free Panel](https://fshost.me/free-panel)
- [Pro Server Settings](https://fshost.me/pro/servers)

### Basic Commands

**Check server status:**
```bash
/rcon status
```

**Kick player:**
```bash
/rcon clientkick slot_number
```

**Ban player:**
```bash
/rcon banClient id
```

**Temporary ban:**
```bash
/rcon tempBanClient id
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

### Moderation Commands

**Kick player:**
```bash
/rcon clientkick 3
```

**Ban permanently:**
```bash
/rcon banClient 3
```

**Temporary ban by name:**
```bash
/rcon tempBanUser "PlayerName"
```

**Temporary ban by ID:**
```bash
/rcon tempBanClient 3
```

**Kick all players:**
```bash
/rcon kickall
```

### Screenshots

**For v1.7 with PunkBuster:**
```bash
/rcon pb_sv_getss
```

**For CoD4x:**
```bash
/rcon getss
```

## Mod Configurations

### Promod Setup

**Standard 5v5:**
```bash
/rcon promod_mode match_mr12
```

**With knife round:**
```bash
/rcon promod_mode match_mr12_knife
```

**2v2 match:**
```bash
/rcon promod_mode 2v2_mr10
```

See [Promod LIVE documentation](/games/cod4/mods/promodlive) for all modes.

### FPSChallenge.eu Promod

Uses same commands as Promod LIVE but includes:
- Automatic anti-cheat
- Demo upload integration
- Enhanced security

See [FPS Promod documentation](/games/cod4/mods/fps-promod).

### GunGame Configuration

Admin commands for GunGame:
```bash
gg_switch_team [player]    # Switch team
gg_switch_spec [player]    # Move to spectator
gg_set_level [player]:[level]  # Set level
```

See [GunGame documentation](/games/cod4/mods/gungame).

## Configuration Examples

### Competitive S&D (Promod)

```bash
/rcon promod_mode match_mr12_knife
/rcon sv_hostname "^1Competitive S&D ^7- free @ fshost.me"
```

### Public TDM Server

```bash
/rcon g_gametype war
/rcon g_password ""
/rcon sv_hostname "^6Public TDM Server ^7- free @ fshost.me"
/rcon map_restart
```

### GunGame Server

```bash
# Select GunGame mod when creating server
/rcon sv_hostname "^3GunGame Server ^7- free @ fshost.me"
```

### Jump Server (CoDJumper)

```bash
# Select CoDJumper mod when creating server
/rcon sv_hostname "^5Jump Server ^7- free @ fshost.me"
```

## PunkBuster & CoD4x

### PunkBuster (v1.7)

**Features:**
- Cheat detection
- Screenshot capability
- Player tracking
- Ban management

**Commands:**
```bash
/rcon pb_sv_plist        # Player list
/rcon pb_sv_getss        # Screenshot
```

### CoD4x

**Enhanced features:**
- Better performance
- Bug fixes
- Extended functionality
- Custom screenshot command

**Screenshot command:**
```bash
/rcon getss
```

## Getting Support

### Resources
- **Documentation:** Browse these guides
- **Discord:** [Join FSHOST Community](https://fshost.me/discord)
- **Screenshots:** [View Servers](https://fshost.me/screenshots)
- **Support Channels:**
  - Free: `#free-support`
  - Pro: `#pro-support`

### Common Questions

::: details Which mod should I choose?
**Competitive play:** Promod LIVE or FPS Promod  
**Fun gameplay:** GunGame  
**Parkour:** CoDJumper  
**Custom maps only:** Stock Custom Maps
:::

::: details How do I set up Promod?
Select Promod when creating server, then use:
```bash
/rcon promod_mode match_mr12
```
See [Promod documentation](/games/cod4/mods/promodlive) for all options.
:::

::: details Can I change mods after creation?
No, mods are selected during server creation. To change mods, create a new server with the desired mod.
:::

::: details What's the difference between Promod and FPS Promod?
FPS Promod includes built-in anti-cheat and automatic demo upload. It's based on Promod LIVE with enhancements. See [FPS Promod page](/games/cod4/mods/fps-promod).
:::

::: details How do I add custom maps?
Contact support via [Discord](https://fshost.me/discord) with map download links. Or use Stock Custom Maps mod for easy custom map support.
:::

## Feature Comparison

| Feature | Free | Pro |
|---------|------|-----|
| All Game Modes | ✓ | ✓ |
| Mod Support | ✓ | ✓ |
| RCON Access | ✓ | ✓ |
| CoD4x | ✕ | ✓ |
| FTP Access | ✕ | ✓ |
| Custom Configs | ✕ | ✓ |
| Advanced Mods | Limited | Full |
| Priority Support | ✕ | ✓ |
| No Advertisements | ✕ | ✓ |

## Server Administration Tips

### Best Practices

::: tip Server Management
- **Choose right mod** - Match mod to playstyle
- **Clear server name** - Indicate mod/mode in hostname
- **Fair moderation** - Use ban/kick responsibly
- **Map variety** - Rotate popular maps
- **Active presence** - Moderate regularly
:::

### Security

::: warning Protect Your Server
- Never share RCON password
- Don't type password in chat
- Use PunkBuster/CoD4x anti-cheat
- Monitor suspicious players
- Take screenshots when needed
:::

## Advanced Topics

### Color Codes

Use in hostname and chat:
- `^0` - Black
- `^1` - Red
- `^2` - Green
- `^3` - Yellow
- `^4` - Blue
- `^5` - Cyan
- `^6` - Pink/Magenta
- `^7` - White (default)
- `^8` - Team color
- `^9` - Grey

### Map Rotation

**Set rotation:**
```bash
/rcon sv_maprotation "gametype sd map mp_backlot map mp_citystreets map mp_crash"
```

**Multiple game types:**
```bash
/rcon sv_maprotation "gametype sd map mp_crash gametype war map mp_backlot"
```

### Server Variables

Common settings:
- `g_gametype` - Game mode
- `g_password` - Server password
- `sv_hostname` - Server name
- `sv_maprotation` - Map rotation
- `sv_maxclients` - Max players

Full reference: [RCON Commands](/games/cod4/rcon)

## Popular Maps

### Stock Maps

**Competitive:**
- mp_backlot
- mp_crash
- mp_strike
- mp_vacant

**Public:**
- mp_shipment
- mp_rust (CoD4x)
- mp_crossfire
- mp_broadcast

## Mod-Specific Guides

Detailed documentation for each mod:

- **[Promod LIVE](/games/cod4/mods/promodlive)** - Competitive settings and modes
- **[FPS Promod](/games/cod4/mods/fps-promod)** - Enhanced anti-cheat features
- **[GunGame](/games/cod4/mods/gungame)** - Progressive weapon gameplay
- **[CoDJumper](/games/cod4/mods/codjumper)** - Jump mechanics and maps
- **[Stock Custom Maps](/games/cod4/mods/stock-custom-maps)** - Custom map setup

---

**Need Help?** Visit our [Discord](https://fshost.me/discord) or browse the mod-specific documentation.
