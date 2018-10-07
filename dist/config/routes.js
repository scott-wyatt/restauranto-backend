"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = {
    '/': {
        'GET': 'DefaultController.hello'
    },
    '/v1/login': {
        'GET': 'DefaultController.info',
        'POST': 'DefaultController.info'
    },
    '/v1/default/info': {
        'GET': 'DefaultController.info'
    }
};
