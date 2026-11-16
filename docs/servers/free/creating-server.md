---
description: "Create a free game server on FSHOST.me: pick a game, location, hostname and slots, then join within 5 minutes."
---

# Creating a Free Server

This guide walks you through creating a free game server on FSHOST.me.

## Prerequisites

Before you begin, make sure you have:

1. Created an FSHOST.me account
2. Verified your email address

You can have one free server at a time.

## Step 1: Choose a Game

Open the [List of Games](https://fshost.me/games), click your game and click **Start Free**. Games that are only available on Pro do not have this button.

## Step 2: Fill In the Settings

The form asks for:

| Field | What to enter |
|-------|---------------|
| **Server Location** | Click a location to open it, then pick a machine. Each one shows your ping and how many servers are available. See [Ping Test](/network/ping-test) |
| **Hostname** | The name of your server, shown in the server browser |
| **Slots** | The number of player slots. The choices depend on the game |
| **RCON Password** | Used for remote admin commands. See the [RCON Guide](/rcon) |
| **Join Password** | Players need it to join. Leave it empty for no password |

Depending on the game there are more fields, such as **Map**.

## Step 3: Start the Server

Click **Start Your Server**. The server starts and you are taken to the [Free Server Panel](https://fshost.me/free-panel).

::: warning Join Within 5 Minutes
You have 5 minutes to join the server before it goes offline. After that, it stops automatically when no players are on it.
:::

## Step 4: Connect to Your Server

The [Free Server Panel](https://fshost.me/free-panel) shows two things:

- The connect command, `connect IP:PORT`. Paste it into the game console. In Minecraft, add `IP:PORT` as a server under **Multiplayer** instead
- Your RCON password, on games that have RCON

Share the IP, port and join password (if set) with your players. Only share your RCON password with players you trust.

## What You Can Do on a Free Server

A free server has a limited set of options. On most games you manage it in the game with RCON, which is included. On CS2 this is `fake_rcon`. Free Minecraft servers are the exception: they run vanilla Minecraft with no RCON and no operator (op) access, and the world is not saved. See the [RCON Guide](/rcon) and the guides for your game under [All Games](/games/).

A free server stops when no one is playing on it.

If you need a server that stays online while empty, see [Free vs Pro](/servers/free-vs-pro).

## Troubleshooting

See [Troubleshooting](/troubleshooting/) and [Connection Problems](/troubleshooting/connection) for common issues.

::: details The server went offline
Free servers stop when nobody is playing on them, and when they reach their time limit. Start a new one and join it within 5 minutes.
:::

::: details You already have a server
You can only have one free server at a time. Open the [Free Server Panel](https://fshost.me/free-panel) to find it, or stop it to create a new one.
:::
