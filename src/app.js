import 'babel-polyfill'
import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import router from './router'
import log from './logger'
import { loopScraping } from './data'

const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    log.error({ err: err })
    ctx.body = { message: err.message }
    ctx.status = err.status || 500
  }
})

app.use(serve(`${__dirname}/../public/dist`))
app.use(views(`${__dirname}/../public/templates`, { extension: 'pug' }))
app.use(router.routes())
app.use(router.allowedMethods())

// Start the loop of data scraping
loopScraping()

app.listen(process.env.PORT || 3000)
