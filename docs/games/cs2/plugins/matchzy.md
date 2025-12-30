# MatchZy - Match Management

Professional match management and practice tools for CS2 competitive play.

::: tip Pro Feature
MatchZy is available exclusively on Pro servers.
:::

::: danger FSHOST Customized Version - DO NOT REPLACE
**Critical Warning:** FSHOST uses a **heavily customized fork** of MatchZy with significant additional features and integrations. 

**If you replace this with the original MatchZy from GitHub, you will lose:**

### Custom Commands
- **`.teamsize`** - Quick team size configuration (alias for `.readyrequired`)
- **`.settings` / `.config`** - Enhanced match settings display
- **`.abort`** - Alternative match restart command
- **`.autopause`** - Intelligent auto-pause system for 5v5 matches
- **`.autopause_minplayers`** - Configure auto-pause thresholds
- **`.autopause_delay`** - Set auto-resume delay

### Custom Features
- **Auto-Pause System** - Automatically pauses when teams drop below configured player count (5v5 only)
- **Auto-Resume** - Automatically resumes when both teams reach minimum players
- **Restart Confirmation** - 30-second confirmation system for critical actions
- **Stop Command Cooldown** - 3-second cooldown to prevent spam
- **Enhanced Backup Management** - Improved round backup and restore system

