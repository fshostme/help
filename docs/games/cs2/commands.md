# Pro Server Commands

Complete command reference for CS2 Pro servers.

::: tip Admin Access Required
These commands require admin privileges. See the [Admin Setup Guide](/games/cs2/become-admin) for instructions on gaining admin access.
:::

::: info Command Usage
Type these commands in the in-game chat using `/` or `!` prefix, not in the developer console.
:::

## Game Mode Commands

### Casual Mode
**Command:** `!casual`

Switch to Casual Mode for a more relaxed gameplay experience.

### Competitive Mode
**Command:** `!comp`

Activate standard Competitive game mode.

::: warning MatchZy Not Included
This command does not load MatchZy. Use `!matchzy` for competitive match management features.
:::

### Deathmatch Mode
**Command:** `!dmon`

Enable Multi-CFG Deathmatch Mode with respawning and weapon selection.

### Practice Mode
**Command:** `!pracc`

Return to Practice Mode if another mode was previously activated.

### Prefire Practice
**Command:** `!prefireon`

Enable OpenPrefirePrac Mode for prefire angle training.

See the [OpenPrefirePrac Plugin Guide](/games/cs2/plugins/prefire) for detailed commands.

### Retakes Mode
**Command:** `!retake`

Activate Retake Mode for bomb site retake scenarios.

### Wingman Mode
**Command:** `!wingman`

Switch to Wingman Mode for 2v2 matches with MatchZy enabled.

## Map Commands

### Active Duty Maps

**Ancient:**
```bash
!ancient
```

**Ancient Night Variant:**
```bash
!ancient_night
!ancientn
!ancientnight
```

**Anubis:**
```bash
!anubis
```

**Dust2:**
```bash
!dust2
```

**Inferno:**
```bash
!inferno
```

**Mirage:**
```bash
!mirage
```

**Nuke:**
```bash
!nuke
```

**Overpass:**
```bash
!overpass
```

**Train:**
```bash
!train
```

**Vertigo:**
```bash
!vertigo
```

### Custom Map Loading

**Load specific map:**
```bash
!map de_dust2
!map de_mirage
```

**Load Workshop map:**
```bash
!wsmap 1511919777
```

Replace the number with the Workshop ID of your desired map.

## Utility Commands

### Help Command
**Command:** `!help`

Display all available commands in chat.

### Maps List
**Command:** `!maps`

Show a list of available map commands.

### RCON Execution
**Command:** `!rcon`

Execute RCON commands for server control.

**Usage:**
```bash
!rcon mp_restartgame 1
!rcon sv_cheats 1
```

::: warning Admin Only
RCON commands require appropriate admin permissions.
:::

## Quick Reference

### Starting a Practice Session
```bash
!pracc                    # Load practice mode
!prefireon                # Enable prefire practice
!map de_dust2             # Change to desired map
```

### Switching Game Modes
```bash
!comp                     # Competitive
!dmon                     # Deathmatch
!retake                   # Retakes
!wingman                  # 2v2 Wingman
```

### Map Management
```bash
!maps                     # List available maps
!dust2                    # Quick load Dust2
!map de_ancient           # Load specific map
!wsmap 1234567890         # Load workshop map
```

## Additional Resources

- [RCON Commands](/games/cs2/rcon) - Full RCON reference
- [MatchZy Plugin](/games/cs2/plugins/matchzy) - Competitive match management
- [Practice Mode](/games/cs2/plugins/prefire) - Advanced practice tools
- [Admin Guide](/games/cs2/become-admin) - Admin setup instructions
