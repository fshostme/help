---
description: "Make yourself an admin on your Counter-Strike 1.6 server with AMX Mod X, through RCON on Free and Pro or in users.ini on Pro."
---

# Become a Server Admin

How to make yourself an admin on your Counter-Strike 1.6 server with AMX Mod X.

## Overview

On Free and Pro servers you add an admin with RCON from the game console. On Pro servers you can also add admins in the `users.ini` file over FTP.

| Server | How long the admin lasts |
|--------|--------------------------|
| Free | Until the server restarts. Add yourself again after a restart |
| Pro | Admins stay after a restart |

## Add an Admin With RCON

### Step 1: Connect to Your Server

1. Launch Counter-Strike 1.6
2. Connect to your server and wait until you are in the game

### Step 2: Open the Console

Press the console key. It is the key below **Esc**, which is **~** on US keyboards and **§** on some European ones.

### Step 3: Log In With RCON

Your RCON password is on the [Free Server Panel](https://fshost.me/free-panel), or for Pro, under **RCON password** in **Game settings** on the [Pro Panel](https://fshost.me/pro/servers). The **Connection info** box on the Pro server page also shows it.

```bash
rcon_password yourpassword
```

Replace `yourpassword` with your RCON password.

![CS1.6 Console](https://help.fshost.me/img/cs16-console.png)

### Step 4: Test RCON

```bash
rcon say hello
```

![CS1.6 Console Test](https://help.fshost.me/img/cs16-console2.png)

If RCON works, the message appears in the game.

![CS1.6 Say Command](https://help.fshost.me/img/cs16-say.png)

### Step 5: Add Yourself as Admin

```bash
rcon amx_addadmin "PlayerName" "abcdefghijklmnopqrstu"
```

Replace `PlayerName` with your name as it shows on the server. The second value is the list of access flags. `abcdefghijklmnopqrstu` gives every permission. See [Access Flags](#access-flags) for what each letter does.

![CS1.6 Add Admin](https://help.fshost.me/img/cs16-console3.png)

### Step 6: Open the Admin Menu

You are now an admin. Open the AMX Mod X menu from the console:

```bash
amxmodmenu
```

::: danger Never Type Your Password in Chat
`rcon_password` belongs in the console only. Typed in chat, every player on the server can read it. If that happens, change the password: on Pro, change the **RCON password** in **Game settings** and save. On Free, stop the server on the Free Server Panel and create a new one with a new password.
:::

## Add an Admin in users.ini (Pro)

::: warning Pro Server Only
Editing `users.ini` needs [FTP](/servers/pro/ftp), which is only available on Pro servers.
:::

1. Connect with FTP and open `cstrike/addons/amxmodx/configs`
2. Download `users.ini` and keep a copy as a backup
3. Add a line at the bottom with the player's SteamID and flags:

```bash
"STEAM_0:1:12345678" "" "abcdefghijklmnopqrstu" "ce"
```

4. Upload `users.ini` back to the same folder
5. Restart the server, or change the map

The four values are the SteamID, the password (empty here), the access flags, and the account flags. `ce` means the line is a SteamID and no password is needed. Find a player's SteamID with `rcon status`.

## Access Flags

These are the standard AMX Mod X access flags:

| Flag | Access |
|------|--------|
| `a` | Immunity. Cannot be kicked, banned, slayed or slapped |
| `b` | Reservation. Can join on reserved slots |
| `c` | `amx_kick` |
| `d` | `amx_ban` and `amx_unban` |
| `e` | `amx_slay` and `amx_slap` |
| `f` | `amx_map` |
| `g` | `amx_cvar`. Not all cvars are available |
| `h` | `amx_cfg` |
| `i` | `amx_chat` and other chat commands |
| `j` | `amx_vote` and other vote commands |
| `k` | Access to the `sv_password` cvar through `amx_cvar` |
| `l` | `amx_rcon` and access to the `rcon_password` cvar |
| `m` to `t` | Custom levels A to H, used by some plugins |
| `u` | Menu access |

Combine flags by writing them together. For example, `bcd` gives a reserved slot, kick and ban.

## Common Admin Commands

Type these in the console once you are an admin.

| Command | What it does |
|---------|--------------|
| `amx_kick <name or #userid> [reason]` | Kicks a player |
| `amx_ban <name or #userid> <minutes> [reason]` | Bans a player. `0` minutes is permanent |
| `amx_slay <name or #userid>` | Kills a player |
| `amx_map <mapname>` | Changes the map |
| `amx_cfg <filename>` | Runs a config file |
| `amx_say <message>` | Sends a message to all players |
| `amx_chat <message>` | Sends a message to the other admins |
| `amx_vote <question> <answer1> <answer2>` | Starts a vote |
| `amx_who` | Lists the players on the server and their access |

See the [AMX Mod X admin commands](https://wiki.alliedmods.net/Commands_(AMX_Mod_X)) for the full list.

## Troubleshooting

::: details RCON password does not work
- Copy the password from the panel again rather than typing it. It is case sensitive
- Check there are no extra spaces in the command
- Use `rcon_password`, not `rcon login`, which is for Call of Duty
- Check that you are connected to your own server
:::

::: details amx_addadmin does nothing
- Check that RCON works with `rcon status`
- Put the name and the flags in quotes
- Check the name matches your name on the server
:::

::: details Admin menu does not open
- Type `amxmodmenu` in the console, not in chat
- Check that your flags include `u` (menu access)
- Reconnect to the server
:::

::: details I lost admin after a restart
On Free servers, admins added with RCON are removed when the server restarts. Add yourself again with [Step 5](#step-5-add-yourself-as-admin). On Pro servers, check that your line is still in `users.ini`.
:::

::: details An admin command says I have no access
Your flags do not include the one that command needs. Check the [Access Flags](#access-flags) table and add the flag.
:::

## Related

- [RCON Commands](/games/cs16/rcon) - Console commands for maps, players and settings
- [AMX Mod X Plugins](/games/cs16/plugins) - Install your own plugins (Pro)
