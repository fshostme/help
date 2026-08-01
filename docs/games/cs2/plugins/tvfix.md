# TVFIX (CSTV Fix)

Automatic CSTV restart system to prevent recording failures after matches.

::: tip Pro Feature
TVFIX is available exclusively on Pro servers with CSTV enabled.
:::

## Overview

CS2 has a bug where CSTV stops recording after the first match on a map ends. There is no error message, so the usual way to find out is discovering the demo missing afterwards.

TVFIX is a FSHOST-exclusive plugin that fixes this. It waits for a match to end, then restarts CSTV so the next match records normally. It is loaded on your server already, and there is nothing to configure.

## How It Works

### Restart Sequence

```
1. Match ends (win panel shown)
2. Wait 5 seconds (demo write completion)
3. Wait 20 more seconds (safe buffer)
4. tv_enable 0
5. tv_enable 1
6. Chat notification: "CSTV was restarted"
```

The full delay is 25 seconds and cannot be changed. It gives the demo file time to finish writing, and keeps the restart clear of map votes and other post-match activity.

### When It Restarts

TVFIX only restarts CSTV when all of these are true:

- A demo was recorded, meaning both `tv_record` and `tv_stoprecord` ran
- The match actually ended, detected from the win panel
- No map change is scheduled
- 25 seconds have passed since the match ended

### When It Holds Off

A pending restart is cancelled if the map changes, a new round starts first, or the map ends. Restarting mid-transition risks the demo, so TVFIX skips it instead.

## Turning It Off

TVFIX runs on its own and needs no setup. To switch it off temporarily, for example during map testing or a practice session with no recording:

```bash
css_tv_restart_toggle
```

The same command switches it back on.

## Chat Notifications

**Restart executed:**
```
[TVFIX] CSTV was restarted
```

**Toggle status:**
```
[TVFIX] Automatic TV restart is now enabled.
[TVFIX] Automatic TV restart is now disabled.
```

## Console Output

**Plugin loaded:**
```
[TVFIX] Plugin loaded successfully
```

**Launch parameter check:**
```
[TVFIX] +tv_enable 1 NOT found in launch parameters. Disabling plugin.
```

**Match end detected:**
```
[TVFIX] Match end detected. Waiting 5 sec before checking demo status...
```

**Restart prevented:**
```
[TVFIX] Restart cancelled - map change detected
```

## Verifying It Works

1. Record a test demo
2. Play a full match to completion
3. Start a second match
4. Check that both demos were recorded
5. Check that [Demo Monitor](/games/cs2/plugins/demomonitor) moved the files into `demos/`

## Troubleshooting

::: details CSTV not restarting automatically
**Check:**
- Plugin is loaded: `css_plugins list`
- Plugin is enabled: `css_tv_restart_toggle` (should say enabled)
- Demo was actually recorded (tv_record and tv_stoprecord used)
- 25 seconds have passed since match end
- No map change occurred during restart delay
:::

## Known Limitations

| Limitation | Detail |
|------------|--------|
| Fixed 25 second delay | Cannot be adjusted. CSTV is briefly down during this window. |
| Launch parameter required | The server needs `+tv_enable 1` in its launch parameters. TVFIX disables itself if it is missing. |
| Map changes cancel the restart | Intentional, to avoid restarting mid-transition. |

## Works With Other Plugins

TVFIX makes up one part of the demo chain on a Pro server:

1. **TVFIX** restarts CSTV so each match records
2. **[Demo Monitor](/games/cs2/plugins/demomonitor)** moves finished demos into the `demos/` folder
3. **[CSTV Discord](/games/cs2/plugins/cstv-discord)** posts the download links to your Discord

It also works alongside [MatchZy](/games/cs2/plugins/matchzy), which records its own match demos. The two do not conflict.

## Version Information

**Plugin Name:** TVFIX  
**Version:** 1.0.0  
**Author:** FSHOST.me  
**Description:** Automatically restart SourceTV at match end with delay  
**Type:** FSHOST Exclusive

## Related Resources

- [CSTV Setup Guide](/games/cs2/cstv) - Enable and configure CSTV
- [Demo Monitor](/games/cs2/plugins/demomonitor) - Organize demo files
- [MatchZy Plugin](/games/cs2/plugins/matchzy) - Automatic match demos
- [CSTV Discord](/games/cs2/plugins/cstv-discord) - Upload demos to Discord

## FAQ

::: details Why does TVFIX wait 25 seconds?
The delay gives the demo file time to finish writing and lets post-match activity settle. Restarting sooner risks a corrupt demo.
:::

::: details Can I adjust the timing?
No. The 25 second delay is fixed, and is the shortest interval that tested reliably.
:::

::: details Does TVFIX work without MatchZy?
Yes. TVFIX works with any CSTV recording setup, including manual recording, MatchZy, or other match plugins.
:::

::: details What if I change maps manually?
TVFIX detects the map change and cancels the scheduled restart, so it does not interfere with the transition.
:::
