import cache from './data/cache'
import redis from './services/redis'
import locales from './locales'
import { interval } from './config'
import { getJsUrl } from './util'

export async function renderPage (ctx, next) {
  await ctx.render('index', {
    data: await cache.get(),
    pageView: await redis.get('pageView'),
    interval: interval,
    locales: locales,
    jsUrl: await getJsUrl()
  })

  // Increment page view
  // TODO Move to middleware as a more general solution?
  redis.incr('pageView')
}

/**
 * Send match data as json
 */
export async function sendData (ctx, next) {
  ctx.body = await cache.get()
}
