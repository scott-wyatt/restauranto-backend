"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spool_express_1 = require("@fabrix/spool-express");
const spool_generics_1 = require("@fabrix/spool-generics");
const spool_router_1 = require("@fabrix/spool-router");
const spool_sequelize_1 = require("@fabrix/spool-sequelize");
const spool_winston_1 = require("@fabrix/spool-winston");
const path_1 = require("path");
exports.main = {
    spools: [
        spool_generics_1.GenericsSpool,
        spool_winston_1.WinstonSpool,
        spool_router_1.RouterSpool,
        spool_express_1.ExpressSpool,
        spool_sequelize_1.SequelizeSpool,
    ],
    paths: {
        root: path_1.resolve(__dirname, '..'),
        temp: path_1.resolve(__dirname, '..', '.tmp')
    }
};
