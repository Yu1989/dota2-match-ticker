/**
 * Really simple configs
 */

/**
 * Redis key to save cache to
 */
const cacheKey = `matches`

/**
 * Time interval for the scrape loop, unit: ms
 */
const interval = (process.env.interval || 15) * 60 * 1000

/**
 * Port for the server to lisent to
 */
const port = process.env.PORT || 3000

export { cacheKey, interval, port }
