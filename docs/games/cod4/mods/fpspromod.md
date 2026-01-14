# FPSChallenge.eu Promod

Specialized Promod variant by FPSChallenge.eu with enhanced features and anti-cheat.

## Overview

[FPSChallenge.eu](https://fpschallenge.eu/) Promod is their own match mod based off of Promod LIVE. It brings a number of fixes, changes, and improvements over the standard Promod LIVE.

::: tip FSHOST Official Provider
FSHOST are an official server provider for the mod. Their Anti-cheat and auto demo upload are supported by our servers.
:::

## Features

### Enhanced Anti-Cheat

FPSChallenge.eu Promod includes integrated anti-cheat protection:
- Real-time cheat detection
- Automatic demo recording
- Suspicious activity logging
- Server-side verification

### Automatic Demo Upload

Matches are automatically recorded and uploaded:
- Seamless demo capture
- Automatic upload to FPS servers
- No manual intervention required
- Full match coverage

### Improvements Over Standard Promod

- Bug fixes and stability improvements
- Enhanced anti-cheat integration
- Better demo management
- Optimized server performance
- Updated competitive ruleset

## FSHOST Integration

### Supported Features

FSHOST servers fully support FPSChallenge.eu Promod with:

**FPS Anti-cheat:**
- Enabled by default on FSHOST servers
- No configuration required
- Automatic updates
- Tournament-ready protection

**FPS Automatic Demo Upload:**
- Demos automatically uploaded after matches
- Accessible via FPSChallenge.eu dashboard
- Includes full match data
- Permanent storage

### Official Server Provider

As an official provider, FSHOST offers:
- Pre-configured servers
- Guaranteed compatibility
- Priority support for FPS mod
- Automatic updates

## Configuration

### Using FPS Promod

Select FPSChallenge.eu Promod when creating your CoD4 server:

1. Choose Call of Duty 4 as game
2. Select "FPSChallenge.eu Promod" as mod
3. Configure match settings
4. Start server

Anti-cheat and demo upload are enabled automatically.

### Match Setup

**Standard 5v5 match:**
```
/rcon promod_mode match_mr12
```

**With knife round:**
```
/rcon promod_mode match_mr12_knife
```

**LAN tournament:**
```
/rcon promod_mode match_mr12_lan
```

::: info Mode Commands
FPS Promod uses the same mode commands as standard Promod LIVE. See [Promod LIVE documentation](/cod4/mods/promodlive) for full command reference.
:::

## Release Notes

For detailed information about changes, fixes, and improvements:

**GitHub Release Notes:**
[github.com/warkingous/promod_x/releases](https://github.com/warkingous/promod_x/releases)

## Differences from Promod LIVE

### Anti-Cheat Integration

FPS Promod includes built-in anti-cheat that:
- Monitors player behavior in real-time
- Detects common cheats automatically
- Logs suspicious activity
- Can auto-ban repeat offenders

### Demo System

Enhanced demo system features:
- Automatic recording of all competitive matches
- Server-side demo storage
- Automatic upload to FPS platform
- Web-based demo viewer

### Bug Fixes

Numerous fixes including:
- Spawn system improvements
- Weapon balance adjustments
- Map exploit fixes
- Network optimization

## Requirements

### Server Requirements

- Call of Duty 4 dedicated server
- CoD4x recommended
- FSHOST hosting (for anti-cheat/demo upload)
- Adequate bandwidth for demo uploads

### Player Requirements

- Standard CoD4 client
- No additional downloads needed
- Compatible with Promod configs
- CoD4x recommended for best experience

## Best Practices

### For Tournament Organizers

::: tip Tournament Setup
1. Use FSHOST servers for official provider status
2. Enable match mode with knife round
3. Verify anti-cheat is active
4. Confirm demo upload functionality
5. Use standard Promod commands
:::

### For Competitive Teams

**Recommended settings:**
```
/rcon promod_mode match_mr12_knife
```

Benefits:
- Automatic anti-cheat protection
- Demos uploaded for review
- FPS tournament compatibility
- Standard competitive format

## Support

### FSHOST Support

For server-related issues:
- [Discord](https://fshost.me/discord)
- #cod4-support channel
- Pro server panel

### FPSChallenge.eu Support

For mod-specific issues:
- [FPSChallenge.eu website](https://fpschallenge.eu/)
- FPS Discord server
- GitHub issues page

## Comparison with Standard Promod

| Feature | Standard Promod | FPS Promod |
|---------|----------------|------------|
| Core Gameplay | ✓ | ✓ |
| Match System | ✓ | ✓ |
| Built-in Anti-cheat | ✕ | ✓ |
| Auto Demo Upload | ✕ | ✓ |
| Bug Fixes | Base | Enhanced |
| FSHOST Integration | ✓ | ✓ (Enhanced) |

## Related Resources

- [Promod LIVE](/cod4/mods/promodlive) - Standard Promod documentation
- [CoD4 RCON Commands](/cod4/rcon) - Server management
- [FPSChallenge.eu](https://fpschallenge.eu/) - Official website
- [GitHub Repository](https://github.com/warkingous/promod_x) - Source code and releases
