# General Settings

## Map

You can change the current map to any stock one.

```
rcon changelevel mapnamehere
```

You can also use maps from the [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=730). Just enter the file ID (in the URL after `id=`) after the command.

```
rcon host_workshop_map fileID
```

To restart the map after X amount of seconds:

```
rcon mp_restartgame seconds
```

## Password

You can change or remove the password to join your server by leaving the value empty.

```
rcon sv_password ""
```
