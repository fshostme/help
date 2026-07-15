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
      'https://git.miksen.me/api/v1/repos/mikkel/matchzy/releases/latest',
      { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(8000) }
    )
    if (!res.ok) return
    const json = await res.json()
    const tag = (json.tag_name || '').replace(/^v/, '')
    if (tag) {
      version.value = tag
      url.value = json.html_url || url.value
    }
  } catch {
    /* keep the build-time value */
  }
})
</script>

# MatchZy - Match Management

Professional match management and practice tools for CS2 competitive play.

::: tip Pro Feature
MatchZy is available exclusively on Pro servers.
:::

## Overview

MatchZy streamlines management for practice sessions, PUGs, scrims, and competitive matches. FSHOST runs a customized fork with features including a ready system, knife round, tactical/technical pauses, an intelligent auto-pause system, a full practice mode, a coach system, in-game admin menus, backup/restore, map veto, GOTV demo recording, and Get5 (G5API) compatibility.

::: info Command Prefixes
Most commands work with either `.` or `!` prefix, and the same command is available in the server console as `css_<command>` (e.g. `css_ready`). Example: `.ready`, `!ready`, or `css_ready`.
:::

## Match Management Commands

### Ready System

**Mark yourself ready:**
```bash
.ready
.r
.rdy
```

**Mark yourself unready:**
```bash
.unready
.ur
.notready
.nr
```

**Check ready status:**
```bash
.rc
.rcheck
.readycheck
```

Shows how many players are currently ready.

**Force ready your team:**
```bash
.forceready
```

::: warning JSON/Get5 Only
`.forceready` only works when using match setup via JSON configuration or Get5 integration, and only if `matchzy_allow_force_ready` is enabled.
:::

### Pause Controls

**Request pause:**
```bash
.pause
.p
```

Pauses the match during freeze time.

::: info Pause Type
Behavior depends on the `matchzy_use_pause_command_for_tactical_pause` setting:
- If enabled: creates a tactical pause
- If disabled: creates a standard pause
:::

**Technical pause:**
```bash
.tech
```

Pauses the match for technical issues during freeze time. Limited by `matchzy_max_tech_pauses_allowed` (default 2) and `matchzy_tech_pause_duration` (default 300s).

**Unpause match:**
```bash
.unpause
.up
```

Both teams must type `.unpause` to resume the match.

::: tip Auto-Pause Feature
FSHOST's fork includes an intelligent auto-pause system that automatically pauses 5v5 matches when a team drops below the minimum player count and auto-resumes when both teams are back to full strength. See [Auto-Pause System](#fshost-exclusive-auto-pause-system) below.
:::

### Tactical Timeouts

**Call tactical timeout:**
```bash
.tac
```

Uses one of your team's tactical timeouts.

::: tip Tactical Timeout Usage
Teams typically have a limited number of tactical timeouts per half. Use strategically for regrouping and strategy discussion.
:::

### Knife Round

After winning the knife round:

**Stay on current side:**
```bash
.stay
```

**Switch sides:**
```bash
.switch
.swap
.ct    # Choose CT side
.t     # Choose T side
```

### Round Control

**Restore current round:**
```bash
.stop
```

Both teams must type `.stop` to restore the backup of the current round. Controlled by `matchzy_stop_command_available`; `matchzy_stop_command_no_damage` can disable it once a player has damaged an opponent.

## Match Modes

Switch the server between competitive, scrim, and practice modes.

**Start match mode:**
```bash
.match          # Match mode with knife round + ready system
.warmup         # Force-start into warmup/match mode
```

**Start practice mode:**
```bash
.prac
.tactics
.training
```

Enters practice mode with all utilities enabled.

**Start scrim / playout mode:**
```bash
.scrim
.hill
.playout
.po
```

Scrim mode plays all rounds regardless of the match result - useful for practice matches.

**Dry run:**
```bash
.dryrun
.dry
```

Practice without consuming utilities.

**Sleep mode:**
```bash
.sleep
```

Puts the server into an idle/low-resource state until a match or practice starts.

**Exit a mode:**
```bash
.exitprac       # Leave practice, back to match mode
.exitdry        # Leave dry run, back to practice
.exitscrim      # Leave scrim, reset match
```

## Practice Mode Commands

### Spawn Management

**Teleport to competitive spawn:**
```bash
.spawn 1        # Team spawn #1
.spawn 5        # Team spawn #5
```

**CT spawn teleport:**
```bash
.ctspawn 1
.cts 3
```

**T spawn teleport:**
```bash
.tspawn 2
.ts 4
```

