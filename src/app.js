import 'babel-polyfill'
import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import router from './router'
import { port } from './config'
import { serverLog as log } from './logger'

const app = new Koa()

/**
 * Middleware to capture errors
 */
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

app.listen(port)
