# GunGame v1.0

Progressive weapon gameplay mod where kills advance you through weapon tiers.

## Overview

GunGame transforms your Call of Duty 4 server into a fast-paced, progressive shooting experience. Players start with a basic weapon and advance through increasingly challenging weapons with each kill, racing to be the first to complete all weapon tiers.

## Features

### Core Gameplay

**Turbo Mode:**
- Get your weapon immediately
- Or wait until next spawn
- Configurable per-server

**Progressive Leveling:**
- Changeable number of kills for level-up
- Customizable weapon sequence
- Multiple weapon tiers

**Penalties:**
- Changeable levels lost on teamkill
- Configurable suicide penalties
- Optional level stealing

### Advanced Features

**Health System:**
- Changeable health regeneration time
- Option to disable regeneration completely
- Balanced for competitive play

**Weapon Drops:**
- Enable/Disable weapon drops
- Keeps map clean when disabled
- Prevents weapon hoarding

**Knife Mechanics:**
- Enable/Disable knife nerf (2 hits kill)
- Level stealing with knife (Knife Pro)
- High-risk, high-reward gameplay

**Grenade Options:**
- Enable/Disable cookable frag grenades
- Adds tactical depth
- Configurable per-server

**Sniper Settings:**
- Increased damage for bolt-action snipers
- Or increased damage for all snipers
- Makes sniper levels more viable

### Player Experience

**Handicap System:**
If a player joins mid-game:
- Auto-leveled to worst player's level
- Ensures fair competition
- Prevents severe disadvantage

**Visual Feedback:**
- Enable/Disable hit icon
- New Killing Spree notifications
- Multi-kill sounds
- New Message Center

**Server Management:**
- Welcome Messages for new players
- Server Map Rotation if empty
- Automatic match management

## Admin Commands

**Switch player team:**
```
gg_switch_team [player number]
```

**Move to spectator:**
```
gg_switch_spec [player number]
```

**Set player level:**
```
gg_set_level [player number]:[new level number]
```

### Admin Examples

**Move player 3 to spectator:**
```
gg_switch_spec 3
```

**Set player 5 to level 10:**
```
gg_set_level 5:10
```

**Switch player 2's team:**
```
gg_switch_team 2
```

## Gameplay Mechanics

### Leveling Up

**Standard progression:**
1. Kill enemies to advance
2. Each kill moves you closer to next weapon
3. First to complete all weapons wins

**Knife Pro:**
- Kill enemy with knife
- Steal their level
- High risk for high reward

### Weapon Sequence

Typical weapon progression (customizable):
1. Pistols (starting)
2. Submachine guns
3. Assault rifles
4. Light machine guns
5. Sniper rifles
6. Launchers
7. Knife (final weapon)

### Penalties

**Teamkill:**
- Lose configurable number of levels
- Prevents griefing
- Encourages careful play

**Suicide:**
- Lose configurable number of levels
- Discourages rushing
- Tactical consideration

## Configuration

### Server Settings

All GunGame settings are configured server-side via Dvars:

**Kills per level:**
- Adjust difficulty
- Control match length
- Balance for player count

**Level loss penalties:**
- Teamkill penalty
- Suicide penalty
- Knife steal mechanics

**Weapon sequence:**
- Custom weapon order
- Skip unwanted weapons
- Tournament-specific loadouts

**Gameplay options:**
- Turbo mode on/off
- Handicap system
- Health regeneration

## Best Practices

### Recommended Settings

::: tip Balanced Gameplay
- **Turbo Mode:** On (for faster gameplay)
- **Knife nerf:** Enabled (2 hits to kill)
- **Level stealing:** Enabled (adds excitement)
- **Handicap:** Enabled (fair for joiners)
- **Weapon drops:** Disabled (cleaner map)
:::

### For Competitive Play

**Tournament setup:**
- Fixed weapon sequence
- No handicap system
- Equal spawn points
- Consistent settings

### For Public Servers

**Casual play:**
- Handicap enabled
- Quick respawns
- Welcome messages
- Map rotation

## Player Commands

### In-Game Actions

Players typically interact through:
- Standard combat (kill to level)
- Knife kills (level stealing if enabled)
- Death (level loss penalties)

No special player commands needed - all gameplay is automatic.

## Troubleshooting

::: details Not leveling up after kills
Check:
- Kill count requirement per level
- Correct enemy team
- Not affected by teamkill penalty
:::

::: details Stuck at knife level
This is intentional:
- Knife is typically the final weapon
- First to get knife kill wins
- Most challenging level
:::

::: details Losing levels unexpectedly
Possible causes:
- Teamkill penalty
- Suicide penalty
- Enemy knife steal (if enabled)
:::

## Comparison with Standard Modes

| Feature | Standard CoD4 | GunGame |
|---------|---------------|---------|
| Weapon Selection | Loadout choice | Progressive |
| Victory Condition | Score/objectives | First through weapons |
| Respawn | Standard | Immediate |
| Team Balance | Important | Less critical |
| Match Duration | Time-based | First to finish |

## Related Resources

- [CoD4 RCON Commands](/games/cod4/rcon) - Server management
- [Stock Custom Maps](/games/cod4/mods/stock-custom-maps) - Add variety
- [Screenshots](https://fshost.me/screenshots) - View servers
- [Support](https://fshost.me/discord) - Get help
