---
description: "FPSChallenge.eu Promod v2.88 for Call of Duty 4: the FPSChallenge.eu match mod based on Promod LIVE, and how to run it on your server."
---

# FPSChallenge.eu Promod

[FPSChallenge.eu](https://fpschallenge.eu/) Promod is FPSChallenge.eu's own match mod, based on Promod LIVE. It brings a number of fixes, changes and improvements over the standard Promod LIVE.

::: tip FSHOST Official Provider
FSHOST is an official server provider for the mod. Its anti-cheat and automatic demo upload are supported on our servers.
:::

## Select the Mod

- **Free server:** Pick **FPSChallenge.eu Promod v2.88** under **Mod** when you create the server. The mod cannot be changed afterwards. To switch, create a new server.
- **Pro server:** Pick **FPSChallenge.eu Promod v2.88** under **Mod** in **Game settings** on the [Pro Panel](https://fshost.me/pro/servers), save and restart the server.

## Change the Mode

FPSChallenge.eu Promod uses the same `promod_mode` modes as Promod LIVE. See [Promod LIVE](/games/cod4/mods/promodlive) for the full list of modes and segments.

```bash
/rcon login type_rcon_pass_here
/rcon promod_mode match_mr12
```

**With a knife round:**
```bash
/rcon promod_mode match_mr12_knife
```

**On a LAN:**
```bash
/rcon promod_mode match_mr12_lan
```

The mod restarts the map on its own when the mode changes.

## FPSChallenge.eu Promod Settings

On top of the Promod LIVE modes, this version has:

| Segment or setting | Description |
|--------------------|-------------|
| `match` without `mr#` | Plays 12 rounds per half |
| `knockout` without `mr#` or `ot#` | Plays 12 rounds per half with 3 overtime rounds |
| `ot#` | Number of overtime rounds in Search & Destroy, for example `ot3` |
| `fps_match_id` | The FPSChallenge.eu match ID. Matches with a match ID are tracked by FPSChallenge.eu, and demos are named after the match ID |

## Release Notes

For the changes, fixes and improvements in each version, see the [release notes on GitHub](https://github.com/warkingous/promod_x/releases).

## Support

- **Server problems:** `#free-support` or `#pro-support` on our [Discord](https://fshost.me/discord), or a ticket on [Pro Support](https://fshost.me/pro/support) for Pro servers
- **Mod problems, anti-cheat and demos:** [FPSChallenge.eu](https://fpschallenge.eu/)

## Comparison With Promod LIVE

| Feature | Promod LIVE | FPSChallenge.eu Promod |
|---------|-------------|------------------------|
| `promod_mode` match modes | Yes | Yes |
| FPSChallenge.eu anti-cheat | No | Yes |
| Automatic demo upload | No | Yes |

## Related Resources

- [Promod LIVE](/games/cod4/mods/promodlive) - Modes and segments for `promod_mode`
- [CoD4 RCON Commands](/games/cod4/rcon) - Maps, game modes and players
- [FPSChallenge.eu](https://fpschallenge.eu/) - Official website
