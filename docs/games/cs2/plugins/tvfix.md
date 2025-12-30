# TVFIX (CSTV Fix)

Automatic CSTV restart system to prevent recording failures after matches.

::: tip Pro Feature
TVFIX is available exclusively on Pro servers with CSTV enabled.
:::

## Overview

TVFIX is a FSHOST-exclusive plugin that automatically restarts SourceTV (CSTV) after match completion to prevent demo recording failures in subsequent matches. This solves a critical CS2 bug where CSTV sometimes fails to record after the first match ends.

## Why FSHOST Offers This

### The Problem

CS2 has a known bug where SourceTV/CSTV becomes unreliable after a match ends:

- **Recording failures** - CSTV fails to start recording for the next match
- **Silent errors** - No warning that recording failed
- **Lost demos** - Important matches not recorded
- **Manual intervention** - Admins must manually restart CSTV between matches

This is particularly problematic for:
- **Tournament servers** - Missing demos are unacceptable
- **Scrim servers** - Teams rely on demos for review
- **Competitive environments** - Demo recording must be reliable

### The Solution

TVFIX automatically detects match endings and restarts CSTV with intelligent timing:

- **Automatic restart** - No manual intervention required
- **Smart detection** - Only restarts when necessary
- **Safe timing** - Waits for demo to finish writing
- **Map change protection** - Prevents restarts during transitions
- **Toggleable** - Can be disabled if needed

## How It Works

### Match End Detection

TVFIX monitors for CS2 match completion:

1. **Win panel event** - Detects `cs_win_panel_match` event
2. **Demo status check** - Verifies a demo was being recorded
3. **Safe delay** - Waits 5 seconds for demo write completion
4. **Additional delay** - Waits 20 more seconds before restart
5. **CSTV restart** - Executes `tv_enable 0` followed by `tv_enable 1`

### Recording Status Tracking

The plugin tracks CSTV recording state:

**Monitors commands:**
- `tv_record` - Demo recording started
- `tv_stoprecord` - Demo recording stopped

**Only restarts if:**
- Demo recording was started AND stopped
- Match actually ended (win panel shown)
- No map change is scheduled
- 25 seconds have passed since match end

### Map Change Protection

TVFIX prevents unnecessary restarts during map changes:

**Monitors map change commands:**
- `map` - Direct map change
- `changelevel` - Standard map change

**Cancels restart if:**
- Map change detected
- Round starts before restart
- Map end occurs

## Features

### Automatic CSTV Restart

**Restart sequence:**
```
1. Match ends (win panel shown)
2. Wait 5 seconds (demo write completion)
3. Wait 20 more seconds (safe buffer)
4. tv_enable 0
5. tv_enable 1
6. Chat notification: "CSTV was restarted"
```

### Smart Detection

- Only restarts when demo was actually recorded
- Skips restart if map change is imminent
- Cancels restart if round starts early
- Handles multiple match scenarios

### No Additional Config

TVFIX works automatically once loaded. No configuration files or ConVars to set.

### Automatic Operation

TVFIX operates completely automatically:

1. **Load plugin** - Automatically loaded on server start
2. **Record matches** - Record demos normally
3. **Match ends** - TVFIX detects and waits
4. **Auto restart** - CSTV restarts automatically
5. **Next match** - CSTV ready for next recording

## Technical Details

### Timing Strategy

**Total delay before restart: 25 seconds**

**Breakdown:**
- **5 seconds** - Initial delay after match end
  - Ensures demo file is fully written
  - Checks recording status
- **20 seconds** - Additional buffer
  - Allows post-match activities
  - Prevents interference with map votes
  - Ensures safe restart timing

### Event Handling

**Monitors these events:**
```
- EventCsWinPanelMatch - Match completion
- EventRoundStart - Round beginning
- Listeners.OnMapEnd - Map ending
```

**Monitors these commands:**
```
- tv_record - Recording start
- tv_stoprecord - Recording stop
- map - Map change
- changelevel - Level change
```

