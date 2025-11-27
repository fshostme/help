# RCON (Remote Console)

RCON allows you to remotely control and manage your game server through a command-line interface.

## What is RCON?

RCON (Remote Console) is a protocol that allows server administrators to:

- Execute server commands remotely
- Manage players (kick, ban, etc.)
- Change server settings without direct access
- Monitor server activity
- Automate server management tasks

## How RCON Works

RCON uses a password-protected connection to send commands to your server:

1. **Configure** - Set up RCON password in server config
2. **Connect** - Use RCON client or tool to connect
3. **Authenticate** - Enter RCON password
4. **Execute** - Send commands to the server
5. **Receive** - Get command output/responses

## Using RCON

### Connection Requirements

To use RCON, you need:

- **Server IP** - Your server's IP address
- **RCON Port** - Usually separate from game port
- **RCON Password** - Set in server configuration
- **RCON Client** - Application or in-game console

### RCON Clients

Popular RCON clients:

- **In-game Console** - Built into many games (CS2, etc.)
- **Web-based Tools** - FSHOST RCON via Console
- **Desktop Applications** - Dedicated RCON clients

## Game-Specific RCON Guides

Different games implement RCON differently. See your game's specific guide:

### Counter-Strike 2

RCON guide coming soon.

### Other Games

RCON guides for other games coming soon:

- Call of Duty
- Call of Duty 2
- Call of Duty 4
- Call of Duty: United Offensive
- Call of Duty: World at War
- Counter-Strike 1.6
- Counter-Strike: Condition Zero
- Counter-Strike: Source
- Half-Life Deathmatch
- Medal of Honor: Allied Assault
- Minecraft
- Team Fortress 2
- Valheim

## Security Considerations

### Common Security Mistakes

❌ **Don't**:
- Use simple passwords like "admin123"
- Share RCON password publicly
- Reuse passwords across servers

✅ **Do**:
- Use password generators for strong passwords
- Keep RCON credentials private
- Enable logging for RCON commands

## Common RCON Commands

::: warning
Commands vary by game! These are examples only.
:::

### Universal Commands (Most Games)

```bash
# View server status
status

# Send message to all players
say "Server restarting in 5 minutes"

# Kick player
kick PlayerName

# Ban player
ban PlayerName
```

### Game-Specific Commands

For full command lists, see your game's RCON guide linked above.

## Troubleshooting RCON

### Commands Not Working

If RCON commands fail:

- Verify command syntax for your game
- Check you have admin privileges (or that you've logged in first)
- Test with something basic like `status` or `say test`
- Review console for error messages
- See game-specific RCON guide

## Need Help?

- **[Pro Support](https://fshost.me/pro/support)** - Follow the options on the Support page on our website