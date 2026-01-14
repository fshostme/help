# Stock Custom Maps

Use custom maps while maintaining stock game settings.

## Overview

Stock Custom Maps is a "fake" mod that enables the use of custom maps on your Call of Duty 4 server while preserving all standard game settings and mechanics. This allows you to expand map variety without changing the core gameplay experience.

## What is a "Fake" Mod?

### Purpose

**Not a traditional mod:**
- Doesn't modify gameplay
- Doesn't change weapons
- Doesn't alter game mechanics
- Simply enables custom map loading

**Enables:**
- Custom map support
- Workshop map compatibility
- Community map rotation
- Extended map pool

## Why Use Stock Custom Maps?

### Benefits

**Keep standard gameplay:**
- Normal weapon balance
- Default game modes
- Standard mechanics
- Familiar experience

**Add map variety:**
- Play community maps
- Use custom layouts
- Try new environments
- Expand rotation

**Easy setup:**
- No complex configuration
- Works like vanilla CoD4
- Simple map management
- Compatible with most maps

## How It Works

### Technical Details

The mod acts as a loader that:
1. Enables custom map file reading
2. Maintains stock game settings
3. Preserves default configs
4. Allows map rotation

### Compatibility

**Works with:**
- Community-created maps
- Downloaded custom maps
- Standard game modes
- All weapon configurations

**Does not affect:**
- Weapon balance
- Game modes
- Player mechanics
- Server settings

## Using Stock Custom Maps

### Server Setup

1. Select "Stock Custom Maps" as mod
2. Add custom maps to server
3. Configure map rotation
4. Start server with standard settings

### Map Configuration

**Add maps to rotation:**
```
/rcon sv_maprotation "map mp_custom1 map mp_custom2 map mp_strike"
```

Mix custom and stock maps freely.

### Game Modes

**All standard modes work:**
- Deathmatch (dm)
- Team Deathmatch (war)
- Search & Destroy (sd)
- Domination (dom)
- Headquarters (koth)
- Sabotage (sab)

## Custom Map Sources

### Finding Maps

**Popular sources:**
- GameBanana
- ModDB
- Custom map websites
- Community forums

### Map Types

**Compatible maps:**
- Community remakes
- Original designs
- Competitive layouts
- Fun maps

**Incompatible maps:**
- Mod-specific maps
- Maps requiring special mods
- Maps with custom assets requiring client downloads

## Configuration

### Standard RCON Commands

Use normal CoD4 commands:

**Map change:**
```
/rcon map mp_custommap
```

**Map rotation:**
```
/rcon sv_maprotation "map mp_map1 map mp_map2"
```

**Game mode:**
```
/rcon g_gametype sd
```

### Server Settings

**Hostname:**
```
/rcon sv_hostname "Custom Maps - free @ fshost.me"
```

**Password:**
```
/rcon g_password ""
```

All standard RCON commands work normally.

## Advantages

### For Server Operators

**Easy management:**
- No complex mod configuration
- Standard server commands
- Simple map addition
- Normal game modes

**Player friendly:**
- No client downloads needed (for most maps)
- Familiar gameplay
- Easy to join
- Standard controls

### For Players

**Familiar experience:**
- Same gameplay as vanilla
- Known weapon balance
- Standard mechanics
- Easy adaptation

**New content:**
- Fresh maps to explore
- Different layouts
- Varied environments
- Extended playtime

## Limitations

### What It Doesn't Do

**No gameplay changes:**
- Can't modify weapons
- Can't add new features
- Can't change mechanics
- Can't add special modes

**Map restrictions:**
- Some maps may require client downloads
- Complex custom assets might not work
- Mod-specific maps incompatible
- Some features may be limited

## Comparison with Other Mods

| Feature | Stock Custom Maps | Promod | Other Mods |
|---------|-------------------|--------|------------|
| Custom Maps | ✓ | ✓ | ✓ |
| Gameplay Changes | ✕ | ✓ | ✓ |
| Stock Settings | ✓ | ✕ | ✕ |
| Easy Setup | ✓ | ✕ | Varies |
| Client Downloads | Minimal | Required | Required |

## Use Cases

### Ideal For

**Casual servers:**
- Want map variety
- Keep standard gameplay
- Simple management
- Wide compatibility

**Public servers:**
- Easy for new players
- No learning curve
- Standard experience
- Extended map pool

**Practice servers:**
- Try new layouts
- Standard mechanics
- Easy testing
- Quick setup

### Not Ideal For

**Competitive play:**
- Use Promod instead
- Needs balanced settings
- Requires standard maps

**Modded gameplay:**
- Use appropriate mod
- Needs feature changes
- Requires custom mechanics

## Getting Started

### Quick Setup

1. **Select mod** - Choose Stock Custom Maps
2. **Add maps** - Upload custom maps
3. **Configure rotation** - Set map order
4. **Test** - Join and verify
5. **Launch** - Open to players

### Adding Your First Map

1. Find compatible custom map
2. Upload to server
3. Add to rotation:
```
/rcon sv_maprotation "map mp_yourmap"
```
4. Change map:
```
/rcon map mp_yourmap
```

## Troubleshooting

::: details Map won't load
- Verify map file is uploaded
- Check map name is correct
- Ensure map is CoD4 compatible
- Verify file isn't corrupted
:::

::: details Players can't join
- Some maps require client downloads
- Check file size limits
- Verify map compatibility
- Try different map
:::

::: details Standard maps don't work
- Mix custom and stock maps freely
- Use normal map names
- Verify map rotation syntax
:::

## Related Resources

- [CoD4 RCON Commands](/games/cod4/rcon) - Server management
- [Promod LIVE](/games/cod4/mods/promodlive) - Competitive gameplay
- [GunGame](/games/cod4/mods/gungame) - Alternative mod
- [Support](https://fshost.me/discord) - Get help