### State Management

TVFIX maintains several state flags:

- `_isTvToggling` - Restart in progress
- `_isEnabled` - Plugin enabled/disabled
- `_tvRecordingStarted` - Recording started
- `_tvRecordingStopped` - Recording stopped
- `_mapChangeScheduled` - Map change pending
- `_matchEndRestartDetected` - Match end processed

### Restart ID System

Prevents race conditions with scheduled restarts:

```
- Each restart gets unique ID
- Map changes invalidate pending restarts
- Only most recent restart executes
```

## Benefits

### For Tournament Organizers

- **Guaranteed recording** - No missed demos
- **No manual work** - Automatic operation
- **Professional reliability** - Consistent recording
- **Peace of mind** - One less thing to manage

### For Teams

- **Demo availability** - All matches recorded
- **Review readiness** - Demos always available
- **No lost footage** - Critical matches saved
- **Consistent quality** - Reliable recordings

### For Server Administrators

- **Set and forget** - No ongoing maintenance
- **Reduced support** - Fewer recording issues
- **Better service** - Reliable demo recording
- **Professional operation** - Tournament-ready

## Chat Notifications

TVFIX provides in-game notifications:

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

TVFIX logs important events:

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

## Troubleshooting

::: details CSTV not restarting automatically
**Check:**
- Plugin is loaded: `css_plugins list`
- Plugin is enabled: `css_tv_restart_toggle` (should say enabled)
- Demo was actually recorded (tv_record and tv_stoprecord used)
- 25 seconds have passed since match end
- No map change occurred during restart delay
:::

## Best Practices

### When to Use TVFIX

::: tip Recommended For
- **Tournament servers** - Critical demo reliability
- **Scrim servers** - Consistent recording
- **Match servers** - Multiple matches per map
- **Competitive servers** - Professional operation
:::

### When to Disable TVFIX

**Temporarily disable for:**
- Map testing sessions
- Configuration changes
- Rapid map rotations
- Practice sessions without recording

**Re-enable with:**
```
css_tv_restart_toggle
```

### Verify Recording

Even with TVFIX, verify your setup:

1. Record a test demo
2. Play full match to completion
3. Start second match
4. Verify both demos recorded
5. Check [Demo Monitor](/games/cs2/plugins/demomonitor) moved files

## Integration with Other Plugins

### Works With MatchZy

TVFIX is compatible with MatchZy's automatic demo recording:

- MatchZy records demos automatically
- TVFIX restarts CSTV after matches
- Both plugins work together seamlessly
- No conflicts or issues

### Works With Demo Monitor

Perfect companion plugins:

- TVFIX ensures recording reliability
- Demo Monitor organizes completed demos
- Together provide complete demo management

### Works With CSTV Discord

Complete demo pipeline:

1. TVFIX ensures recording succeeds
2. Demo Monitor organizes files
3. CSTV Discord uploads to Discord

## Known Limitations

### Restart Timing

- **25 second delay** - Cannot be adjusted
- **May seem slow** - Necessary for safety
- **Post-match activities** - Brief CSTV downtime

### Launch Parameter Required

- Must have `+tv_enable 1` in launch parameters
- Cannot function without this
- Will self-disable if missing

### Map Changes

- Restart cancelled if map changes
- Cannot restart during transitions
- Expected behavior for safety

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
The delay ensures the demo file is completely written and all post-match activities are finished. This prevents file corruption and interference with other systems.
:::

::: details Can I adjust the timing?
No, the timing is hardcoded for safety. The 25-second delay is the minimum safe time based on extensive testing.
:::

::: details Does TVFIX work without MatchZy?
Yes! TVFIX works with any CSTV recording setup, including manual recording, MatchZy, or other match plugins.
:::

::: details What if I change maps manually?
TVFIX detects map changes and cancels the scheduled restart. This is intentional to prevent conflicts during map transitions.
:::
