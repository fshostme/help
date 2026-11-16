---
description: "Fixes for a game server that will not start, stops on its own, crashes or is missing from the server browser."
---

# Server Problems

What to check when your server will not start, stops by itself or does not show up where you expect it. Each block below covers one symptom. Click it to open the fix.

## Free Servers

::: details My free server went offline
Free servers stop when nobody is playing on them. After the server starts, you have 5 minutes to join it, or it goes offline for inactivity. It also goes offline when no players are online.

Start a new server from the [Games](https://fshost.me/games) page and join it straight away. See [Creating a Free Server](/servers/free/creating-server).

If you need a server that stays online while empty, that is what a Pro server is for. See [Free vs Pro](/servers/free-vs-pro).
:::

::: details I cannot get a free server
Free servers are limited per location, so at peak times there may be none left. Try another location, or try again later. See [Free vs Pro](/servers/free-vs-pro#free-servers).
:::

## Pro Servers

::: warning Pro Server Only
The rest of this page covers Pro servers in the [Pro Panel](https://fshost.me/pro/servers).
:::

::: details My Pro server stopped on its own
Open the **Actions** tab on your server first. It shows who stopped the server and when. See [Actions Tab](/servers/pro/managing-server#actions-tab).

The usual causes:

- **Renewal failed.** Your balance was lower than the monthly price on the renewal date. The **Billing** tab says **Insufficient balance**. Top up and click **Start**. See [Billing and Top-Up](/servers/pro/billing#how-charging-works).
- **Stop when empty is on.** Under **Settings** → **Automation**, **Automatically stop when empty** stops the server once nobody has played on it for the number of minutes set under **Empty minutes before stop**. It shows as **FSHOST** with user type **Bot** in the **Actions** tab. Turn the switch off and click **Save changes** if you want the server to stay up.
- **A team member stopped it.** The **Actions** tab shows their name with user type **Team member**. See [Team Access](/servers/pro/team-access).
- **It crashed.** See the next block.

Scheduled restarts and automatic updates also show as **FSHOST** (**Bot**), but those start the server again on their own. See [Automation](/games/cs2/automation).
:::

::: details The status says Crashed
The server stopped without being asked to. The panel tries to start it again by itself, up to two times. You do not need to do anything while the status says **Crashed**.

If it keeps crashing, the panel gives up, sets the server to **Stopped** and shows this message on the server page:

> Message from [System]: Your server crashed repeatedly and has been stopped. Please check your config or contact support.

Undo your latest change to configs or plugins, then start the server. See [Rolling Back](/servers/pro/before-you-modify#rolling-back). If you have not changed anything, open a ticket on [Pro Support](https://fshost.me/pro/support).
:::

::: details "We've detected your server isn't running properly."
The full message is:

> Message from [System]: We've detected your server isn't running properly. It crashed or (if applicable) the Steam GSLT is not valid.

On CS2, check the **Steam token** box in **Game settings**. An expired or banned token, or one already in use on another server, stops the server working properly. Clear the **Steam GSLT (optional)** field, click **Save changes** and restart. CS2 runs fine without a token.

If there is no token, or clearing it does not help, treat it as a crash. See the block above.
:::

::: details Clicking Start asks me to pay
The server has expired, and starting it renews it from your balance. See [Renew an Expired Server](/servers/pro/billing#renew-an-expired-server).
:::

::: details "This server needs a Steam update before it can start."
A game update is out and your server has not applied it yet. Press **Steam Update Required** on your server's page and wait for it to finish.

If this happens after every update, check that **Apply Steam updates automatically** is on under **Settings** → **Automation**. See [Automatic Updates](/games/cs2/automation#automatic-updates).
:::

::: details "Update failed due to an error. Please try again or report to support."
Press **Steam Update Required** again. If the same message comes back, open a ticket on [Pro Support](https://fshost.me/pro/support).
:::

::: details The server does not start after I changed a file
Your change broke the config or a plugin. Watch the **Console** tab while it starts to see the error, then put your backup back. See [Rolling Back](/servers/pro/before-you-modify#rolling-back).

If it still does not start after you restored your backup, open a ticket on [Pro Support](https://fshost.me/pro/support) and say what you changed.
:::

::: details A scheduled restart did not happen
Restarts are skipped while players are online, and when the server was started or restarted in the previous three hours. Check **Last skipped** on the **Automation** page. See [Automation](/games/cs2/automation#troubleshooting).
:::

::: details My server is gone from the server list
A server that stays stopped is deleted after a while. After one month stopped, you get two warning emails, one week and one day before deletion. See [Stopped Servers and Deletion](/servers/pro/billing#stopped-servers-and-deletion).

If you are a team member, the owner may have removed you from the team. See [Team Access](/servers/pro/team-access).
:::

::: details I want the server reset to a clean install
Reinstalls are done by staff. Open a ticket on [Pro Support](https://fshost.me/pro/support) and ask for a reinstall. Download any files you want to keep first, because a reinstall resets the server, including your config template.
:::

## Server Browser

::: details My CS2 server is not in the server browser
A CS2 server is only listed in the Steam server browser when it has a Game Server Login Token (GSLT). Tokens are optional, and without one players can still join by address.

To get listed on a Pro server:

1. Create a token on [Steam's game server page](https://steamcommunity.com/dev/managegameservers)
2. Open **Settings** → **Game settings** on your server
3. Paste it into **Steam GSLT (optional)** in the **Steam token** box
4. Click **Save changes** and restart

Each token works on one server only. If players cannot join after you add a token, clear the field first.

You do not need to be listed to join. Use **Join via Steam**, or **Add to Steam favourites** under **Other ways to join**, which saves the server in your Steam favorites. See [Server Management Page](/servers/pro/managing-server#server-management-page).
:::

::: details My CS:GO server is not in the server browser
The standalone CS:GO server browser may not work. Players connect from the console with `connect IP:PORT`. See [CS:GO GSLT](/games/csgo/gslt#troubleshooting).
:::

## Still Stuck?

- Players cannot connect at all: see [Connection Problems](/troubleshooting/connection)
- Everything else: see the [Troubleshooting](/troubleshooting/) index, or open a ticket on [Pro Support](https://fshost.me/pro/support)
