const convertImage = (image) => {

    let raw = Buffer.from(image.data).toString('base64');
    return "data:" + image.headers["content-type"] + ";base64," + raw;
}

module.exports = {
    convertImage
}