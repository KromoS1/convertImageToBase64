const {VERSION_1_0} = require("./config");
const {imageRoute} = require("../routes/image");

const routes = (app) => {

    app.use(VERSION_1_0+'/image',imageRoute);

    app.use(VERSION_1_0 + "/ping", (req, res) => {

        const backTime = new Date().getTime();

        const frontTime = +req?.body?.frontTime || (req?.query?.frontTime && +req?.query?.frontTime) || (backTime + 1);
        const ping = backTime - frontTime;

        console.warn("!!! PING: ", ping); // need log always

        res.status(200).json({
            ping,
            backTime,
            frontTime: frontTime > backTime ? "ಠ_ಠ" : frontTime,
            info: "please send me you time ಠ_ಠ", // https://cutekaomoji.com/animals/cats/
        });
    });

    // default
    app.use((req, res) => {

        console.log("bad url: ", req.method, req.url);
        res.status(404).json({
            error: "bad url ¯\\_(ツ)_/¯",
            method: req.method,
            url: req.url,
            query: req.query,
            body: req.body,
        });
    });
}

module.exports = {
    routes
}