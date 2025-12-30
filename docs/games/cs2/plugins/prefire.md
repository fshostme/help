# OpenPrefirePrac Plugin

Server-side prefire practice plugin for CS2, powered by CounterStrikeSharp. Practice common prefire angles on competitive maps with support for concurrent multiplayer sessions.

::: tip Pro Feature
This plugin is available exclusively on Pro servers.
:::

## Getting Started

**Activating the Plugin:**

1. Enable the plugin with `!prefireon` command
2. Open chat and type `!prefire` or use `css_prefire` in console
3. Navigate the main menu to configure your practice session

The main menu provides options for:
- Starting practice routes
- Changing maps
- Setting difficulty
- Selecting training mode
- Choosing bot weapons
- Changing language
- Exiting practice mode

## Command Reference

### Start Practice

**Command:** `!prefire prac [route_number]`

Begin practicing on a selected route.

**Examples:**
```bash
!prefire prac          # Opens route selection menu
!prefire prac 1        # Start route #1 directly
!prefire prac 5        # Start route #5 directly
```

### Map Selection

**Command:** `!prefire map [map_name]`

Switch to another map for practice.

**Example:**
```bash
!prefire map de_dust2
!prefire map de_mirage
!prefire map de_inferno
```

::: tip Supported Maps
OpenPrefirePrac includes prefire routes for all active duty competitive maps.
:::

### Difficulty Settings

**Command:** `!prefire df [1-6]`

Set the difficulty level for bot reactions and accuracy.

**Difficulty Levels:**
- **1** - Very Easy (slow reaction, poor accuracy)
- **2** - Easy
- **3** - Medium
- **4** - Hard
- **5** - Very Hard
- **6** - Expert (instant reaction, high accuracy)

**Example:**
```bash
!prefire df 3          # Medium difficulty
!prefire df 5          # Very hard difficulty
```

### Training Mode

**Command:** `!prefire mode [rand/full]`

Set the training mode type.

**Modes:**
- **rand** - Random selection of angles
- **full** - Complete route in sequence

**Example:**
```bash
!prefire mode rand     # Random angle selection
!prefire mode full     # Full route practice
```

### Bot Weapons

**Command:** `!prefire bw [weapon_type]`

Set weapons for practice bots.

**Available Weapons:**
- `rand` - Random weapon selection
- `usp` - USP-S pistol
- `ak` - AK-47 rifle
- `sct` - SSG 08 (Scout) sniper
- `awp` - AWP sniper

**Example:**
```bash
!prefire bw ak         # Bots use AK-47
!prefire bw rand       # Random weapons
!prefire bw awp        # AWP practice
```

### Language Selection

**Command:** `!prefire lang [language_code]`

Set the language for practice mode messages.

**Supported Languages:**
- `en` - English
- `pt` - Portuguese
- `zh` - Chinese

**Example:**
```bash
!prefire lang en       # English
!prefire lang pt       # Portuguese
```

### Exit Practice

**Command:** `!prefire exit`

Stop practicing and exit prefire practice mode.

**Example:**
```bash
!prefire exit
```

## Practice Workflow

### Recommended Setup

1. **Load the plugin:**
   ```bash
   !prefireon
   ```

2. **Select your map:**
   ```bash
   !prefire map de_dust2
   ```

3. **Configure difficulty:**
   ```bash
   !prefire df 4
   ```

4. **Choose training mode:**
   ```bash
   !prefire mode full
   ```

5. **Set bot weapons:**
   ```bash
   !prefire bw ak
   ```

6. **Start practice:**
   ```bash
   !prefire prac 1
   ```

### Quick Practice Session

For a quick practice session with default settings:

```bash
!prefireon             # Enable plugin
!prefire               # Open menu
# Select route from menu
```

## Practice Tips

::: tip Difficulty Progression
Start with difficulty level 2-3 when learning new angles, then increase to 4-5 as you improve. Level 6 is for advanced players seeking maximum challenge.
:::

::: tip Full Route vs Random
- **Full route:** Best for learning all angles on a route systematically
- **Random mode:** Better for reaction training and testing your knowledge
:::

::: tip Bot Weapons
Practice against the weapons you'll commonly face:
- Use `ak` or `usp` for realistic competitive scenarios
- Use `awp` to practice peeking against AWPers
- Use `rand` for varied practice situations
:::

## Troubleshooting

::: details Plugin not responding
Verify you've activated the plugin with `!prefireon` before using other commands.
:::

::: details Routes not loading
Ensure you're on a supported competitive map. Not all custom maps have prefire routes configured.
:::

::: details Can't see the menu
Try using the console command `css_prefire` instead of the chat command.
:::

## Command Summary

Quick reference for all commands:

```bash
!prefireon                    # Enable plugin
!prefire                      # Open main menu
!prefire prac [number]        # Start route
!prefire map [name]           # Change map
!prefire df [1-6]             # Set difficulty
!prefire mode [rand/full]     # Set training mode
!prefire bw [weapon]          # Set bot weapons
!prefire lang [code]          # Set language
!prefire exit                 # Exit practice
!prefire help                 # Show command help
```

## Additional Resources

- [Practice Mode Guide](/games/cs2/plugins/matchzy) - MatchZy practice features
- [Pro Commands](/games/cs2/commands) - All Pro server commands
- [Admin Guide](/games/cs2/become-admin) - Admin access setup
