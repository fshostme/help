# Managing Your Server

Learn how to configure and manage your FSHOST.me game server.

## Accessing Server Management

1. Log in to the [Pro Panel](https://fshost.me/pro/servers)
2. Click on your server name
3. You'll see the server management page

## Server Management Page

The server page is split into tabs.

| Tab | What it holds |
|-----|---------------|
| **Overview** | Status, connection info, player count and resource usage |
| **Files** | **FTP access** details. For Counter-Strike 2 also the **CSTV** spectate address and the **Demo files** list |
| **Console** | **Server console** output, with a box to send commands on games that support it |
| **Settings** | **Game settings**, **Server admins** and **Automation** |
| **Actions** | **Server actions**, a log of who started, stopped or restarted the server and when |
| **Billing** | **Server pricing**, **Your balance** and **Charge history** |
| **Team** | **Team members** and **Add a team member**. See [Team Access](/servers/pro/team-access) |

The top of the page stays the same on every tab. It shows the server status, the IP and port with a **Copy** button, **Join via Steam**, and the **Edit**, **Stop** and **Restart** buttons.

**Other ways to join** opens a menu with more options:

| Option | Purpose |
|--------|---------|
| **Add to Steam favourites** | Saves the server in your Steam server browser favorites |
| **Copy console command** | Copies the `connect IP:PORT` command for the in-game console |
| **Copy address** | Copies the IP and port only |

Entries by **FSHOST** with user type **Bot** in the **Actions** tab are scheduled restarts and automatic updates. Change or turn them off under [Automation](#automation).

### Overview Tab

Three tiles at the top show live usage: **Players** (online and slots), **CPU** (percent of your allocated cores) and **Memory** (percent of your allocated RAM).

Below them, the overview is split into boxes.

| Box | What it shows |
|-----|---------------|
| **Server details** | Server ID, hostname, game, location, CPU cores, memory and the date the server was created |
| **Connection info** | **Server IP** with port, **Query port**, **RCON password** and **Join password** |
| **Billing** | Monthly price of the server |
| **Server status** | **Scan status** and **Last scanned**. We check regularly that your server is online and answers server queries, this is the result and time of the latest check |
| **Player statistics** | Graph of the player count over time |
| **Server query response** | Raw data your server returns to a server query, such as name, map and player count |

### Quick Actions

**Power Controls**
- **Start** - Boot up the server
- **Stop** - Shut down gracefully
- **Restart** - Stop and start again
- **Steam Update Required** - Update after a Steam update. See [Server Updates](#server-updates)

## Configuration

### Server Settings

Open the **Settings** tab on your server's page. The **Edit** button in the top right opens the same page.

The **Server settings** menu on the left has these pages:

| Page | Purpose |
|------|---------|
| **Game settings** | Hostname, slots, maps, passwords and everything else the game needs before it starts |
| **Server admins** | In-game admins for Counter-Strike 2. See [Become a Server Admin](/games/cs2/become-admin) |
| **Automation** | Automatic game updates and scheduled restarts. See [Automation](#automation) |

The fields on **Game settings** depend on the game.

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

1. Click **Save changes**
2. Restart the server for changes to take effect

Saving pushes the config to your server. **Automation** settings are the exception, they apply straight away once saved.

## Automation

Open the **Settings** tab and click **Automation** to configure automatic game updates and scheduled restarts.

### Automatic Updates

With **Apply Steam updates automatically** switched on, a game update is applied as soon as nobody is playing. A running server is stopped, updated and started again. This is only available for games that support it.

### Scheduled Restarts

A regular restart clears memory leaks and keeps the server responsive.

- Choose **Never (off)**, **Every day**, **Twice a day (12 hours apart)** or **Once a week** under **How often**. **Once a week** adds a **Day of the week** field
- Set the **Restart time** on a 24-hour clock and pick your **Timezone**
- Restarts only happen when nobody is online
- A restart is skipped if the server was started or restarted in the previous three hours
- Scheduled restarts show as **FSHOST (Bot)** in the **Actions** tab

See the [CS2 Automation guide](/games/cs2/automation) for a step-by-step walkthrough.

## Server Updates

### Updating Your Server

With automatic updates switched on under [Automation](#automation), you do not need to do anything. With them switched off, the server cannot be started until it is updated.

To apply updates from Steam/Valve by hand:

Note: No need to stop your server if it's running. It will be booted back up.

1. Click **"Steam Update Required"**
2. Wait for update to finish
3. If your server was stopped, start it.

## Historical Data

- **Player count** - The **Player statistics** graph on the **Overview** tab
- **Resource usage** - The **CPU** and **Memory** tiles on the **Overview** tab
- **Server actions** - The **Actions** tab
- **Billing charges** - **Charge history** on the **Billing** tab

## Networking

### Port Configuration

The game IP and port are shown at the top of your server's page. The **Connection info** box on the **Overview** tab repeats them and adds the **Query port**. For Counter-Strike 2, the CSTV address is under the **Files** tab in the **CSTV** box.

Port types:

- **Game Port** - Main server port
- **Query Port** - Server list queries
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

- Get FTP credentials from the **Files** tab in the Pro Panel, see [File Manager](/servers/pro/file-manager)
- Use FileZilla or similar client
- Direct file access

### API Access

Pro servers don't currently offer an API. We're always looking to improve our service so you can always talk to us about your requirements.

If you're running a business that could benefit from us providing you servers, please get in touch.

## Need Help?

- **[Pro Support](https://fshost.me/pro/support)** - Follow the options on the Support page on our website