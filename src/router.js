import getData from './data/get'
import Router from 'koa-router'

const router = Router()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    data: await getData()
  })
})

export default router
