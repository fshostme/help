# Counter-Strike 2 Documentation

Comprehensive guides for managing and configuring your CS2 game server on FSHOST.

## Quick Start Guides

Essential documentation to get your server running.

### Server Setup
- [Become a Server Admin](/games/cs2/become-admin) - Gain administrative control (Pro)
- [RCON Commands](/games/cs2/rcon) - Remote console command reference

### Commands & Controls
- [Free Server Commands](/games/cs2/commands-free) - Available commands for free servers
- [Pro Server Commands](/games/cs2/commands) - Full command reference for Pro servers
- [In-Game Admin Commands](/games/cs2/become-admin#admin-commands) - Admin-specific commands (Pro)

### Advanced Features
- [CSTV Broadcasting](/games/cs2/cstv) - Enable spectating and demo recording (Pro)
- [Plugin Overview](/games/cs2/plugins) - Available plugins and addons
- [In-Game Commands](/games/cs2/commands) - Player and admin commands (Pro)

## Pro Server Plugins

Enhance your Pro server with these powerful plugins.

### Administration
- [CS2-SimpleAdmin](/games/cs2/plugins/cs2-simpleadmin) - Core admin functionality
- [Admin Manager](/games/cs2/plugins/admin-manager) - Advanced role-based permissions

### Game Modes
- [Deathmatch](/games/cs2/plugins/deathmatch) - Fast-paced FFA game mode
- [Retakes](/games/cs2/plugins/retakes) - Bomb site retake practice
- [MatchZy](/games/cs2/plugins/matchzy) - Professional match management
- [OpenPrefirePrac](/games/cs2/plugins/prefire) - Prefire training

### Customization
- [WeaponPaints](/games/cs2/plugins/weapon-skins) - Custom weapon skins
- [CSTV Discord Integration](/games/cs2/plugins/cstv-discord) - Auto-post demos to Discord

## Server Types

### Free Servers
Perfect for casual play and testing:
- Quick deployment
- Essential plugins included
- Community maps support
- Basic admin controls

[Create Free Server →](https://fshost.me/free/cs2)

### Pro Servers
Advanced features for competitive play:
- Full plugin access
- CSTV broadcasting
- Advanced admin system
- FTP access
- Custom configuration
- Workshop content support
- Priority support

[View Pro Plans →](https://fshost.me/pro/pricing/cs2)

## Common Tasks

### Server Configuration
```bash
# Change server name
fake_rcon hostname "Your Server Name - fshost.me"

# Set password
fake_rcon sv_password "password123"

# Configure competitive settings
fake_rcon mp_maxrounds 30
fake_rcon mp_startmoney 800
fake_rcon mp_roundtime 1.92
```

### Map Management
```bash
# Quick map change
say !map dust2

# RCON map change
fake_rcon changelevel de_mirage

# List available maps
fake_rcon maps *
```

### Player Management
```bash
# View connected players
fake_rcon status

# Kick player
fake_rcon kick "PlayerName"

# Broadcast message
fake_rcon say "Server restarting in 5 minutes"
```

## Getting Support

### Resources
- **Documentation:** Browse these guides for answers
- **Discord:** [Join FSHOST Community](https://fshost.me/discord)
- **Support Channels:**
  - Free users: `#free-support`
  - Pro users: `#pro-support`

### Common Questions

::: details How do I access my server files?
**Free servers:** Limited file access via RCON commands

**Pro servers:** Full FTP access available. Request credentials in Discord #pro-support.
:::

::: details Can I use custom maps?
**Free servers:** Access to official maps and select community maps

**Pro servers:** Full Steam Workshop support for custom maps
:::

::: details How do I install plugins?
Plugins are managed by FSHOST. Request additional plugins through:
- **Free:** Limited to included plugins
- **Pro:** Submit requests via support panel
:::

::: details What is GSLT and do I need it?
A Game Server Login Token links your server to your Steam account. Required for certain plugins like WeaponPaints. Pro users can configure GSLT in the control panel.
:::

## Plugin Comparison

| Feature | Free | Pro |
|---------|------|-----|
| Basic Admin Tools | ✕ | ✓ |
| CSTV Broadcasting | ✕ | ✓ |
| Match Management | ✕ | ✓ |
| Custom Plugins | ✕ | ✓ |
| Workshop Maps | ✕ | ✓ |
| FTP Access | ✕ | ✓ |
| Priority Support | ✕ | ✓ |

## Next Steps

1. **Configure:** Review [RCON Commands](/games/cs2/rcon) for customization
2. **Admin Access:** Set up [Admin Controls](/games/cs2/become-admin) (Pro)
3. **Enhance:** Explore [Available Plugins](/games/cs2/plugins)
4. **Broadcast:** Enable [CSTV](/games/cs2/cstv) for demos (Pro)

---

**Need Help?** Visit our [Discord](https://fshost.me/discord) or browse the documentation sections above.
