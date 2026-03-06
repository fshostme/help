# Game Server Login Token (GSLT)

A Game Server Login Token (GSLT) is required for your CS:GO server to be connectable by players outside your local network. It links your dedicated server to your Steam account and ensures your server can authenticate with Steam's master servers.

::: info What does a GSLT do?
- Allows players to connect to your server
- Persists your server identity if you change IP or hosting provider — players who favourited your server can still find it
- Verifies game ownership to prevent fake servers flooding the server list
:::

## Requirements

Your Steam account must meet **all** of the following:

- Not currently community banned or locked
- Not a [limited account](https://support.steampowered.com/kb_article.php?ref=3330-IAGK-7663)
- Has a [qualifying registered phone number](https://store.steampowered.com/phone/add)
- Owns CSGO
- Has not exceeded the 1,000 GSLT cap

## Creating a Token

1. Go to [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers) and log in
2. Scroll down to **Create a new game server account**
3. Enter App ID: `4465480`
4. Enter a memo to identify the server (e.g. `csgo-server-1`)
5. Click **Create**
6. Copy the **Login Token** — this is your GSLT

::: warning One token per server
Each server must have its own unique GSLT. If a second server starts with the same token, the first server will be disconnected from Steam. Create a separate token for every server you run.
:::

## Applying the Token

### FSHOST Pro Panel

1. Go to your server in the **Pro Panel**
2. Click **Edit Server**
3. Paste your GSLT token into the **Steam GSLT (Game Server Login Token)** field
4. Save and restart your server

## Token Expiry & Bans

### Expiry

Tokens that go unused for approximately **5 weeks** (the server never logs in) will expire. Expired tokens can be regenerated from the [management page](https://steamcommunity.com/dev/managegameservers).

If you reset your Steam password (via the help site or Steam Support), **all your GSLTs will be regenerated** automatically.

### Troubleshooting

| Issue | Solution |
| --- | --- |
| Server won't start / error `5005` | Your GSLT is invalid or banned. Generate a new token. |
| `Failed to connect to Steam` | Your GSLT may be expired or invalid. Generate a new token. |
| Players can't connect | Verify the token is for App ID `4465480`, not `730`. |
| Server not in browser | The standalone CS:GO server browser may not work. Players connect via console: `connect IP:PORT` |
