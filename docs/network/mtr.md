# MTR Report

If you or your players have high ping, lag spikes or packet loss on your server, we need an MTR report before we can look into it. MTR shows the route from a player's computer to our server, and at which point along that route the delay or loss starts.

::: warning MTR Results Are Required
We cannot investigate high ping or packet loss without MTR results. Please include them, along with the IP address of each affected player, when you contact us.
:::

## What to Send Us

For each player who has the problem:

1. **MTR results** from that player's computer to the server, run while the problem is happening
2. **The player's public IP address**. See [Find Your IP Address](#find-your-ip-address)

And once for the whole report:

3. **Your server number**, for example P1234
4. **When the problem happens**, with date, time and timezone

One MTR from one player only shows that player's route. If several players lag, ask each of them for their own MTR and IP.

::: tip Find the Game Server IP
MTR is always run to your **game server's IP address**, without the port.

1. Go to the [Pro Panel](https://fshost.me/pro/servers)
2. Click on your server name
3. Click **Copy** next to the IP at the top of the page
4. Paste it into MTR and delete the `:` and the port number after it

For example, **Copy** gives you `94.199.215.103:30000`. Use `94.199.215.103`.
:::

## Run MTR on Windows

Windows does not include MTR, so use **WinMTR**, a free tool that needs no installation.

### Step 1: Download WinMTR

Download [WinMTR v0.92](https://github.com/WinMTR/WinMTR-Official/releases/download/v0.92/WinMTR-v092.zip) and unzip it. The zip has a 32-bit and a 64-bit version. Open `WinMTR.exe` from the 64-bit folder, which works on almost every modern PC.

### Step 2: Enter the Game Server IP

In the **Host** field, type the game server's IP **without the port**. For `94.199.215.103:30000`, enter `94.199.215.103`.

### Step 3: Run It While the Problem Happens

Click **Start** and let it run for at least 2 to 3 minutes while you are playing and the lag is happening. Then click **Stop**.

### Step 4: Copy the Results

Click **Copy Text to clipboard** and paste the result into your ticket or message. Please send the text rather than a screenshot.

## Run MTR on macOS and Linux

### Step 1: Install MTR

**macOS** with [Homebrew](https://brew.sh/):

```bash
brew install mtr
```

**Debian or Ubuntu:**

```bash
sudo apt install mtr-tiny
```

### Step 2: Run the Report

Replace `SERVER_IP` with the game server's IP, without the port, for example `94.199.215.103`:

```bash
sudo mtr -rwbzc 100 SERVER_IP
```

This sends 100 pings and prints a report when it is done, which takes about 2 minutes. Run it while the problem is happening, then copy the full output into your ticket.

## Find Your IP Address

Open [ifconfig.me](https://ifconfig.me) in a browser. The number shown is your public IP address. Every player who sends an MTR should also send this.

::: danger Share IP Addresses Privately
An IP address is personal information. Only send it in your support ticket, never in a public Discord channel or in-game chat.
:::

## Where to Send It

Open a ticket on [Pro Support](https://fshost.me/pro/support) with the **Server crash / instability** category, and paste the MTR results and IP addresses into the message. See [Support Tickets](/servers/pro/support).

::: warning Pro Servers Only
We investigate network problems for Pro servers only. On a free server, try creating it in another location closer to your players. See [Ping Test](/network/ping-test).
:::

## Reading the Results

You do not need to understand the report to send it, but it can tell you where the problem is.

| Column | Meaning |
|--------|---------|
| **Host** | Each network hop between you and the server. The first lines are your router and your internet provider, the last line is our server |
| **Loss%** | Percentage of pings that got no answer at that hop |
| **Avg** | Average ping to that hop in milliseconds |
| **Best** / **Wrst** | Lowest and highest ping to that hop |

- **Loss on one hop in the middle only, but 0% on the last line** is normal. Many routers give pings a low priority. This does not affect your game.
- **Loss that starts at one hop and continues to the last line** is real packet loss. The hop where it starts shows whose network has the problem.
- **Loss or high ping already on the first one or two hops** points to your own Wi-Fi, router or connection. Try a cable instead of Wi-Fi and run the test again.

## Before You Send a Report

- Run the [Ping Test](/network/ping-test) to check that you picked a location close to your players
- Close downloads, streams and other programs that use your connection
- Use a wired connection instead of Wi-Fi if you can
