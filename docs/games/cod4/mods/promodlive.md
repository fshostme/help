---
description: "Promod LIVE v2.20 competition mod for Call of Duty 4: Modern Warfare: pick it on your server and change match modes with promod_mode."
---

# Promod LIVE v2.20

Promod LIVE is the competition mod for Call of Duty 4: Modern Warfare. It is the default mod when you create a free CoD4 server.

## Select the Mod

- **Free server:** Pick **Promod LIVE v2.20** under **Mod** when you create the server. The mod cannot be changed afterwards. To switch, create a new server.
- **Pro server:** Pick **Promod LIVE v2.20** under **Mod** in **Game settings** on the [Pro Panel](https://fshost.me/pro/servers), save and restart the server.

## Change the Mode

Log into RCON first. See [Log into RCON](/games/cod4/rcon#log-into-rcon).

```bash
/rcon login type_rcon_pass_here
/rcon promod_mode match_mr12
```

The mod restarts the map on its own when the mode changes, and shows **Changing To Mode** in the chat. You do not need `map_restart`.

## Public Modes

These are full mode names. They cannot be combined with other segments.

| Command | Description |
|---------|-------------|
| `/rcon promod_mode comp_public` | Competitive public. The mod falls back to this mode when no valid mode is set |
| `/rcon promod_mode comp_public_hc` | Competitive public in hardcore mode |
| `/rcon promod_mode comp_public_lan` | Competitive public for LAN servers |
| `/rcon promod_mode comp_public_hc_lan` | Competitive public, hardcore, for LAN servers |
| `/rcon promod_mode custom_public` | Custom public. Reads its settings from the `custom_public` ruleset in `z_c_r.iwd` |
| `/rcon promod_mode custom_public_lan` | Custom public for LAN servers |
| `/rcon promod_mode strat` | Strat mode for practice |

## Match Modes

A match mode is built from segments joined with underscores, for example `match_mr12_knife`. The segments can be in any order, and each one can only be used once.

| Segment | Description |
|---------|-------------|
| `match` | Standard match mode. Cannot be combined with `knockout` |
| `knockout` | Knockout match mode. Cannot be combined with `match` |
| `mr#` | Rounds per half, for example `mr12`. The round limit is twice this number. Only works in Search & Destroy and Sabotage |
| `knife` | Adds a knife round before a Search & Destroy match |
| `hc` | Hardcore mode (`scr_hardcore 1`) |
| `lan` | LAN mode. Sets `g_antilag 0`. Cannot be combined with `pb` |
| `pb` | Turns off the PunkBuster warnings for online servers that run without PunkBuster. Cannot be combined with `lan` |
| `1v1` or `2v2` | For 1v1 and 2v2 matches. Disables the Demolitions and Sniper classes |
| `#:#` | Starting score, attack first and defense second, for example `3:2`. Used to continue an interrupted match |

Every match mode needs `match` or `knockout`. A mode without one of them is rejected.

### Examples

| Command | Description |
|---------|-------------|
| `/rcon promod_mode match_mr12` | 5v5 match, 12 rounds per half |
| `/rcon promod_mode match_mr12_knife` | 5v5 match with a knife round |
| `/rcon promod_mode match_mr12_pb` | 5v5 match on a server without PunkBuster |
| `/rcon promod_mode 2v2_match_mr10` | 2v2 match, 10 rounds per half |
| `/rcon promod_mode match_mr12_lan` | 5v5 match on a LAN |

## Match Flow

In `match` and `knockout` modes, every player has to ready up before the match starts. When all players are ready, the match starts after a short countdown. The ready-up period runs again after half time.

`custom_public` only uses ready-up when `promod_allow_readyup` is set to `1` in its ruleset.

## Strat Mode

`strat` is for practicing smokes, flashes and positions. In strat mode:

- The class limits for Spec Ops, Demolitions and Sniper are lifted
- Press melee twice to save your position and use twice to load it

```bash
/rcon promod_mode strat
```

## Troubleshooting

::: details The mode does not change
The mode name is invalid. The mod shows **Error Changing To Mode** in the chat with the correct syntax, and keeps the old mode. Check that:
- The mode uses either `match` or `knockout`, not both and not neither
- `lan` and `pb` are not used together
- No segment is used twice
- You are logged into RCON
:::

::: details Players cannot ready up
Ready-up only runs in `match` and `knockout` modes. Set a match mode:
```bash
/rcon promod_mode match_mr12
```
:::

::: details The match has the wrong number of rounds
`mr#` is the number of rounds per half, not the total. `mr12` switches sides after 12 rounds and has a round limit of 24. `mr#` only works in Search & Destroy and Sabotage.
:::

## Related Resources

- [CoD4 RCON Commands](/games/cod4/rcon) - Maps, game modes and players
- [FPSChallenge.eu Promod](/games/cod4/mods/fps-promod) - Promod variant by FPSChallenge.eu
