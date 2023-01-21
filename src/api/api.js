const axios = require("axios");

const config = {responseType: 'arraybuffer'}

const API = {

    getImageForBK: async (path_img) => {
        return axios.get(path_img, config);
    }
}

module.exports = {
    API
}

