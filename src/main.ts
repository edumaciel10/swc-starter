// @/src/main.ts
import Koa from 'koa'
import koaBody from 'koa-body'

import KoaRouter from '@routes/index'

const startServer = async (): Promise<Koa> => {
  const app = new Koa()

  app.use(koaBody())
  app.use(KoaRouter.routes())

  return app
}

startServer()
  .then((app) => app.listen(3333))
  .catch(console.error)