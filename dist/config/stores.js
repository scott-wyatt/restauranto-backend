"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stores = {
    postgres: {
        typeValidation: true,
        benchmark: true,
        uri: process.env.DATABASE_URL || 'postgres://restauranto:xs4restauranto@127.0.0.1:5432/restauranto_dev',
        dialect: 'postgres',
    }
};
