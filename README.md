# check-kansellisten

[![Greenkeeper badge](https://badges.greenkeeper.io/zrrrzzt/check-kansellisten.svg)](https://greenkeeper.io/)
Node module for checking text against [kansellisten](http://www.sprakradet.no/Klarsprak/skrivehjelp/Skriverad/Kutt-kansellistilen/soek-i-kansellisten/).

## Usage

Input text and get array of "forbidden" words used

```JavaScript
'use strict'

const fs = require('fs')
const textClean = fs.readFileSync('test/data/text-clean.txt', 'utf-8')
const textDirty = fs.readFileSync('test/data/text-dirty.txt', 'utf-8')
const checkKansellisten = require('check-kansellisten')

console.log(checkKansellisten(textClean))

console.log(checkKansellisten(textDirty))
```

returns

```JavaScript
[]

[ 'anbringe' ]

```

## License

[MIT](LICENSE)

![Robohash image of check-kansellisten](https://robots.kebabstudios.party/minelev-buddy.png "check-kansellisten")