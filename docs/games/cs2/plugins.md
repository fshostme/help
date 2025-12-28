# CS2 Server Plugins

Complete overview of available plugins and addons for Counter-Strike 2 servers on FSHOST.

## Required Dependencies

These core components are automatically installed and maintained on all servers:

| Component | Purpose |
|-----------|---------|
| **Metamod:Source** | Foundation layer enabling server modifications |
| **CounterStrikeSharp** | Server-side modding framework for plugin support |
| **MultiAddonManager** | Handles workshop content and client downloads |

::: tip Automatic Updates
These dependencies are managed automatically by FSHOST - no manual installation needed.
:::

## Plugin Comparison

### Available Plugins by Server Type

| Plugin | Free | Pro | Description |
|--------|------|-----|-------------|
| [CS2-SimpleAdmin](#cs2-simpleadmin) | ✕ | ✓ | Essential admin tools and commands |
| [FSH-AdminManager](#admin-manager) | ✕ | ✓ | Advanced admin system with role hierarchy |
| css_rcon | ✕ | ✓ | Execute RCON commands via console |
| [FakeRcon](#fake-rcon) | ✓ | ✓ | In-game console RCON access |
| [CSTVDiscord](#cstv-discord) | ✕ | ✓ | Auto-post demo links to Discord |
| FixDemoVoiceChat | ✕ | ✓ | Enable voice in demo recordings |
| [Deathmatch](#deathmatch) | ✕ | ✓ | Complete deathmatch mode |
| [Retakes](#retakes) | ✕ | ✓ | Bomb site retake practice |
| [MatchZy](#matchzy) | ✕ | ✓ | Competitive match management |
| [OpenPrefirePrac](#prefire) | ✕ | ✓ | Angle prefire training |
| CS2MapChange | ✓ | ✓ | Simplified map changing |
| Workshop Maps | ✕ | ✓ | Load custom Steam Workshop maps |
| [WeaponPaints](#weapon-skins) | ✕ | ✓<sup>*</sup> | Custom weapon skins |

<sup>*</sup> Requires GSLT (Game Server Login Token)

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

Advanced admin system with customizable roles and permissions.

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

Practice bomb site retakes with customizable scenarios.

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
- GSLT (Game Server Login Token)

::: warning GSLT Requirement
WeaponPaints requires a Game Server Login Token from Steam. Generate one at [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).
:::

## Frequently Asked Questions

::: details How do I check installed plugins?
Use the following command in console after RCON authentication:
```bash
fake_rcon css_plugins list
```
:::

::: details Can I request additional plugins?
**Pro servers:** Submit plugin requests through the support panel. Requests are reviewed for compatibility and security.

**Free servers:** Limited to the plugins listed in the Free column above.
:::

::: details What is a GSLT and why is it needed?
A Game Server Login Token links your server to a Steam account, helping prevent abuse. Some plugins require thisz. Pro users can configure GSLT in the control panel.
:::

::: details How do I configure plugins?
**Pro servers:** Configure via FTP access (request in Discord #pro-support) or using RCON commands.

Configuration methods vary by plugin - refer to individual plugin documentation for specifics.
:::
