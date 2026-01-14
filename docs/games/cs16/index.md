# Counter-Strike 1.6 Documentation

Comprehensive guides for managing and configuring your CS1.6 game server on FSHOST.

## Quick Start Guides

Essential documentation to get your server running.

### Server Setup
- [Become a Server Admin](/cs16/becomeadmin) - Gain administrative control with AMXModX
- [RCON Commands](/cs16/rcon) - Remote console command reference

### Server Management
- **RCON Access** - Full remote control via console
- **AMXModX Admin** - Powerful admin plugin system
- **PODBot Support** - Add bots to your server (Pro only)
- **Custom Maps** - Extensive custom map library

## Server Types

### Free Servers
Perfect for casual play and testing:
- Quick deployment
- AMXModX pre-installed
- RCON access
- Custom maps support
- Basic configuration options

[Create Free Server →](https://fshost.me/free/cs16)

### Pro Servers
Advanced features for serious communities:
- Permanent admin access
- PODBot support
- FTP access
- Custom configurations
- Priority support
- No advertisements

[View Pro Plans →](https://fshost.me/pro/pricing/cs16)

## Common Tasks

### Server Configuration

**Change hostname:**
```bash
rcon hostname "Your Server Name - free @ fshost.me"
```

**Set password:**
```bash
rcon sv_password "password123"
```

**Configure gameplay:**
```bash
rcon mp_startmoney 800
rcon mp_roundtime 2
rcon mp_c4timer 35
rcon mp_friendlyfire 0
```

### Map Management

**Change map:**
```bash
rcon changelevel de_dust2
```

**List available maps:**
```bash
rcon maps *
```

**Restart current map:**
```bash
rcon sv_restart 1
```

### Player Management

**View players:**
```bash
rcon status
```

**Kick player:**
```bash
rcon kick #id
```

**Add yourself as admin:**
```bash
rcon amx_addadmin "YourName" "abcdefghijklmnopqrstu"
```

## Custom Maps

### Available Maps

FSHOST provides an extensive custom map library.<br /> 
Check available maps: [CS1.6 Maps Library →](https://dl.fsho.st/cs16/maps/)

## AMXModX Features

### Admin System

**Admin Levels:**
- **Full Admin** - All permissions (abcdefghijklmnopqrstu)
- **Moderator** - Kick, ban, basic controls (abcd)
- **Operator** - Map changes, votes (abcdefij)

**Admin Commands:**
```bash
amx_kick <player>          # Kick player
amx_ban <minutes> <player> # Ban player
amx_slay <player>          # Slay player
amx_map <mapname>          # Change map
amxmodmenu                 # Open admin menu
```

### Plugin Support

AMXModX comes pre-installed with essential plugins:
- Admin commands
- Map management
- Player voting
- Statistics tracking
- Reserved slots (Pro)

## PODBot Commands (Pro Only)

### Bot Management

**Add bots:**
```bash
rcon pb add 50        # Add medium skill bot
rcon pb add 90        # Add expert bot
```

**Remove bots:**
```bash
rcon pb removebots    # Remove all bots
```

**Bot configuration:**
```bash
rcon pb_autokill 1    # Auto-kill bots when humans die
```

::: info Pro Feature
PODBot commands require a Pro server and admin privileges. Learn more about [becoming an admin](/cs16/becomeadmin).
:::

## Getting Support

### Resources
- **Documentation:** Browse these guides for answers
- **Discord:** [Join FSHOST Community](https://fshost.me/discord)
- **Support Channels:**
  - Free users: `#free-support`
  - Pro users: `#pro-support`

### Common Questions

::: details How do I become an admin?
Follow the complete [Admin Setup Guide](/cs16/becomeadmin) which covers:
1. Logging into RCON
2. Using amx_addadmin command
3. Understanding admin flags
4. Accessing admin menu
:::

::: details Can I add custom maps?
Yes! Check our [map library](https://dl.fsho.st/cs16/maps/) first. If your maps aren't there, [contact us](https://fshost.me/contact) with download links.
:::

::: details How do I add bots?
Bots (PODBot) are available on Pro servers only. Use admin commands like `amx_pbmenu` to control bots. See [RCON Commands](/cs16/rcon) for details.
:::

::: details What is AMXModX?
AMXModX is a powerful admin and plugin system for Half-Life games including CS1.6. It provides admin commands, player management, and extensive customization options.
:::

::: details Do I need permanent admin access?
Free servers have temporary admin (resets on restart). Pro servers offer permanent admin access with custom configurations via FTP.
:::

## Feature Comparison

| Feature | Free | Pro |
|---------|------|-----|
| RCON Access | ✓ | ✓ |
| AMXModX Admin | Temporary | Permanent |
| PODBot Support | ✕ | ✓ |
| Custom Maps | ✓ | ✓ |
| FTP Access | ✕ | ✓ |
| Advanced Plugins | Limited | ✓ |
| Priority Support | ✕ | ✓ |
| No Advertisements | ✕ | ✓ |

[View Full Comparison →](/servers/free-vs-pro)

## Advanced Topics

### Server Variables (ConVars)

**Gameplay settings:**
- `mp_buytime` - Buy time duration
- `mp_startmoney` - Starting money
- `mp_roundtime` - Round duration
- `mp_c4timer` - C4 explosion time
- `mp_friendlyfire` - Enable friendly fire

**Server settings:**
- `sv_password` - Server password
- `hostname` - Server name
- `sv_alltalk` - All-talk voice chat
- `sv_gravity` - Gravity setting
- `sv_cheats` - Enable cheats (testing only)

Full reference: [RCON Commands](/cs16/rcon)

### Security Best Practices

::: warning Protect Your RCON
- Never share RCON password
- Don't type password in public chat
- Change password if compromised
- Use strong passwords
- Be careful with 'l' flag (RCON access) for other admins
:::

## Next Steps

1. **New Users:** Start with [Creating a Server](/cs16/dashboard)
2. **Admin Setup:** Follow [Become Admin Guide](/cs16/becomeadmin)
3. **Configuration:** Review [RCON Commands](/cs16/rcon)
4. **Custom Content:** Browse [Map Library](https://dl.fsho.st/cs16/maps/)
5. **Advanced:** Explore AMXModX plugins (Pro)
6. **Get Help:** Join [Discord](https://fshost.me/discord)

---

**Need Help?** Visit our [Discord](https://fshost.me/discord) or browse the documentation sections above.
