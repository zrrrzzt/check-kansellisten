'use strict'

const Xray = require('x-ray')
const x = Xray()

x('http://www.sprakradet.no/Klarsprak/skrivehjelp/Skriverad/Kutt-kansellistilen/soek-i-kansellisten', '.body tr', [{
  line: ['td strong']
}]).write('raw-data.json')
