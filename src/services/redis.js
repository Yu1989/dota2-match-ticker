/**
 * Export a redis connection/client powered by ioredis
 */

import Redis from 'ioredis'
import { serverLog as log } from '../logger'

const redis = new Redis({
  keyPrefix: 'dmt:'
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
