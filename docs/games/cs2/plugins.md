---
description: "Plugins and addons available on CS2 Pro servers, which ones load at start and how to enable the rest."
---

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
- **Addons** are the core components that the server runs on (Metamod:Source, CounterStrikeSharp, MultiAddonManager). They are preinstalled and maintained automatically, so you do not manage them yourself.
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
These addons are managed automatically by FSHOST. No manual installation is needed.
:::

## Plugin Comparison

### Available Plugins by Server Type

| Plugin | Free | Pro | Description |
|--------|------|-----|-------------|
| [CS2-SimpleAdmin](/games/cs2/plugins/cs2-simpleadmin) | No | Yes | Ban, kick, gag, mute and manage players |
| [FSH-AdminManager](/games/cs2/plugins/adminmanager) | No | Yes | Admin roles and the **Server admins** page in the Pro Panel |
| css_rcon (CS2Rcon) | No | Yes | Run server commands from chat with `!rcon` |
| [FakeRcon](#fake-rcon) | Yes | Yes | RCON from your game console with `fake_rcon` |
| [Discord Demo Links](/games/cs2/plugins/cstv-discord) | No | Yes | Post demo download links to Discord |
| FixDemoVoiceChat | No | Yes | Records voice chat in CSTV demos |
| [Deathmatch](/games/cs2/plugins/deathmatch) | No | Yes | Free-for-all deathmatch |
| [Retakes](/games/cs2/plugins/retakes) | No | Yes | Bomb site retakes with weapon allocation |
| [MatchZy](/games/cs2/plugins/matchzy) | No | Yes | Matches, scrims and practice mode, **customized** fork |
| [OpenPrefirePrac](/games/cs2/plugins/prefire) | No | Yes | Prefire practice against bots |
| [CS2MapChange](#cs2-mapchange) | Yes | Yes | Map change commands such as `!map` |
| [Workshop Maps](/games/cs2/workshop-maps) | No | Yes | Load custom Steam Workshop maps |
| [WeaponPaints](/games/cs2/plugins/weapon-skins) | No | Yes | Custom weapon skins |
| [Custom Commands](/games/cs2/plugins/customcommands) | No | Yes | Create your own chat commands with JSON files |
| [Demo Monitor](/games/cs2/plugins/demomonitor) | No | Yes | Moves finished demos into the `demos` folder |
| [TVFIX (CSTV Fix)](/games/cs2/plugins/tvfix) | No | Yes | Restarts CSTV after a match so the next one records |

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
- MatchZy
- Custom Commands
- CS2MapChange, Workshop Map Changer, NextMap and AutoChangeMapIfEmpty
- Discord Demo Links, Demo Monitor, TVFIX and FixDemoVoiceChat
- WeaponPaints, when **Skins (WeaponPaints)** is on in **Game settings**. See [WeaponPaints](/games/cs2/plugins/weapon-skins#turning-skins-on)

Shared helper plugins such as CS2MenuManager and RayTraceImpl also load at start. Other plugins depend on them, and they have no commands of their own.

### Installed, but off until you turn them on

| Plugin | Chat command | Pro Panel console |
|--------|-------------|-------------------|
| [Deathmatch](/games/cs2/plugins/deathmatch) | `!dmon` | `exec custom/dmon` |
| [Retakes](/games/cs2/plugins/retakes) | `!retake` | `exec custom/retakes` |
| [OpenPrefirePrac](/games/cs2/plugins/prefire) | `!prefireon` | `exec custom/prefireon` |

There are two ways to turn one on:

1. **In-game:** type the chat command. You must be an admin with the `g` (map) flag, see [Become a Server Admin](/games/cs2/become-admin).
2. **Pro Panel:** open the **Console** tab of your server at <https://fshost.me/pro/servers> and send the console command. See [Console Access](/servers/pro/console). Only the server owner can send console commands.

::: tip One mode at a time
Starting a mode unloads the plugins of the previous one, MatchZy included. Use `!matchzy` or `!pracc` to go back to MatchZy. The full list of mode commands is in [Pro Server Commands](/games/cs2/commands#game-mode-commands).
:::

::: warning After Using the Console
The chat commands also tell Custom Commands that MatchZy is no longer running. The console commands do not. If you started a mode from the console, also send `css_custom_json_on matchzy`, or `!matchzy` answers that MatchZy is already running.
:::

To see what is loaded right now, run `css_plugins list` in the Pro Panel console, or `fake_rcon css_plugins list` in your game console.

## Plugin Details

### Fake Rcon {#fake-rcon}

FakeRcon lets you run server commands from your game console with `fake_rcon`, on Free and Pro servers. Log in once with your RCON password, then put `fake_rcon` in front of each command:

```bash
fake_rcon_password your_rcon_password
fake_rcon status
fake_rcon say Server restarting in 5 minutes
```

See [RCON](/games/cs2/rcon) for the full guide.

### CS2MapChange {#cs2-mapchange}

Changes the map from chat. Needs the `g` (map) admin flag.

```bash
!map de_dust2
!maplist
```

`!changemap` and `!changelevel` do the same as `!map`. `!maplist` shows the maps and their short names.

### Other Plugins

Each of these has its own page:

- [CS2-SimpleAdmin](/games/cs2/plugins/cs2-simpleadmin) - Admin commands
- [FSH-AdminManager](/games/cs2/plugins/adminmanager) - Admin roles and permission flags
- [MatchZy](/games/cs2/plugins/matchzy) - Matches and practice mode
- [Deathmatch](/games/cs2/plugins/deathmatch), [Retakes](/games/cs2/plugins/retakes) and [OpenPrefirePrac](/games/cs2/plugins/prefire) - Game modes
- [WeaponPaints](/games/cs2/plugins/weapon-skins) - Weapon skins
- [Custom Commands](/games/cs2/plugins/customcommands) - Your own chat commands
- [TVFIX](/games/cs2/plugins/tvfix), [Demo Monitor](/games/cs2/plugins/demomonitor) and [Discord Demo Links](/games/cs2/plugins/cstv-discord) - CSTV demos

## Frequently Asked Questions

::: details How do I check which plugins are loaded?
Send this in the **Console** tab of the Pro Panel:
```bash
css_plugins list
```
Or, after logging in to RCON, in your game console:
```bash
fake_rcon css_plugins list
```
:::

::: details Can I request additional plugins?
**Pro servers:** Open a ticket on [Pro Support](https://fshost.me/pro/support). Requests are reviewed for compatibility and security. You can also install a plugin yourself over [FTP](/servers/pro/ftp), which we set up on request. See [Before You Modify Files](/servers/pro/before-you-modify).

**Free servers:** Limited to the plugins listed in the Free column above.
:::

::: details What is a GSLT and why is it needed?
A Game Server Login Token links your server to a Steam account. It is optional on FSHOST servers, and none of the plugins listed above require one. On Pro you can set one under **Steam GSLT (optional)** in **Game settings**. It is only used while **Skins (WeaponPaints)** is on, see [WeaponPaints](/games/cs2/plugins/weapon-skins#about-gslt).
:::

::: details How do I configure plugins?
**Pro servers:** Plugin configs are in `addons/counterstrikesharp/configs/plugins/`, which you reach over FTP. Request FTP by opening a ticket on the [Pro Support](https://fshost.me/pro/support) page, see [FTP Access](/servers/pro/ftp). Server settings go in your config template, see [Config Files](/games/cs2/config-files).

Each plugin's page describes what you can change.
:::
