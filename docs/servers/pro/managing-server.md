# Managing Your Server

Learn how to configure and manage your FSHOST.me game server.

## Accessing Server Management

1. Log in to your **[Dashboard](https://fshost.me/pro/servers)**
2. Click on your server name
3. You'll see the server management page

## Server Management Page

### Overview Tab

The overview shows:

- **Server Status** - Current state (Running/Stopped)
- **Connection Info** - IP, Port, and connection string
- **Player Count** - Current players online
- **Resource Usage** - CPU, RAM, Disk (Pro servers)
- **Billing** - When you paid and when it's expiring

### Quick Actions

**Power Controls**
- **Start** - Boot up the server
- **Stop** - Shut down gracefully
- **Restart** - Stop and start again
- **Update** - Update after a Steam update

## Configuration

### Server Settings

Access via the **Edit** button:

**General Settings**
- Server name
- Description
- Password protection
- Max players
- Admin password

**Game-Specific Settings**
- Game mode
- Map/World settings
- Mods
- Versions
- Cracked options

::: warning Advanced
Only modify additional settings which change startup parameters if you know what you're doing.
:::

### Applying Changes

After changing settings:

1. Click **"Save"**
2. Restart the server for changes to take effect

## Scheduled Tasks

### Creating Schedules

Automate server management:

::: warning Coming soon
We're planning on providing scheduled tasks so you can do automated functions.
:::

**Auto-Restart**
- Some of our games automatically restart daily.
- Prevents memory leaks
- Good for performance

### Current Schedule for CoD4, CS1.6, and CS2

```
Daily Restart: 9:05 AM server time
Info: Only restarted if not restarted in the past 3 hours
```

## Server Updates

### Updating Your Server

To apply updates from Steam/Valve:

Note: No need to stop your server if it's running. It will be booted back up.

1. Click **"Steam Update Required"**
2. Wait for update to finish
3. If your server was stopped, start it.

## Historical Data

View graphs for:

- Player count trends
- Resource usage over time
- Server actions
- Billing charges

## Networking

### Port Configuration

View your assigned ports:

- **Game Port** - Main server port
- **Query Port** - Server list queries
- **RCON Port** - Remote console (if enabled)
- **CSTV Port** - Counter-Strike TV. This is a spectator mode for Counter-Strike that allows players and fans to watch your live games with a slight delay or watch replays (if enabled)

::: warning
Ports are assigned automatically and cannot be changed unless agreed by us.
:::

### Firewall / DDoS Mitigation

Pro servers have predefined rules to help block attacks and cannot be managed by you:

- Custom ports are available on request
- DDoS protection settings are predefined

## Advanced Features

### RCON Access

For remote server management:
- **[RCON Guide](/rcon)**
- Configure RCON password
- Use RCON client or use it in-game

### FTP Access

Some servers offer FTP for file management:

- Get FTP credentials from control panel
- Use FileZilla or similar client
- Direct file access

### API Access

Pro servers don't currently offer an API. We're always looking to improve our service so you can always talk to us about your requirements.

If you're running a business that could benefit from us providing you servers, please get in touch.

## Need Help?

- **[Pro Support](https://fshost.me/pro/support)** - Follow the options on the Support page on our website