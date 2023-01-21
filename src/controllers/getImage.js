const {API} = require("../api/api");
const {status400} = require("../errors/errorStatuses");
const {convertImage} = require("./convertImage");


const getImage = async (req, res) => {

    const { path_img } = req.query;
    debugger

    if ( path_img ) {

       try {
           const image = await API.getImageForBK(path_img);

           const base64 = convertImage(image);

           res.status(200).json({base64})
       }catch (e) {
           console.log(e,'getImageForBK')

           status400(res, e, 'getImageForBK')
       }
    }else{
        status400(res, 'dong request parametrs', 'invalid request parameters');
    }
}

module.exports = {
    getImage
}