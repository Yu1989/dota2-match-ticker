import {getData} from './data'
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    data: getData()
  })
})

module.exports = router
