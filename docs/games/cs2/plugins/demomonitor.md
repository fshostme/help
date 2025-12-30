# Demo Monitor Plugin

Automatic demo file organization for your CS2 Pro server.

::: tip Pro Feature
Demo Monitor is available exclusively on Pro servers with CSTV enabled.
:::

## Overview

Demo Monitor is a FSHOST-exclusive plugin that automatically organizes your CSTV demo files by moving completed recordings from the root game directory into a dedicated `demos/` folder. This keeps your server files clean and makes demo management significantly easier.

## Why FSHOST Offers This

### The Problem

By default, CS2 servers save CSTV demo files directly in the `/game/csgo/` directory. This creates several issues:

- **Cluttered directory** - Demo files mix with config files, logs, and other important files
- **Difficult file management** - Finding specific demos becomes tedious with dozens of files
- **FTP navigation issues** - Root directory becomes hard to navigate
- **Backup complications** - Harder to selectively backup only demo files

### The Solution

Demo Monitor automatically detects completed demo recordings and moves them to `/game/csgo/demos/`, providing:

- **Clean organization** - All demos in one dedicated folder
- **Easy access** - Simple FTP navigation to `/demos/`
- **Selective management** - Delete old demos without affecting server files
- **Better backups** - Archive only the demos folder when needed

## How It Works

### Automatic Detection

The plugin monitors your server for demo recording activity:

1. **Recording Start** - Detects when `tv_record` command is executed
2. **Recording Stop** - Detects when `tv_stoprecord` command is executed
3. **Completion Check** - Waits 5 seconds after recording stops to ensure file is fully written
4. **Safe Move** - Verifies file is not locked before moving to demos folder

### Periodic Scanning

In addition to real-time monitoring, Demo Monitor runs a periodic scan every 30 seconds to catch any demos that might have been missed, ensuring no demo files are left in the root directory.

### Smart File Handling

The plugin intelligently handles edge cases:

- **Active recordings** - Never moves files currently being recorded
- **File locks** - Only moves files that are completely written and unlocked
- **MatchZy compatibility** - Properly handles demos from MatchZy plugin
- **Map changes** - Checks for lingering demos after map transitions

## Features

### Automatic Organization

**Moves completed demos to:**
```
/game/csgo/demos/
```

**Example:**
```bash
Before:
/game/csgo/match_2025-12-30.dem
/game/csgo/scrim_inferno.dem

After:
/game/csgo/demos/match_2025-12-30.dem
/game/csgo/demos/scrim_inferno.dem
```

### Real-Time Monitoring

- Listens for GOTV/CSTV recording commands
- Tracks current recording status
- Processes completed demos immediately

### Periodic Cleanup

- Runs every 30 seconds
- Catches missed demos
- Ensures clean root directory
- Handles server restart scenarios

### Safe File Operations

- Verifies files are fully written before moving
- Checks for file locks to prevent corruption
- Skips active recordings
- Handles errors gracefully

## Configuration

### Directory Structure

Demo Monitor automatically creates the demos directory if it doesn't exist:

**Source directory:**
```bash
/game/csgo/
```

**Target directory:**
```bash
/game/csgo/demos/
```

### No Configuration Required

The plugin works automatically with no configuration needed. Once loaded, it handles all demo organization transparently.

## Usage

### Accessing Your Demos

**Via FTP:**
1. Connect to your server
2. Navigate to `/game/csgo/demos/`
3. Download or manage demo files

**Via Panel:**
- Use the Files to download your demo

### Demo Recording

Record demos normally - Demo Monitor handles organization automatically:

**Manual recording:**
```bash
tv_record match_name
tv_stoprecord
```

**MatchZy automatic recording:**
- MatchZy records demos automatically
- Demo Monitor moves them after completion

### Finding Your Demos

All completed demos are in:
```bash
/game/csgo/demos/
```

Organized by filename, typically:
- `matchzy_[matchid]_[map].dem` - MatchZy matches
- `[custom_name].dem` - Manual recordings
- `auto_[timestamp].dem` - Automatic recordings

## Technical Details

### File Detection Logic

**Completion criteria:**
1. File must have `.dem` extension
2. File must not be in demos directory already
3. File must not be currently recording
4. File must be fully unlocked (not being written)

### Safety Mechanisms

**File lock check:**
```bash
- Attempts exclusive file open
- Success = file is complete
- Failure = file still being written
```

**Delayed processing:**
```bash
- 5 second delay after recording stops
- Ensures file write completion
- Prevents corruption
```

### Compatibility

**Works with:**
- Manual CSTV recording (`tv_record`)
- MatchZy automatic demos
- Custom recording scripts
- Any plugin that uses standard GOTV commands

## Benefits

### For Server Administrators

- **Cleaner FTP** - Root directory stays organized
- **Quick deletion** - Remove old demos without risk
- **Better organization** - Find demos instantly

### For Teams

- **Predictable location** - Always know where demos are
- **Easier sharing** - Single directory to share access
- **Archive management** - Simple demo retention policies

### For Tournaments

- **Match archival** - All demos in one place
- **Easy retrieval** - Quick access for reviews
- **Clean structure** - Professional file organization

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
Wait 30 seconds for automatic cleanup.
:::

::: details Can't find my demos
**Location:**
All demos are automatically moved to `/game/csgo/demos/`

**Access via FTP:**
1. Connect to server
2. Navigate to `game/csgo/demos/`
3. Your demos are here
:::

## Console Output

Demo Monitor provides helpful console logging:

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

## Best Practices

### Demo Management

::: tip Recommended Workflow
1. Record your matches normally
2. Let Demo Monitor organize files automatically
3. Periodically download demos from `/demos/` folder
4. Delete old demos to free up space
:::

### Storage Management

**Regular cleanup:**
- Check demos folder size weekly
- Archive important matches externally
- Delete old practice/scrim demos
- Keep tournament demos indefinitely

### Backup Strategy

**Simple backup approach:**
```bash
1. Download entire /demos/ folder via FTP
2. Store locally or in cloud storage
3. Delete old demos from server
4. Keeps server storage free
```

## Integration with Other Plugins

### MatchZy Integration

Demo Monitor works seamlessly with MatchZy:

- Detects MatchZy demo recordings
- Handles `demos/` prefix in filenames
- Moves completed MatchZy demos automatically
- No configuration needed

## Version Information

**Plugin Name:** Demo Monitor  
**Version:** 1.0.0  
**Author:** FSHOST.me  
**Type:** FSHOST Exclusive
