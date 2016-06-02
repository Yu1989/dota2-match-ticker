import getData from './data/get'
import redis from './services/redis'
import Router from 'koa-router'

const router = Router()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    data: await getData(),
    pageView: await redis.get('pageView')
  })

  // Increment page view
  // TODO Move to middleware as a more general solution?
  redis.incr('pageView')
})

export default router
