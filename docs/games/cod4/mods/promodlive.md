# Promod LIVE v2.20

Competition mod for Call of Duty 4: Modern Warfare.

## Overview

Promod is the premier competitive modification for Call of Duty 4, providing balanced gameplay, refined settings, and professional match configurations used in tournaments worldwide.

## Promod Modes

Changing the Promod mode can be done using the syntax `promod_mode` followed by mode parameters.

::: tip Flexible Syntax
The promod_mode dvar follows a specific syntax. However, you can use the segments between underscores ( _ ) in any order.
:::

### Main Match Modes

| Command | Description |
|---------|-------------|
| `/rcon promod_mode match` | Standard match mode, may not be used with knockout mode. Round limit = mr#*2 |
| `/rcon promod_mode knockout` | Knockout match mode, may not be used with standard match mode |
| `/rcon promod_mode match_mrX` | Maxrounds - Default is 10. Works only in Search & Destroy and Sabotage |
| `/rcon promod_mode lan` | g_antilag 0, PunkBuster messages turned off, may not be used with pb mode |
| `/rcon promod_mode hc` | Hardcore mode (disables some HUD elements and reduces health level to 30) |
| `/rcon promod_mode knife` | Adds a knife round and an extra ready-up mode to Search & Destroy matches |
| `/rcon promod_mode 1v1/2v2` | Disables Demolitions and Sniper classes |

### Other Modes

There are also some other modes that cannot be combined with the options above.

| Command | Description |
|---------|-------------|
| `/rcon promod_mode comp_public` | The default mode for competitive public |
| `/rcon promod_mode comp_public_lan` | Same as above, but for LAN servers |
| `/rcon promod_mode comp_public_hc` | Competitive public in hardcore mode |
| `/rcon promod_mode comp_public_hc_lan` | Same as above, but for LAN servers |
| `/rcon promod_mode custom_public` | Custom public mode reading settings from z_c_r.iwd |
| `/rcon promod_mode custom_public_lan` | Same as above, but for LAN servers |
| `/rcon promod_mode strat` | Strategy mode for practicing |

## Configuration Examples

### Common Configurations

| Command | Description |
|---------|-------------|
| `/rcon promod_mode 2v2_mr10` | 2v2 settings with 10 total rounds |
| `/rcon promod_mode match_mr12` | 5v5 settings with 12 total rounds |
| `/rcon promod_mode match_mr12_pb` | 5v5 settings with 12 total rounds without PB |
| `/rcon promod_mode match_mr10_knife_pb` | 5v5 settings with 10 total rounds without PB but with knife round |

## Usage

### Setting Up a Match

**Standard 5v5 match:**
```
/rcon promod_mode match_mr10
```

**With knife round:**
```
/rcon promod_mode match_mr10_knife
```

**LAN tournament:**
```
/rcon promod_mode match_mr12_lan
```

### Practice Mode

**Strategy practice:**
```
/rcon promod_mode strat
```

### Smaller Team Sizes

**2v2 match:**
```
/rcon promod_mode 2v2_mr10
```

**1v1 match:**
```
/rcon promod_mode 1v1_mr10
```

## Mode Parameters

### Match Rounds

Use `mrX` to set max rounds:
- `mr10` = 10 rounds (first to 6 wins)
- `mr12` = 12 rounds (first to 7 wins)
- `mr15` = 15 rounds (first to 8 wins)

### Combining Parameters

You can combine multiple parameters with underscores in any order:

**Examples:**
```
/rcon promod_mode lan_match_mr12_knife
/rcon promod_mode 2v2_mr10_hc
/rcon promod_mode match_knife_mr15_lan
```

## Features

### Match Management
- Ready-up system
- Half-time team switching
- Overtime configuration
- Demo recording

### Gameplay Changes
- Balanced weapon damage
- Refined movement mechanics
- Optimized map timings
- Professional ruleset enforcement

### Server Settings
- Automatic configuration
- PunkBuster integration (optional)
- LAN optimization
- Anti-lag settings

## Best Practices

::: tip Tournament Setup
For competitive matches, use:
```
/rcon promod_mode match_mr12_knife
```

This provides:
- 12 max rounds (first to 7)
- Knife round for side selection
- Standard competitive settings
:::

::: tip Practice Server
For scrims and practice:
```
/rcon promod_mode strat
```

This allows:
- Free weapon access
- Unlimited grenades
- Quick respawns
- Strategy development
:::

## Troubleshooting

::: details Mode not changing
Make sure to execute the command properly:
1. Use `/rcon login password` first
2. Then execute the promod_mode command
3. Restart the map if needed
:::

::: details Players can't ready up
Ensure you're using match mode, not strat mode:
```
/rcon promod_mode match_mr10
```
:::

::: details Wrong number of rounds
Check your mr# parameter:
- `mr10` = 10 rounds total
- `mr12` = 12 rounds total
- `mr15` = 15 rounds total
:::

## Related Resources

- [CoD4 RCON Commands](/cod4/rcon) - Server management
- [FPSChallenge.eu Promod](/cod4/mods/fps-promod) - Alternative Promod variant
- [Screenshots](https://fshost.me/screenshots) - View server
