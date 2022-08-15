"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "logger", {
    enumerable: true,
    get: ()=>logger
});
const logger = async (ctx, next)=>{
    const start = Date.now();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms} ms`);
    return await next();
};
