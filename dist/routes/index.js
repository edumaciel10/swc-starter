"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _router = /*#__PURE__*/ _interopRequireDefault(require("@koa/router"));
const _logger = require("../middlewares/logger");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const router = new _router.default();
router.get('/', _logger.logger, (ctx)=>{
    ctx.body = {
        message: 'Hello World'
    };
});
const _default = router;
