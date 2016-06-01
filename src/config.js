/**
 * Really simple configs
 */

const cacheFilename = `${__dirname}/data/matches.cache`
const interval = (process.env.interval || 15) * 60 * 1000 // Unit: ms
const port = process.env.PORT || 3000 // Port for the server to lisent to

export { cacheFilename, interval, port }
