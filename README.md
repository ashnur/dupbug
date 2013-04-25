first, obviously
```
npm install
```
then
```
node index.js
```

expected output:
```
1
###
2
###
3
###
```

instead of the above, i get:

```
1
###
2
2
###

Error: Not running
    at Server.close (net.js:1207:11)
    at Stream.dpl.stop (/home/ashnur/work/dupbug/node_modules/browser-run/index.js:61:12)
    at Stream.<anonymous> (/home/ashnur/work/dupbug/index.js:17:21)
    at Stream.stream.write (/home/ashnur/work/dupbug/node_modules/through/index.js:26:11)
    at Stream.ondata (stream.js:51:26)
    at Stream.EventEmitter.emit (events.js:95:17)
    at Stream.reemit (/home/ashnur/work/dupbug/node_modules/browser-run/node_modules/duplexer/index.js:74:25)
    at Stream.EventEmitter.emit (events.js:95:17)
    at drain (/home/ashnur/work/dupbug/node_modules/browser-run/node_modules/through/index.js:35:16)
    at Stream.stream.queue.stream.push (/home/ashnur/work/dupbug/node_modules/browser-run/node_modules/through/index.js:41:5)

```
