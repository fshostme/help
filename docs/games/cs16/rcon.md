# RCON Commands

Remote console commands for managing your Counter-Strike 1.6 server.

## Log into RCON

Open console in-game by clicking § (below ESC) and run the login command to gain access to all the following commands. The RCON password will be displayed on your [panel](https://fshost.me/free-panel).

**Login command:**
```
rcon_password type_rcon_pass_here
```

## General Settings

### Map Commands

**List all maps:**
```
rcon maps *
```

**Change map:**
```
rcon changelevel mapnamehere
```

Change to any stock or custom map.

**Restart game:**
```
rcon sv_restart seconds
```

Restart the game after X amount of seconds.

### Server Settings

**Password:**
```
rcon sv_password ""
```

You can change or remove the password to join your server by leaving the value empty.

**Hostname:**
```
rcon hostname "CUSTOM HOSTNAME - free @ fshost.me"
```

You can change the hostname on the request form or if you want to change it after you've started it, you can do so using this command.

::: warning Required Advert
Please note that you are required to keep the advert part in the hostname.
:::

## Policing Your Server

### Player Management

**Status:**
```
rcon status
```

Shows the Slot Number, Name, SteamID, IP, and other info of the players connected.

**Players list:**
```
rcon users
```

Get list of all players.

**Kick player:**
```
rcon kick #id or name
```

Kick a player by ID or name.

## Other RCON Commands

### Gameplay Settings

| RCON Command | Description | Default / Range |
|--------------|-------------|-----------------|
| `rcon mp_buytime 2` | Designate the desired amount of buy time for each round (in minutes) | |
| `rcon mp_startmoney 1337` | Sets the amount of money players start with | Default: 800, Range: 800–16000 |
| `rcon mp_timelimit 20` | Change the map timelimit (in minutes) | Default: 0, Range: 0–999 |
| `rcon mp_roundtime 2` | Sets the amount of roundtime (in minutes) | Default: 5, Range: 1–9 |
| `rcon mp_autokick 1` | Autokicks an idling person (1 is on, 0 is off) | Default: 1, Values: 0/1 |
| `rcon mp_autoteambalance 1` | Toggles forcing of clients to join teams to make it balanced (1 = on, 0 = off) | Default: 1, Values: 0/1 |
| `rcon mp_c4timer 45` | Sets the amount of time between C4 placement and explosion (seconds) | Default: 35, Range: 15–90 |
| `rcon mp_freezetime 3` | Sets the amount of "freeze" time at the beginning of each round (seconds) | Default: 6, Range: 0–60 |
| `rcon mp_friendlyfire 1` | Toggles friendly fire (1 is on, 0 is off) | Default: 0, Values: 0/1 |

### Communication Settings

| RCON Command | Description | Default / Range |
|--------------|-------------|-----------------|
| `rcon sv_alltalk 1` | Toggles team only or entire server mic chat (1 is on, 0 is off) | Default: 0, Values: 0/1 |
| `rcon sv_voiceenable 1` | Allows clients to use mic (1 is on, 0 is off) | Default: 1, Values: 0/1 |

### Advanced Settings

| RCON Command | Description | Default / Range |
|--------------|-------------|-----------------|
| `rcon sv_cheats 1` | Toggles cheats (1 is on, 0 is off) | Default: 0, Values: 0/1 |
| `rcon sv_gravity 800` | Sets the amount of gravity | Default: 800, Range: 100–2000 |

::: danger Cheats Warning
Enabling `sv_cheats` can affect gameplay and may pose security risks. Only use in private testing environments.
:::

::: tip Using Impulse 101
If you want to make use of `impulse 101` (client side), then you need to enable sv_cheats and do changemap to a random map.
:::

## PODBot Commands

::: tip Pro Server Only
You can use **amx_pbmenu** to control bots. You only need to be an admin on your CS1.6 server for this to be possible.

Find more commands on [this page](http://podbotmm.bots-united.com/doc_v3/html/pbmm_configuration.html).
:::

### Bot Management

| RCON Command | Description |
|--------------|-------------|
| `rcon pb add [1-100]` | Adds a bot with specified skill (1-100). Example: `rcon pb add 35` |
| `rcon pb_autokill 0/1` | Turns on/off auto killing bots if all human players are dead already. Default is off (0) |
| `rcon pb removebots` | Kicks bots from your server until reaching pb_minbots |

### Examples

**Add medium skill bot:**
```
rcon pb add 50
```

**Add expert bot:**
```
rcon pb add 90
```

**Remove all bots:**
```
rcon pb removebots
```

## Configuration Examples

### Competitive Setup

**5v5 Competitive:**
```
rcon mp_startmoney 800
rcon mp_roundtime 2
rcon mp_c4timer 35
rcon mp_freezetime 15
rcon mp_friendlyfire 1
```

### Public Server

**Casual Play:**
```
rcon mp_startmoney 16000
rcon mp_roundtime 5
rcon mp_autoteambalance 1
rcon mp_friendlyfire 0
rcon sv_alltalk 1
```

### Practice Server

**Training Setup:**
```
rcon sv_cheats 1
rcon mp_startmoney 16000
rcon mp_buytime 99
rcon mp_roundtime 60
rcon sv_restart 1
```

## Troubleshooting

::: details RCON password not working
- Verify password from panel is correct
- Check for typos
- Make sure you're using `rcon_password` not `rcon login`
- Try reconnecting to server
:::

::: details Can't change map
- Verify map name is correct
- Use `rcon maps *` to list available maps
- Check if custom map is uploaded
- Try `rcon changelevel` instead of `rcon map`
:::

::: details Commands not executing
- Ensure you've logged in with `rcon_password`
- Verify you have RCON access
- Check command syntax
- Try simpler commands first (like `rcon status`)
:::

## Related Resources

- [Become a Server Admin](/games/cs16/becomeadmin) - Gain admin rights
- [Support](https://fshost.me/discord) - Get help
- [PODBot Documentation](http://podbotmm.bots-united.com/doc_v3/html/pbmm_configuration.html) - Bot commands
