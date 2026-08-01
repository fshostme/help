# CSTV Discord Integration

Automatically post CS2 demo recordings to Discord via webhook.

::: tip Pro Feature
This plugin requires both a Pro server and CSTV enabled.
:::

## Overview

The CSTV Discord plugin automatically sends demo download links to your Discord server whenever a match is recorded. Perfect for teams and communities that want to review matches and preserve demos.

## Requirements

- Pro server with CSTV enabled
- Discord server with appropriate permissions
- Webhook URL from Discord

## Features

- Automatic demo URL posting to Discord
- Match information in notifications
- Direct download links
- Configurable webhook integration
- No manual upload needed

## Discord Webhook Setup

### Creating a Webhook

1. **Open Discord** and navigate to your server
2. **Right-click** the channel where you want demo links posted
3. Select **Edit Channel**
4. Navigate to **Integrations** → **Webhooks**
5. Click **New Webhook**

![Discord Webhook Example](https://help.fshost.me/img/image-2.png)

### Configuring the Webhook

**Customize your webhook:**
- **Name** - Choose any name (e.g., "CS2 Demos", "Match Recordings")
- **Avatar** - Optional custom avatar for webhook posts
- **Channel** - Select target channel for demo notifications

### Getting the Webhook URL

1. Click **Copy Webhook URL**
2. Save this URL - you'll need it for server configuration

::: tip Multiple Channels
You can create multiple webhooks pointing to different channels for organizing demos by team, tournament, or practice vs. competitive matches.
:::

## Server Configuration

### Adding Webhook to Server

1. Log in to your **Pro Panel**
2. Navigate to your server's **Edit** page
3. Locate **Discord Webhook URL (Optional)** field
4. Paste your webhook URL
5. Click **Save**
6. **Restart your CS2 server** to apply changes

::: warning Restart Required
The server must be restarted for the webhook configuration to take effect.
:::

### Enabling CSTV

If CSTV isn't already enabled:

1. In your Pro Panel, enable **CSTV**
2. Configure CSTV settings (port, delay, etc.)
3. Save and restart server

See the [CSTV Guide](/games/cs2/cstv) for detailed CSTV configuration.

## How It Works

### Automatic Demo Posting

When a match completes and CSTV recording stops:

1. Demo file is automatically generated on server
2. Plugin detects the new demo file
3. Download URL is created
4. Webhook sends notification to Discord with:
   - Match information
   - Team names (if available)
   - Map played
   - Direct download link
   - Timestamp

### Notification Example

Discord notifications typically include:

```bash
🎬 New CS2 Demo Available

Map: de_dust2
Match: TeamA vs TeamB
Date: 2025-12-27 10:30 UTC

Download: [Click here to download]
```

## Demo Management

### Accessing Demos

**Via Discord:**
- Click the download link in Discord
- Demo downloads directly to your computer

**Via Server:**
- Connect via FTP
- Navigate to `/demos`
- Download `.dem` files manually

### Playing Demos

See the [CSTV Guide](/games/cs2/cstv#demo-playback) for instructions on playing downloaded demos.

## Troubleshooting

::: details Webhook not posting to Discord
**Check:**
1. Webhook URL is correct and complete
2. Webhook hasn't been deleted in Discord
3. Bot permissions in Discord channel allow posting
4. Server has been restarted after adding webhook
5. CSTV is enabled and recording demos
:::

::: details Wrong channel receiving notifications
Verify the webhook is configured for the intended channel in Discord. Each webhook is tied to a specific channel.
:::

::: details Demo links not working
Ensure your server has proper demo file storage configured and demos are being saved to the correct directory.
:::

::: details No notifications after matches
Verify:
- CSTV is enabled and recording
- Matches are completing properly
- Demo files are being generated (`/demos/` directory)
- Webhook URL is correctly saved in panel
:::

## Advanced Configuration

### Multiple Webhooks

For organizations with multiple servers or teams:

1. Create separate webhooks for each server/team
2. Configure each server with its specific webhook
3. Organize Discord channels by server or team

**Example structure:**
```bash
#team-a-demos
#team-b-demos
#practice-demos
#tournament-demos
```

### Custom Webhook Names

Customize webhook display names to identify the source:

- "Pro Server 1 - Demos"
- "Practice Server - Recordings"
- "TeamName - Match Demos"

### Webhook Security

::: warning Keep Webhook URLs Private
Webhook URLs allow anyone with the URL to post to your Discord channel. Never share webhook URLs publicly.
:::

**If compromised:**
1. Delete the old webhook in Discord
2. Create a new webhook
3. Update server configuration
4. Restart server

## Best Practices

::: tip Keeping Demos Findable
Point practice and competitive servers at different Discord channels. Scrim demos pile up fast, and mixing them with match demos makes the channel hard to search later.
:::

::: tip Storage
Demos stay on the server until you delete them. Download anything worth keeping soon after the match, then clear out old practice demos. See [Demo Monitor](/games/cs2/plugins/demomonitor) for where the files live.
:::

## Limitations

- Requires Pro server
- CSTV must be enabled and functional
- Limited to Discord webhook functionality
- No retroactive posting of old demos
- Webhook rate limits apply (Discord side)

## Additional Features

### Match Information

When using match management plugins (like MatchZy), notifications can include:
- Team names
- Player rosters
- Match scores
- Round counts
- Server configuration used

### File Naming

Demos are typically named with:
- Date and time
- Map name
- Team names (if configured)
- Match ID (if applicable)

Example: `2025-12-27_14-30-45_de_dust2_TeamA_vs_TeamB.dem`

## Related Resources

- [CSTV Setup Guide](/games/cs2/cstv) - Enable and configure CSTV
- [MatchZy Plugin](/games/cs2/plugins/matchzy) - Enhanced match information
- [Demo Playback](/games/cs2/cstv#demo-playback) - How to watch demos
- [Discord Support](https://fshost.me/discord) - Get help with setup
