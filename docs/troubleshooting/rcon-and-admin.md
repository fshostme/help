---
description: "Fixes for RCON commands that do nothing, a rejected RCON password and admin commands that do not work."
---

# RCON and Admin Problems

What to check when RCON or admin commands do not work. Each block below covers one symptom, with a link to the full guide for your game.

## Counter-Strike 2

::: details Nothing happens when I type an RCON command
CS2 uses `fake_rcon`, not `rcon`. Valve's own RCON is broken on CS2. Check in this order:

1. You are connected to your server, not sitting in the main menu
2. You ran `fake_rcon_password` this session, and it answered `[Client] You can now use the fake_rcon command`
3. You typed `fake_rcon` in front of the command

```bash
fake_rcon_password your_rcon_password
fake_rcon say Test message
```

See [CS2 RCON Commands](/games/cs2/rcon#troubleshooting).
:::

::: details Nothing happens when I press the console key
The developer console is off by default in CS2. Turn it on in **Settings** → **Game** → **Enable Developer Console (~)**. See [Before You Start](/games/cs2/rcon#before-you-start).
:::

::: details My RCON password is not accepted
Copy the password from the panel rather than typing it, and check for a trailing space.

| Server | Where the RCON password is |
|--------|----------------------------|
| Free | [Free Server Panel](https://fshost.me/free-panel) |
| Pro | **Connection info** on the **Overview** tab in the [Pro Panel](https://fshost.me/pro/servers) |
:::

::: details A chat command does nothing in the console
Chat commands such as `!map` go in the in-game chat, not the console. Commands like `fake_rcon status` go in the console. See [Where to Type Commands](/games/cs2/rcon#where-to-type-commands).

The prefixes `!` and `/` are interchangeable for chat commands. The `.` prefix only works for commands that support it, such as the MatchZy commands.
:::

::: details Admin commands do not work on my Pro server
Admins are added in the Pro Panel under **Settings** → **Server admins**. After adding or editing an admin, click **Reload in-game**. Otherwise the server keeps the old admin list until the next restart.

Also check that you used your 17-digit SteamID64 and the right flags. See [Become a Server Admin](/games/cs2/become-admin#troubleshooting).
:::

::: details Admin commands do not work on my free server
The admin system is Pro only. Free servers use RCON and the commands on [Free Server Commands](/games/cs2/commands-free).
:::

::: details My teammate cannot use admin commands
Team access covers the Pro Panel only. It does not give admin rights in game. Add your teammate under **Server admins**. See [Team Access](/servers/pro/team-access#troubleshooting).
:::

::: details A plugin command does nothing
The game mode plugins (Deathmatch, Retakes and Prefire Practice) are installed but off until you turn them on. See [Installed vs. Loaded](/games/cs2/plugins#installed-vs-loaded). Each plugin page also has its own troubleshooting section, see [CS2 Plugins](/games/cs2/plugins).
:::

## Counter-Strike 1.6

::: details RCON or admin commands do not work
Log in with `rcon_password` first, then send commands with `rcon` in front:

```bash
rcon_password your_rcon_password
rcon status
```

See [CS 1.6 RCON Commands](/games/cs16/rcon#troubleshooting) and, for AMX Mod X admins, [CS 1.6 Become a Server Admin](/games/cs16/becomeadmin#troubleshooting).
:::

## Other Games

See the RCON guide for your game from [All Games](/games/), and the general [RCON](/rcon#troubleshooting-rcon) page.
