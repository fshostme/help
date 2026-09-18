# Automation

Automatic game updates and scheduled restarts for your CS2 Pro server.

::: warning Pro Server Only
Automation is part of the Pro Panel. This functionality is not available on free servers.
:::

## Open the Automation Page

1. Go to [fshost.me/pro/servers](https://fshost.me/pro/servers)
2. Click on your server name
3. Open the **Settings** tab
4. Click **Automation** in the **Server settings** menu on the left

## Automatic Updates

When Counter-Strike 2 releases an update, the panel applies it as soon as nobody is playing. A running server is stopped, updated and started again.

The **Apply Steam updates automatically** switch controls this.

::: warning Turning Automatic Updates Off
With the switch off, you need to press **Steam Update Required** yourself after each CS2 update. The server cannot be started until it is updated.
:::

## Scheduled Restarts

A regular restart clears memory leaks and keeps the server responsive.

- Restarts only happen when nobody is online.
- A restart is skipped if the server was started or restarted in the previous three hours.
- Scheduled restarts show as **FSHOST (Bot)** in the **Actions** tab.

### Step 1: Choose How Often

Pick an interval under **How often**.

| Option | Result |
|--------|--------|
| **Never (off)** | Scheduled restarts are disabled |
| **Every day** | One restart per day at the restart time |
| **Twice a day (12 hours apart)** | One restart at the restart time and one 12 hours later |
| **Once a week** | One restart per week. A **Day of the week** field appears, pick a day from Monday to Sunday |

### Step 2: Set the Restart Time

Enter a time under **Restart time**. It uses a 24-hour clock. Pick a quiet hour so the restart is not skipped because players are online.

### Step 3: Set the Timezone

Pick your **Timezone**. Restart times are read in this timezone, so daylight saving is handled for you.

### Step 4: Save

Click **Save changes**. Automation settings apply straight away, without a server restart.

### Checking the Schedule

Three boxes at the top of the section show the state of the schedule.

| Box | Meaning |
|-----|---------|
| **Next restart** | Date and time of the next planned restart |
| **Last restart** | When the last scheduled restart ran |
| **Last skipped** | When a scheduled restart was last skipped |

## Troubleshooting

::: details Scheduled restart did not happen
Check **Last skipped** on the **Automation** page. A restart is skipped when:
- Players were online at the restart time
- The server was started or restarted in the previous three hours

Pick a quieter hour under **Restart time** if this happens often.
:::

::: details Server will not start after a CS2 update
**Apply Steam updates automatically** is switched off. Press **Steam Update Required** on your server's page, or switch automatic updates back on.
:::

## Getting Help

- **Discord:** Join [FSHOST Discord](https://fshost.me/discord)
- **Support:** Contact #pro-support channel
