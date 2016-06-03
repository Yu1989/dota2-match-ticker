import Router from 'koa-router'
import { renderPage, sendData } from './controller'

const router = Router()

router.get('/', renderPage)
router.get('/matches.json', sendData)

export default router
