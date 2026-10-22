<script setup>
import { ref, onMounted } from 'vue'
import { data as css } from './plugins/css-version.data.js'

// SSR/build-time value renders first (no flicker, works if GitHub is down).
// On the client, refresh live so a new release shows without a docs rebuild.
const cssVersion = ref(css.version)
const cssUrl = ref(css.url)

onMounted(async () => {
  try {
    const res = await fetch(
      'https://api.github.com/repos/mrc4tt/CounterStrikeSharp/releases/latest',
      { headers: { Accept: 'application/vnd.github+json' }, signal: AbortSignal.timeout(8000) }
    )
    if (!res.ok) return
    const json = await res.json()
    const tag = (json.tag_name || '').replace(/^v/, '')
    if (tag) {
      cssVersion.value = tag
      cssUrl.value = json.html_url || cssUrl.value
    }
  } catch {
    /* keep the build-time value */
  }
})
</script>

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
| [**CounterStrikeSharp**](https://github.com/mrc4tt/CounterStrikeSharp) - **Forked** | Server-side modding framework that plugins are built on. Latest release: <a :href="cssUrl" target="_blank" rel="noreferrer">{{ cssVersion }}</a> |
| **MultiAddonManager** | Handles Workshop content and client downloads |

::: tip Automatic Updates
These addons are managed automatically by FSHOST - no manual installation needed.
:::

## Plugin Comparison

### Available Plugins by Server Type

| Plugin | Free | Pro | Description |
|--------|------|-----|-------------|
| [CS2-SimpleAdmin](#cs2-simpleadmin) | No | Yes | Essential admin tools and commands |
| [FSH-AdminManager](/games/cs2/plugins/adminmanager) | No | Yes | Advanced admin system with role hierarchy |
| css_rcon | No | Yes | Execute RCON commands via console |
| [FakeRcon](#fake-rcon) | Yes | Yes | In-game console RCON access |
| [Discord Demo Links](/games/cs2/plugins/cstv-discord) | No | Yes | Post demo download links to Discord |
| FixDemoVoiceChat | No | Yes | Enable voice in demo recordings |
| [Deathmatch](/games/cs2/plugins/deathmatch) | No | Yes | Complete deathmatch mode |
| [Retakes](/games/cs2/plugins/retakes) | No | Yes | Bomb site retake practice |
| [FSH-MatchZy](/games/cs2/plugins/matchzy) | No | Yes | Competitive match management **customized** |
| [OpenPrefirePrac](/games/cs2/plugins/prefire) | No | Yes | Prefire training |
| CS2MapChange | Yes | Yes | Simplified map changing |
| Workshop Maps | No | Yes | Load custom Steam Workshop maps |
| [WeaponPaints](/games/cs2/plugins/weapon-skins) | No | Yes | Custom weapon skins |
| [Custom Commands](/games/cs2/plugins/customcommands) | No | Yes | Create your own chat commands via JSON files |
| [Demo Monitor](#demo-monitor) | No | Yes | Automatic demo file organization |
| [TVFIX (CSTV Fix)](#tvfix) | No | Yes | Auto-restart CSTV after matches |

## Installed vs. Loaded {#installed-vs-loaded}

::: warning Pro Server Only
This section covers Pro servers. Free servers run a fixed plugin set.
:::

Every plugin in the table above is installed on a Pro server, but not every plugin is loaded when the server starts. The game mode plugins stay off until you turn them on, because they change how rounds work and would clash with each other.

### Loaded when the server starts

These run from the first boot, with no action needed:

- CS2-SimpleAdmin and CS2-SimpleAdmin Fun Commands
- FSH-AdminManager
- css_rcon (CS2Rcon)
- FSH-MatchZy
- Custom Commands
- CS2MapChange, Workshop Map Changer, NextMap and AutoChangeMapIfEmpty
- Discord Demo Links, Demo Monitor, TVFIX and FixDemoVoiceChat
- WeaponPaints

Shared helper plugins such as CS2MenuManager and RayTraceImpl also load at start. Other plugins depend on them, and they have no commands of their own.

### Installed, but off until you turn them on

| Plugin | Chat command | Pro Panel console |
|--------|-------------|-------------------|
| [Deathmatch](/games/cs2/plugins/deathmatch) | `!dmon` | `exec custom/dmon.cfg` |
| [Retakes](/games/cs2/plugins/retakes) | `!retake` | `exec custom/retakes.cfg` |
| [OpenPrefirePrac](/games/cs2/plugins/prefire) | `!prefireon` | `exec custom/prefireon.cfg` |

There are two ways to turn one on:

1. **In-game:** type the chat command. You must be an admin on the server, see [Become a Server Admin](/games/cs2/become-admin).
2. **Pro Panel:** open the **Console** tab of your server at <https://fshost.me/pro/servers> and send the console command. See [Console Access](/servers/pro/console). Only the server owner can send console commands.

::: tip One mode at a time
Starting a mode unloads the plugins of the previous one, MatchZy included. Use `!matchzy` or `!pracc` to go back to MatchZy. The full list of mode commands is in [Pro Server Commands](/games/cs2/commands#game-mode-commands).
:::

To see what is loaded right now, run `css_plugins list` in the Pro Panel console, or `fake_rcon css_plugins list` in your game console.

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

### Discord Demo Links {#cstv-discord}

Posts a message to your Discord channel when a CSTV demo has finished recording. Set it up with **Discord webhook URL (optional)** in the **CSTV** section of **Game settings**.

**Requirements:**
- Pro server with CSTV enabled
- A Discord webhook

See [Discord Demo Links](/games/cs2/plugins/cstv-discord).

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

### Demo Monitor {#demo-monitor}

Automatic demo file organization for clean server management.

**Features:**
- Automatically moves completed demos to `/demos/` folder
- Real-time monitoring of recording status
- Periodic cleanup every 30 seconds
- Safe file handling (prevents corruption)
- MatchZy compatibility

**How it helps:**
Keeps your server files organized by automatically moving finished CSTV demo recordings from the root `/game/csgo/` directory into a dedicated `/game/csgo/demos/` folder - no more cluttered directories or manual file management.

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
**Pro servers:** Open a ticket on [Pro Support](https://fshost.me/pro/support). Requests are reviewed for compatibility and security.

**Free servers:** Limited to the plugins listed in the Free column above.
:::

::: details What is a GSLT and why is it needed?
A Game Server Login Token links your server to a Steam account. It is optional on FSHOST servers, and none of the plugins listed above require one. Pro users who want to set a GSLT can do so in the Pro Panel.
:::

::: details How do I configure plugins?
**Pro servers:** Plugin configs are in `addons/counterstrikesharp/configs/plugins/` over FTP (request it by opening a ticket on the [Pro Support](https://fshost.me/pro/support) page), or change settings with RCON commands. Server settings go in your config template, see [Config Files](/games/cs2/config-files).

Configuration methods vary by plugin; refer to the individual plugin's documentation for specifics.
:::

