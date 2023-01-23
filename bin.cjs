#!/usr/bin/env node

require('tiny-glob')(process.argv.pop()).then(files => console.log(files.join('\n')))
