"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spool_sequelize_1 = require("@fabrix/spool-sequelize");
class UserResolver extends spool_sequelize_1.SequelizeResolver {
    findHappy(options = {}) {
        this.findAll({ where: { happy: true } });
    }
}
exports.UserResolver = UserResolver;
