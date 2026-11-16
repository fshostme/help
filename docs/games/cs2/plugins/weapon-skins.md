---
description: "Use custom weapon skins, knives, gloves, agents, music kits and pins on your CS2 Pro server with WeaponPaints and skins.fsho.st."
---

# WeaponPaints (Skins)

Custom weapon skins, knives, gloves, agents, music kits and pins on your CS2 server.

::: warning Pro Server Only
WeaponPaints is available on Pro servers only.
:::

## Overview

WeaponPaints applies the skins you pick on [skins.fsho.st](https://skins.fsho.st) to your weapons on the server. You can also pick skins in-game through chat menus, and change the wear and pattern of the weapon you hold.

::: warning Skins Only Appear on This Server
WeaponPaints applies skins on your own server. They are not visible in official matchmaking, on Valve servers, or on other community servers, and nothing is added to your Steam inventory. Other players on your server see your skins, and you see theirs.
:::

## Turning Skins On

Skins are switched on in the Pro Panel:

1. Go to [fshost.me/pro/servers](https://fshost.me/pro/servers) and click on your server name
2. Open the **Settings** tab, or click **Edit** in the top right. Both open **Game settings**
3. In the **Features** section, click the **Skins (WeaponPaints)** tile so it shows **On**
4. Click **Save changes**, then restart the server

With the tile off, WeaponPaints does not run when the server starts. Typing `!skinson` in chat then replies:

```bash
WS Plugin is disabled! - You can turn it on from Server Panel
```

### About GSLT

A **GSLT** (Game Server Login Token) links your server to a Steam account. WeaponPaints does not need one, so you can leave **Steam GSLT (optional)** in the **Steam token** section empty and skins still work.

The token is only used while **Skins (WeaponPaints)** is on. Saving **Game settings** with the tile off clears the **Steam GSLT (optional)** field.

## Getting Started

1. Visit [skins.fsho.st](https://skins.fsho.st)
2. Sign in with Steam
3. Pick your skins
4. Join your server. Your skins are loaded when you connect

If you are already on the server when you change something on the website, type `!wp` in chat to load your selection again instead of reconnecting.

## In-Game Commands

The `!` and `/` prefixes are interchangeable in chat. This page writes them with `!`.

### Menus

| Command | What it does |
|---------|--------------|
| `!ws` | Shows the website address and the skin commands |
| `!wp` | Loads your skins, gloves, agent, music kit and pin again from your selection |
| `!skins` | Opens the weapon skins menu |
| `!skins <weapon>` | Opens the skins menu for one weapon, for example `!skins ak47` or `!skins awp` |
| `!knife` | Opens the knife menu |
| `!gloves` | Opens the gloves menu |
| `!agents` | Opens the agents menu |
| `!music` | Opens the music kit menu |
| `!pins` | Opens the pins menu. `!pin`, `!coin` and `!coins` do the same |

`!wp` has a cooldown of 3 seconds. Typed sooner, it replies that you cannot refresh weapon paints right now.

### Wear, Pattern and StatTrak

These change the weapon in your hands. It must already have a skin, otherwise the command tells you to pick one with `!skins` first.

| Command | What it does |
|---------|--------------|
| `!float` | Shows the wear (float) of the weapon you hold |
| `!float <value>` | Sets the wear, from `0` to `1`. `!wear` does the same |
| `!seed` | Shows the pattern seed of the weapon you hold |
| `!seed <value>` | Sets the pattern seed, from `0` to `999`. `!pattern` does the same |
| `!stattrak` | Turns StatTrak on or off for the weapon you hold. `!st` does the same |

Instead of a number, `!float` also takes a wear name:

| Shortcut | Wear | Float |
|----------|------|-------|
| `fn` | Factory New | 0.035 |
| `mw` | Minimal Wear | 0.11 |
| `ft` | Field-Tested | 0.265 |
| `ww` | Well-Worn | 0.415 |
| `bs` | Battle-Scarred | 0.725 |

```bash
!float 0.01
!float fn
!seed 661
```

`!float` and `!seed` are saved to your selection, so the change stays after you reconnect.

### Trying a Skin Without Saving It

```bash
!gen <weapon> <skin_id> <seed> <float>
!gen ak47 38 200 0.01
```

`!gen` (or `!g`) puts a skin on a weapon to try it out. It is not saved to your selection, so it is gone after you reconnect.

## Turning Skins Off and On In-Game

Admins with the `g` (map) flag can switch WeaponPaints off and on without the panel:

| Command | What it does |
|---------|--------------|
| `!skinsoff` | Turns skins off. Replies: "Skins will be set to default starting with the next map change." |
| `!skinson` | Turns skins on again and restarts the round |

These only work while **Skins (WeaponPaints)** is on in **Game settings**. See [Become a Server Admin](/games/cs2/become-admin) for admin flags.

## Troubleshooting

::: details Skins are not showing
1. Check that **Skins (WeaponPaints)** is **On** in **Game settings** and the server has restarted since
2. Check that you are signed in on [skins.fsho.st](https://skins.fsho.st) with the same Steam account you play on
3. Type `!wp` to load your selection again, or reconnect
4. Remember that skins only show on this server, never in matchmaking
:::

::: details `!float` or `!seed` says the weapon has no skin
Pick a skin for that weapon first with `!skins` or on [skins.fsho.st](https://skins.fsho.st), then try again while holding it.
:::

::: details `!skinson` says the plugin is disabled
**Skins (WeaponPaints)** is off in **Game settings**. Turn it on, save and restart the server.
:::
