"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@fabrix/fabrix/dist/common");
const spool_sequelize_1 = require("@fabrix/spool-sequelize");
class User extends common_1.FabrixModel {
    static get resolver() {
        return spool_sequelize_1.SequelizeResolver;
    }
    static config(app, Sequelize) {
        return {
            options: {}
        };
    }
    static schema(app, Sequelize) {
        return {
            username: {
                type: Sequelize.STRING,
                allowNull: false
            }
        };
    }
    static associate(models) {
        models.User.hasMany(models.WebToken, {
            as: 'web_tokens',
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: true
            }
        });
    }
}
exports.User = User;
