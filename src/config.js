/**
 * Really simple configs
 */

/**
 * File path to save cache to
 */
const cacheFilename = `${__dirname}/data/matches.cache`

/**
 * Time interval for the scrape loop, unit: ms
 */
const interval = (process.env.interval || 15) * 60 * 1000

/**
 * Port for the server to lisent to
 */
const port = process.env.PORT || 3000

export { cacheFilename, interval, port }
