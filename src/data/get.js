import _ from 'lodash'
import redis from '../services/redis'
import moment from 'moment'
import { dataLog as log } from '../logger'
import { cacheKey } from '../config'

/**
 * Fetch and format match data from redis
 * @return {Object} Match data object
 */
export default async function getData () {
  try {
    const raw = await redis.get(cacheKey)
    const cache = JSON.parse(raw)
    const now = +moment().format('X')

    cache.upcomings = cache.upcomings.reduce((prev, curr) => {
      curr.liveIn = curr.liveAt - now
      delete curr.liveAt

      // Cache can be old. If a match should have been started, move it to lives
      if (curr.liveIn <= 0) {
        delete curr.liveIn
        cache.lives.push(curr)
      } else {
        curr.liveIn = _.capitalize(moment.duration(curr.liveIn, 'seconds').humanize())
        prev.push(curr)
      }
      return prev
    }, [])

    return cache
  } catch (err) {
    // Log error and return empty result obj
    log.error({ err: err }, 'failed to fetch cache')
    return { lives: [], upcomings: [] }
  }
}
