---
description: "Turn on CSTV on your CS2 Pro server to let people spectate matches and record demos, and download your demos."
---

# CSTV

Spectating and demo recording for your CS2 server.

::: warning Pro Server Only
CSTV is available on Pro servers only. Free servers run without CSTV.
:::

## What is CSTV?

CSTV lets people watch a live match from inside CS2 without taking a player slot. The broadcast runs with a 90 second delay. With CSTV on, the server can also record matches as `.dem` demo files that you download afterwards.

## Enabling CSTV

CSTV is switched on in the Pro Panel. You do not need any console commands to get it working.

### Step 1: Open Game Settings

1. Go to [fshost.me/pro/servers](https://fshost.me/pro/servers)
2. Click on your server name
3. Open the **Settings** tab, or click **Edit** in the top right. Both open **Game settings**

### Step 2: Turn On CSTV

In the **Features** section, click the **CSTV** tile so it shows **On**. Two optional fields appear below:

| Field | What it does |
|-------|--------------|
| **CSTV password (optional)** | Keeps spectators out unless they have the password. 4 to 20 characters, letters and digits only. Leave it empty for an open broadcast |
| **Discord webhook URL (optional)** | Posts a Discord message when a demo has finished recording. See [Discord Demo Links](/games/cs2/plugins/cstv-discord) |

The CSTV port is assigned automatically, so there is no port to fill in.

### Step 3: Save and Restart

Click **Save changes**, then restart the server. CSTV starts with the server, so the change applies on the next restart.

## Connecting to CSTV

Open the **Files** tab on your server's page. The **CSTV** box shows the full command under **Spectate server**. Paste it into the CS2 console:

```bash
connect SERVER_IP:CSTV_PORT
```

If you set a CSTV password, the command shown on the **Files** tab includes it.

::: tip Use the CSTV Port
The CSTV port is not the same as your game port. Always copy the command from **Spectate server**.
:::

## Recording Demos

The **CSTV** box on the **Files** tab recommends [MatchZy](/games/cs2/plugins/matchzy) auto-recording, which records demos for matches and practice sessions on its own.

To record by hand, run these in the console after logging in to RCON as described in the [RCON guide](/games/cs2/rcon):

```bash
fake_rcon tv_record demoname
fake_rcon tv_stoprecord
```

The demo is finished once `tv_stoprecord` has run or the map has ended.

## Accessing Demos

Recorded demos are listed under **Demo files** on the **Files** tab of your server's page. Each demo has a **Download** button and a **Copy link** button, and shows when it expires.

- The list is cached and refreshed every minute.
- Demos are deleted after 7 days, so download the ones you want to keep. See [CS2 Demo Retention Change](/news/cs2-demo-retention).
- **Copy feed URL** gives you a JSON feed of the same list for your own tools. The feed URL expires after 1 year.

If you turn CSTV off, no new demos are recorded. Existing demos stay available until they are deleted after 7 days.

Demos are not available over FTP. CS2 FTP access covers the `addons` and `cfg` folders only, see [FTP Access](/servers/pro/ftp).

## Playing Downloaded Demos

1. Open Steam
2. Right-click **Counter-Strike 2**
3. Select **Properties** → **Installed Files** → **Browse**
4. Open the `game/csgo/` folder
5. Put your `.dem` file there
6. Start CS2, open the console and type `playdemo filename`

To hear voice chat in a demo, run these before `playdemo`:

```bash
tv_listen_voice_indices -1
tv_listen_voice_indices_h -1
```

## Troubleshooting

::: details My demo is not in the Demo files list
Work through these in order:

1. **Wait a minute.** The **Demo files** list on the **Files** tab refreshes every minute, and a demo only appears once `tv_stoprecord` has run or the map has ended.
2. **Check the age.** Demos older than 7 days are deleted automatically.
3. **Check that CSTV is on.** Without CSTV nothing is recorded. See [Enabling CSTV](#enabling-cstv).
4. **Check that a recording was started.** Use MatchZy or `fake_rcon tv_record`. See [Recording Demos](#recording-demos).

Still missing? Open a ticket on [Pro Support](https://fshost.me/pro/support) with the server number and roughly when the demo was recorded.
:::

::: details The demo will not play
1. Check that the file is in the `game/csgo/` folder of your CS2 install
2. Check that the file name ends in `.dem`
3. Download the demo again if the download was interrupted
:::

::: details No voice chat in the demo
Run `tv_listen_voice_indices -1` and `tv_listen_voice_indices_h -1` in the console before `playdemo`.
:::

::: details Cannot connect to CSTV
Check that:

- The **CSTV** tile is **On** in **Game settings** and the server has restarted since
- The server is running
- You use the command from **Files** → **CSTV** → **Spectate server**, not the game port
- You include the CSTV password if one is set
:::
