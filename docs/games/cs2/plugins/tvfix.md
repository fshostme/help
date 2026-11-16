---
description: "TVFIX restarts CSTV after a match ends so the next match on your CS2 Pro server records a demo too."
---

# TVFIX (CSTV Fix)

Restarts CSTV after a match ends, so the next match records as well.

::: warning Pro Server Only
TVFIX runs on Pro servers with CSTV turned on. Free servers do not have CSTV.
:::

## Overview

TVFIX is a FSHOST plugin that helps keep demo recording working when several matches are played on the same map. After a match that was recorded ends, it switches CSTV off and on again.

It loads when the server starts and has no settings. It only does something when CSTV is turned on in the Pro Panel, see [CSTV](/games/cs2/cstv#enabling-cstv).

## How It Works

1. A match ends and the win panel shows
2. TVFIX waits 5 seconds, then checks that a demo was recorded in this match: `tv_record` and then `tv_stoprecord` must both have run
3. If so, it waits another 20 seconds
4. It runs `tv_enable 0`, and `tv_enable 1` on the next server frame
5. Chat shows `[TVFIX] CSTV was restarted`

If no demo was recorded during the match, nothing is restarted. The 25 second delay is fixed and cannot be changed.

### When the Restart Is Skipped

A pending restart is cancelled when:

- The map changes, through `map` or `changelevel`
- The map ends

## Turning It Off

To switch the automatic restart off, for example while testing maps without recording, run this in the **Console** tab of the Pro Panel:

```bash
css_tv_restart_toggle
```

Run it again to switch it back on. Chat shows which state it is in:

```bash
[TVFIX] Automatic TV restart is now enabled.
[TVFIX] Automatic TV restart is now disabled.
```

The setting is not saved. TVFIX is on again after the next server restart.

## Console Output

When the plugin loads, the server console shows:

```bash
[TVFIX] Plugin loaded successfully
```

If the server was started without CSTV, TVFIX switches itself off and shows:

```bash
[TVFIX] +tv_enable 1 NOT found in launch parameters. Disabling plugin.
```

Turn on CSTV in **Game settings** and restart the server. See [CSTV](/games/cs2/cstv#enabling-cstv).

## Troubleshooting

::: details CSTV was not restarted after a match
Check that:

- CSTV is on in **Game settings** and the server has restarted since
- A demo was recorded in that match, with both `tv_record` and `tv_stoprecord`
- The map did not change within 25 seconds of the match ending
- TVFIX is loaded: run `css_plugins list` in the **Console** tab
- You did not switch it off with `css_tv_restart_toggle`
:::

## Works With Other Plugins

TVFIX is one part of the demo chain on a Pro server:

1. **TVFIX** restarts CSTV so each match records
2. **[Demo Monitor](/games/cs2/plugins/demomonitor)** moves finished demos into the `demos` folder
3. **[Discord Demo Links](/games/cs2/plugins/cstv-discord)** posts download links to your Discord

TVFIX reacts to any `tv_record` and `tv_stoprecord`, whether you record by hand or [MatchZy](/games/cs2/plugins/matchzy) records the match.

## Related Pages

- [CSTV](/games/cs2/cstv) - Turn on CSTV and download demos
- [Demo Monitor](/games/cs2/plugins/demomonitor) - Where finished demos go
- [Discord Demo Links](/games/cs2/plugins/cstv-discord) - Post demo links to Discord
