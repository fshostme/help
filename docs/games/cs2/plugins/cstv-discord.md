# Discord Demo Links

Get a message with a download link in your Discord channel each time a CSTV demo on your CS2 Pro server has finished recording.

::: warning Pro Server Only
Discord demo links need a Pro server with CSTV turned on. Free servers do not have CSTV.
:::

## How It Works

You create a webhook in Discord and paste its address into **Discord webhook URL (optional)** in the Pro Panel. When a demo has finished recording, the server posts a message with a link to the demo in that Discord channel, so your team can download it.

On a Pro server, these plugins work together:

1. **[TVFIX](/games/cs2/plugins/tvfix)** restarts CSTV so each match records
2. **[Demo Monitor](/games/cs2/plugins/demomonitor)** moves finished demos into the `demos` folder
3. **Discord Demo Links** posts a download link to your Discord channel

You do not install anything. The webhook field is all you set up.

## Step 1: Create a Webhook in Discord

You need the **Manage Webhooks** permission on the Discord server.

1. Open Discord and go to your server
2. Hover over the channel where demos should be posted and click the cog icon, **Edit Channel**
3. Open **Integrations** and click **Webhooks**
4. Click **New Webhook**
5. Give it a name, for example `CS2 Demos`, and check the channel
6. Click **Copy Webhook URL**

![New webhook in Discord channel settings](https://help.fshost.me/img/image-2.png)

## Step 2: Add the Webhook in the Pro Panel

1. Go to the [Pro Panel](https://fshost.me/pro/servers)
2. Click on your server name
3. Open the **Settings** tab. It opens on **Game settings**
4. Scroll down to **CSTV** and set **Enable CSTV** to **Yes**. The webhook field only shows when CSTV is on
5. Paste the address into **Discord webhook URL (optional)**

![CSTV section with the Discord webhook URL field](https://help.fshost.me/img/pro-cs2-cstv-discord.png)

The address must start with `https://discord.com/api/webhooks/`. If you copied one that starts with `https://discordapp.com/`, `https://ptb.discord.com/` or `https://canary.discord.com/`, change the start to `https://discord.com/`. The rest stays the same.

## Step 3: Save and Restart

1. Click **Save changes**
2. Restart the server

The webhook is only picked up when the server starts.

## Getting Demos Without Discord

Every finished demo is also listed under **Demo files** on the **Files** tab, where you can download it. See [CSTV](/games/cs2/cstv#accessing-demos).

::: warning Links Stop Working After 7 Days
The Discord message holds a link, not the demo file. Demos are deleted from the server after 7 days, and the link stops working then. Download any demo worth keeping within 7 days.
:::

## Changing or Removing the Webhook

- **Different channel:** create a new webhook in that channel, paste it over the old one, save and restart
- **Turn it off:** clear **Discord webhook URL (optional)**, save and restart

::: danger Keep the Webhook Private
Anyone with the webhook address can post in your Discord channel. If it leaks, delete the webhook in Discord, create a new one, and put the new address in the Pro Panel.
:::

## Troubleshooting

::: details I cannot see the Discord webhook URL field
Set **Enable CSTV** to **Yes** in the **CSTV** section. The field only shows when CSTV is on.
:::

::: details The panel refuses the webhook address
The address must look like `https://discord.com/api/webhooks/<numbers>/<letters and numbers>`. Copy it again with **Copy Webhook URL**, and change `discordapp.com`, `ptb.discord.com` or `canary.discord.com` to `discord.com`. Do not add spaces or anything after the address.
:::

::: details No message arrives in Discord
- Check that you restarted the server after saving
- Check that a demo actually finished. It shows under **Demo files** on the **Files** tab
- Check that the webhook still exists in Discord under **Integrations** → **Webhooks**
- One webhook posts to one channel. Check you are looking in the right one
:::

::: details The download link does not work
The demo is older than 7 days and has been deleted from the server. Old demos cannot be restored.
:::

::: details Messages go to the wrong channel
Each webhook belongs to one channel. Create a webhook in the channel you want and replace the address in the Pro Panel.
:::

## Related Pages

- [CSTV](/games/cs2/cstv) - Turn on CSTV, watch and record matches
- [Demo Monitor](/games/cs2/plugins/demomonitor) - Where demo files are kept
- [TVFIX](/games/cs2/plugins/tvfix) - Makes sure each match records
- [MatchZy](/games/cs2/plugins/matchzy) - Records match demos automatically
