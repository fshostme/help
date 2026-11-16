---
description: "Use the Pro Panel console to watch your server's output and send commands, and what the console allows."
---

# Console Access

The **Console** tab shows your server's live output and lets you send commands to it.

::: warning Pro Server Only
The console is part of the Pro Panel. Free servers are managed with [RCON](/rcon).
:::

## Open the Console

1. Go to [fshost.me/pro/servers](https://fshost.me/pro/servers)
2. Click on your server name
3. Open the **Console** tab

## Reading the Output

The **Server Console** box shows the last 500 lines of server output, newest at the bottom. It scrolls down on its own when new output loads.

Three buttons sit at the top right of the box.

| Button | Purpose |
|--------|---------|
| **Refresh** | Loads the newest output once |
| **Auto-refresh** | Loads new output every 3 seconds. It is **OFF** by default. Turn it off again to read older lines without the box jumping to the bottom |
| **Colours** | Switches colored output **ON** or **OFF** |

To find a message, use your browser's find function, Ctrl+F or Cmd+F.

Full log files are not available on the web or over FTP. If you need older logs, ask on a [support ticket](/servers/pro/support).

## Sending a Command

1. Type the command in the **Send command to console** box
2. Press Enter or click **Send**
3. The output loads in the box after a moment

Commands go straight to the server, the same as typing them in the server's own console. Use your game's console commands, for example:

```bash
changelevel de_dust2
mp_restartgame 1
status
```

See your game's guide for the full list: [CS2 RCON Commands](/games/cs2/rcon), [CS 1.6 RCON Commands](/games/cs16/rcon), [CoD4 RCON Commands](/games/cod4/rcon).

### What a Command Can Contain

A command may only contain letters, numbers, spaces, `_`, `-` and `/`. Anything else is refused, including quotes, dots, semicolons and `@`.

That means some commands cannot be sent from the console:

- Commands with a file name, such as `exec server.cfg`
- Text in quotes, such as `say "Restarting soon"`. Without quotes, `say Restarting soon` works
- Several commands on one line separated by `;`

For those, use [RCON](/rcon) in the game instead.

### Limits

- You can send 5 commands per minute on each server. After that, wait until the console lets you send again
- Every command you send is logged on the server

## Who Can Use the Console

| | Read output | Send commands |
|---|---|---|
| Server owner | Yes | Yes |
| [Team members](/servers/pro/team-access) | Yes | No |
| Expired server | Yes | No, renew it first |

## Troubleshooting

::: details "The command must only contain a-Z 0-9 _ - / and spaces."
The command has a character the console does not accept, such as a quote or a dot. Remove it, or send the command with [RCON](/rcon) in the game. See [What a Command Can Contain](#what-a-command-can-contain).
:::

::: details "Too many commands. Please wait ... seconds before sending another command."
You sent 5 commands within a minute. Wait the number of seconds shown, then send again.
:::

::: details "Only the server owner can send console commands."
You are a team member on this server. Team members can read the console but not send commands. Ask the owner to send the command.
:::

::: details "This server has expired. Renew it to send commands."
Renew the server first. See [Renew an Expired Server](/servers/pro/billing#renew-an-expired-server).
:::

::: details "No console available."
The panel cannot find a console for the server. Start the server and try again. If it keeps happening, open a [support ticket](/servers/pro/support).
:::

::: details The console is empty or does not update
Click **Refresh**, or turn on **Auto-refresh**. If the server is stopped, there is no new output. See [Server Problems](/troubleshooting/server-problems) if it will not start.
:::
