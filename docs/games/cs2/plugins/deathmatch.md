# Deathmatch Plugin

Fast-paced free-for-all deathmatch mode for CS2 servers.

::: tip Pro Feature
The full Deathmatch plugin is available exclusively on Pro servers.
:::

## Overview

The Deathmatch plugin transforms your CS2 server into a fast-paced training environment with instant respawns, weapon selection menus, and optimized spawning systems.

## Features

- Instant respawns
- Weapon selection menu
- Custom spawn points
- Kill/death tracking
- Configurable game rules
- Multiple game mode variants
- Spawn protection

## Player Commands

### Weapon Selection

**Open weapon menu:**
```
css_gun
css_guns
/w
/weapon
/guns
```

Opens the weapon selection menu where you can choose your primary weapon, secondary weapon, and equipment.

### View Available Weapons

**List allowed weapons:**
```
css_gun
```

When typed without arguments, displays all weapons available for the current deathmatch mode.

::: tip Weapon Persistence
Your weapon selection is saved and automatically applied on each respawn.
:::

### Custom Command Shortcuts

Some servers may have custom weapon shortcuts configured by admins. These allow quick weapon selection without opening menus.

**Example shortcuts (if configured):**
```
/ak              # Equip AK-47
/m4              # Equip M4A4
/awp             # Equip AWP
```

## Admin Commands

::: warning Admin Only
These commands require root admin permissions (`@css/root`).
:::

### Spawn Editor

**Toggle spawn editor:**
```
css_dm_editor
```

Enables or disables the spawn editor mode for creating custom spawn points.

### Start Custom Mode

**Launch specific mode:**
```
css_dm_startmode 1
css_dm_startmode 2
```

Starts a custom deathmatch configuration by ID.

### Distance Checker

**Check spawn distances:**
```
css_dm_checkdistance 500
css_dm_checkdistance 1000
```

Displays distance beams from your position, useful for configuring the "Distance From Enemies for Respawn" setting.

::: info Distance Configuration
This helps ensure players don't spawn too close to enemies. Common values range from 300-800 units depending on map size.
:::

## Game Modes

Deathmatch supports multiple configurations:

### Standard Deathmatch
- Free-for-all combat
- Instant respawns
- Weapon menu on spawn
- Kill tracking

### FFA Variants
Different modes may restrict weapon choices or apply special rules:
- Pistol only
- AWP only
- Rifle only
- Random weapons

::: tip Mode Configuration
Game mode variants are configured by admins. Check with your server admin for available modes.
:::

## Spawn System

### How Spawning Works

1. **Death Detection** - Player dies
2. **Respawn Timer** - Brief delay (usually 0.5-2 seconds)
3. **Spawn Selection** - System finds valid spawn point
4. **Distance Check** - Ensures minimum distance from enemies
5. **Respawn** - Player spawns with selected loadout

### Spawn Protection

Many deathmatch configurations include brief spawn protection:
- 1-3 seconds of invulnerability
- Visual indicator (glow effect)
- Ends when firing or taking certain actions

## Weapon Selection System

### Primary Weapons

Typical primary weapons available:
- Rifles (AK-47, M4A4, M4A1-S, etc.)
- SMGs (MP9, MP7, UMP-45, etc.)
- Heavy weapons (Negev, M249, etc.)
- Sniper rifles (AWP, SSG 08, etc.)

### Secondary Weapons

- Pistols (Desert Eagle, Glock-18, USP-S, etc.)
- CZ75-Auto, Tec-9, Five-SeveN, etc.

### Equipment

- Armor (typically auto-granted)
- Grenades (HE, Flash, Smoke)
- Defuse kit (CT side)

::: info Equipment Rules
Equipment availability varies by server configuration. Some servers auto-grant grenades, others allow selection through the menu.
:::

## Configuration

### Server-Side Settings

Admins can customize deathmatch behavior through configuration files:

**Common Settings:**
- Respawn delay
- Weapon restrictions
- Spawn protection duration
- Kill/death tracking
- Friendly fire rules
- Headshot-only mode
- Spawn selection algorithm

### Spawn Point Management

Custom spawn points can be created using the spawn editor:

1. Enable editor: `css_dm_editor`
2. Walk to desired spawn location
3. Look in the desired spawn direction
4. Add spawn point (specific command varies by editor)
5. Test spawns
6. Disable editor when complete

## Best Practices

::: tip Weapon Selection
- Start with rifles for balanced practice
- Use AWP mode for sniper training
- Pistol-only for aim improvement
- Random weapons for variety and fun
:::

::: tip Training Focus
- Deathmatch is excellent for:
  - Aim training
  - Spray control practice
  - Movement mechanics
  - Quick decision making
  - Crosshair placement
:::

## Statistics Tracking

Many deathmatch implementations track:
- Kills
- Deaths
- Kill/Death ratio
- Headshot percentage
- Accuracy
- Weapon stats

Stats may be displayed:
- On scoreboard
- In chat commands
- On web leaderboards
- At round/map end

## Performance Tips

### For Players

- Close unnecessary programs for better FPS
- Lower graphics settings if experiencing lag
- Use `net_graph 1` to monitor connection quality

### For Server Admins

- Optimize spawn point count
- Configure appropriate player limits
- Adjust tick rate for performance vs. quality
- Monitor server resources
- Set reasonable respawn delays

## Troubleshooting

::: details Weapon menu not appearing
Ensure you're using the correct command syntax. Try both `css_gun` and `/guns`.
:::

::: details Spawning inside enemies
Increase the spawn distance setting in configuration or adjust spawn points using the spawn editor.
:::

::: details Can't change weapons
Some modes lock weapons for consistency. Check if you're in a restricted mode (pistol-only, AWP-only, etc.).
:::

::: details Spawn protection not working
Verify spawn protection is enabled in server configuration. Some servers disable this feature.
:::

## Command Reference

**Player Commands:**
```
css_gun              # Open weapon menu or list weapons
css_guns             # Weapon selection menu
/w                   # Weapon menu (shorthand)
/weapon              # Weapon menu (alias)
/guns                # Weapon menu (alias)
```

**Admin Commands:**
```
css_dm_editor        # Toggle spawn editor
css_dm_startmode <ID>     # Start custom mode
css_dm_checkdistance <N>  # Show distance beams
```

## Related Features

### Integration with Other Plugins

Deathmatch often integrates with:
- Statistics tracking plugins
- Ranking systems
- Anti-cheat systems
- Admin management

### Map Support

Deathmatch works on:
- All official competitive maps
- Most community maps
- Custom deathmatch-specific maps

Some maps have optimized spawn points for deathmatch gameplay.

## Additional Resources

- [Pro Server Commands](/games/cs2/commands) - All available commands
- [Server Configuration](/games/cs2/rcon) - RCON and settings
- [Admin Setup](/games/cs2/become-admin) - Gain admin access
