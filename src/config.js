/**
 * Really simple configs
 */

/**
 * Redis key to save cache to
 */
export const cacheKey = 'matches'

/**
 * Time interval for the scrape loop, unit: ms
 */
export const interval = (process.env.interval || 15) * 60 * 1000

/**
 * Port for the server to lisent to
 */
export const port = process.env.PORT || 3000

/**
 * Different redis db for test and other envs
 */
export const redisDb = process.env.NODE_ENV === 'test' ? 4 : 0
