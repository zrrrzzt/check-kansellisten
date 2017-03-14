'use strict'

const kansellisten = require('./data/data.json')

module.exports = text => {
  let a = new Set(kansellisten)
  let b = new Set(text.split(' '))
  let intersection = new Set(
    [...a].filter(x => b.has(x)))
  return [...intersection]
}
