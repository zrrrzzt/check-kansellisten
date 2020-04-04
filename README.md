# check-kansellisten

Node module for checking text against [kansellisten](http://www.sprakradet.no/Klarsprak/skrivehjelp/Skriverad/Kutt-kansellistilen/soek-i-kansellisten/).

## Usage

Input text and get array of "forbidden" words used

```JavaScript
const { readFileSync } = require('fs')
const textClean = readFileSync('test/data/text-clean.txt', 'utf-8')
const textDirty = readFileSync('test/data/text-dirty.txt', 'utf-8')
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
