'use strict'

const fs = require('fs')
const raw = require('../data/raw-data.json')

const repacked = raw
                  .filter(cell => cell.line.length > 0)
                  .map(result => Object.assign({word: result.line.shift()}))
                  .filter(data => /^(?!\d)/.test(data.word))
                  .map(line => line.word)

fs.writeFileSync('data.json', JSON.stringify(repacked, null, 2))
