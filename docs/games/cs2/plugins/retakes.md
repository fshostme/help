# Retakes Plugin

CS2 Retakes implementation with RetakesAllocator for customizable bomb site retake practice.

::: tip Pro Feature
Retakes plugin is available exclusively on Pro servers.
:::

## Overview

Practice bomb site retakes with customizable loadouts, spawn positions, and team configurations. Built with CounterStrikeSharp, this plugin brings the popular retakes game mode to CS2.

## Features

- Automatic team balancing
- Customizable weapon allocations
- Configurable spawn positions
- Bombsite rotation control
- Player loadout management
- Spawn point editor for admins

## Weapon Selection Commands

### Accessing Weapon Menus

**Chat-based weapon menu:**
```bash
.guns
.gun
!guns
!gun
```

Opens the weapon selection menu in chat.

**Center screen menu:**
```bash
!gunsmenu
!gunmenu
.gunmenus
```

Opens the weapon selection menu in the center of your screen for easier access.

### How Weapon Selection Works

1. Type `.guns` or `!guns` in chat
2. Select your preferred weapons from the menu
3. Weapons are saved to your profile
4. Your loadout automatically applies on spawn

::: tip Loadout Persistence
Weapon selections are saved across rounds and server sessions.
:::

## Spawn Management

::: warning Admin Only
Spawn management commands require admin permissions.
:::

### Viewing Spawns

**Display spawn points:**
```bash
!showspawns A
!showspawns B
```

Shows all spawn positions for the specified bombsite.

**Arguments:**
- `A` - Show A site spawns
- `B` - Show B site spawns

### Adding Spawn Points

**Add new spawn:**
```bash
!addspawn CT Y
!addspawn CT N
!addspawn T Y
!addspawn T N
```

Adds a spawn point at your current position.

**Arguments:**
- `CT` or `T` - Team for this spawn
- `Y` or `N` - Can this spawn be used for the bomb planter?

**Examples:**
```bash
!addspawn CT Y        # CT spawn, can be planter
!addspawn T N         # T spawn, not planter
!addspawn CT N        # CT spawn, not planter
```

::: tip Adding Spawns
Stand in the desired position and view direction before using `!addspawn`. The spawn will use your exact position and angle.
:::

### Removing Spawns

**Delete nearest spawn:**
```bash
!removespawn
```

Removes the spawn point closest to your current position for the currently shown bombsite.

### Teleporting to Spawns

**Teleport to nearest:**
```bash
!nearestspawn
```

Instantly teleports you to the nearest spawn point. Useful for testing spawn positions.

### Exit Spawn Editor

**Stop editing spawns:**
```bash
!hidespawns
```

Exits spawn editing mode and hides all spawn indicators.

## Team Management

### Scrambling Teams

**Randomize teams:**
```bash
!scramble
```

Randomly redistributes players across both teams for the next round.

::: tip When to Scramble
Use this command when teams become unbalanced or to mix up player matchups.
:::

## Configuration

### RetakesAllocator Config File

Advanced configuration is available through the config file:

**Location:**
```bash
csgo/addons/counterstrikesharp/configs/plugins/RetakesAllocator/RetakesAllocator.json
```

**Configurable Options:**
- Team balancing rules
- Weapon allocation probabilities
- Equipment loadouts per role
- Bombsite selection frequency
- Round settings
- Spawn selection logic

::: details Example Configuration Options
The configuration file allows you to customize:
- How often each bombsite is selected
- Weapon distribution (e.g., AWPs per team)
- Utility allocation (smokes, flashes, etc.)
- Player role assignments
- Team size balancing
:::

### Accessing the Config

**Pro servers:**
1. Connect via FTP (request access in Discord #pro-support)
2. Navigate to config location
3. Edit `RetakesAllocator.json`
4. Restart server to apply changes

## Typical Retake Round Flow

1. **Round Start**
   - Players spawn at random positions
   - Terrorists have bomb planted at A or B
   - Teams have pre-configured loadouts

2. **Retake/Defense**
   - CTs attempt to retake the site
   - Ts defend the planted bomb
   - Round ends on elimination or detonation/defusal

3. **Next Round**
   - Teams may swap or scramble
   - New bombsite selected
   - New spawn positions assigned

## Spawn Editor Workflow

For admins setting up custom spawns:

1. **Show spawns for a site:**
   ```bash
   !showspawns A
   ```

2. **Position yourself:**
   - Walk to desired spawn location
   - Aim in the direction players should face

3. **Add the spawn:**
   ```bash
   !addspawn CT Y
   ```

4. **Test the spawn:**
   ```bash
   !nearestspawn
   ```

5. **Repeat for all positions**

6. **Exit editor:**
   ```bash
   !hidespawns
   ```

7. **Test in-game:**
   - Start a retake round
   - Verify spawns work correctly

## Best Practices

::: tip Spawn Placement
- Place spawns with cover nearby
- Ensure spawns don't face walls
- Distribute spawns evenly around the site
- Test spawns from both teams' perspectives
- Mark planter spawns strategically for T side
:::

::: tip Team Balance
Use `!scramble` regularly in casual retake sessions to maintain competitive balance and prevent one-sided rounds.
:::

## Troubleshooting

::: details Weapon menu not appearing
Ensure you're typing the command in chat, not console. Try both `.guns` and `!guns` syntax.
:::

::: details Can't add spawns
Verify you have admin permissions. Spawn editing requires elevated access.
:::

::: details Spawns not saving
Check that your server has write permissions to the configuration directory. Contact support if issues persist.
:::

## Command Summary

**Player Commands:**
```bash
.guns / !guns              # Open weapon menu
!gunsmenu                  # Center screen menu
```

**Admin Commands:**
```bash
!showspawns A              # Show A site spawns
!addspawn CT Y             # Add CT spawn (planter: yes)
!removespawn               # Remove nearest spawn
!nearestspawn              # Teleport to nearest spawn
!hidespawns                # Exit spawn editor
!scramble                  # Randomize teams
```

## Additional Resources

- [Pro Server Commands](/games/cs2/commands) - All available commands
- [Admin Setup](/games/cs2/become-admin) - Gain admin access
- [Plugin List](/games/cs2/plugins) - Other available plugins
