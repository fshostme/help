---
description: "Run scrims, matches and practice on your CS2 Pro server with MatchZy: setup, commands and settings."
---

<script setup>
import { ref, onMounted } from 'vue'
import { data as matchzy } from './matchzy-version.data.js'

// SSR/build-time value renders first (no flicker, works if the git host is down).
// On the client, refresh live so a new release shows without a docs rebuild.
const version = ref(matchzy.version)
const url = ref(matchzy.url)

onMounted(async () => {
  try {
    const res = await fetch(
      'https://api.github.com/repos/mrc4tt/MatchZy/releases/latest',
      { 
        headers: { Accept: 'application/vnd.github+json' }, 
        signal: AbortSignal.timeout(8000) 
      }
    )
    if (!res.ok) return
    const json = await res.json()
    const tag = (json.tag_name || '').replace(/^v/, '')
    if (tag) {
      version.value = tag
      url.value = json.html_url || 'https://github.com/mrc4tt/MatchZy/releases/latest'
    }
  } catch {
    /* keep the build-time value */
  }
})
</script>

# MatchZy - Match Management

Matches, scrims and practice mode on your CS2 Pro server.

::: warning Pro Server Only
MatchZy is available on Pro servers only.
:::

## Overview

MatchZy runs PUGs, scrims, competitive matches and practice sessions. FSHOST runs a customized fork of [MatchZy](https://github.com/shobhit-pathak/MatchZy), maintained by Miksen. On top of the original it adds an auto-pause, a coach system, in-game admin menus, a remote log API and Get5 (G5API) compatibility.

This page covers what you need on a FSHOST server. The fork's full documentation, with every command and setting, is at [matchzy.miksen.me](https://matchzy.miksen.me/).

::: info Command Prefixes
The `.`, `!` and `/` prefixes are interchangeable, so `.ready`, `!ready` and `/ready` are the same command. This page writes them with `.`, which is the convention most teams use for MatchZy. A few commands only exist with `!`, and are written that way below.

In the server console, type the command with `css_` in front, for example `css_ready`.
:::

## MatchZy on FSHOST

MatchZy loads when the server starts, in match mode. Game mode commands from the Custom Commands plugin switch the server between MatchZy and the other modes:

| Command | What it does |
|---------|--------------|
| `!matchzy` | Loads MatchZy in match mode. `!matchzyon` and `!matchon` do the same |
| `!pracc` | Loads MatchZy in practice mode |
| `!matchoff` | Unloads MatchZy and goes back to competitive without it. `!matchzyoff` does the same |

These need the `g` (map) admin flag. While MatchZy runs, `!matchzy` answers that it is already running; use `.prac` and `.match` inside MatchZy instead. See [Installed vs. Loaded](/games/cs2/plugins#installed-vs-loaded).

### Who Can Use Which Command

| Label | Admin flag | Who |
|-------|------------|-----|
| **Player** | None | Everyone |
| **Map/prac** | `g` | Can switch modes, but not control a running match |
| **Config** | `i` | Match admins |
| **Chat** | `j` | Admin announcements |
| **Root** | `z` | Everything |

The `z` flag passes every check. Admins and their flags are set on the **Server admins** page in the Pro Panel, see [Become a Server Admin](/games/cs2/become-admin).

## Quick Start: Run Your First 5v5

These six steps are enough to play a match. Everything after them is optional.

### Step 1: Load the Map

An admin picks the map before starting the match:

```bash
!map de_dust2
```

### Step 2: Start Match Mode

An admin types:

```bash
.match
```

The server goes to warmup, with the ready check and the knife round turned on.

### Step 3: Everyone Joins a Team

Players pick Terrorist or Counter-Terrorist as normal. MatchZy uses whichever teams people are on when the match starts.

### Step 4: Everyone Readies Up

Each player types:

```bash
.ready
```

Type `.rc` at any point to see who is still not ready. By default 10 players must be ready. When they are, the knife round starts on its own.

### Step 5: Play the Knife Round

The winning team chooses a side:

```bash
.stay      # Keep the current side
.switch    # Change sides
```

### Step 6: Play

The match goes live straight after that choice. During the match:

| Command | Purpose |
|---------|---------|
| `.pause` | Pause in the next freeze time |
| `.unpause` | Your team's vote to resume. Both teams must type it |
| `.tech` | Technical pause |
| `.tac` | Tactical timeout |

With CSTV turned on, MatchZy records a demo of the match into the `demos` folder. Download it from **Demo files** on the **Files** tab, see [CSTV](/games/cs2/cstv#accessing-demos).

::: tip Practice Instead of a Match
Type `.prac` for practice mode with grenade tools, bots and spawn control. See [Practice Mode Commands](#practice-mode-commands).
:::

## Switching Modes

These start a mode from warmup or from another mode. They are refused once a match has started.

| Command | Who | What it does |
|---------|-----|--------------|
| `.match` | Map/prac | Match mode: warmup and ready check, then knife round, then the live match |
| `.scrim` | Map/prac | Scrim mode: no knife round, and every round is played. `.playout` and `.po` do the same |
| `.hill` | Map/prac | Like a match without the knife round |
| `.prac` | Map/prac | Practice mode. `.tactics` and `.training` do the same |
| `.exitprac` | Map/prac | Leaves practice and goes back to match warmup. `.noprac` and `.exittraining` do the same |
| `.dryrun [seconds]` | Map/prac | Plays normal rounds with $16,000 and a 6 second freeze time, without a match. Add a number from 0 to 60 for another freeze time. `.dry` does the same |
| `.exitdry` | Map/prac | Ends the dry run and goes back to match warmup |
| `.warmup` | Config | Goes back to warmup, not once a match has started |
| `.sleep` | Map/prac | Idle mode for an empty server |

## Match Commands

### Warmup and Ready Check

| Command | Who | What it does |
|---------|-----|--------------|
| `.ready` | Player | Marks you ready. `.r` and `.rdy` do the same. Pinging with the middle mouse button also toggles ready |
| `.unready` | Player | Takes back your ready. `.ur`, `.notready` and `.nr` do the same |
| `.rc` | Player | Shows how many players are ready and who is missing. `.readycheck` and `.rcheck` do the same |
| `.forceready` | Player | Readies your whole team at once. Only in a match loaded from a match config |
| `.start` | Config | Starts the match now, skipping the ready check. `.force` and `.forcestart` do the same |
| `.readyrequired [n]` | Config | Sets how many ready players are needed, from 0 to 32. `0` means everyone connected. Without a number it shows the current value. `.teamsize` does the same |
| `.knife` | Config | Turns the knife round on or off for this match. `.rk` and `.kr` do the same |
| `.team1 <name>` | Config | Names the team on CT. `.ctname` does the same |
| `.team2 <name>` | Config | Names the team on T. `.tname` does the same |
| `.whitelist` | Config | Turns the whitelist on or off. `!wl` does the same |
| `.settings` | Config | Shows the current knife, match mode and scrim settings. `.config` and `.configs` do the same |
| `.coach [t\|ct]` | Player | Become your team's coach, see [Coaching](#coaching) |

### Knife Round

| Command | Who | What it does |
|---------|-----|--------------|
| `.stay` | Knife winners | Keep your current side and go live |
| `.switch` | Knife winners | Swap sides and go live. `.swap` does the same |
| `.ct` or `.t` | Knife winners | Pick a side by name |

### Live Match

| Command | Who | What it does |
|---------|-----|--------------|
| `.pause` | Player | Pauses the match in the next freeze time. `.p` does the same |
| `.unpause` | Player | Your team's vote to unpause. The game resumes when both teams have voted. `.up` does the same |
| `.tech` | Player | Technical pause. Each team gets 2 per map by default, and each lasts up to 300 seconds |
| `.tac` | Player | Tactical timeout from your team's timeouts |
| `.stop` | Player | Vote to replay the current round from its start. A player from each team must type it within 30 seconds |
| `!gg` | Player | Surrender vote. Your team must be 6 or more rounds behind, and all but one of its players must vote. Single-map matches only |

A pause called by an admin can only be lifted by an admin.

### Admin Match Control

| Command | Who | What it does |
|---------|-----|--------------|
| `.forcepause` | Config | Admin pause. `.fp` does the same |
| `.forceunpause` | Config | Lifts any pause at once. `.fup` does the same |
| `.restart` | Config | Resets the match back to warmup. `.abort` does the same |
| `.endmatch` | Config | Stops the match and resets it. `.stopmatch`, `.end`, `.forcestop`, `.endgame`, `.stopgame`, `.endscrim` and `.exitscrim` do the same |
| `.forceend` | Config | Cancels the match |
| `.surrender` | Config | Ends a live match as a surrender. `.matchgg` does the same |

### Round Backups

MatchZy saves a backup at the start of every live round.

| Command | Who | What it does |
|---------|-----|--------------|
| `.backups` | Config | Lists the backups of this match, latest round first, with the restore command for each. `.backup` and `.backupmenu` do the same |
| `.restore <round>` | Config | Restores the match to the start of that round. Use the number `.backups` shows |
| `.restorelast` | Config | Restores the previous round. `.rl` does the same |
| `.restorecurrent` | Config | Restarts the current round from its start. `.rrestore` and `.rr` do the same |
| `.recover` | Config | Brings back a match that was interrupted by a crash or restart |

### Map Veto

Runs after a match config with a veto is loaded. Only each team's veto captain can use these.

| Command | Who | What it does |
|---------|-----|--------------|
| `.ban <map>` | Captain | Removes a map from the pool |
| `.pick <map>` | Captain | Picks a map to play |
| `.ct` or `.t` | Captain | Chooses the starting side on a map the other team picked |
| `.skipveto` | Config | Skips the veto and plays the maps in the listed order. `.sv` does the same |

### Other Commands

| Command | Who | What it does |
|---------|-----|--------------|
| `.help` | Player | Lists the commands for the current phase |
| `.mhelp` | Admin | Lists the admin commands you can run |
| `.version` | Player | Shows the MatchZy version |
| `!color <0-4>` | Player | Picks your teammate color: 0 blue, 1 green, 2 yellow, 3 orange, 4 purple |
| `.asay <message>` | Chat | Sends an announcement to all chat with the admin prefix |
| `.rmap` | Root | Reloads the current map |

## Auto-Pause

The fork pauses the match on its own when a team drops below 5 players, and resumes 3 seconds after both teams are full again. It only starts once the map has had at least twice that many players, so it does not trigger in smaller matches. It ignores bot teams.

| Command | Who | What it does |
|---------|-----|--------------|
| `.autopause` | Root | Turns auto-pause on or off |
| `!autopause_minplayers <1-5>` | Root | Players a team needs before auto-pause triggers |
| `!autopause_delay <0-30>` | Root | Seconds to wait before resuming once both teams are full again |
| `!autopause_status` | Root | Shows the auto-pause settings |
| `!autopause_check` | Root | Runs the auto-pause check once now |

## Coaching

| Command | Who | What it does |
|---------|-----|--------------|
| `.coach [t\|ct]` | Player | Become your own team's coach. Works in warmup and freeze time, not during a live round or in practice mode |
| `.uncoach` | Coach | Go back to playing. `.play` does the same |

The coach stands at a viewing spot behind the team during freeze time, cannot be damaged, and spectates the round once freeze time ends. The coach belongs to the team, so after halftime they follow it to the other side.

Admins can set where coaches stand on each map:

| Command | Who | What it does |
|---------|-----|--------------|
| `.savecoachspawn [t\|ct]` | Config | Saves your position and view as this map's coach spot |
| `.showcoachspawns` | Config | Shows the coach spot for both sides |
| `.listcoachspawns` | Config | Lists the saved coach spots for this map |
| `.clearcoachspawns` | Config | Removes the saved coach spots for this map |

## Practice Mode Commands

These work only in practice mode, started with `.prac` or `!pracc`. No admin rights are needed unless noted.

### Spawns and Positions

| Command | What it does |
|---------|--------------|
| `.ct`, `.t`, `.spec` | Switches your team |
| `.spawn <n>` | Teleports you to your team's competitive spawn number `n`. `.ctspawn <n>` and `.tspawn <n>` pick the side |
| `.bestspawn` | Teleports you to the spawn nearest to where you stand. `.bestctspawn` and `.besttspawn` pick the side |
| `.worstspawn` | Teleports you to the spawn furthest from where you stand. `.worstctspawn` and `.worsttspawn` pick the side |
| `.showspawns` | Draws a numbered box at every competitive spawn. Aim at one and press **E** to teleport to it. `.hidespawns` hides them |
| `.savepos [name]` | Saves your position and view. `.loadpos [name]` takes you back |
| `.fas` | Moves every other player to spectator so they can watch you. `.watchme` does the same. Map/prac admins only |

### Bots

| Command | What it does |
|---------|--------------|
| `.bot` | Spawns a bot at your position, looking where you look. `.ctbot` and `.tbot` pick the team |
| `.crouchbot` | Same, crouched. `.cbot` does the same |
| `.boost` | Spawns a bot and puts you on its head. `.crouchboost` does the same with a crouched bot |
| `.nobot` | Removes the bot nearest to you |
| `.nobots` | Removes all practice bots. `.clearbots` and `.kickbots` do the same |

### Grenades

| Command | What it does |
|---------|--------------|
| `.last` | Teleports you to where you threw your last grenade, with that grenade in hand |
| `.back [n]` | Steps back through your grenade history. `.back 3` jumps to entry 3 |
| `.rethrow` | Throws your last grenade again from the same spot. `.rt` and `.throw` do the same |
| `.throwsmoke`, `.throwflash`, `.thrownade`, `.throwmolotov`, `.throwdecoy` | Rethrows your last grenade of that type |
| `.throwindex <n...>` | Throws one or more history entries by number, for example `.throwindex 2 4 5` |
| `.lastindex` | Shows the number of your last grenade in the history |
| `.delay <seconds>` | Adds a delay to your last grenade when rethrown |
| `.timer` | Stopwatch: type once to start, again to stop |

### Saved Lineups

| Command | What it does |
|---------|--------------|
| `.savenade <name> [throw] [comment]` | Saves your current lineup, with an optional throw style (`normal`, `jump`, `run`, `walk` or `crouch`) and comment. `.sn` does the same |
| `.loadnade <name>` | Teleports you to a saved lineup with the grenade in hand. `.ln` does the same |
| `.listnades [filter]` | Lists your lineups and the shared ones on this map. `.lin` does the same |
| `.delnade <name>` | Deletes a lineup. `.dn` and `.deletenade` do the same |
| `.shownades` | Shows a marker at every lineup on the map. Aim at one and press **E** to load it. `.hidenades` hides them |
| `.globalnades` | Config admins: new lineups are saved for everyone instead of per player |

### Utility and Visuals

| Command | What it does |
|---------|--------------|
| `.clear` | Removes all smokes, fires and flying grenades. `.cleanup` does the same |
| `.noflash` | Flashbangs do not blind you. `.noblind` does the same |
| `.god` | You take no damage. Type again to turn it off |
| `.impacts` | Turns bullet impact markers off or on for you |
| `.traj` | Picture-in-picture camera that follows your grenade. `.pip`, `.cam` and `.nadecam` do the same |
| `.solid` | Toggles whether teammates block each other |
| `.ff` | Speeds up time for 10 seconds, to wait out smokes and fires. `.fastforward` does the same |
| `.break` | Breaks all breakable glass, doors and props. `.nobreak` restores them |
| `.rr` | Restarts the practice round for everyone. Map/prac admins only |

The fork has many more practice tools, such as bot recordings, strategies and a lineup library. See the [practice commands](https://matchzy.miksen.me/) in the fork's documentation.

## In-Game Menus

| Command | Who | What it does |
|---------|-----|--------------|
| `.matchadmin` | Config | Opens the admin menu: force start, knife toggle, restart round, stop match, pause and unpause, switch modes. `.ma` does the same. Move with **W** and **S**, select with **E** |
| `.matchsetup` | Config | Opens a wizard that builds a match (teams, series length, maps, veto) and loads it |

## Settings

MatchZy reads its settings from `cfg/MatchZy/config.cfg` each time it loads. You can also set any of them for the current session in the **Console** tab of the Pro Panel. To change the file itself you need FTP, see [FTP Access](/servers/pro/ftp).

Common settings, with the value in the default `config.cfg`:

| Setting | Default | Purpose |
|---------|---------|---------|
| `matchzy_minimum_ready_required` | `10` | Ready players needed to start. `0` means everyone connected |
| `matchzy_knife_enabled_default` | `true` | Knife round on by default |
| `matchzy_playout_enabled_default` | `false` | Play out all rounds by default |
| `matchzy_whitelist_enabled_default` | `false` | Whitelist on by default |
| `matchzy_warmup_enabled` | `true` | Use warmup before a match |
| `matchzy_enable_tech_pause` | `true` | Allow `.tech` |
| `matchzy_tech_pause_duration` | `300` | Length of a tech pause in seconds |
| `matchzy_max_tech_pauses_allowed` | `2` | Tech pauses per team per map |
| `matchzy_use_pause_command_for_tactical_pause` | `false` | Make `.pause` a tactical timeout |
| `matchzy_stop_command_available` | `true` | Allow `.stop` |
| `matchzy_autopause_enabled` | `true` | Auto-pause when a team is short |
| `matchzy_autopause_minplayers` | `5` | Players per team below which auto-pause triggers |
| `matchzy_autopause_resume_delay` | `3` | Seconds before resuming once teams are full again |
| `matchzy_enable_damage_report` | `true` | Damage report after each round |
| `matchzy_save_nades_as_global_enabled` | `false` | Save lineups for everyone instead of per player |
| `matchzy_match_end_auto_changelevel` | `1` | Change map after a match ends. Turn off for G5API or tournament servers |
| `matchzy_everyone_is_admin` | `false` | Give every player MatchZy admin rights |
| `matchzy_demo_path` | `demos/` | Folder for demos, relative to `csgo/` |

Every setting is listed in the fork's [configuration reference](https://matchzy.miksen.me/).

### Get5 / G5API

The fork accepts match configs and commands from Get5 panels such as G5API. Run these from the server console:

| Command | What it does |
|---------|--------------|
| `matchzy_loadmatch <file>` | Loads a match config file, path relative to `csgo/` |
| `matchzy_loadmatch_url <url> [header] [value]` | Loads a match config from a URL. Alias `get5_loadmatch_url` |
| `matchzy_addplayer <steamid64> <team1\|team2\|spec> "<name>"` | Adds a player to the loaded match. Alias `get5_addplayer` |
| `matchzy_removeplayer <steamid64>` | Removes a player from the loaded match. Alias `get5_removeplayer` |
| `matchzy_loadbackup <file>` | Restores a round backup. Alias `get5_loadbackup` |
| `get5_endmatch [team1\|team2]` | Cancels the match, or ends the series with that team as winner |
| `get5_status` | Status reply for Get5 panels |

Match events can be sent to your own web service with `matchzy_remote_log_url`, and round backups with `matchzy_remote_backup_url`. See the fork's documentation for the event format.

## Troubleshooting

::: details Commands do nothing or say I have no permission
Check that you have the flag the command needs, see [Who Can Use Which Command](#who-can-use-which-command). Practice commands only work in practice mode, and match commands only in the matching phase. Type `.help` to see what works right now.
:::

::: details `!matchzy` says MatchZy is already running
MatchZy is loaded. Use `.match` or `.prac` to switch modes inside it.
:::

::: details MatchZy commands do nothing after playing deathmatch or retakes
MatchZy was unloaded when that mode started. Type `!matchzy` or `!pracc` to load it again.
:::

::: details Pause does not start straight away
`.pause` takes effect in the next freeze time, not in the middle of a round.
:::

::: details Auto-pause does not trigger
Auto-pause only starts once the map has had at least twice `matchzy_autopause_minplayers` players, so 10 by default. Check that it is on with `!autopause_status`.
:::

::: details No demo was recorded
MatchZy only records live maps (match, scrim and hill), not practice, and only with CSTV turned on. See [CSTV](/games/cs2/cstv#enabling-cstv).
:::

## Version Information

**Current Version:** <a :href="url" target="_blank" rel="noreferrer">{{ version }}</a> (FSHOST / Miksen fork)<br />
**Based on:** [MatchZy by shobhit-pathak](https://github.com/shobhit-pathak/MatchZy)<br />
**Framework:** CounterStrikeSharp (.NET 10)

Check the running version in-game with `.version`, or in the console with `css_matchzy_version`.

::: info Automatically updated
This version number is read from the [latest published MatchZy release](https://github.com/mrc4tt/MatchZy/releases) and is kept up to date automatically.
:::

## Related Pages

- [MatchZy fork documentation](https://matchzy.miksen.me/) - Every command and setting
- [Become a Server Admin](/games/cs2/become-admin) - Admin flags
- [CSTV](/games/cs2/cstv) - Demo recording and downloads
- [Pro Server Commands](/games/cs2/commands) - Game mode commands
