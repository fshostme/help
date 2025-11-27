# Ping Test

Test the latency to our server locations before creating your server to ensure the best performance for your players.

## How to Test Ping

Use these domain patterns to test ping to our locations:

```bash
ping usX.fsho.st    # US locations
ping deX.fsho.st    # German locations
ping frX.fsho.st    # France
ping sgX.fsho.st    # Singapore
```

Replace `X` with the location number (usually 1, 2, 3, etc.).  
You can see all our locations on our [Looking Glass](https://fshost.me/lg) page.

## Understanding Ping Results

Lower ping times mean better performance:

- **0-50ms** - Excellent connection, ideal for competitive gaming
- **50-100ms** - Good connection, suitable for most games
- **100-150ms** - Acceptable, may start to feel the delay
- **150ms+** - High latency, may affect gameplay

## Windows Ping Command

Open Command Prompt and run:

```cmd
ping us2.fsho.st
```

Example output:
```
Reply from X.X.X.X: bytes=32 time=25ms TTL=54
```

## macOS/Linux Ping Command

Open Terminal and run:

```bash
ping -c 4 us2.fsho.st
```

Example Output;
```
64 bytes from X.X.X.X: icmp_seq=0 ttl=50 time=25.630 ms
```

The `-c 4` flag sends 4 packets instead of continuous pinging.

## Choosing the Best Location

1. Test ping to multiple locations
2. Choose the location with the lowest average ping
3. Consider where most of your players are located
4. If players are spread across regions, choose a central location

::: tip
Test ping at different times of day to get an accurate picture of network performance.
:::

## Troubleshooting

### Ping Command Not Working

If ping doesn't work:
- Check your internet connection
- Try from a different network
- Some networks block ICMP (ping) packets (we don't)
- Contact support if issues persist

### High Ping to All Locations

If all locations show high ping:
- Check your local internet connection
- Close bandwidth-heavy applications
- Try from a different device or network
- Contact your ISP if problems continue

## Next Steps

Once you've identified the best location:
- See [Locations](/network/locations) for available regions or use our [Looking Glass](https://fshost.me/lg)
- Create your server in the chosen location
- Remember: location changes are limited (2-3 per server)