### Spawn Optimization

**Closest spawn to position:**
```bash
.bestspawn          # Your team's closest spawn
.bestctspawn        # CT closest spawn
.besttspawn         # T closest spawn
```

**Furthest spawn from position:**
```bash
.worstspawn         # Your team's furthest spawn
.worstctspawn       # CT furthest spawn
.worsttspawn        # T furthest spawn
```

### Spawn Visualization

**Show all competitive spawns:**
```bash
.showspawns
```

**Hide spawn markers:**
```bash
.hidespawns
```

### Bot Management

**Add bot at position:**
```bash
.bot            # Bot at your position
.ctbot          # CT bot at your position
.tbot           # T bot at your position
```

**Add crouched bot:**
```bash
.crouchbot
.cbot
.ctcrouchbot    # Crouched CT bot
.tcrouchbot     # Crouched T bot
```

**Add boost bot:**
```bash
.boost
```

Creates a bot and automatically boosts you onto it.

**Add crouch boost bot:**
```bash
.crouchboost
.cboost
```

**Remove bots:**
```bash
.nobot          # Remove closest bot
.nobots         # Remove all bots
.kickbots
```

### Environment Control

**Break props:**
```bash
.break
```

Breaks all breakable entities (glass, doors, vents).

**Restore props:**
```bash
.nobreak
```

Restores all breakable entities.

**Clear utilities:**
```bash
.clear
```

Removes all active smokes, molotovs, and incendiaries.

**Fast forward time:**
```bash
.fastforward
.ff
```

Advances server time to 20 seconds remaining in round.

### Team Switching

**Change team:**
```bash
.ct             # Join CT
.t              # Join T
.spec           # Join spectator
```

### Spectator Control

**Force all spectate:**
```bash
.fas
.watchme
```

Forces all other players into spectator mode, leaving only you active. Useful for demonstrations.

### Utility Toggles

**Flash immunity:**
```bash
.noflash
.noblind
```

Toggles immunity to flashbang effects (still blinds others without immunity).

**God mode:**
```bash
.god
```

Toggles invincibility.

**Player color:**
```bash
.color
```

Sets your `cl_color` (player/smoke color).

### Grenade Practice

**Save grenade lineup:**
```bash
.savenade <name> <optional description>
.sn smoke-a-site Quick A-site smoke from T-spawn
```

**Load saved lineup:**
```bash
.loadnade <name>
.ln smoke-a-site
```

**Delete lineup:**
```bash
.deletenade <name>
.delnade <name>
.dn smoke-a-site
```

**Import lineup:**
```bash
.importnade <code>
.in ABC123XYZ
```

Imports a lineup using a code from saved lineups or shared by others.

**List lineups:**
```bash
.listnades
.lin
.listnades smoke       # Filter by keyword
```

**Global lineups:**
```bash
.globalnades
```

Toggles whether your saved lineups are shared globally with all players instead of being private to you (default controlled by `matchzy_save_nades_as_global_enabled`).

### Grenade Preview

**Toggle nade preview mode:**
```bash
.cam
.nadecam
.nadepreview
.previewnade
```

Shows a preview camera of the thrown grenade's flight for lining up throws.

### Grenade History

**Rethrow last grenade:**
```bash
.rethrow
.rt
```

**Return to throw position:**
```bash
.last
```

Teleports you back to where you threw your last grenade.

**Go back in history:**
```bash
.back 2
```

Teleports to the position where you threw your 2nd-to-last grenade.

**Set grenade delay:**
```bash
.delay 2
```

Sets a 2-second delay on your last grenade for `.rethrow` or `.throwindex`.

**Throw specific grenades:**
```bash
.throwindex 1           # Throw 1st grenade
.throwindex 1 2         # Throw 1st and 2nd grenades
.throwindex 4 5 8 9     # Throw multiple grenades
```

Throws grenades from your throw history (respects set delays).

**View last grenade index:**
```bash
.lastindex
```

### Specific Grenade Rethrows

**Rethrow by type:**
```bash
.rethrowsmoke       # Last smoke
.rethrownade        # Last HE grenade
.rethrowflash       # Last flashbang
.rethrowmolotov     # Last molotov
.rethrowdecoy       # Last decoy
```

### Position Save / Load

**Save and restore your position:**
```bash
.savepos            # Save current location
.loadpos            # Teleport back to last saved location
```

### Timer

**Practice timer:**
```bash
.timer
```

Starts a timer. Type `.timer` again to stop and display duration.

