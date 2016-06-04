import 'babel-polyfill'
import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import router from './router'
import { port } from './config'
import { serverLog as log } from './logger'

const app = new Koa()

/**
 * Cookie keys
 */
app.keys = [ 'keys_should_be_hidden', 'but_im_just_a_demo' ]

/**
 * Middlewares
 */
app.use(serve(`${__dirname}/../public/dist`, { maxage: 1000 * 3600 * 24 * 365 }))
app.use(views(`${__dirname}/../public/templates`, { extension: 'pug' }))
app.use(router.routes())
app.use(router.allowedMethods())

/**
 * Capture and log errors
 */
app.on('error', err => {
  log.error({ err: err }, 'internal server error')
})

app.listen(port)

log.info(`Server listening on port ${port}`)
