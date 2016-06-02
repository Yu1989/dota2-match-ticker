import redis from '../services/redis'
import { dataLog as log } from '../logger'
import { cacheKey, interval } from '../config'

async function set (matches) {
  await redis.set(cacheKey, JSON.stringify(matches))
  await redis.expire(cacheKey, interval * 10)
}

async function get () {
  try {
    return JSON.parse(await redis.get(cacheKey))
  } catch (err) {
    // Log error and return empty result obj
    log.error({ err: err }, 'failed to parse cache')
    return { lives: [], upcomings: [] }
  }
}

async function exists () {
  await redis.exists(cacheKey)
}

export default { set, get, exists }
