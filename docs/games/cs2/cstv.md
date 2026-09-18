# CSTV (SourceTV)

Professional broadcasting and demo recording for your CS2 server.

::: tip Pro Feature
CSTV is available exclusively on Pro servers.
:::

## What is CSTV?

CSTV enables live broadcasting of matches with a short delay, allowing spectators to watch games without participating. This is the same technology used in professional Counter-Strike tournaments for observer streams. Broadcasts can be automatically recorded for replay.

Most server owners enable CSTV for one of two reasons:

- **Demo recording.** Every match is saved as a `.dem` file you can download and review afterwards.
- **Spectating.** People can watch a live match from inside CS2 without taking a player slot.

## Enabling CSTV

CSTV is switched on from the panel. You do not need to run any console commands to get it working.

### Step 1: Open Your Server Settings

1. Go to [fshost.me/pro/servers](https://fshost.me/pro/servers)
2. Click on your server name
3. Open the **Settings** tab, or click **Edit** in the top right. Both open **Game settings**
4. Scroll down to the **CSTV** section

### Step 2: Enable and Save

Set **Enable CSTV** to **Yes**, then click **Save changes**. The **CSTV port** is assigned automatically, so there is no port to fill in. To keep spectators out, fill in **CSTV password (optional)** with 4 to 20 letters and digits. Leave it empty for an open broadcast.

### Step 3: Restart the Server

CSTV starts with the server process, so the change applies on the next restart. Restart from the panel.

::: tip That Is the Whole Setup
Once CSTV is enabled and the server has restarted, demo recording works on its own. The commands in the next section are optional adjustments, not required steps.
:::

## Configuration

The panel handles the settings that matter for a normal setup. Use the commands below only when you want to change the defaults, for example to rename the broadcast or change the broadcast delay.

### Basic Settings

| Command | Description |
|---------|-------------|
| `tv_name "name"` | Set broadcaster name shown in server browser |
| `tv_delay 90` | Broadcast delay in seconds. The default is `90` |
| `tv_record "filename"` | Start recording a demo |
| `tv_stoprecord` | Stop current demo recording |

### Example Configuration

```bash
// CSTV Settings
tv_enable 1
tv_name "FSHOST Match Server"
tv_delay 90 // Broadcast delay in seconds, 90 is the default
tv_maxclients 10 // Max spectators
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
Open the **Files** tab on your server's page in the Pro Panel. The **CSTV** box shows the full `connect` command under **Spectate server**, including the CSTV port. The CSTV port is not the same as your game port.
:::

### Spectator Commands

Once connected to CSTV:
```bash
spec_mode // Cycle spectator modes
spec_next // Next player
spec_prev // Previous player
spec_player NAME // Spectate specific player
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
```bash
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

Recorded demos are listed under **Demo files** on the **Files** tab of your server's page. The list is refreshed every minute and demos are deleted after 7 days, so download the ones you want to keep. **Copy feed URL** gives you a JSON feed of the same list for your own tools.

With FTP access you can also fetch them by hand:

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
3. Verify file is in the correct directory: `.../game/csgo/`
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
- CSTV is enabled in the panel
- Using the port shown under **Files** → **CSTV** → **Spectate server**, not the game port
- Server is running
- No firewall blocking connection
:::

## CSTV + Discord Integration

For automatic demo uploads to Discord, see the [DiscordDemoURL Plugin](/games/cs2/plugins/cstv-discord) documentation.