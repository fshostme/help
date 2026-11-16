---
description: "FSH-AdminManager powers admin roles and the Server admins page in the Pro Panel for CS2. Do not remove it."
---

# FSH-AdminManager

::: warning Pro Server Only
FSH-AdminManager is available exclusively on Pro servers.
:::

::: warning Critical System Plugin
**DO NOT DELETE** - This plugin is essential for server administration. Removing it will disable all admin privileges and prevent the **Server admins** page in the Pro Panel from working.
:::

## Overview

FSH-AdminManager is the plugin behind admin management on your CS2 server. It reads your admin list from the Pro Panel, so you add and edit admins through the **Server admins** page instead of editing the `admins.json` file by hand.

**Managed by:** Miksen

## How It Works

### Panel Integration
FSH-AdminManager connects your server to the **Server admins** page in your Pro Panel. Find it under the **Settings** tab on your server's page. When you add or edit admins through the panel:

1. **Reload in-game** - Click **Reload in-game** on the **Server admins** page and the changes apply straight away. The server must be online
2. **No Server Restart** - You do not need to restart the server to apply admin changes
3. **Loaded on Start** - If you skip the reload, the new admin list is picked up the next time the server restarts

### Automatic Permission Loading
- When a player connects to your server, FSH-AdminManager checks their SteamID64
- If they're in your admin list, their permissions are loaded automatically
- Players get their admin commands and privileges immediately

### Built-in Retry System
- The plugin automatically handles Steam authentication delays
- If a player's SteamID isn't ready immediately, it retries up to 10 times
- Ensures admins always get their permissions, even with slow connections
- Works reliably across map changes and reconnects

## Managing Admins Through Your Panel

### Adding an Admin
1. Open the **Settings** tab on your server's page in the [Pro Panel](https://fshost.me/pro/servers), then click **Server admins**
2. Enter the player's **SteamID64** (format: 76561198XXXXXXXXX)
3. Select permission flags (see flags table below)
4. Set immunity level if needed
5. Click **Add**, then **Reload in-game** to apply it straight away

### Editing Admin Permissions
If you made a mistake or need to change someone's permissions:
1. Find the admin in your **Server admins** list
2. Click the pencil icon to edit
3. Update their flags or immunity
4. Save, then click **Reload in-game** to apply the change straight away

### Removing an Admin
1. Find the admin in your list
2. Click the trash icon to delete
3. Confirm, then click **Reload in-game** to remove their privileges straight away

### In-Game Commands (For Server Owners)

Admins with the `z` (root) flag can also manage admins in-game. Changes made this way also show up in the panel.

The `!` and `/` prefixes are interchangeable in chat. You can also type the commands in the developer console without a prefix.

| Command | What it does |
|---------|--------------|
| `/css_reloadadmins` or `!reloadadmins` | Reload every online player's admin rights, for example after a change in the panel |
| `/css_addadmin <SteamID64 or name> <flags>` | Add an admin |
| `/css_updateadmin <SteamID64 or name> <flags>` | Change an existing admin |
| `/css_removeadmin <SteamID64 or name>` | Remove an admin |
| `/css_admins` | List every admin on the server. Needs the `b` flag |
| `/css_flags` | Show what each flag letter grants |
| `/css_admincheck` | Show your own admin entry and whether it is active |

`<flags>` can be written three ways:

```bash
/css_addadmin 76561198000000000 bcd
/css_addadmin 76561198000000000 bcd:50
/css_addadmin 76561198000000000 Moderator
```

The first gives flags only, the second flags with immunity 50, the third a [role](#roles).

### Roles

A role is a named set of flags and an immunity level. Create it once, then give it to several admins.

| Command | What it does |
|---------|--------------|
| `/css_addrole <Name> <Flags> <Immunity>` | Create a role, or update one with the same name |
| `/css_roleflags <Name> <Flags>` | Change the flags of a role |
| `/css_removerole <Name>` | Remove a role |
| `/css_roles` | List all roles. Needs the `b` flag |
| `/rolehelp` | Show the role commands |

Example:

```bash
/css_addrole VIP a 5
/css_addrole Moderator bcd 50
/css_addrole Admin bcdefgh 75
/css_addadmin 76561198000000000 Moderator
```

### Log In With the RCON Password

If you are not an admin yet, you can make yourself root admin from inside the server:

1. Connect to your server
2. Open the developer console. See [Before You Start](/games/cs2/rcon#before-you-start)
3. Type `login` followed by the RCON password of your server, shown in the Pro Panel

```bash
login YOUR_RCON_PASSWORD
```

::: danger Console only
Type `login` in the developer console, never in chat. Chat is visible to every player, so the plugin refuses the command there.
:::

You get 3 attempts. After that the command stops accepting tries from your Steam account.

## Permission Flags

Permissions are set with flags, one letter per permission:

| Flag | Description |
|------|-------------|
| `a` | Reserved slot access |
| `b` | Generic admin commands |
| `c` | Kick players |
| `d` | Ban players |
| `e` | Unban players |
| `f` | Slay/harm players |
| `g` | Change map |
| `h` | Change cvars |
| `i` | Execute config files |
| `j` | Special chat privileges |
| `k` | Start votes |
| `l` | Set password |
| `m` | RCON access |
| `n` | Change sv_cheats |
| `z` | Root/Owner (all permissions) |

### Common Flag Combinations

**Donor** - `a`
- Reserved slot access

**Moderator** - `bcd`
- Basic admin commands
- Kick players
- Ban players

**Admin** - `abcdefgh`
- All moderator powers
- Map changes
- Cvar control
- Slay/harm players

**Owner/Root** - `z`
- All permissions
- Can manage other admins
- Full server control

::: tip Pro Tip
Start with minimal permissions (`bcd` for moderators) and add more as needed. You can always edit flags later through the panel!
:::

## Frequently Asked Questions

### How do I find someone's SteamID64?
1. Go to [steamid.io](https://steamid.io)
2. Enter their Steam profile URL or name
3. Copy the **SteamID64** number (starts with 765611...)

### Why isn't my friend getting admin?
- **Double-check the SteamID64** - it must be exact
- Have them **reconnect** to the server
- Use `/css_reloadadmins` in console if they're already on
- Check if you used the correct flags (minimum `b` for basic admin)

### Can I have multiple admins?
Yes! Add as many as you want through the panel. Each admin can have different permission levels.

### What's immunity?
Immunity protects higher-level admins from being kicked/banned by lower-level admins. Higher immunity number = more protection. Typical values:
- **10-25** - Donors
- **50** - Moderators
- **75** - Admins
- **100** - Owners

### Can I remove the plugin to "clean up"?
**No!** This plugin is required infrastructure. It's like deleting the engine from your car - the whole system stops working. Keep it installed always.

### Does this work with other admin plugins?
Yes, FSH-AdminManager is designed to work alongside other plugins. Many admin tools actually depend on it for permission checks.

## Support

If you're experiencing issues or need help:

1. **Check the Server admins page** - ensure the SteamID64 and flags are correct
2. **Have the player reconnect** - admins load on connection
3. **Try `/css_reloadadmins`** in console - forces a refresh
4. **Contact FSHOST.me support** - we manage the backend and can help troubleshoot

::: info Managed Service
All database configuration, updates, and technical maintenance are handled by FSHOST.me. You only need to manage admins through the panel!
:::

---

::: danger Remember
FSH-AdminManager is **essential infrastructure** provided and managed by FSHOST.me. Never delete this plugin. If you need to make changes to admins management, use the **Server admins** page or contact support.
:::
