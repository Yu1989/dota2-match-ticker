import fs from 'fs'

/**
 * Grab all json files in locales folder and export under keys same as their filenames
 */
const files = fs.readdirSync(`${__dirname}`)
for (let file of files) {
  const segments = file.split('/')
  const filename = segments[segments.length - 1]
  const key = filename.split('.')[0]
  if (filename !== 'index.js') exports[key] = require(`./${file}`)
}
