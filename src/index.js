const express = require("express");
const http = require("http");
const {appUse} = require("./main/app");
const {PORT} = require("./main/config");
const {routes} = require("./main/routes");

const app = express();
const port = process.env.PORT || PORT;

appUse(app);
routes(app);

const server = http.createServer(app);

server.listen(port, () => {
    console.log("bk_middleware listening on port: " + port);
});

process.on("unhandledRejection", (reason, p) => {
    console.log("BK_unhandledRejection: ", reason, p);
});
