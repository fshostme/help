---
description: "Demo Monitor moves finished CSTV demos into the demos folder on your CS2 Pro server, where the Demo files list picks them up."
---

# Demo Monitor Plugin

Moves finished CSTV demos into one folder on your CS2 Pro server.

::: warning Pro Server Only
Demo Monitor runs on Pro servers with CSTV turned on. Free servers do not have CSTV.
:::

## Overview

A demo recorded with `tv_record` is written to the `csgo` folder of the server. Demo Monitor is a FSHOST plugin that moves each finished `.dem` file from there into `csgo/demos/`, so all demos end up in one place.

It loads when the server starts and has no settings. It creates the `demos` folder if it is missing.

## Where to Find Your Demos

Finished demos are listed under **Demo files** on the **Files** tab of your server's page in the [Pro Panel](https://fshost.me/pro/servers), with a **Download** and a **Copy link** button for each.

- The list is cached and refreshed every minute
- Demos are deleted after 7 days, so download the ones you want to keep
- Demos are not available over FTP

See [CSTV](/games/cs2/cstv#accessing-demos) for the full details.

## How It Works

Demo Monitor moves a demo in three situations:

- **5 seconds after `tv_stoprecord`**, so the file has time to finish writing
- **Every 30 seconds**, to catch anything missed, for example a demo that ended with the map
- **When a map starts**, to pick up demos left behind by a map change or restart

Before it moves a file, it checks that the file is not still open. A demo that is still recording or still being written stays where it is and is moved on a later check. Demos that [MatchZy](/games/cs2/plugins/matchzy) records straight into the `demos` folder are left alone.

If a file with the same name is already in `demos`, the new one replaces it.

## Troubleshooting

::: details A demo is not in the Demo files list
1. **Wait a minute.** Demo Monitor checks every 30 seconds, and the **Demo files** list refreshes every minute
2. **Check that recording stopped.** A demo is only moved once `tv_stoprecord` has run or the map has ended
3. **Check the age.** Demos older than 7 days are deleted automatically
4. **Check that CSTV is on** in **Game settings**, see [CSTV](/games/cs2/cstv#enabling-cstv)

Still missing? Open a ticket on [Pro Support](https://fshost.me/pro/support) with the server number and roughly when the demo was recorded.
:::

::: details An older demo disappeared after I recorded a new one
A new demo with the same file name replaces the old one in `demos`. Give each manual recording its own name, for example `fake_rcon tv_record scrim_inferno_2`.
:::

## Works With Other Plugins

Demo Monitor reacts to `tv_record` and `tv_stoprecord`, so it handles manual recordings and MatchZy the same way.

On a Pro server it sits in the middle of the demo chain:

1. **[TVFIX](/games/cs2/plugins/tvfix)** restarts CSTV so each match records
2. **Demo Monitor** moves finished demos into `demos`
3. **[Discord Demo Links](/games/cs2/plugins/cstv-discord)** posts download links to your Discord

## Related Pages

- [CSTV](/games/cs2/cstv) - Turn on CSTV, record and download demos
- [TVFIX](/games/cs2/plugins/tvfix) - Makes sure each match records
- [Discord Demo Links](/games/cs2/plugins/cstv-discord) - Post demo links to Discord
