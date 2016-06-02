import _ from 'lodash'
import moment from 'moment'
import cache from './cache'
import { dataLog as log } from '../logger'

/**
 * Fetch and format match data from redis
 * @return {Object} Match data object
 */
export default async function getData () {
  const matches = await cache.get()
  const now = +moment().format('X')

  matches.upcomings = matches.upcomings.reduce((prev, curr) => {
    curr.liveIn = curr.liveAt - now
    delete curr.liveAt

    // Cache can be old. If a match should have been started, move it to lives
    if (curr.liveIn <= 0) {
      delete curr.liveIn
      matches.lives.push(curr)
    } else {
      curr.liveIn = _.capitalize(moment.duration(curr.liveIn, 'seconds').humanize())
      prev.push(curr)
    }
    return prev
  }, [])

  log.info('read matches from cache')
  return matches
}
