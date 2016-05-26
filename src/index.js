import 'babel-polyfill'
import Koa from 'koa'
import router from './router'

const app = new Koa()

app.use(router.routes())

// app.use(async (ctx, next) => {
//   try {
//     await next() // next is now a function
//   } catch (err) {
//     ctx.body = {message: err.message}
//     ctx.status = err.status || 500
//   }
// })
//
// app.use(async ctx => {
//   const user = await User.getById(ctx.session.userid) // await instead of yield
//   ctx.body = user // ctx instead of this
// })

app.listen(process.env.PORT || 3000)
