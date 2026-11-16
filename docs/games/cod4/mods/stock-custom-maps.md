---
description: "Stock Custom Maps for Call of Duty 4: play custom maps from our map list with stock game settings."
---

# Stock Custom Maps

Stock Custom Maps lets you play custom maps on your Call of Duty 4 server while keeping the stock game settings.

## What It Is

Call of Duty 4 only loads custom maps when the server runs a mod. Stock Custom Maps is a "fake" mod: it loads a mod folder, so custom maps work, but it does not change weapons, game modes or other gameplay.

## Select the Mod

- **Free server:** Pick **Stock Custom Maps** under **Mod** when you create the server. The mod cannot be changed afterwards. To switch, create a new server.
- **Pro server:** Pick **Stock Custom Maps** under **Mod** in **Game settings** on the [Pro Panel](https://fshost.me/pro/servers), save and restart the server.

## Change to a Custom Map

The [custom map list](https://dl.fsho.st/cod4/usermaps/) shows the custom maps on our servers. Log into RCON and change map:

```bash
/rcon login type_rcon_pass_here
/rcon map mapnamehere
```

On a Pro server, you can also set the map under **Map** in **Game settings**. Click **Enter a custom map name** to type a map that is not in the list.

## Map Rotation

Custom and stock maps can be mixed in one rotation:

```bash
/rcon sv_maprotation "gametype sd map mp_crash map mapnamehere"
```

See [Map Rotation](/games/cod4/rcon#map-rotation) for more.

## Game Modes

All stock game modes work. Set one with `g_gametype` and restart the map:

```bash
/rcon g_gametype war
/rcon map_restart
```

See [Game Modes](/games/cod4/rcon#game-modes) for the list.

## Troubleshooting

::: details The map does not load
- Check that the map is on the [custom map list](https://dl.fsho.st/cod4/usermaps/)
- Type the map name exactly as it is in the list
:::

::: details I want a map that is not on the list
Ask on our [Discord](https://fshost.me/discord), or open a ticket on [Pro Support](https://fshost.me/pro/support) if you have a Pro server. Pro servers with FTP can also use their own mod with their own maps. See [FTP Access](/servers/pro/ftp).
:::

## Related Resources

- [CoD4 RCON Commands](/games/cod4/rcon) - Maps, game modes and players
- [Promod LIVE](/games/cod4/mods/promodlive) - Competition mod
- [GunGame](/games/cod4/mods/gungame) - Each kill moves you up to the next weapon
