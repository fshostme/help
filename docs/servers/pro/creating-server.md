---
description: "Create a Pro game server on FSHOST.me: pick a game and location, choose how many months, pay, then configure and start it."
---

# Creating a Pro Server

Step-by-step guide to creating a new **Pro** game server on FSHOST.me.

## Prerequisites

Before you begin, make sure you have:

1. Created an FSHOST.me account
2. Verified your email address

You pay for the server when you create it, from your account balance or by card. See [Billing and Top-Up](/servers/pro/billing).

## Step 1: Choose a Game

Open the [Pro Panel](https://fshost.me/pro/servers) and click **Create server**. Pick a game from the list. Each game shows its price per month.

You can also start from the [List of Games](https://fshost.me/games): open a game, click **Upgrade to Pro**, check the features and locations on the pricing page, then click **Create**.

## Step 2: Choose a Location

Under **Choose a location**, click a location to open it, then pick a machine.

- Each location and machine shows your ping to it, and how many servers are still **available**
- Click **Re-test ping** to measure again
- A location or machine marked **Sold out** cannot be picked. Contact us to see if we can fit you in

Pick the location closest to your players. See [Ping Test](/network/ping-test) and [Server Locations](/network/locations).

::: tip Changing Location Later
Staff can move a server to another location afterwards, but moves are limited. See [Server Moves](/servers/pro/server-moves).
:::

The page also shows the **CPU cores** and **Memory** included by default. We can upgrade your cores or memory for free or a small fee, just ask in support. **What's included** lists the game's options, **Plugins / Mods** and **Configs**.

## Step 3: Choose How Long

Under **How long for?**, pick **1 month**, **3 months**, **6 months** or **12 months**. The total and the date the server runs until are shown next to it.

## Step 4: Create or Pay

- If your balance covers the total, the button says **Create server**. The total is taken from your balance
- If it does not, the button says **Pay** with the amount. You pay by card on Stripe, then the server is created

Once the server is created, you are taken to its **Game settings** page.

## Step 5: Configure the Server

A new server must be configured before it can be started. The fields depend on the game. Common ones are:

| Field | What to enter |
|-------|---------------|
| **Hostname** | The server name players see, up to 80 characters. Letters, numbers, spaces and `, # / \| = ^ ! ~ @ . : _ -` are allowed |
| **Description** | A label of up to 40 characters to tell your servers apart. Only you see it |
| **Slots** | The most players allowed, including bots. Most games offer 2 to 18 slots in steps of 2 |
| **Join password** | Leave it empty for a public server |
| **RCON password** | Used for remote admin commands. See the [RCON Guide](/rcon) |

Depending on the game you may also see **Version**, **Mod**, **Game mode**, **Map**, **Bots** or **Cracked**. If you are unsure, keep the defaults. You can change everything later.

Click **Save changes**.

::: tip More Slots
Need more slots than the list offers? Ask on a [support ticket](https://fshost.me/pro/support).
:::

## Step 6: Start the Server

Click **Start** at the top of the page. The state changes to **Starting**, then **Running**.

## Getting Connection Details

- The IP and port are at the top of the server's page, with a **Copy** button and **Join via Steam** on games that support it
- **Connection info** on the **Overview** tab shows the **Query port**, **RCON password** and **Join password**
- For file access, open the **Files** tab. FTP is set up on request and only for some games. See [FTP Access](/servers/pro/ftp)

See [Managing Your Server](/servers/pro/managing-server) for everything else on the server's page, and [All Games](/games/) for game-specific guides.

## Limits

- **One server awaiting setup at a time.** Configure your new server before you create another
- **Paid server limit.** There is a limit on how many paid Pro servers you can own. When you reach it, the create page shows **Server limit reached**. Click **Request more servers** to open a ticket, or delete a server you no longer need

## Common Issues

::: details Server will not start
Open the **Console** tab and look for errors. See [Console Access](/servers/pro/console) and [Troubleshooting](/troubleshooting/). Contact us if it looks like a problem with the server and not something you changed.
:::

::: details Paid, but the location is full
If the location filled up while you were paying, the server list shows the payment with **Needs a new location**. Click **View** and pick another location. The payment is kept in your balance.
:::

## Deleting a Server

The **Delete** button shows at the top of the server's page once the server is stopped and has expired. Click it, then **Delete server** to confirm.

::: danger
Deleting a server removes everything on it, including your configuration and any files you uploaded. It cannot be undone.
:::

See [Deleting a Server](/servers/pro/billing#deleting-a-server) for more.
