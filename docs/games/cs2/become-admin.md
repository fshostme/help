---
description: "Make yourself an admin on your CS2 Pro server in the Pro Panel, choose permission flags and immunity, and use the in-game admin commands."
---

# Become a Server Admin

Add yourself and your staff as admins on your CS2 Pro server.

::: warning Pro Server Only
The **Server admins** page is available on CS2 Pro servers only. Free servers use RCON instead, see [RCON Commands](/games/cs2/rcon).
:::

## Setup via Pro Panel

Admins are added on the **Server admins** page of the Pro Panel. No console or in-game commands are needed.

### Step 1: Find Your SteamID64

Open [steamid.io](https://steamid.io) and paste your Steam profile URL. Copy the **steamID64** value, which is a 17-digit number starting with `7656119`.

### Step 2: Open the Admin Page

1. Go to [fshost.me/pro/servers](https://fshost.me/pro/servers)
2. Click on your server name
3. Open the **Settings** tab. The **Edit** button in the top right opens the same page
4. Click **Server admins** in the **Server settings** menu on the left

### Step 3: Add Yourself

Fill in the **Add admin** form and click **Add**.

![CS2 Server admins page](https://help.fshost.me/img/cs2-server-admins.png)

| Field | Value |
|-------|-------|
| **SteamID64** | Your 17-digit ID from Step 1 |
| **Flags** | `z` for full access |
| **Immunity** | A number from `0` to `100`. Use `100` for yourself |
| **Custom permissions** | Optional. Plugin permissions in the form `@plugin/perm`, separated by spaces. Leave it empty unless a plugin asks for one |

::: tip About the z Flag
The `z` flag grants every permission at once. The **z** button next to the **Flags** field fills it in for you, and the **...** button lets you pick individual flags. Keep `z` for yourself and co-owners. For staff, pick flags from the [Permission Flags](#permission-flags) table below.
:::

### Step 4: Apply the Changes

Click **Reload in-game** next to **Existing admins**. Your admin access applies right away, without a server restart. The button is only shown while the server is running.

Your entry then appears under **Existing admins** with the Steam avatar, flags and immunity. Use the pencil icon to edit it, or the bin icon to remove it.

::: warning Changes Not Showing In-Game
Click **Reload in-game** after adding, editing or removing an admin. Otherwise the server keeps the old admin list until the next restart.
:::

## Other Ways to Become Admin

- **Log in from the console.** Type `login YOUR_RCON_PASSWORD` in the developer console to make yourself root admin. Never type it in chat. See [Log In With the RCON Password](/games/cs2/plugins/adminmanager#log-in-with-the-rcon-password)
- **Add admins in-game.** Root admins can use `/css_addadmin` and roles. See [In-Game Commands](/games/cs2/plugins/adminmanager#in-game-commands-for-server-owners) and [Roles](/games/cs2/plugins/adminmanager#roles)

## Permission Flags

These are the flags offered by the **...** button on the **Server admins** page.

| Flag | Permission |
|------|------------|
| `a` | Reservation |
| `b` | Generic |
| `c` | Kick |
| `d` | Ban |
| `e` | Unban |
| `f` | Slay |
| `g` | Changemap |
| `h` | Cvar |
| `i` | Config |
| `j` | Chat |
| `k` | Vote |
| `l` | Password |
| `m` | Rcon |
| `n` | Cheats |
| `z` | Root, full access |

Combine flags by writing them together, for example `bcd` for a moderator who can kick and ban. See [FSH-AdminManager](/games/cs2/plugins/adminmanager#permission-flags) for more examples.

## Immunity

Immunity decides who outranks whom. An admin with higher immunity outranks one with lower immunity. Give yourself `100` and your staff lower values.

## Admin Commands

Once you are an admin, you can use the commands of the plugins on your server. The `!` and `/` prefixes are interchangeable in chat. This page uses `/`.

Commands for moderating players come from [CS2-SimpleAdmin](/games/cs2/plugins/cs2-simpleadmin):

```bash
/css_kick <player> [reason]
/css_ban <player> [time] [reason]
/css_mute <player>
```

Admins with the `z` flag can also manage admins in-game with [FSH-AdminManager](/games/cs2/plugins/adminmanager#in-game-commands-for-server-owners):

```bash
/css_reloadadmins
/css_addadmin <player> <flags>
/css_removeadmin <player>
```

For maps, game modes and match commands, see [Pro Server Commands](/games/cs2/commands).

## Troubleshooting

::: details I do not have admin in-game
Check that:

- You clicked **Reload in-game** after adding the admin, or restarted the server
- The SteamID64 is your own 17-digit ID, not a SteamID or a profile name
- The **Flags** field has the flags you need, or `z` for full access

If you were already on the server, reconnect.
:::

::: details I cannot use a command on another admin
Your immunity must be higher than theirs. Check both entries under **Existing admins**.
:::

::: details I do not see Server admins in the menu
Only the server owner sees **Server admins**. [Team Access](/servers/pro/team-access) members do not. The page is also hidden once the server has expired.
:::

::: details Reload in-game is missing
The button is only shown while the server is running. Start the server first, or let the new admin list load on the next start.
:::
