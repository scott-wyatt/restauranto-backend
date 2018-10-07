"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fabrix_1 = require("@fabrix/fabrix");
const App = require("./");
const server = new fabrix_1.FabrixApp(App);
server.start()
    .catch((err) => server.stop(err));
