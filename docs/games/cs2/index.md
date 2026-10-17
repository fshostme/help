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

1. **Connect to your server.** The IP and port are at the top of your server's page at [fshost.me/pro/servers](https://fshost.me/pro/servers). Click **Join via Steam**, or use **Other ways to join** → **Copy console command** and paste it into the CS2 console
2. **Make yourself an admin.** [Become a Server Admin](/games/cs2/become-admin), the panel method takes four steps
3. **Learn the in-game commands** for maps, game modes and admin actions: [Pro Server Commands](/games/cs2/commands)
4. **Add the features you want.** [Plugin Overview](/games/cs2/plugins) covers match management, deathmatch, skins and demos
5. **Play a Workshop map** by setting its ID in **Game settings**: [Workshop Maps](/games/cs2/workshop-maps)

## Reference

### Commands and Controls
- [Free Server Commands](/games/cs2/commands-free) - Chat commands available on Free servers
- [Pro Server Commands](/games/cs2/commands) - Chat commands available on Pro servers
- [RCON Commands](/games/cs2/rcon) - Console commands for server settings and cvars
- [In-Game Admin Commands](/games/cs2/become-admin#admin-commands) - Admin-specific commands (Pro)

### Advanced Features
- [CSTV Broadcasting](/games/cs2/cstv) - Enable spectating and demo recording (Pro)
- [Automation](/games/cs2/automation) - Automatic game updates and scheduled restarts (Pro)
- [Team Access](/servers/pro/team-access) - Let teammates control the server from their own accounts (Pro)
- [Plugin Overview](/games/cs2/plugins) - Available plugins and addons
- [Workshop Maps](/games/cs2/workshop-maps) - Run Steam Workshop maps and collections (Pro)
- [Config Files](/games/cs2/config-files) - Which config file to edit over FTP (Pro)

## Pro Server Plugins

Extra features you can run on a Pro server.

### Administration
- [CS2-SimpleAdmin](/games/cs2/plugins/cs2-simpleadmin) - Ban, kick, mute and manage players
- [FSH-AdminManager](/games/cs2/plugins/adminmanager) - Admin roles and permissions

### Game Modes
- [Deathmatch](/games/cs2/plugins/deathmatch) - Free-for-all deathmatch
- [Retakes](/games/cs2/plugins/retakes) - Bomb site retake practice
- [MatchZy](/games/cs2/plugins/matchzy) - Scrims, matches and practice
- [OpenPrefirePrac](/games/cs2/plugins/prefire) - Prefire training

### Customization
- [WeaponPaints](/games/cs2/plugins/weapon-skins) - Custom weapon skins
- [Discord Demo Links](/games/cs2/plugins/cstv-discord) - Post demo download links to Discord

## Server Types

### Free Servers
- FakeRcon and CS2MapChange included
- Official maps and some community maps
- RCON access

[Create Free Server →](https://fshost.me/free/cs2)

### Pro Servers
- All plugins in the [Plugin Overview](/games/cs2/plugins)
- CSTV broadcasting and demos
- Admin management in the Pro Panel
- FTP access for configs and plugin settings
- [Workshop maps](/games/cs2/workshop-maps) and collections
- Priority support through [Pro Support](https://fshost.me/pro/support) tickets

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

**Pro servers:** FTP access to the `addons` and `cfg` folders. Request credentials by opening a ticket on the [Pro Support](https://fshost.me/pro/support) page. See [FTP Access](/servers/pro/ftp).
:::

::: details Can I use custom maps?
**Free servers:** Access to official maps and select community maps

**Pro servers:** Steam Workshop maps and collections. See [Workshop Maps](/games/cs2/workshop-maps)
:::

::: details How do I install plugins?
- **Free:** Limited to the included plugins
- **Pro:** Request other plugins on a ticket at [Pro Support](https://fshost.me/pro/support)
:::

::: details What is GSLT and do I need it?
A Game Server Login Token links your server to a Steam account. It is optional on FSHOST servers, and plugins such as [WeaponPaints](/games/cs2/plugins/weapon-skins) work without one. Pro users who want to set a GSLT can do so in the Pro Panel.
:::

## Plugin Comparison

| Feature | Free | Pro |
|---------|------|-----|
| Basic Admin Tools | No | Yes |
| CSTV Broadcasting | No | Yes |
| Match Management | No | Yes |
| Custom Plugins | No | Yes |
| Workshop Maps | No | Yes |
| FTP Access | No | Yes |
| Priority Support | No | Yes |
