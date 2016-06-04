import redis from '../services/redis'
import { dataLog as log } from '../logger'
import { cacheKey, interval } from '../config'

export default {
  async set (matches) {
    await redis.set(cacheKey, JSON.stringify(matches))
    await redis.expire(cacheKey, interval * 10)
  },

  async get () {
    const defaultVal = { lives: [], upcomings: [] }

    try {
      return JSON.parse(await redis.get(cacheKey)) || defaultVal
    } catch (err) {
      // Log error and return empty result obj
      log.error({ err: err }, 'failed to parse cache')
      console.log(await redis.get(cacheKey))
      return defaultVal
    }
  },

  async exists () {
    return !!await redis.exists(cacheKey)
  }
}
