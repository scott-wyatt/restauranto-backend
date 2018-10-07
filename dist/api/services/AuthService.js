"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const common_1 = require("@fabrix/fabrix/dist/common");
class AuthService extends common_1.FabrixService {
    getApplicationInfo() {
        return {
            app: this.app.pkg.version,
            node: process.version,
            libs: process.versions,
            spools: lodash_1.map(lodash_1.omit(this.app.spools, 'inspect'), spool => {
                return {
                    name: spool.name,
                    version: spool.pkg.version
                };
            })
        };
    }
}
exports.AuthService = AuthService;
