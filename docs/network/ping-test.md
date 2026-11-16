---
description: "Test your ping to each FSHOST.me location before you create a server, on the Network Test page or from the command line."
---

# Ping Test

Test the latency to our server locations before creating your server, so you pick the one with the best performance for your players.

## Step 1: Open the Network Test Page

1. Log in at [fshost.me](https://fshost.me)
2. Go to [fshost.me/network](https://fshost.me/network)

The page lists every location with its machines. Each machine is marked **Free**, **Pro** or both, so you can see which servers it takes.

## Step 2: Run the Test

Click **Test Your Connection**. The page pings every machine three times from your browser and shows the average in milliseconds. The machine with the lowest ping is highlighted.

Click **Re-test Connection** to run it again. If a machine shows **Ping timeout** or **Ping failed**, your network could not reach it from the browser. Try the command line test below.

## Understanding Ping Results

Lower ping times mean better performance:

- **0-50ms** - Excellent connection, ideal for competitive gaming
- **50-100ms** - Good connection, suitable for most games
- **100-150ms** - Acceptable, you may start to feel the delay
- **150ms+** - High latency, may affect gameplay

## Testing From the Command Line

Each machine has its own address ending in `.fsho.st`. On a computer, the Network Test page shows it next to each machine. Use that address with `ping`, in place of `X.fsho.st` below.

### Windows

Open Command Prompt and run:

```bash
ping X.fsho.st
```

Example output:

```
Reply from X.X.X.X: bytes=32 time=25ms TTL=54
```

### macOS and Linux

Open Terminal and run:

```bash
ping -c 4 X.fsho.st
```

Example output:

```
64 bytes from X.X.X.X: icmp_seq=0 ttl=50 time=25.630 ms
```

The `-c 4` flag sends 4 packets instead of pinging until you stop it.

## Choosing the Best Location

1. Test ping to several locations
2. Choose the location with the lowest average ping
3. Consider where most of your players are located
4. If players are spread across regions, choose a location in between

::: tip
Test ping at different times of day to get an accurate picture of network performance.
:::

## Troubleshooting

### Ping Command Not Working

If ping doesn't work:
- Check your internet connection
- Some networks block ping packets. Try from a different network, or use the [Network Test](https://fshost.me/network) page
- Check that you copied the machine's address correctly

### High Ping to All Locations

If all locations show high ping:
- Check your local internet connection
- Close bandwidth-heavy applications
- Try from a different device or network
- Contact your ISP if problems continue

If the ping is only high on your server, or only for some players, send us an [MTR Report](/network/mtr). We need it to look into the problem.

## Next Steps

Once you've identified the best location:
- See [Server Locations](/network/locations) for the available regions
- Create your server in the chosen location
- Choose carefully. You cannot move a server yourself, see [Changing Locations](/network/locations#changing-locations)
