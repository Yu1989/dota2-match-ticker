/* global setInterval */

/**
 * Scrape match data from Gosugamers and cache in file
 */

import 'babel-polyfill'
import fs from 'fs'
import Promise from 'bluebird'
import scrape from './scrape'
import { dataLog as log } from '../logger'
import { cacheFilename, interval } from '../config'

const writeFile = Promise.promisify(fs.writeFile)
let timer

/**
 * Scrape match data and cache in file
 */
const scrapeAndCache = async function () {
  try {
    const result = await scrape()
    await writeFile(cacheFilename, JSON.stringify(result), 'utf8')
  } catch (err) {
    log.error({ err: err }, 'error with scraping or caching')
  }
}

/**
 * Scrape every certain period of time
 */
function loopScraping () {
  if (timer) return
  timer = setInterval(scrapeAndCache, interval)

  // If cache file does not exist, scrape right away
  fs.access(cacheFilename, err => {
    if (err) scrapeAndCache()
  })
}

/**
 * Start looping
 */
loopScraping()
