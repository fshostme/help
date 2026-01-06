# FSH-AdminManager

::: warning Critical System Plugin
**DO NOT DELETE** - This plugin is essential for server administration. Removing it will disable all admin privileges and prevent the "Manage Admins" panel from working.
:::

## Overview

FSH-AdminManager is the core system that powers admin management on your CS2 server. It works seamlessly with your FSHOST.me control panel, allowing you to manage admins through the **"Manage Admins"** interface without touching the admins.json file.

**Managed by:** Miksen

## How It Works

### Panel Integration
FSH-AdminManager connects your server to the **"Manage Admins"** section in your control panel. When you add or edit admins through the panel:

1. **Instant Updates** - Changes are applied to your server immediately (within 2 seconds)
2. **No Server Restart** - Admins are loaded automatically when players connect
3. **Real-Time Sync** - The plugin checks the database and applies permissions live

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
1. Go to **"Manage Admins"** in your control panel
2. Enter the player's **SteamID64** (format: 76561198XXXXXXXXX)
3. Select permission flags (see flags table below)
4. Set immunity level if needed
5. Save - the admin will be active on their next connection!

### Editing Admin Permissions
If you made a mistake or need to change someone's permissions:
1. Find the admin in your **"Manage Admins"** list
2. Click ✏️  for Edit
3. Update their flags or immunity
4. Save - changes apply immediately

### Removing an Admin
1. Find the admin in your list
2. Click 🗑️  to delete
3. Confirm - they'll lose admin privileges on next connection

### In-Game Commands (For Server Owners)
If you have root access (`z` flag), you can also manage admins in-game:
- **`/css_reloadadmins`** - Force reload all admins from panel (useful after making changes)
- **`/css_addadmin <player> <flags>`** - Quick add (also updates the panel)
- **`/css_removeadmin <player>`** - Quick remove (also updates the panel)

## Permission Flags

FSH-AdminManager uses a comprehensive flag system for granular permission control:

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

1. **Check the Manage Admins panel** - ensure the SteamID64 and flags are correct
2. **Have the player reconnect** - admins load on connection
3. **Try `/css_reloadadmins`** in console - forces a refresh
4. **Contact FSHOST.me support** - we manage the backend and can help troubleshoot

::: info Managed Service
All database configuration, updates, and technical maintenance are handled by FSHOST.me. You only need to manage admins through the panel!
:::

---

::: danger Remember
FSH-AdminManager is **essential infrastructure** provided and managed by FSHOST.me. Never delete this plugin. If you need to make changes to admins management, use the **"Manage Admins"** panel or contact support.
:::
