# Console Access

Use the server console to monitor your server in real-time and execute admin commands.

## Accessing the Console

1. Log in to your **[Pro Dashboard](https://fshost.me/pro)**
2. Click "View" on your server
3. Navigate to the **Console** tab

## Console Interface

### Log Output Area

The console window shows some or all of the following:

- **Server startup** - Initialisation messages
- **Player connections** - Join/leave notifications
- **Game events** - Kills, deaths, rounds, etc.
- **Errors/Warnings** - Issues and alerts
- **Admin actions** - Commands executed
- **Plugin output** - Messages from mods/plugins

### Command Input

Bottom of console:
- **Input box** - Type commands here
- **Send button** - Execute command (or press Enter)
- **History** - Access previous commands - __Coming Soon__

## Console Features

### Auto-Scroll

- Disabled by default
- Automatically shows newest messages after sending commands
- Disable to review older logs
- Re-enable to jump to bottom

### Search/Filter

Use your browser's find function Cmd+f or Ctrl+f to find specific messages:

1. Click **"Search"** icon
2. Enter search term
3. Matching lines highlighted
4. Use ↑/↓ to navigate results

### Download Logs

If you need your console logs, please ask support as we don't provide them on web or FTP as they're large files.

## Common Console Commands

::: warning Game-Specific
Commands vary by game! These are examples. Check your game's documentation for specific commands (RCON/Admin commands).
:::

### Counter-Strike 2

```bash
# Change map
changelevel de_dust2

# Show message in chat from console to all
say Hello everyone!

# Restart match
mp_restartgame 1
```

### Minecraft

```bash
# Give item to player
give <player> diamond 64

# Teleport player
tp <player> <x> <y> <z>

# Save world
save-all
```

### General Commands (game dependent)

```bash
# Show server status
status

# Show message in chat from console to all
say <message>
```

## Understanding Console Output

### Common Messages

**Server Starting**
```
[INFO] Server starting on port 30150
[INFO] Loading map de_dust2
[INFO] Server ready for connections
```

**Player Activity**
```
[INFO] Player "John" connected (STEAM_1:0:12345)
[INFO] Player "John" disconnected (Disconnect by user)
```

**Errors**
```
[ERROR] Failed to load plugin: missing dependency
```

## Executing Commands

### Basic Command Execution

1. Type command in input box
2. Press Enter or click **"Send"**
3. Command executes immediately
4. Output appears in console

### Command Syntax

Most commands follow patterns:

```bash
command parameter1 parameter2
command "parameter with spaces"
command --flag value
```

### Examples

```bash
# Simple command
status

# Command with parameter
kick PlayerName

# Command with multiple parameters
ban PlayerName "Cheating" 1440

# Command with spaces (use quotes)
say "Server restarting in 2 minutes!"
```

## Monitoring with Console

### Error Tracking

Common errors to watch for:

```
[ERROR] Failed to connect to database
[ERROR] Plugin crash: PluginName
[WARNING] Map file missing: custom_map.bsp
```

## Troubleshooting with Console

### Server Won't Start

Look for these error messages:

```
[ERROR] Port already in use
[ERROR] Missing game files
[ERROR] Configuration error
```

Solutions in **[Troubleshooting](/troubleshooting/)**

### Plugin Errors

Identify problematic plugins:

```
[ERROR] Plugin "ExampleMod" failed to load
[WARNING] Plugin conflict detected
[ERROR] Null pointer exception in PluginName
```

## Advanced Console Use

### RCON (Remote Console)

Access console remotely:

- Configure RCON password
- Use RCON client
- Execute commands from outside server
- See **[RCON Guide](/rcon)**

### Scripting

Execute multiple commands:

```bash
# Create script file (e.g., setup.cfg)
say "Server Setup Starting"
g_gametype war
scr_friendlyfire 0
map mp_crash
say "Server ready!"
```

Then you can add this to your main server config or execute it manually via RCON:
```bash
# Add this to your server config
exec setup.cfg

# Or load it via RCON
rcon exec setup.cfg
```

## Security Considerations

### Command Permissions

::: danger
Never share console access with untrusted users:
- Full server control
- Can shut down server
- Can ban players
- Can modify settings
:::

### Sensitive Information

Console may display:

- Player IP addresses
- RCON passwords (in some logs)
- API keys from plugins
- Be careful when sharing logs

### Asking for Support

You don't need to share logs with support

## Need Help?

- **[Pro Support](https://fshost.me/pro/support)** - Follow the options on the Support page on our website