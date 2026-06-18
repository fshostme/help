# CS2 Server Addons & Plugins

Complete overview of the addons and plugins available for Counter-Strike 2 servers on FSHOST.

::: info Addons vs. Plugins
- **Addons** are the core components that the server runs on (Metamod:Source, CounterStrikeSharp, MultiAddonManager). They are preinstalled and maintained automatically - you don't manage them yourself.
- **Plugins** are the optional features that run on top of those addons (admin tools, game modes, etc.). Availability depends on your server type, as shown in the comparison below.
:::

## Core Addons

These core components are preinstalled and maintained automatically on all servers:

| Component | Purpose |
|-----------|---------|
| **Metamod:Source** | Foundation layer that enables server modifications |
| **CounterStrikeSharp** - **Forked** | Server-side modding framework that plugins are built on |
| **MultiAddonManager** | Handles Workshop content and client downloads |

::: tip Automatic Updates
These addons are managed automatically by FSHOST - no manual installation needed.
:::

## Plugin Comparison

### Available Plugins by Server Type

| Plugin | Free | Pro | Description |
|--------|------|-----|-------------|
| [CS2-SimpleAdmin](#cs2-simpleadmin) | ✕ | ✓ | Essential admin tools and commands |
| [FSH-AdminManager](/games/cs2/plugins/adminmanager) | ✕ | ✓ | Advanced admin system with role hierarchy |
| css_rcon | ✕ | ✓ | Execute RCON commands via console |
| [FakeRcon](#fake-rcon) | ✓ | ✓ | In-game console RCON access |
| [DemoURL](/games/cs2/plugins/cstv-discord) | ✕ | ✓ | Auto-post demo links to Discord |
| FixDemoVoiceChat | ✕ | ✓ | Enable voice in demo recordings |
| [Deathmatch](/games/cs2/plugins/deathmatch) | ✕ | ✓ | Complete deathmatch mode |
| [Retakes](/games/cs2/plugins/retakes) | ✕ | ✓ | Bomb site retake practice |
| [FSH-MatchZy](/games/cs2/plugins/matchzy) | ✕ | ✓ | Competitive match management **customized** |
| [OpenPrefirePrac](/games/cs2/plugins/prefire) | ✕ | ✓ | Prefire training |
| CS2MapChange | ✓ | ✓ | Simplified map changing |
| Workshop Maps | ✕ | ✓ | Load custom Steam Workshop maps |
| [WeaponPaints](/games/cs2/plugins/weapon-skins) | ✕ | ✓ | Custom weapon skins |
| [Demo Monitor](#demo-monitor) | ✕ | ✓ | Automatic demo file organization |
| [TVFIX (CSTV Fix)](#tvfix) | ✕ | ✓ | Auto-restart CSTV after matches |

## Plugin Details

### Fake Rcon {#fake-rcon}

Execute RCON commands directly through your in-game console.

**Setup:**
```bash
fake_rcon_password your_password
```

**Usage:**
```bash
fake_rcon status
fake_rcon say "Server restarting in 5 minutes"
```

### CS2MapChange {#cs2-mapchange}

Quick map changes via chat command.

**Usage:**
```bash
!map de_dust2
!map de_mirage
```

### CS2-SimpleAdmin {#cs2-simpleadmin}

Core administrative functionality for server management.

**Features:**
- Player kicks and bans
- Chat moderation
- Basic server controls

### Admin Manager {#admin-manager}

Advanced admin system with customisable roles and permissions.

**Features:**
- Role-based permission system
- Immunity levels
- Flexible admin hierarchy

### CSTV Discord {#cstv-discord}

Automatically share match demos to your Discord server.

**Requirements:**
- Pro server with CSTV enabled
- Discord webhook configuration

### Deathmatch {#deathmatch}

Full-featured deathmatch game mode.

**Features:**
- Instant respawns
- Weapon selection menus
- Kill/death tracking

### Retakes {#retakes}

Practice bomb site retakes with customisable scenarios.

**Features:**
- Automatic team balancing
- Equipment allocation
- Site rotation

### MatchZy {#matchzy}

Professional match management with practice utilities.

**Features:**
- Match configuration system
- Practice mode tools
- Demo recording
- Knife rounds and ready system

### Prefire Practice {#prefire}

Train common angle prefire positions on competitive maps.

**Features:**
- Map-specific scenarios
- Performance tracking
- Progress saving

### Weapon Skins {#weapon-skins}

Enable custom weapon skins for players.

**Requirements:**
- Pro server

### Demo Monitor {#demo-monitor}

Automatic demo file organisation for clean server management.

**Features:**
- Automatically moves completed demos to `/demos/` folder
- Real-time monitoring of recording status
- Periodic cleanup every 30 seconds
- Safe file handling (prevents corruption)
- MatchZy compatibility

**How it helps:**
Keeps your server files organised by automatically moving finished CSTV demo recordings from the root `/game/csgo/` directory into a dedicated `/game/csgo/demos/` folder - no more cluttered directories or manual file management.

### TVFIX (CSTV Fix) {#tvfix}

Prevents CSTV recording failures after matches.

**Features:**
- Auto-restarts CSTV after match completion
- Smart detection of recording status
- Map change protection
- Toggle command for admins

**How it helps:**
Solves a CS2 bug where CSTV fails to record demos after the first match ends. Automatically restarts SourceTV between matches to ensure reliable demo recording for tournaments and competitive play.

**Requirements:**
- Pro server with CSTV enabled

## Frequently Asked Questions

::: details How do I check which plugins are installed?
Use the following command in the console after RCON authentication:
```bash
fake_rcon css_plugins list
```
:::

::: details Can I request additional plugins?
**Pro servers:** Submit plugin requests through the support panel. Requests are reviewed for compatibility and security.

**Free servers:** Limited to the plugins listed in the Free column above.
:::

::: details What is a GSLT and why is it needed?
A Game Server Login Token links your server to a Steam account, helping prevent abuse. Some plugins require this. Pro users can configure GSLT in the control panel.
:::

::: details How do I configure plugins?
**Pro servers:** Configure via FTP access (request in #pro-support on Discord) or via RCON commands.

Configuration methods vary by plugin; refer to the individual plugin's documentation for specifics.
:::

