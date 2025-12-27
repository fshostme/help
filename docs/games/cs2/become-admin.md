# Become a Server Admin

Complete guide to gaining admin access on your CS2 Pro server.

::: warning Pro Server Only
Admin system commands are exclusive to Pro servers. This functionality is not available on free servers.
:::

## Admin Access Methods

### Web-Based Management

The easiest way to manage admins is through the web interface.

**Access Steps:**
1. Open your server edit page
2. Click **Manage Admins** button
3. Add or remove admins as needed

**Benefits:**
- Visual Steam profile avatars for easy identification
- No in-game commands required
- Centralized admin list management

### In-Game Admin Access

**Quick Start:**

1. **Connect to your Pro server**
2. **Open in-game chat**
3. **Enter login command:**
   ```
   /login YOUR_RCON_PASSWORD
   ```

**Success Confirmation:**
```
[Admin Manager] Processing login request...
[Admin Manager] Login successful. You are now an admin.
```

## Admin Commands

### Basic Admin Commands

| Command | Example | Description |
|---------|---------|-------------|
| `/login [password]` | `/login mypass123` | Authenticate as server admin |
| `/admins` | - | Display list of current admins |
| `/addadmin help` | - | Show addadmin usage guide |
| `/rolehelp` | - | Display role management commands |

### Adding Admins

**By SteamID with flags:**
```
/addadmin 76561198975357634 99 z
```

**By SteamID with role:**
```
/addadmin 76561198975357634 Moderator
```

**By player name:**
```
/addadmin PlayerName Helper
```

::: tip SteamID64 Format
Use SteamID64 format for permanent admin assignments. Find yours at [steamid.io](https://steamid.io)
:::

### Removing Admins

```
/removeadmin 76561198975357634
/removeadmin PlayerName
```

## Role Management

### Creating Roles

Roles allow organized permission structures with immunity levels.

**Command Structure:**
```
/css_addrole <RoleName> <Flags> <Immunity>
```

**Example Roles:**

**VIP Role:**
```
/css_addrole VIP ao 10
```
*Reservation access, immunity 10*

**Moderator Role:**
```
/css_addrole Moderator abdh 50
```
*Ban, kick, chat management, immunity 50*

**Admin Role:**
```
/css_addrole Admin abcdefghijklmn 100
```
*Full admin permissions, immunity 100*

**Owner Role:**
```
/css_addrole Owner z 100
```
*Complete control, maximum immunity*

### Permission Flags

| Flag | Permission | Description |
|------|------------|-------------|
| `a` | Ban | Ban players |
| `b` | Kick | Kick players |
| `c` | Map | Change maps |
| `d` | Chat | Manage chat |
| `e` | Vote | Control votes |
| `f` | Cvars | Modify server settings |
| `g` | Generic | Generic admin |
| `h` | Cheats | Enable sv_cheats |
| `i` | Slay | Kill players |
| `j` | Team | Manage teams |
| `k` | Config | Execute configs |
| `l` | Reservation | Reserved slots |
| `m` | Root | Root admin access |
| `n` | Custom | Custom permissions |
| `o` | Rcon | RCON access |
| `z` | Full | All permissions |

### Assigning Roles

```
/css_addadmin PlayerName VIP
/css_addadmin 76561198975357634 Moderator
```

### Managing Roles

**List all roles:**
```
/css_roles
```

**Delete a role:**
```
/css_removeRole RoleName
```

## Player Management

### Common Moderation Commands

**Kick Player:**
```
/css_kick PlayerName
/css_kick PlayerName Reason for kick
```

**Ban Player:**
```
/css_ban PlayerName 0
/css_ban PlayerName 60 Breaking rules
```
*Minutes: 0 = permanent*

**Temporary Ban:**
```
/css_ban PlayerName 1440  # 24 hour ban
/css_ban PlayerName 10080 # 7 day ban
```

**Mute Player:**
```
/css_mute PlayerName
```

**Unmute Player:**
```
/css_unmute PlayerName
```

## Immunity System

Immunity determines the admin hierarchy. Higher immunity cannot be affected by lower immunity admins.

**Immunity Levels:**
- **0-25:** Basic moderators
- **26-50:** Moderators
- **51-75:** Senior moderators
- **76-99:** Admins
- **100:** Owner/root access

**Example Hierarchy:**
```
/css_addrole Helper abd 10      # Can kick/ban immunity <10
/css_addrole Mod abdfh 50       # Can manage immunity <50
/css_addrole Admin z 99         # Can manage immunity <99
/css_addrole Owner z 100        # Cannot be managed by anyone
```

## Role Examples

### Small Server Setup

```
/css_addrole VIP o 5
/css_addrole Admin z 99

/css_addadmin 76561198975357634 Admin
/css_addadmin FriendName VIP
```

### Large Community Setup

```
/css_addrole VIP o 5
/css_addrole Helper abd 20
/css_addrole Moderator abdefh 50
/css_addrole Admin abdefghiklmn 75
/css_addrole Owner z 100

/css_addadmin 76561198975357634 Owner
/css_addadmin AdminSteamID Admin
/css_addadmin ModSteamID Moderator
```

## Best Practices

::: tip Admin Security
1. Use strong, unique RCON passwords
2. Never share RCON password publicly
3. Grant minimum necessary permissions
4. Regularly review admin list
5. Use web interface for easier management
:::

::: warning Permission Guidelines
- Start with restrictive permissions
- Grant additional access as trust builds
- Use immunity levels strategically
- Document your role structure
- Remove inactive admins
:::

## Troubleshooting

::: details Login command not working
Verify:
- Using correct RCON password (from panel)
- Password has no typos or extra spaces
- You're on the correct server
- Server is Pro tier, not free
:::

::: details Cannot add admin
Check:
- Your immunity is higher than the target
- Using correct SteamID64 format
- Role name exists (if using roles)
- Syntax is correct
:::

::: details Changes not persisting
Admin changes save automatically to the database. If changes don't persist:
- Verify you have sufficient permissions
- Check server logs for errors
- Contact support if issue continues
:::

## Getting Help

Need assistance with admin setup?

- **Web Panel:** Access admin management interface
- **Discord:** Join [FSHOST Discord](https://fshost.me/discord)
- **Support:** Contact #pro-support channel
