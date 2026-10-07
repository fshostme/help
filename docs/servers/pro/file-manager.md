# File Manager

We offer FTP access on certain games to manage your game servers. Please check the pricing pages for your game to confirm if FTP is available or not.

With FTP, you get access to the folders that hold configs, plugins and mods for your game, not the whole server. The folders differ per game, see [Important Directories](#important-directories). CS2 demos are not on FTP. Download them from **Demo files** on the **Files** tab.

::: warning Enabling FTP
We can enable FTP for your server but support is limited after you install additional plugins/mods or make major changes.
:::

## Accessing FTP

See [FTP Access](/servers/pro/ftp) for how to request FTP, where to find your login details and how to connect with FileZilla or WinSCP.

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

When you log in with FTP, each folder you have access to shows up at the top level. These are the folders a server gets by default:

| Game | FTP folders |
|------|-------------|
| Counter-Strike 2 | `addons`, `cfg` |
| Counter-Strike 1.6 | `cstrike`, `fastdl` |
| Counter-Strike: Source | `cstrike`, `fastdl` |
| Half-Life Deathmatch | `valve`, `fastdl` |
| Team Fortress 2 | `tf` |
| Call of Duty 2 | `fastdl` |
| Call of Duty 4 | `fastdl` |
| Minecraft | `server` |
| Medal of Honor: Allied Assault | `server` |
| Palworld | `config`, `saves` |

`fastdl` is for [FastDL](/servers/pro/ftp#fastdl-fast-downloads) files. If you need a folder that is not listed, ask on your FTP ticket.

### Counter-Strike 2

```
/addons/   - Metamod, CounterStrikeSharp and plugins
/cfg/      - Configuration files, such as server.cfg
```

Demos are not included on FTP yet. Download them from **Demo files** on the **Files** tab. See [CSTV](/games/cs2/cstv#accessing-demos).

### Minecraft

```
/server/server.properties   - Main config
/server/world/              - World save files
/server/plugins/            - Plugin folder (Bukkit/Spigot)
/server/mods/               - Mod folder (Forge/Fabric)
/server/logs/               - Server logs
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