/* global setInterval */

/**
 * Scrape match data from Gosugamers and cache in redis
 */

import 'babel-polyfill'
import scrape from './scrape'
import cache from './cache'
import { dataLog as log } from '../logger'
import { interval } from '../config'

let timer

/**
 * Scrape match data and cache in redis
 */
const scrapeAndCache = async function () {
  try {
    const result = await scrape()
    await cache.set(result)
  } catch (err) {
    log.error({ err: err }, 'error with scraping or caching')
  }
}

/**
 * Scrape every certain period of time
 */
const loopScraping = async function () {
  if (timer) return
  timer = setInterval(scrapeAndCache, interval)

  // If cache does not exist, scrape right away
  if (!await cache.exists()) scrapeAndCache()
}

/**
 * Start looping
 */
loopScraping()
