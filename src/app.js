import 'babel-polyfill'
import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import router from './router'
import { port } from './config'
import { serverLog as log } from './logger'

const app = new Koa()

/**
 * Capture and log errors
 */
app.on('error', err => {
  log.error({ err: err }, 'internal server error')
})

app.use(serve(`${__dirname}/../public/dist`))
app.use(serve(`${__dirname}/../public/images`))
app.use(views(`${__dirname}/../public/templates`, { extension: 'pug' }))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port)
