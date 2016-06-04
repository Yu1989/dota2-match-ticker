/**
 * Export a redis connection/client powered by ioredis
 */

import Redis from 'ioredis'
import { redisDb as db } from '../config'
import { serverLog as log } from '../logger'

const redis = new Redis({
  keyPrefix: 'dmt:',
  db: db
})

redis.on('connect', () => {
  log.info('connected to redis')
}).on('error', function (err) {
  // Log error once
  if (!this.errLogged) {
    log.error({ err: err }, 'failed to connect redis')
    this.errLogged = true
  }
}.bind({ errLogged: false }))

export default redis
