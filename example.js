'use strict'

const { readFileSync } = require('fs')
const textClean = readFileSync('test/data/text-clean.txt', 'utf-8')
const textDirty = readFileSync('test/data/text-dirty.txt', 'utf-8')
const checkKansellisten = require('./index')

console.log(checkKansellisten(textClean))
console.log(checkKansellisten(textDirty))
