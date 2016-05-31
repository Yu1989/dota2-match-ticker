import fs from 'fs'
import Promise from 'bluebird'
import { dataLog as log } from '../logger'
import { cacheFilename } from '../config'

const readFile = Promise.promisify(fs.readFile)

/**
 * Get match data from cache with liveIn set
 * @return {Object} Match data object
 */
export default async function getData () {
  try {
    const raw = await readFile(cacheFilename, 'utf8')
    const obj = JSON.parse(raw)
    const now = Date.now() / 1000

    obj.upcomings = obj.upcomings.reduce((prev, curr) => {
      curr.liveIn = curr.liveAt - now
      delete curr.liveAt
      if (curr.liveIn <= 0) {
        delete curr.liveIn
        obj.lives.push(curr)
      } else {
        prev.push(curr)
      }
      return prev
    }, [])
    console.log(obj.upcomings)

    return obj
  } catch (err) {
    // Log error and return empty result obj
    log.error({ err: err }, 'error with reading cache')
    return { lives: [], upcomings: [] }
  }
}
