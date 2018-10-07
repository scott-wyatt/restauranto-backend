"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@fabrix/fabrix/dist/common");
class DefaultController extends common_1.FabrixController {
    hello(request, reply) {
        return '<h1>Hello Fabrix</h1>';
    }
    info(request) {
        return this.app.services.DefaultService.getApplicationInfo();
    }
}
exports.DefaultController = DefaultController;
