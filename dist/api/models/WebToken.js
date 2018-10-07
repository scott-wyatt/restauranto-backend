"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@fabrix/fabrix/dist/common");
const spool_sequelize_1 = require("@fabrix/spool-sequelize");
class WebToken extends common_1.FabrixModel {
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
            issuer: {
                type: Sequelize.STRING
            },
            expiration: {
                type: Sequelize.DATE,
            },
            scopes: {
                type: Sequelize.JSONB
            },
            subject: {
                type: Sequelize.STRING
            },
            token: {
                type: Sequelize.STRING
            }
        };
    }
    static associate(models) {
        models.WebToken.belongsTo(models.User, {
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: true
            }
        });
    }
}
exports.WebToken = WebToken;
