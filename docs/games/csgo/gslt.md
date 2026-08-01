# Game Server Login Token (GSLT)

A Game Server Login Token (GSLT) is required for your CS:GO Server to be connectable by players outside your local network. It links your dedicated Server to your Steam account and ensures your Server can authenticate with Steam's controller servers.

::: info What does a GSLT do?
- Allows players to connect to your Server
- Persists your server identity if you change IP or hosting provider - players who favourited your Server can still find it
- Verifies game ownership to prevent fake servers from flooding the server list
:::

## Requirements

Your Steam account must meet **all** of the following:

- Not currently community banned or locked
- Not a [limited account](https://support.steampowered.com/kb_article.php?ref=3330-IAGK-7663)
- Has a [qualifying registered phone number](https://store.steampowered.com/phone/add)
- Owns Counter-Strike on Steam
- Has not exceeded the 1,000 GSLT cap

::: info Ownership and Counter-Strike 2
CS2 replaced CS:GO on the same Steam App ID, so a CS2 library entry is the same ownership Steam checks here. You do not need to buy or install anything extra to create a token for a CS:GO Server.
:::

## Creating a Token

1. Go to [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers) and log in
2. Scroll down to **Create a new game server account**
3. Enter App ID: `4465480`
4. Enter a memo to identify the Server (e.g. `fshost-p1234`)
5. Click **Create**
6. Copy the **Login Token** — this is your GSLT

::: warning Use App ID 4465480, Not 730
`4465480` is the legacy CS:GO application, which is what a CS:GO Server runs on. `730` is Counter-Strike 2.

Older guides and forum posts still say `730` because that was correct before CS2 launched. A token created under the wrong App ID looks valid on the Steam page, but your Server will refuse to start with it.
:::

::: warning One token per Server
Each Server must have its own unique GSLT. If a second server starts with the same token, the first Server will be disconnected from Steam. Create a separate token for every Server you run.
:::

::: danger Treat the Token Like a Password
Anyone with your GSLT can run a server under your Steam account, and any ban it earns lands on your account. Never post it in Discord, a screenshot, or a config file you share. If it leaks, regenerate it from the [management page](https://steamcommunity.com/dev/managegameservers).
:::

## Applying the Token

1. Go to your Server in the [Pro Panel](https://fshost.me/pro/servers)
2. Click **Edit** on your Server
3. Paste your GSLT token into the **Steam GSLT (Game Server Login Token)** field
4. Save and restart your Server

The Server picks up the token on the next start, so the restart is not optional.

## Token Expiry & Bans

### Expiry

Tokens that go unused for approximately **5 weeks** (the Server never logs in) will expire. Expired tokens can be regenerated from the [management page](https://steamcommunity.com/dev/managegameservers).

If you reset your Steam password (via the help site or Steam Support), **all your GSLTs will be regenerated** automatically.

### Troubleshooting

| Issue | Solution |
| --- | --- |
| Server won't start / error `5005` | Your GSLT is invalid or banned. Generate a new token. |
| `Failed to connect to Steam` | Your GSLT may have expired or be invalid. Generate a new token. |
| Players can't connect | Verify the token is for App ID `4465480`, not `730`. |
| Server not in browser | The standalone CS:GO server browser may not work. Players connect via console: `connect IP:PORT` |