::: tip Timer Usage
Useful for timing executes, rotations, or practicing specific sequences with precise timing.
:::

### Advanced Settings

**Toggle solid teammates:**
```bash
.solid
```

Toggles `mp_solid_teammates` for collision testing.

**Toggle impact display:**
```bash
.impacts
```

Toggles `sv_showimpacts` for bullet impact visualization.

**Toggle grenade trajectory:**
```bash
.traj
.pip
```

Toggles `sv_grenade_trajectory_prac_pipreview` for grenade path visualization.

## Coach System

::: tip FSHOST Fork Feature
The coach system in FSHOST's fork adds proper coach slots with per-map viewing spawns.
:::

**Start coaching:**
```bash
.coach t        # Coach terrorist side
.coach ct       # Coach CT side
.play t         # Move from coach back into the T team
.play ct        # Move from coach back into the CT team
```

**Stop coaching:**
```bash
.uncoach
```

::: info Coaching Restrictions
Coaches can spectate and communicate with their team but cannot control players or damage them. Coach placement uses per-map spawn positions.
:::

### Coach Viewing Spawns (Admin)

Coaches are placed at pre-defined viewing positions per map. Admins can manage these:

```bash
.savecoachspawn     # Save your current position as a coach spawn for this map
.listcoachspawns    # List loaded coach spawns for this map
.clearcoachspawns   # Clear all coach spawns for this map
```

## FSHOST Exclusive Auto-Pause System

These commands are part of FSHOST's customized fork:

### Auto-Pause Toggle

**Enable/disable auto-pause:**
```bash
.autopause
```

Toggles the automatic pause system on/off (`matchzy_autopause_enabled`).

**How it works:**
- Automatically pauses when a team drops below minimum players
- Only active for 5v5 matches (10 total players)
- Disabled for smaller formats (1v1, 2v2, 3v3, 4v4)
- Automatically resumes when both teams reach minimum players

### Configure Minimum Players

**Set auto-pause threshold:**
```bash
.autopause_minplayers 5
```

Sets the minimum number of players required per team before auto-pause triggers (`matchzy_autopause_minplayers`, default 5).

### Configure Auto-Resume Delay

**Set resume delay:**
```bash
.autopause_delay 10
```

Sets the delay (in seconds) before auto-resuming when teams are balanced (`matchzy_autopause_resume_delay`, default 3).

### Auto-Pause Status & Testing

```bash
.autopause_status       # Show current auto-pause settings
.autopause_check        # Manually trigger an auto-pause check (testing)
```

::: tip Auto-Pause Best Practices
- Enable auto-pause for competitive matches to handle player disconnects gracefully
- Set minimum players to match your match format (5 for 5v5, 3 for 3v3, etc.)
- Use reasonable auto-resume delays (10-15 seconds) to give teams time to prepare
:::

## Admin Commands

::: warning Admin Only
These commands require admin permissions (or `matchzy_everyone_is_admin` enabled on a private server).
:::

### Match Control

**Start / force start:**
```bash
.match          # Load match mode with knife round
.start          # Force start without waiting for ready-ups
.force
.forcestart
```

**Restart / end match:**
```bash
.restart
.abort              # FSHOST alias
.endmatch
.forceend
.end
.endgame
.stopmatch
```

Force restarts/resets the current match.

### Admin Pause

**Force pause:**
```bash
.forcepause
.fp
```

Pauses the match as admin. Players cannot unpause an admin-initiated pause.

**Force unpause:**
```bash
.forceunpause
.fup
```

Force unpauses the match regardless of team unpause requests.

### Surrender / GG

```bash
.gg
.surrender
.matchgg
```

Vote to surrender the current match.

### Backup & Restore

**Restore a specific round:**
```bash
.restore 15         # Restore the backup of round 15
```

**Quick restores:**
```bash
.restorelast
.rl                 # Restore the previous round
.restorecurrent
.rr                 # Restore the current round to its beginning
```

**List / browse backups:**
```bash
.backup
.backups
.backupmenu         # Shows available backups with restore commands
.listbackups <matchid>
```

::: info Enhanced Backup System
FSHOST's fork includes improved backup sanitization to prevent server crashes on restore. Backup rounds can also be uploaded to a remote URL for Get5/tournament use (`matchzy_remote_backup_url`).
:::

### Map Veto

```bash
.ban <map>          # Ban a map
.pick <map>         # Pick a map
.skipveto
.sv                 # Skip the current veto phase
```

### Map Control

```bash
.map <map>          # Change map (map name or workshop id)
.rmap               # Reload the current map
```

