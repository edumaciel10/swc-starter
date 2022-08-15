import KoaRouter from '@koa/router'
import { Context } from 'koa'

import { logger } from '../middlewares/logger'

const router = new KoaRouter()

router.get('/', logger, (ctx: Context): void => {
  ctx.body = { message: 'Hello World' }
})

export default router