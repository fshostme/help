---
description: "Manage your Pro server in the Pro Panel: the server page tabs, start, stop, restart, game settings, automation and game updates."
---

# Managing Your Server

How to find your way around a Pro server's page in the Pro Panel.

## Accessing Server Management

1. Log in to the [Pro Panel](https://fshost.me/pro/servers)
2. Click your server in the list
3. The server's page opens on the **Overview** tab

## Server Management Page

The server page is split into tabs.

| Tab | What it holds |
|-----|---------------|
| **Overview** | Live usage, server details, connection info, billing, status and the player graph |
| **Files** | **FTP access** details, see [FTP Access](/servers/pro/ftp). Also **Databases**, **FastDL** on games that support it, and for Counter-Strike 2 the **CSTV** box and **Demo files** list |
| **Console** | **Server console** output, with a box to send commands on games that support it. See [Console Access](/servers/pro/console) |
| **Settings** | **Game settings**, **Server admins** and **Automation** |
| **Actions** | **Server actions**, a log of who started, stopped or restarted the server and when |
| **Billing** | **Server pricing**, **Your balance** and **Charge history**. See [Billing and Top-Up](/servers/pro/billing) |
| **Team** | Team members who can help run the server. See [Team Access](/servers/pro/team-access) |

The **Billing** and **Team** tabs are only shown to the server owner. A server that is still awaiting setup only shows **Overview**, **Billing** and **Team**.

The top of the page stays the same on every tab. It shows the server ID (for example **P1234**), the server state, the IP and port with a **Copy** button, **Join via Steam** on games that support it, and the control buttons.

**Other ways to join** opens a menu with more options:

| Option | Purpose |
|--------|---------|
| **Add to Steam favourites** | Saves the server in your Steam server browser favorites |
| **Copy console command** | Copies the `connect` command for the in-game console |
| **Copy SDR command** | Copies the Steam Datagram Relay connect command, on servers that use it |
| **Copy address** | Copies the IP and port only |
| **Copy join password** | Copies the join password, when one is set |

::: tip Server ID
Include the server ID, such as **P1234**, when you ask support for help.
:::

### Overview Tab

Three tiles at the top show live usage: **Players** (online and slots), **CPU** and **Memory** (percent of your allocated RAM). For **CPU**, 100% is one core working flat out, so it reads above 100% when your server uses more than one core at once.

Below them, the overview is split into boxes.

| Box | What it shows |
|-----|---------------|
| **Server details** | Server ID, hostname, game, location, CPU cores, memory and the date the server was created |
| **Connection info** | **Server IP** with port, **Query port**, **RCON password** and **Join password** |
| **Billing** | **Monthly price** and the renewal date. Team members do not see the figures |
| **Server status** | **Scan status** and **Last scanned**, the result and time of our latest check that your server answers server queries. **Stopped at** shows when a stopped server went down |
| **Player statistics** | Graph of the player count over time |
| **Server query response** | Raw data your server returns to a server query, such as name, map and player count. It is scanned every 5 minutes |

### Actions Tab

**Server actions** is a log of everything done to your server, newest first. Each row shows the **Action**, the **User** who did it, their **User type** and when it happened.

| Action | Meaning |
|--------|---------|
| **Started** | The server was started |
| **Stopped** | The server was stopped |
| **Stopped (empty)** | The server was stopped by [Stop when empty](#stop-when-empty) |
| **Restarted** | The server was restarted, by hand or by a scheduled restart |
| **Force Stopped** | The server was stopped without waiting for it to shut down cleanly |
| **Updated** | A game update was applied, by hand or automatically |
| **Moved** | The server was moved to another machine. See [Server Moves](/servers/pro/server-moves) |
| **Extended by N days** | Staff added days to the server's renewal date |
| **Deleted** | The server was deleted |

| User type | Who |
|-----------|-----|
| **Owner** | You, the owner of the server |
| **Team member** | Someone on the server's team. See [Team Access](/servers/pro/team-access) |
| **Former team member** | Someone who was on the team then, but has been removed since |
| **Staff** | FSHOST staff, usually while helping you on a support ticket |
| **Bot** | FSHOST automation: scheduled restarts, automatic updates and stop when empty |

Entries by **FSHOST** with user type **Bot** come from the settings under [Automation](#automation). Change or turn them off there.

::: tip Something Changed That You Did Not Do?
Check the **Actions** tab first. It shows who started, stopped or updated the server. If a team member should no longer have access, remove them on the **Team** tab.
:::

### Control Buttons

The buttons at the top of the page depend on the server's state.

| Button | When it shows |
|--------|---------------|
| **Start** | The server is stopped. On an expired server it opens a window to renew and start, see [Renew an Expired Server](/servers/pro/billing#renew-an-expired-server) |
| **Stop** | The server is running |
| **Restart** | The server is running and no game update is waiting |
| **Steam update required** | A game update is waiting. See [Server Updates](#server-updates) |
| **Edit** | Opens the **Settings** tab. Hidden while the server is expired or busy |
| **Top-up** | The server has expired and your balance is too low to renew it |
| **Delete** | The server is stopped and has expired or has not been paid for yet. See [Deleting a Server](/servers/pro/billing#deleting-a-server) |

## Configuration

### Server Settings

Open the **Settings** tab on your server's page. The **Edit** button at the top opens the same page.

The **Server settings** menu on the left has these pages:

| Page | Purpose |
|------|---------|
| **Game settings** | Hostname, slots, maps, passwords and everything else the game needs before it starts |
| **Server admins** | In-game admins for Counter-Strike 2. See [Become a Server Admin](/games/cs2/become-admin) |
| **Automation** | Automatic game updates, scheduled restarts and stop when empty. See [Automation](#automation) |

**Server admins** and **Automation** are only shown to the server owner. An expired server's settings cannot be changed until it is renewed.

The fields on **Game settings** depend on the game. Common ones are:

| Field | Purpose |
|-------|---------|
| **Hostname** | The server name players see in the server browser and in-game, up to 80 characters |
| **Description** | A label of up to 40 characters to tell your servers apart in the server list. Only you see it |
| **Slots** | The most players allowed on the server, including bots |
| **Join password** | Players need it to join. Leave it empty for a public server |
| **RCON password** | Used for remote admin commands. See the [RCON Guide](/rcon) |

Depending on the game you may also see **Version**, **Mod**, **Game mode**, **Map**, **Bots** or **Cracked**. Some games have an **Advanced** or **Additional settings** section. Only change those if you know what they do.

### Applying Changes

After changing settings:

1. Click **Save changes**
2. Restart the server for changes to take effect

Saving pushes the config to your server. **Automation** settings are the exception, they apply straight away once saved.

## Automation

Open the **Settings** tab and click **Automation**. See the [CS2 Automation guide](/games/cs2/automation) for a step-by-step walkthrough.

### Automatic Updates

With **Apply Steam updates automatically** switched on, a game update is usually applied 10 to 20 minutes after it reaches our machines, once nobody is playing. A running server is stopped, updated and started again. This is only shown for games that support it.

### Scheduled Restarts

A regular restart clears memory leaks and keeps the server responsive.

- Choose **Never (off)**, **Every day**, **Twice a day (12 hours apart)** or **Once a week** under **How often**. **Once a week** adds a **Day of the week** field
- Set the **Restart time** on a 24-hour clock and pick your **Timezone**
- Restarts only happen when nobody is online
- A restart is skipped if the server was started or restarted in the previous three hours
- Once a schedule is saved, the page shows the **Next restart**, **Last restart** and **Last skipped**

### Stop When Empty

With **Automatically stop when empty** switched on, the server stops once nobody has played on it for the time set under **Empty minutes before stop**: 10, 15, 30, 60 or 120 minutes. The countdown starts when the last player leaves, or when the server starts. It shows as **Stopped (empty)** in the **Actions** tab.

## Server Updates

With automatic updates switched on under [Automation](#automation), you do not need to do anything. With them switched off, the server cannot be started until it is updated.

To apply a game update by hand:

1. Click **Steam update required** at the top of your server's page
2. Wait for the update to finish. The server shows **Updating** in the meantime
3. A server that was running is started again on its own. A stopped server stays stopped

## Historical Data

- **Player count** - The **Player statistics** graph on the **Overview** tab
- **Resource usage** - The **CPU** and **Memory** tiles on the **Overview** tab
- **Server actions** - The **Actions** tab
- **Billing charges** - **Charge history** on the **Billing** tab

## Networking

The game IP and port are shown at the top of your server's page. The **Connection info** box on the **Overview** tab repeats them and adds the **Query port**. For Counter-Strike 2, the CSTV spectate address is in the **CSTV** box on the **Files** tab.

Ports are assigned automatically when the server is created and cannot be changed. They only change if the server is moved to another machine. See [Server Moves](/servers/pro/server-moves).

## RCON and FTP

- **RCON** - Set the password under **Game settings** and find it in **Connection info**. See the [RCON Guide](/rcon)
- **FTP** - Login details are on the **Files** tab for the server owner. FTP is set up on request and only for some games. See [FTP Access](/servers/pro/ftp)
