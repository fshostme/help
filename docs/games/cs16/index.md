# Counter-Strike 1.6

Guides for running your Counter-Strike 1.6 server on FSHOST.

## New Here? Start With These

Follow the path for the server you have.

### Free Server

1. **Connect to your server.** Find the IP and port on the [Free Server Panel](https://fshost.me/free-panel), then open the console and type `connect IP:PORT`
2. **Log in to RCON** with the password from the panel: [RCON Commands](/games/cs16/rcon#log-into-rcon)
3. **Make yourself an admin** for the session: [Become a Server Admin](/games/cs16/becomeadmin)

### Pro Server

1. **Connect to your server.** The IP and port are at the top of your server's page at [fshost.me/pro/servers](https://fshost.me/pro/servers)
2. **Make yourself an admin:** [Become a Server Admin](/games/cs16/becomeadmin)
3. **Change your settings** in the config template: [Config Files](/games/cs16/config-files)
4. **Add plugins and maps** over FTP: [AMX Mod X Plugins](/games/cs16/plugins) and [Custom Maps and FastDL](/games/cs16/custom-maps)

## Guides

- [Become a Server Admin](/games/cs16/becomeadmin) - Add admins with AMX Mod X
- [RCON Commands](/games/cs16/rcon) - Console commands for maps, players and settings
- [Config Files](/games/cs16/config-files) - Which config file to edit over FTP (Pro)
- [AMX Mod X Plugins](/games/cs16/plugins) - Install your own plugins (Pro)
- [Custom Maps and FastDL](/games/cs16/custom-maps) - Upload maps and set up fast downloads (Pro)

## Server Types

### Free Servers
- AMX Mod X preinstalled
- RCON access
- Maps from our map library

[Create Free Server →](https://fshost.me/free/cs16)

### Pro Servers
- Permanent admin access
- PODBot bots
- FTP access for configs, plugins and maps
- FastDL on request
- Priority support through [Pro Support](https://fshost.me/pro/support) tickets
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

Browse the [CS 1.6 map library](https://dl.fsho.st/cs16/maps/) for custom maps we can install for you. Pro servers can also upload their own maps, see [Custom Maps and FastDL](/games/cs16/custom-maps).

## AMX Mod X

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

AMX Mod X comes preinstalled with these plugins:
- Admin commands
- Map management
- Player voting
- Statistics tracking
- Reserved slots (Pro)

Pro servers can add their own plugins, see [AMX Mod X Plugins](/games/cs16/plugins).

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
PODBot commands require a Pro server and admin privileges. Learn more about [becoming an admin](/games/cs16/becomeadmin).
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
Follow the complete [Admin Setup Guide](/games/cs16/becomeadmin) which covers:
1. Logging into RCON
2. Using amx_addadmin command
3. Understanding admin flags
4. Accessing admin menu
:::

::: details Can I add custom maps?
Yes. Check our [map library](https://dl.fsho.st/cs16/maps/) first and ask on a ticket to get a map installed. Pro servers can also upload their own maps over FTP, see [Custom Maps and FastDL](/games/cs16/custom-maps).
:::

::: details How do I add bots?
Bots (PODBot) are available on Pro servers only. Use admin commands like `amx_pbmenu` to control bots. See [RCON Commands](/games/cs16/rcon) for details.
:::

::: details What is AMX Mod X?
AMX Mod X is the admin and plugin system for Half-Life games, including CS 1.6. It provides admin commands, votes, map changes and player management.
:::

::: details Do I need permanent admin access?
Free servers have temporary admin, which resets on restart. On Pro servers, admins stay after a restart.
:::

## Feature Comparison

| Feature | Free | Pro |
|---------|------|-----|
| RCON Access | Yes | Yes |
| AMX Mod X Admin | Temporary | Permanent |
| PODBot Support | No | Yes |
| Custom Maps | Yes | Yes |
| FTP Access | No | Yes |
| Advanced Plugins | Limited | Yes |
| Priority Support | No | Yes |
| No Advertisements | No | Yes |

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

Full reference: [RCON Commands](/games/cs16/rcon)

### Security Best Practices

::: warning Protect Your RCON
- Never share RCON password
- Don't type password in public chat
- Change password if compromised
- Use strong passwords
- Be careful with 'l' flag (RCON access) for other admins
:::
