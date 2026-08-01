# Demo Monitor Plugin

Automatic demo file organization for your CS2 Pro server.

::: tip Pro Feature
Demo Monitor is available exclusively on Pro servers with CSTV enabled.
:::

## Overview

By default CS2 writes CSTV demos straight into `/game/csgo/`, mixed in with configs and logs. After a few weeks that folder is hard to work with over FTP.

Demo Monitor is a FSHOST-exclusive plugin that moves each finished demo into `/game/csgo/demos/` instead, so every recording ends up in one place. It is loaded on your server already, and there is nothing to configure.

**Before:**
```
/game/csgo/match_2025-12-30.dem
/game/csgo/scrim_inferno.dem
```

**After:**
```
/game/csgo/demos/match_2025-12-30.dem
/game/csgo/demos/scrim_inferno.dem
```

## Where to Find Your Demos

Every completed demo is in `/game/csgo/demos/`.

**Via the Pro Panel:** open the file manager and browse to `game/csgo/demos/`.

**Via FTP:** connect to your server and navigate to `/game/csgo/demos/`.

Filenames follow the tool that recorded them:

| Pattern | Source |
|---------|--------|
| `matchzy_[matchid]_[map].dem` | MatchZy matches |
| `[custom_name].dem` | Manual `tv_record` |
| `auto_[timestamp].dem` | Automatic recordings |

## How It Works

You record demos as normal. Demo Monitor watches for `tv_record` and `tv_stoprecord`, waits 5 seconds after recording stops so the file finishes writing, checks the file is not locked, then moves it.

A scan also runs every 30 seconds to pick up anything the live check missed, such as demos left behind by a server restart or a map change.

The plugin never touches a demo that is still recording or still being written, so a file is only moved once it is safe to move.

## Managing Disk Space

Demos are not deleted for you. They accumulate until you remove them.

::: tip Suggested Routine
1. Download the `demos/` folder periodically over FTP or from the panel
2. Keep match and tournament demos wherever you archive things
3. Delete old practice and scrim demos from the server

Because everything lives in one folder, you can clear it out without any risk to configs or server files.
:::

## Console Output

**Recording detected:**
```bash
[Demo Monitor] Started recording demo: match_name
```

**Recording stopped:**
```bash
[Demo Monitor] Stopped recording demo: match_name
```

**Demo moved:**
```bash
[Demo Monitor] Moved completed demo: match_name.dem to demos directory
```

**File still in use:**
```bash
[Demo Monitor] Demo file is still being written or in use: match_name.dem
```

## Troubleshooting

::: details Demos not moving automatically
**Check:**
- CSTV is enabled on your server
- Demo Monitor plugin is loaded (`css_plugins list`)
- Wait 30 seconds after recording stops
- Check server console for Demo Monitor messages
:::

::: details Demo still in root directory
**Possible causes:**
- File is still being written (wait a few seconds)
- File is locked by another process
- Demo is currently recording

**Solution:**
Wait 30 seconds for the periodic scan to pick it up.
:::

::: details Can't find my demos
All demos are moved to `/game/csgo/demos/`. Reach it through the file manager in the Pro Panel, or over FTP at `game/csgo/demos/`.
:::

## Works With Other Plugins

Demo Monitor handles demos from any source that uses the standard GOTV commands, including manual `tv_record`, MatchZy and custom recording scripts. MatchZy demos are detected the same way as any other, with no extra setup.

On a Pro server it sits in the middle of the demo chain:

1. **[TVFIX](/games/cs2/plugins/tvfix)** restarts CSTV so each match records
2. **Demo Monitor** moves finished demos into `demos/`
3. **[CSTV Discord](/games/cs2/plugins/cstv-discord)** posts the download links to your Discord

## Version Information

**Plugin Name:** Demo Monitor  
**Version:** 1.0.0  
**Author:** FSHOST.me  
**Type:** FSHOST Exclusive
