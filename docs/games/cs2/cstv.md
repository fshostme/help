# CSTV (SourceTV)

Professional broadcasting and demo recording for your CS2 server.

::: tip Pro Feature
CSTV is available exclusively on Pro servers.
:::

## What is CSTV?

CSTV enables live broadcasting of matches with a short delay, allowing spectators to watch games without participating. This is the same technology used in professional Counter-Strike tournaments for observer streams. Broadcasts can be automatically recorded for replay.

## Enabling CSTV

Activate CSTV through your server's control panel:

1. Navigate to your server management page
2. Locate the CSTV settings section
3. Toggle CSTV to enabled
4. Note the assigned CSTV port

## Configuration

### Basic Settings

| Command | Description |
|---------|-------------|
| `tv_name "name"` | Set broadcaster name shown in server browser |
| `tv_record "filename"` | Start recording a demo |
| `tv_stoprecord` | Stop current demo recording |

### Example Configuration

```bash
// CSTV Settings
tv_enable 1
tv_name "FSHOST Match Server"
tv_delay 0                    // 0 second delay
tv_maxclients 10               // Max spectators
```

## Connecting to CSTV

### As a Spectator

**Via Console:**
```bash
connect SERVER_IP:CSTV_PORT
```

**Example:**
```bash
connect 123.45.67.89:27020
```

::: tip Finding Your Port
Your CSTV port is displayed in the server panel when CSTV is enabled. It's typically your server port + 5 (e.g., if server is 27015, CSTV is 27020).
:::

### Spectator Commands

Once connected to CSTV:
```bash
spec_mode           // Cycle spectator modes
spec_next           // Next player
spec_prev           // Previous player
spec_player NAME    // Spectate specific player
```

## Demo Recording

### Recording Demos

**Manual Recording:**
```bash
tv_record match_de_dust2_team1_vs_team2
tv_stoprecord
```

### Demo Playback

**Enable voice chat in demos:**
```bash
tv_listen_voice_indices -1
tv_listen_voice_indices_h -1
```

**Play demo:**
```bash
playdemo yourdemo.dem
```

### Demo File Location

Demos are saved to your server's `demos` directory:
```
/game/csgo/demos/yourdemo.dem
```

## Advanced Spectating

### Camera Positions

**Save current spectator position:**
```bash
spec_pos
```
*Requires `sv_cheats 1`*

**Teleport to coordinates:**
```bash
spec_goto x y z pitch yaw
```

**Example:**
```bash
spec_goto 1234.5 -678.9 100.0 0 90
```

## Demo Management

### Accessing Demos

1. Connect to your server via FTP
2. Navigate to `/game/csgo/demos`
3. Download `.dem` files

### Playing Downloaded Demos

**Windows Installation Path:**
```
C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo\
```

**Steps:**
1. Open Steam
2. Right-click Counter-Strike 2
3. Select **Properties** → **Installed Files** → **Browse**
4. Navigate to `game/csgo/` folder
5. Place your `.dem` file here
6. Launch CS2 and use console: `playdemo filename`

## Troubleshooting

::: details Demo file won't play
**Error Message:**
```bash
[Demo] Requesting playback of 'demo.dem'
CDemoFile::Open: couldn't open file demo.dem for reading
```

**Solution:**
1. Delete the corrupted file
2. Re-download from your server
3. Verify file is in correct directory: `.../game/csgo/`
4. Ensure file has `.dem` extension
:::

::: details No voice chat in demo
Enable voice indices before playback:
```bash
tv_listen_voice_indices -1
tv_listen_voice_indices_h -1
playdemo yourdemo.dem
```
:::

::: details Cannot connect to CSTV
Verify:
- CSTV is enabled in panel
- Using correct port (server port + 5)
- Server is running
- No firewall blocking connection
:::

## CSTV + Discord Integration

For automatic demo uploads to Discord, see the [DiscordDemoURL Plugin](/games/cs2/plugins/cstv-discord) documentation.
