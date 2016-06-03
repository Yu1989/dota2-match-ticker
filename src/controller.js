import getData from './data/get'
import { interval } from './config'
import redis from './services/redis'

export async function renderPage (ctx, next) {
  await ctx.render('index', {
    data: await getData(),
    pageView: await redis.get('pageView'),
    interval: interval
  })

  // Increment page view
  // TODO Move to middleware as a more general solution?
  redis.incr('pageView')
}

/**
 * Send match data as json
 */
export async function sendData (ctx, next) {
  ctx.body = await getData()
}
