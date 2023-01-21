
const appUse = (app) => {

    // log middleware
    app.use((req, res, next) => {
        console.log("Time: ", new Date().toString());
        console.log("-----", req.method, req.url, "params:", req.params);
        console.log("query:", req.query);
        console.log("body:", req.body);
        console.log("cookies:", req.cookies);

        next();
    });
};

module.exports = {appUse}