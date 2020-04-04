'use strict'

const kansellisten = require('./data/data.json')

module.exports = text => {
  const a = new Set(kansellisten)
  const b = new Set(text.split(' '))
  const intersection = new Set(
    [...a].filter(x => b.has(x)))
  return [...intersection]
}
