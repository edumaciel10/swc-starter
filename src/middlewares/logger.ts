import { Context, Next } from 'koa'

export const logger = async (ctx: Context, next: Next): Promise<Next> => {
  const start = Date.now()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms} ms`)
  return await next()
}