"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stores = {
    postgres: {
        orm: 'sequelize',
        typeValidation: true,
        benchmark: true,
        dialect: 'postgres',
        migrate: 'drop',
        database: 'Sequelize',
        host: '127.0.0.1',
    }
};
