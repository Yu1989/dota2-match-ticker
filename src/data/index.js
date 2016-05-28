/* global setInterval */

/**
 * Scrape match data from Gosugamers and cache in memory and file
 */

import scrape from './scrape'

let cache
let timer
const interval = 2 * 60 * 1000 // TODO ecosystem

const scrapeData = () => scrape().then(result => {
  cache = result || cache
})

const loopScraping = function () {
  if (timer) return
  timer = setInterval(scrapeData, interval)
  scrapeData()
}

/**
 * Get match data from cache with liveIn set
 * @return {Object} Match data object
 */
const getData = function () {
  if (!cache) return {}

  const now = Date.now() / 1000
  for (let match of cache.upcomings) {
    match.liveIn = match.liveAt - now
    if (match.livein <= 0) { // The match's live now
      // TODO move to lives
    }
  }
  return cache
}

export { loopScraping, getData }
