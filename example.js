'use strict'

const fs = require('fs')
const textClean = fs.readFileSync('test/data/text-clean.txt', 'utf-8')
const textDirty = fs.readFileSync('test/data/text-dirty.txt', 'utf-8')
const checkKansellisten = require('./index')

console.log(checkKansellisten(textClean))
console.log(checkKansellisten(textDirty))
