# Counter-Strike 2 Documentation

Guides for managing and configuring your CS2 game server on FSHOST.

## New Here? Start With These

Follow the path for the server you have. Both take about ten minutes.

### Free Server

1. **Connect to your server.** Find the IP and port on the [Free Server Panel](https://fshost.me/free-panel), then open the CS2 console and type `connect IP:PORT`
2. **Turn on the developer console.** [Setup steps](/games/cs2/rcon#before-you-start), needed for most server commands
3. **Log in to RCON** with the password from the panel: [RCON guide](/games/cs2/rcon)
4. **Learn the chat commands** for maps and game modes: [Free Server Commands](/games/cs2/commands-free)

### Pro Server

1. **Connect to your server.** The IP and port are on your server's page at [fshost.me/pro/servers](https://fshost.me/pro/servers)
2. **Make yourself an admin.** [Become a Server Admin](/games/cs2/become-admin), the panel method takes four steps
3. **Learn the in-game commands** for maps, game modes and admin actions: [Pro Server Commands](/games/cs2/commands)
4. **Add the features you want.** [Plugin Overview](/games/cs2/plugins) covers match management, deathmatch, skins and demos

## Reference

### Commands and Controls
- [Free Server Commands](/games/cs2/commands-free) - Chat commands available on Free servers
- [Pro Server Commands](/games/cs2/commands) - Chat commands available on Pro servers
- [RCON Commands](/games/cs2/rcon) - Console commands for server settings and cvars
- [In-Game Admin Commands](/games/cs2/become-admin#admin-commands) - Admin-specific commands (Pro)

### Advanced Features
- [CSTV Broadcasting](/games/cs2/cstv) - Enable spectating and demo recording (Pro)
- [Plugin Overview](/games/cs2/plugins) - Available plugins and addons

## Pro Server Plugins

Extra features you can run on a Pro server.

### Administration
- [CS2-SimpleAdmin](/games/cs2/plugins/cs2-simpleadmin) - Core admin functionality
- [FSH-AdminManager](/games/cs2/plugins/adminmanager) - Admin Manager (Management)

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

These are console commands. Open the developer console with **`** and authenticate with `fake_rcon_password` first, as described in the [RCON guide](/games/cs2/rcon). Commands prefixed with `say` are chat commands sent from the console.

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

**Pro servers:** Full FTP access available. Request credentials by opening a ticket on the [Pro Support](https://fshost.me/pro/support) page.
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
A Game Server Login Token links your server to a Steam account. It is optional on FSHOST servers, and plugins such as [WeaponPaints](/games/cs2/plugins/weapon-skins) work without one. Pro users who want to set a GSLT can do so in the Pro Panel.
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
