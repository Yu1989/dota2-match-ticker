import _ from 'lodash'
import fs from 'fs'
import moment from 'moment'
import Promise from 'bluebird'
import { dataLog as log } from '../logger'
import { cacheFilename } from '../config'

const readFile = Promise.promisify(fs.readFile)

/**
 * Fetch and format match data from cache file
 * @return {Object} Match data object
 */
export default async function getData () {
  try {
    const raw = await readFile(cacheFilename, 'utf8')
    const obj = JSON.parse(raw)
    const now = +moment().format('X')

    obj.upcomings = obj.upcomings.reduce((prev, curr) => {
      curr.liveIn = curr.liveAt - now
      delete curr.liveAt

      // Cache can be old. If a match should have been started, move it to lives
      if (curr.liveIn <= 0) {
        delete curr.liveIn
        obj.lives.push(curr)
      } else {
        curr.liveIn = _.capitalize(moment.duration(curr.liveIn, 'seconds').humanize())
        prev.push(curr)
      }
      return prev
    }, [])

    return obj
  } catch (err) {
    // Log error and return empty result obj
    log.error({ err: err }, 'error with reading cache')
    return { lives: [], upcomings: [] }
  }
}