### Version Information
- **Current Version:** 0.8.16
- **Author:** WD- Edited by Miksen
- **Based on:** [MatchZy by shobhit-pathak](https://github.com/shobhit-pathak/MatchZy)

**⚠️ WARNING:** Contact FSHOST support before making any plugin changes. Replacing this plugin will break FSHOST-specific integrations and remove critical features.

Original MatchZy repository: [shobhit-pathak/MatchZy](https://github.com/shobhit-pathak/MatchZy)
:::

## Overview

MatchZy streamlines management for practice sessions, PUGs, scrims, and competitive matches with features including ready systems, pause functionality, tactical timeouts, and comprehensive practice utilities.

::: info Command Prefixes
Most commands work with either `.` or `!` prefix. Example: `.ready` or `!ready`
:::

## Match Management Commands

### Ready System

**Mark yourself ready:**
```bash
.ready
.r
```

**Mark yourself unready:**
```bash
.unready
.ur
.notready
```

**Force ready your team:**
```bash
.forceready
```

::: warning JSON/Get5 Only
`.forceready` only works when using match setup via JSON configuration or Get5 integration.
:::

### Pause Controls

**Request pause:**
```bash
.pause
```

Pauses the match during freeze time.

::: info Pause Type
Behavior depends on `matchzy_use_pause_command_for_tactical_pause` setting:
- If enabled: Creates tactical pause
- If disabled: Creates standard pause
:::

**Technical pause:**
```bash
.tech
```

Pauses the match for technical issues during freeze time.

**Unpause match:**
```bash
.unpause
```

Both teams must type `.unpause` to resume the match.

::: tip Auto-Pause Feature
FSHOST's custom version includes an intelligent auto-pause system that automatically pauses 5v5 matches when a team drops below the minimum player count and auto-resumes when both teams are back to full strength.
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

Both teams must type `.stop` to restore the backup of the current round.

::: warning Enhanced Stop System
FSHOST's version includes a 3-second cooldown on the `.stop` command to prevent spam and a 30-second vote timeout for better control.
:::

### Coaching

**Start coaching:**
```bash
.coach t        # Coach terrorist side
.coach ct       # Coach CT side
```

**Stop coaching:**
```bash
.uncoach
```

::: info Coaching Restrictions
Coaches can spectate and communicate with their team but cannot control players or access certain information depending on server configuration.
:::

## FSHOST Exclusive Auto-Pause System

These commands are **exclusive** to FSHOST's customized MatchZy:

### Auto-Pause Toggle

**Enable/disable auto-pause:**
```bash
.autopause
!autopause
```

Toggles the automatic pause system on/off.

**How it works:**
- Automatically pauses when a team drops below minimum players
- Only active for 5v5 matches (10 total players)
- Disabled for smaller formats (1v1, 2v2, 3v3, 4v4)
- Automatically resumes when both teams reach minimum players

**Example output:**
```bash
Auto-pause is now ENABLED
Match will auto-pause when teams have fewer than 5 players
```

### Configure Minimum Players

**Set auto-pause threshold:**
```bash
.autopause_minplayers 5
!autopause_minplayers 4
```

Sets the minimum number of players required before auto-pause triggers (1-5).

**Default:** 5 players per team

### Configure Auto-Resume Delay

**Set resume delay:**
```bash
.autopause_delay 10
!autopause_delay 15
```

Sets the delay (in seconds) before auto-resuming when teams are balanced.

**Default:** Configurable via server settings

::: tip Auto-Pause Best Practices
- Enable auto-pause for competitive matches to handle player disconnects gracefully
- Set minimum players to match your match format (5 for 5v5, 3 for 3v3, etc.)
- Use reasonable auto-resume delays (10-15 seconds) to give teams time to prepare
:::

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
.bot
```

**Add crouched bot:**
```bash
.crouchbot
.cbot
```

**Add boost bot:**
```bash
.boost
```

Creates a bot and automatically boosts you onto it.

**Add crouch boost bot:**
```bash
.crouchboost
```

**Remove bots:**
```bash
.nobot          # Remove one bot
.nobots         # Remove all bots
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

**Dry run mode:**
```bash
.dryrun
.dry
```

Enables dry-run mode for practicing without consuming utilities.

**God mode:**
```bash
.god
```

Toggles invincibility.

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
```

Toggles `sv_grenade_trajectory_prac_pipreview` for grenade path visualization.

## Admin Commands

::: warning Admin Only
These commands require admin permissions.
:::

### Match Control

**Start match mode:**
```bash
.match
```

Activates match mode with knife round enabled (standard 24 rounds).

**Force start:**
```bash
.start
.force
```

Force starts the match without waiting for ready-ups.

**Restart match:**
```bash
.restart
.abort              # FSHOST custom alias
.endmatch
.forceend
.end
.endgame
```

Force restarts/resets the current match.

::: tip FSHOST Custom Feature
The `.abort` command is an FSHOST-exclusive alias for `.restart`, providing an intuitive way to abort and restart matches.
:::

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

### Backup Management

**Restore specific round:**
```bash
.restore 15
```

Restores the backup of round 15.

::: info Enhanced Backup System
FSHOST's version includes improved backup sanitization to prevent server crashes and enhanced restore confirmation with timeouts.
:::

### Veto Control

**Skip veto:**
```bash
.skipveto
.sv
```

Skips the current veto phase and proceeds to the match.

### Match Configuration

**Toggle knife round:**
```bash
.knife
.rk
```

Enables or disables the knife round. When disabled, match goes directly from warmup to live.

**Toggle playout:**
```bash
.playout
.scrim
```

Toggles playout mode. When enabled, all rounds play regardless of match winner (useful for scrims).

### Whitelist

**Toggle whitelist:**
```bash
.whitelist
```

Enables or disables player whitelisting.

::: info Whitelist Configuration
To whitelist players, add Steam64 IDs to `cfg/matchzy/whitelist.cfg` on the server. Server reload may be required.
:::

### Ready Requirements

**Set ready count:**
```bash
.teamsize 5             # FSHOST custom command
.readyrequired 5
.readyrequired 0        # All connected must ready
```

Sets the minimum number of ready players required to start.

::: tip FSHOST Custom Feature
The `.teamsize` command is exclusive to FSHOST's customized version and provides a quick, intuitive way to set team size requirements.

**Examples:**
```bash
.teamsize 5     # 5v5 match
.teamsize 3     # 3v3 match  
.teamsize 1     # 1v1 match
```
:::

### Server Settings

**View current settings:**
```bash
.settings               # FSHOST enhanced command
.config                 # FSHOST custom alias
css_settings
css_config
```

Displays comprehensive match configuration including:
- Knife round status
- Ready requirements
- Playout mode status
- Team names
- Auto-pause settings
- Technical pause limits
- And more...

::: tip FSHOST Custom Feature
The `.config` commands are FSHOST-exclusive aliases that provide enhanced settings display with more detailed information than the standard command.
:::

### Communication

**Admin say:**
```bash
.asay Server restarting in 5 minutes
```

Sends a message in all-chat as an admin.

### Team Names

**Set team names:**
```bash
.team1 Team Liquid
.team2 FaZe Clan
.ctname Liquid
.tname FaZe
```

### Mode Switching

**Start practice:**
```bash
.prac
.tactics
```

Enters practice mode with all utilities enabled.

**Exit practice:**
```bash
.exitprac
```

Exits practice mode and returns to match mode.

**Exit dry run:**
```bash
.exitdry
```

Exits dry-run mode back to standard practice mode.

## FSHOST Custom Features Summary

These features are **exclusive** to FSHOST's customized MatchZy version and **will be lost** if you replace it with the original:

### Commands
| Command | Description | Type |
|---------|-------------|------|
| `.teamsize` | Quick team size configuration | Admin |
| `.config` | Settings display alias | All Players |
| `.abort` | Alternative restart command | Admin |
| `.autopause` | Toggle auto-pause system | Admin |
| `.autopause_minplayers` | Set pause threshold | Admin |
| `.autopause_delay` | Set auto-resume delay | Admin |

### Systems
- **Auto-Pause System** - Automatically manages pauses based on player count (5v5 only)
- **Auto-Resume System** - Automatically resumes when teams are balanced
- **Restart Confirmation** - 30-second safety confirmation for critical actions
- **Enhanced Stop System** - 3-second cooldown and 30-second vote timeout
- **Backup Sanitization** - Prevents dangerous commands in backup restores
- **Performance Optimizations** - FSHOST infrastructure-specific improvements

### Configuration
- Custom ConVars for auto-pause behavior
- Enhanced backup management settings
- Improved stop command controls
- FSHOST-specific default values

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
.rethrow             # Test throw
.delay 1             # Set 1s delay
.throwindex 1 2 3    # Execute multiple nades
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

::: details Missing custom commands
If `.teamsize`, `.config`, or `.autopause` commands don't work, verify you're using FSHOST's customized MatchZy version. Contact support if these commands are missing.
:::

::: details Auto-pause not working
Auto-pause only activates for 5v5 matches (10 total players). It is automatically disabled for smaller formats. Ensure `autopause` is enabled with the `.autopause` command.
:::

## Version Information

**Current Version:** 0.8.16 - Modified by Miksen  
**Module Author:** WD- Edited by Miksen  
**Based on:** [MatchZy by shobhit-pathak](https://github.com/shobhit-pathak/MatchZy)  
**FSHOST Modifications:** Extensive custom features and integrations  

::: danger Critical Warning
**DO NOT** replace this plugin with the original MatchZy from GitHub. You will lose:
- All custom commands (`.teamsize`, `.options`, `.autopause`, etc.)
- Auto-pause/auto-resume system
- Enhanced backup management

**Always contact FSHOST support before making plugin changes.**
:::

## Additional Resources

- [Admin Setup](/games/cs2/become-admin) - Configure admin access
- [RCON Commands](/games/cs2/rcon) - Server configuration
- [Original MatchZy Docs](https://shobhit-pathak.github.io/MatchZy/) - Upstream documentation (features may differ)
- [FSHOST Support](https://fshost.me/discord) - Get help with FSHOST-specific features