# Free Server Commands

Available commands for CS2 Free servers.

::: warning Limited Features
Free servers have restricted functionality compared to Pro servers. Advanced features like pause commands, tech timeouts, and custom practice utilities are not available.
:::

## Game Mode Commands

| Command | Description |
|---------|-------------|
| `/comp` | Switch to Competitive game mode |
| `/casual` | Switch to Casual game mode |
| `/dm` or `!deathmatch` | Start Deathmatch mode |
| `/wingman` | Switch to Wingman (2v2) game mode |

## Configuration Presets

### Competitive Configurations

**ESL 5v5:**
```
/esl5on5
```
Standard ESL competitive configuration.

::: warning No Ready System
This configuration does not include pause, unpause, or tech timeout commands.
:::

**Scrim:**
```
/scrim
```
Default scrim configuration with all rounds enabled.

::: warning Limited Features
Pause and tech timeout commands are not available.
:::

### Practice Modes

**Practice Mode:**
```
/pracc
```
Basic practice configuration.

::: warning Limited Practice Features
Advanced practice commands like `.throw`, `.bot`, `.pause`, and `.tech` are not available. For full practice features, a Pro server is required.
:::

**Pregame:**
```
/pregame
```
Default pregame warmup configuration.

## Map Commands

### Direct Map Changes

| Command | Map |
|---------|-----|
| `/ancient` | de_ancient |
| `/anubis` | de_anubis |
| `/dust2` | de_dust2 |
| `/inferno` | de_inferno |
| `/mirage` | de_mirage |
| `/nuke` | de_nuke |
| `/overpass` | de_overpass |
| `/train` | de_train |
| `/vertigo` | de_vertigo |

### Custom Map Selection

**Change to specific map:**
```
/map dust2
/map mirage
/map nuke
```

## Utility Commands

**List available commands:**
```
/help
```

**List map commands:**
```
/maps
```

## Quick Start Examples

### Starting a Competitive Match
```
/esl5on5              # Load competitive config
/map dust2            # Change to Dust2
```

### Practice Session
```
/pracc                # Load practice mode
/dust2                # Change map
```

### Deathmatch
```
/dm                   # Start deathmatch
/mirage               # Change to Mirage
```

## Limitations on Free Servers

Free servers do not support:
- Advanced admin commands
- Pause and unpause during matches
- Tech timeout functionality
- Custom practice utilities (grenades, bots, spawns)
- Workshop map loading
- Advanced match management
- CSTV recording
- Custom plugins

::: tip Upgrade for More Features
For full functionality including all practice commands, match management, and plugin support, consider upgrading to a [Pro Server](https://fshost.me/pro/pricing/cs2).
:::

## Command Aliases

Most commands work with both `/` and `!` prefixes:
- `/dm` = `!deathmatch`
- `/comp` = `!comp`
- `/map` = `!map`

::: info Note on Aliases
Currently, only `/dm` has the alias `!deathmatch`. Other commands do not have additional aliases unless specified.
:::

## Getting Help

- **In-game:** Type `/help` to see available commands
- **Discord:** Join [FSHOST Community](https://fshost.me/discord) for support
- **Upgrade:** Learn about [Pro Server features](/servers/free-vs-pro)

## Comparison: Free vs Pro

| Feature | Free | Pro |
|---------|------|-----|
| Basic game modes | ✓ | ✓ |
| Map changing | ✓ | ✓ |
| Competitive configs | Limited | Full |
| Practice commands | Basic | Advanced |
| Match management | ✕ | ✓ |
| Admin system | ✕ | ✓ |
| Workshop maps | ✕ | ✓ |
| CSTV | ✕ | ✓ |

[View Full Comparison →](/servers/free-vs-pro)
