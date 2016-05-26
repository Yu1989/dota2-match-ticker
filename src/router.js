const router = require('koa-router')()

router.get('/', function * (next) {
  yield this.render('index', {
    title: 'Welcome to Koa'
  })
})

module.exports = router