::: info Command Conflicts
If another admin plugin (e.g. CS2-SimpleAdmin) owns `css_map`, disable MatchZy's console handler with `matchzy_map_console_command_enabled false`. The `.map` chat command stays available regardless.
:::

### Match Configuration

**Toggle knife round:**
```bash
.knife
.kr
.rk
```

Enables or disables the knife round. When disabled, the match goes directly from warmup to live (default `matchzy_knife_enabled_default`).

**Toggle playout:**
```bash
.playout
```

When enabled, all rounds play regardless of match winner (default `matchzy_playout_enabled_default`).

**Toggle whitelist:**
```bash
.whitelist
.wl
```

Enables or disables player whitelisting (default `matchzy_whitelist_enabled_default`).

::: info Whitelist Configuration
To whitelist players, add Steam64 IDs to the whitelist config on the server. A reload may be required.
:::

**Set ready requirement:**
```bash
.teamsize 5             # FSHOST alias - 5 ready players required
.readyrequired 5
.readyrequired 0        # All connected players must ready
```

Sets the minimum number of ready players required to start (`matchzy_minimum_ready_required`).

::: tip FSHOST Custom Feature
`.teamsize` is a FSHOST alias that provides a quick, intuitive way to set the team size requirement.

```bash
.teamsize 5     # 5v5 match
.teamsize 3     # 3v3 match
.teamsize 1     # 1v1 match
```
:::

### Server Settings

**View current settings:**
```bash
.settings
.config
.options
.configs
```

Displays comprehensive match configuration including knife-round status, ready requirements, playout mode, team names, auto-pause settings, technical pause limits, and more.

### Communication

**Admin say:**
```bash
.asay Server restarting in 5 minutes
```

Sends a message in all-chat as an admin (prefix set via `matchzy_admin_chat_prefix`).

::: info Command Conflicts
If another plugin owns `css_asay`, disable MatchZy's console handler with `matchzy_asay_console_enabled false`. The `.asay` chat command stays available regardless.
:::

### Team Names

**Set team names:**
```bash
.team1 Team Liquid
.team2 FaZe Clan
.ctname Liquid
.tname FaZe
```

### Help

```bash
.mhelp          # Show all available commands per mode (admin only)
.version        # Display the current MatchZy version
```

## In-Game Menus

::: tip FSHOST Fork Feature
FSHOST's fork adds WASD-navigable in-game menus. These require the optional `CS2MenuManager` shared plugin; without it, the commands reply with a notice and everything else works normally.
:::

**Admin control menu:**
```bash
.matchadmin
.ma
```

Opens the MatchZy admin menu - match control, pause, and mode switching from an in-game menu.

**Match setup wizard:**
```bash
.matchsetup
```

Opens an in-game wizard that builds a match configuration (teams, maps, format) and loads it, no JSON editing required.

## Server Configuration (ConVars)

Set these in a server config file or via RCON. Common ones:

| ConVar | Default | Purpose |
|--------|---------|---------|
| `matchzy_autopause_enabled` | `true` | Auto-pause when a team is short players (5v5) |
| `matchzy_autopause_minplayers` | `5` | Players per team before auto-pause triggers |
| `matchzy_autopause_resume_delay` | `3` | Seconds before auto-resume when balanced |
| `matchzy_warmup_enabled` | `true` | Load warmup mode |
| `matchzy_enable_tech_pause` | `true` | Enable the `.tech` command |
| `matchzy_tech_pause_duration` | `300` | Tech pause duration (seconds) |
| `matchzy_max_tech_pauses_allowed` | `2` | Max tech pauses per team |
| `matchzy_use_pause_command_for_tactical_pause` | `false` | `.pause` acts as tactical pause |
| `matchzy_minimum_ready_required` | `10` | Ready players required to start |
| `matchzy_knife_enabled_default` | `true` | Knife round on by default |
| `matchzy_playout_enabled_default` | `true` | Play out all rounds by default |
| `matchzy_whitelist_enabled_default` | `false` | Whitelist on by default |
| `matchzy_enable_damage_report` | `true` | Per-round damage report |
| `matchzy_match_summary_panel` | `true` | End-of-match summary HTML panel |
| `matchzy_match_summary_panel_duration` | `12` | Summary panel display seconds |
| `matchzy_match_end_auto_changelevel` | `true` | Auto change map after match end (disable for G5API) |
| `matchzy_everyone_is_admin` | `false` | Grant all players admin |
| `matchzy_hostname_format` | `""` | Hostname template, `{TEAM1}` / `{TEAM2}` |
| `matchzy_admin_chat_prefix` | `[MatchZy]` | Prefix for `.asay` |
| `matchzy_save_nades_as_global_enabled` | `false` | Lineups global instead of private |
| `matchzy_asay_console_enabled` | `true` | Respond to `css_asay` console command |
| `matchzy_map_console_command_enabled` | `true` | Respond to `css_map` console command |

