const {DEV_VERSION} = require("../main/config");

const status500 = (res, e, inTry) => {

    const error = {
        error: "some error: " + e.message,
        errorObject: DEV_VERSION && {...e},
        in: inTry,
        info: "Back doesn't know what the error is... ^._.^",
    };
    console.log("error-nya-500: ", error);
    res.status(500).json(error);
};

const status400 = (res, e, more) => {

    const error = {
        more,
        error: e,
        info: "Check your request! /ᐠ-ꞈ-ᐟ\\",
    };
    console.log("error-nya-400: ", error);
    res.status(400).json(error);
};

module.exports = {
    status500,
    status400
}