const express = require("express");
const {getImage} = require("../controllers/getImage");


const imageRoute = express.Router();

imageRoute.get('/', getImage);

module.exports = {
    imageRoute
}