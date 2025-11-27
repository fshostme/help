# File Manager

We offer FTP access on certain games to manage your game servers. Please check the pricing pages for your game to confirm if FTP is available or not.

With FTP, we offer access to mods/configs/maps and any assets of those (based on the game). CS2 demos are available on the Files tab unless you have a custom setup by us.

::: warning Enabling FTP
We can enable FTP for your server but support is limited after you install additional plugins/mods or make major changes.
:::

## Accessing FTP

1. Log in to your **[Server List](https://fshost.me/pro/servers)**
2. Click "View" on your server
3. Navigate to the **Files** tab
4. FTP details will be shown if we've enabled FTP, you'll need to contact us to get it set up
5. Use an FTP client like FileZilla, WinSCP, etc


## Common File Types

**Configuration Files (.cfg, .ini, .conf)**
- Server settings
- Game rules
- Plugin configs

**JSON Files (.json)**
- Structured data
- Settings files
- Mod configurations

**Text Files (.txt)**
- Server MOTDs
- Ban lists
- Whitelists

## Important Directories

### Counter-Strike 2

```
/csgo/cfg/           - Configuration files
/csgo/addons/        - Plugins and mods
/csgo/logs/          - Server logs
```

### Minecraft

```
/server.properties   - Main config
/world/              - World save files
/plugins/            - Plugin folder (Bukkit/Spigot)
/mods/               - Mod folder (Forge/Fabric)
/logs/               - Server logs
```

## Best Practices

### Before Editing Files

::: tip Safety First
1. **Backup First** - Always backup before editing important files
2. **Test Changes** - Make small changes and test
3. **Keep Originals** - Keep a copy of original configs
4. **Use Comments** - Comment your changes for future reference
:::

### Configuration File Tips

When editing configs:

```ini
# Original value (keep as reference)
# ff_type = 1

# Your custom value
ff_type = 2
```

### Avoid Common Mistakes

- Don't delete system files
- Don't remove file extensions when renaming
- Don't edit files while server is writing to them

## Troubleshooting

### Can't Edit File

If file editing is blocked:

1. Check file permissions
2. Ensure server is stopped (for some files)
3. Verify file isn't corrupted
4. Try downloading and re-uploading

### Upload Failed

If file upload fails:

1. Check the file extension is allowed
2. Ask support to increase storage if you get quota usage error

## Need Help?

- **[Pro Support](https://fshost.me/pro/support)** - Follow the options on the Support page on our website