---
description: "Ask staff to move your Pro server to another location or machine, and what changes after a server move."
---

# Server Moves

Staff can move your Pro server to another location or to another machine. You request a move on a support ticket.

::: warning Pro Server Only
Server moves are for Pro servers. A free server can simply be started again at another location from the [Games](https://fshost.me/games) page.
:::

## What Is a Server Move?

A move transfers your server to a different machine, either in another location or in the same one. Your server keeps its server ID, settings and files.

## What Gets Moved

- Your server's game files, including configs, plugins, mods and custom maps you uploaded
- Your **FastDL** content, on games that have it
- Your server settings in the Pro Panel

Your FTP access is set up again on the new machine.

## What Changes

- **IP address** - The new machine has a different IP
- **Ports** - The game port, query port and any other ports are assigned again

::: warning Update Your Players
Share the new IP and port with your players after the move. Favorites and bookmarks that point at the old address stop working.
:::

## Move Limits

Server moves are limited to **2-3 moves per year** per server. Compare locations with the [Ping Test](/network/ping-test) before you ask, so one move is enough.

## Request a Move

### Step 1: Pick a Location

See [Server Locations](/network/locations) for the available locations. Use the [Ping Test](/network/ping-test) to compare them from where your players are.

### Step 2: Open a Ticket

1. Open **[Pro Support](https://fshost.me/pro/support)** and click **New ticket**
2. Pick **Switch server location** as the **Category**
3. Tick the server under **Related servers**
4. Write which location you want to move to, and when suits you

We usually review a move request within a few hours. See [Support Tickets](/servers/pro/support) for more on tickets.

## During the Move

The server must be stopped for the move. Staff stop it if it is running. While the move runs, the server shows the state **Moving** in the Pro Panel and cannot be started. A move usually takes around 10 minutes.

When the move is done, the server is left **Stopped**, and a **Moved** entry appears in the **Actions** tab. See [Actions Tab](/servers/pro/managing-server#actions-tab).

## After the Move

### Step 1: Check the New Address

Open your server in the [Pro Panel](https://fshost.me/pro/servers). The new IP and port are at the top of the page and in the **Connection info** box on the **Overview** tab.

### Step 2: Start the Server

Click **Start**.

### Step 3: Share the New Address

Give the new address to your players, and update anything else that points at the server, such as Discord bots or your website.

## Troubleshooting Moves

::: details Server will not start after the move
Open the **Console** tab and look for errors. See [Console Access](/servers/pro/console). If the errors point at files or settings you did not change, reply on your move ticket.
:::

::: details Files seem to be missing
Check over FTP that you are looking in the right folder. See [FTP Access](/servers/pro/ftp). If files are still missing, reply on your move ticket straight away.
:::

::: details Players cannot connect
Make sure players use the new IP and port. The old address no longer points at your server.
:::

::: details The lag or ping did not improve
The problem may not be the location. Open a ticket with the **Server crash / instability** category and describe what players see.
:::
