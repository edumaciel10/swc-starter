// @/src/main.ts
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _koa = /*#__PURE__*/ _interopRequireDefault(require("koa"));
const _koaBody = /*#__PURE__*/ _interopRequireDefault(require("koa-body"));
const _index = /*#__PURE__*/ _interopRequireDefault(require("./routes/index"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const startServer = async ()=>{
    const app = new _koa.default();
    app.use((0, _koaBody.default)());
    app.use(_index.default.routes());
    return app;
};
startServer().then((app)=>app.listen(3333)).catch(console.error);
