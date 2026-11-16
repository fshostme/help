---
description: "What RCON is, where to find your RCON password on Free and Pro servers, and how to log in from the game console."
---

# RCON (Remote Console)

RCON lets you send commands to your game server from your own game client. You use it to change the map, kick a player or change a setting while you play.

## How RCON Works

1. Join your server in the game
2. Open the game's console
3. Log in with your server's RCON password
4. Send commands with `rcon` in front of them

The login only lasts for the current game session. Log in again after you reconnect.

## Where to Find Your RCON Password

| Server | Where the password is |
|--------|-----------------------|
| Free | You pick it under **RCON Password** when you create the server. The [Free Server Panel](https://fshost.me/free-panel) shows it next to the connect command |
| Pro | The **RCON password** field in **Game settings** on the **Settings** tab of the [Pro Panel](https://fshost.me/pro/servers). The **Connection info** box on the server page also shows it, with buttons to show and copy it |

An RCON password is 8 to 20 letters and numbers. On Pro CS2 servers it can be 6 to 20.


## Logging In

The login command depends on the game:

| Game | Login command |
|------|---------------|
| Counter-Strike 1.6, Condition Zero, Source, Half-Life Deathmatch, Team Fortress 2 | `rcon_password yourpassword` |
| Call of Duty 2, Call of Duty 4, World at War | `rcon login yourpassword` |
| Call of Duty, Medal of Honor: Allied Assault | `rconpassword yourpassword` |
| Counter-Strike 2 | `fake_rcon_password yourpassword`, see [CS2 RCON Commands](/games/cs2/rcon) |

Then send a command, for example on CS 1.6:

```bash
rcon status
```

::: danger Never Type Your Password in Chat
The login command belongs in the console. Typed in chat, every player on the server can read your password.
:::

## Game-Specific Guides

Each game has its own commands. See the guide for your game:

- [Counter-Strike 2](/games/cs2/rcon)
- [Counter-Strike 1.6](/games/cs16/rcon)
- [Call of Duty](/games/cod/rcon)
- [Call of Duty 2](/games/cod2/rcon)
- [Call of Duty 4](/games/cod4/rcon)

## RCON and the Pro Console

Pro servers also have a **Console** tab in the Pro Panel, which sends commands to the server without joining it. It only accepts letters, numbers, spaces, `_`, `-` and `/`, so commands with quotes, dots or `;` still need RCON. See [Console Access](/servers/pro/console).

## Keep Your Password Private

Anyone with your RCON password can control your server. Only share it with people you trust.

If it leaks:

- **Pro:** change the **RCON password** in **Game settings** and save
- **Free:** stop the server on the Free Server Panel and create a new one with a new password

## Troubleshooting RCON

::: details Commands do nothing
- Check that you are connected to your server, not sitting in the main menu
- Log in again. The login is lost when you reconnect
- Check that you used the right login command for your game, see [Logging In](#logging-in)
- Test with a simple command such as `rcon status`
:::

::: details The game says the password is wrong
Copy the password from the panel again rather than typing it. It is case-sensitive.
:::

::: details CS2 does not accept `rcon` commands
Valve's RCON does not work on CS2. Use `fake_rcon` instead, see [CS2 RCON Commands](/games/cs2/rcon).
:::
