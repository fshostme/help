# WeaponPaints (Skins)

Customize weapon skins, floats, seeds, gloves, and agent models on your CS2 server.

::: tip Pro Feature
WeaponPaints plugin is available exclusively on Pro servers
:::

## Features

- **Weapon Skins** - Apply any CS2 weapon skin
- **Wear & Float** - Customize wear values for your skins
- **Seed Control** - Set specific pattern seeds
- **Knife Skins** - Choose from any knife skin
- **Gloves** - Customize glove appearance
- **Agent Skins** - Change player models (web interface only)
- **Pins** - Equip collectible pins
- **Music Kits** - Customize MVP music

::: tip Web-Based Customization
For the best customization experience, use the web interface at [skins.fsho.st](https://skins.fsho.st) to select skins, adjust float values, and configure advanced options.
:::

## Getting Started

### Initial Setup

1. Visit [skins.fsho.st](https://skins.fsho.st)
2. Sign in with Steam
3. Configure your desired skins and settings
4. Join your server
5. Your skins automatically apply

## In-Game Commands

All commands use the `!` prefix in chat:

### General Commands

**Weapon Paints help:**
```bash
!ws
```

Displays available weapon paint commands.

**Refresh skins:**
```bash
!wp
```

Reloads your skin configuration from the database.

### Skin Selection

**Weapon skins menu:**
```bash
!skins
```

Opens in-game menu for selecting weapon skins.

**Knife skins menu:**
```bash
!knife
```

Browse and select knife skins.

**Glove skins menu:**
```bash
!gloves
```

Choose from available glove skins.

**Agent skins menu:**
```bash
!agents
```

Select agent/player models.

### Cosmetics

**Collectible pins:**
```bash
!pins
```

Select and equip collectible pins.

**Music kits:**
```bash
!music
```

Choose your MVP music kit.

::: warning Music Kit Requirement
Before using `!music`, you must select the **default CS2 Music Kit** from your in-game Steam inventory, or the custom music kit will not function.
:::

**Seed & Wear:**
```bash
!float <value> - Change weapon wear (0.00 to 1.00)
!float` - Show the current weapon's float value
!seed <value>` - Change weapon pattern seed (0-999)
!seed` - Show the current weapon's seed value
```
## Web Interface Features

The web interface at [skins.fsho.st](https://skins.fsho.st) provides additional capabilities:

### Advanced Customization

- **Float Value Control** - Set exact wear values (0.00 - 1.00)
- **Seed Selection** - Choose specific pattern seeds
- **Sticker Positioning** - Add and position stickers (if supported)
- **Agent Configuration** - Full agent model customization
- **Batch Configuration** - Configure multiple items at once

### Float Values Explained

Float values determine weapon wear:

| Range | Condition |
|-------|-----------|
| 0.00 - 0.07 | Factory New |
| 0.07 - 0.15 | Minimal Wear |
| 0.15 - 0.38 | Field-Tested |
| 0.38 - 0.45 | Well-Worn |
| 0.45 - 1.00 | Battle-Scarred |

::: tip Low Float Values
Lower float values (closer to 0.00) result in cleaner, less worn skins. Set to 0.01 for nearly pristine appearance.
:::

## Command Reference

Quick reference for all commands:

```bash
!ws              # Show available commands
!wp              # Refresh/reload skins
!skins           # Weapon skins menu
!knife           # Knife skins menu
!gloves          # Glove skins menu
!agents          # Agent skins menu
!pins            # Collectible pins menu
!music           # Music kit menu
```

## Data Synchronization

### How Sync Works

1. Configure skins via web interface
2. Join your server
3. Skins automatically load from database
4. Changes sync on next connect or when using `!wp`

### Manual Refresh

If your skins don't appear after changing them:

```bash
!wp
```

Or reconnect to the server.

## Troubleshooting

::: details Skins not appearing
1. Verify GSLT is configured correctly
2. Check you're logged into the website with the correct Steam account
3. Use `!wp` to refresh skins
4. Reconnect to the server
5. Verify the plugin is enabled on your server
:::

::: details Music kit not working
Ensure you have the **default CS2 Music Kit** selected in your Steam inventory before using custom music kits.
:::

::: details Agent skins not changing
Agent skins must be configured through the web interface at [skins.fsho.st](https://skins.fsho.st). The in-game menu may have limited functionality.
:::

::: details Float values not applying
Float value customization requires configuration through the web interface. In-game menus may only allow skin selection without float control.
:::

## Best Practices

::: tip Configuration Tips
- Use the web interface for precise float and seed control
- Configure skins before joining the server for immediate application
- Keep float values above 0.00 to avoid potential rendering issues
- Test new configurations in a practice server first
:::

::: tip Performance
Weapon skins have minimal performance impact. However, on lower-end systems, simplified agent models may improve FPS.
:::

## Known Limitations

- Full agent customization requires web interface
- Some advanced sticker positioning features may be incomplete
- Float value precision may vary by skin
- Workshop skins are not supported
- Skin changes require database sync (small delay possible)

## Additional Resources

- **Web Interface for Skins:** [skins.fsho.st](https://skins.fsho.st)
- **GSLT Setup:** [Steam Game Server Management](https://steamcommunity.com/dev/managegameservers)
- **Support:** [FSHOST Discord](https://fshost.me/discord) - #pro-support
- **Plugin Updates:** Check Discord announcements for feature additions

## Privacy Note

WeaponPaints stores your skin preferences in the server database associated with your Steam ID. This data is used solely for providing skin functionality on FSHOST servers.
