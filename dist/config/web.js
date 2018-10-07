"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
exports.web = {
    express: express,
    cors: false,
    middlewares: {},
    externalConfig: (fabrixApp, expressApp) => {
        return Promise.resolve();
    },
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
};