### Get5 / G5API & Remote Logging

FSHOST's fork ships Get5 (G5API) compatibility for external match management (get5-web, tournament systems). Both `matchzy_*` and `get5_*` command aliases are accepted.

| ConVar | Purpose |
|--------|---------|
| `matchzy_loadmatch <file>` | Load a match from a JSON file (relative to `csgo/`) |
| `matchzy_loadmatch_url <url>` | Load a match from a URL |
| `matchzy_remote_log_url` | Send all match events to this URL over HTTP |
| `matchzy_remote_log_header_key` / `_value` | Custom HTTP header on event requests |
| `matchzy_remote_log_auth_key` / `_value` | Auth header on event requests |
| `matchzy_remote_backup_url` | Upload round backups over HTTP |
| `matchzy_demo_upload_url` | Upload GOTV demo when the map ends |
| `matchzy_demo_path` | Folder for saved demos |
| `matchzy_demo_name_format` | Demo filename format |
| `matchzy_kick_when_no_match_loaded` | Kick/block players when no match is loaded |
| `matchzy_reset_cvars_on_series_end` | Restore match-config cvars when a series ends |

::: tip Tournament Servers
For G5API/tournament setups, disable `matchzy_match_end_auto_changelevel` so the controller manages the map rotation.
:::

## Common Workflows

### Starting a Competitive Match

```bash
.match              # Load match mode
# Wait for players to ready up
# Knife round occurs
# Winning team chooses side with .stay or .switch
# Match goes live
```

### Setting Up Auto-Pause for 5v5

```bash
.autopause                    # Enable auto-pause
.autopause_minplayers 5       # Require 5 players per team
.autopause_delay 15           # 15 second resume delay
.match                        # Start match
```

### Practice Session Setup

```bash
.prac               # Enter practice mode
.map de_dust2       # Load desired map
.ct                 # Join CT side
.god                # Enable god mode
.noflash            # Disable flash effects
.showspawns         # Visualize spawns
```

### Grenade Practice

```bash
.prac
.god
.noflash
.savenade smoke-xbox-ct  # Save lineup
.rethrow                 # Test throw
.delay 1                 # Set 1s delay
.throwindex 1 2 3        # Execute multiple nades
```

## Troubleshooting

::: details Commands not working
Verify you have the required permissions. Some commands are admin-only.
:::

::: details Can't save grenades
Ensure practice mode is enabled with `.prac` before saving lineups.
:::

::: details Pause not working
Pauses can only be initiated during freeze time. Try again at round start.
:::

::: details In-game menus don't open
`.matchadmin` and `.matchsetup` need the optional `CS2MenuManager` shared plugin installed. All other commands work without it.
:::

::: details Auto-pause not working
Auto-pause only activates for 5v5 matches (10 total players). It is automatically disabled for smaller formats. Ensure it is enabled with `.autopause`.
:::

## Version Information

**Current Version:** <a :href="url" target="_blank" rel="noreferrer">{{ version }}</a> (FSHOST / Miksen fork)<br />
**Based on:** [MatchZy by shobhit-pathak](https://github.com/shobhit-pathak/MatchZy)<br />
**Framework:** CounterStrikeSharp (.NET 10)

Check the running version in-game or console with `.version` / `css_matchzy_version`.

::: info Automatically updated
This version number is retrieved directly from the [latest published MatchZy release](https://git.miksen.me/mikkel/matchzy/releases) and is kept up to date automatically.
:::

::: tip Custom Fork
FSHOST runs a customized MatchZy fork. Custom additions on top of upstream include: auto-pause system, coach system with per-map spawns, in-game admin/match-setup menus, remote log API, G5API compatibility, auto changelevel, and pause overhauls. If you self-host, replacing this build with stock MatchZy will remove these features.
:::

## Additional Resources

- [Admin Setup](/games/cs2/become-admin) - Configure admin access
- [RCON Commands](/games/cs2/rcon) - Server configuration
- [Original MatchZy Docs](https://shobhit-pathak.github.io/MatchZy/) - Upstream documentation (features may differ)
- [FSHOST Support](https://fshost.me/discord) - Get help with FSHOST-specific features
