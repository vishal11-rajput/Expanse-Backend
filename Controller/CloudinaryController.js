const Cloudinary = require("cloudinary").v2;

const uploadFile = async (file) =>{
    Cloudinary.config({
        cloud_name:"duqo58i2h",
        api_key:"253317665842597",
        api_secret:"CG0DDaSuwAerEgtcTpvH1oNqxaQ",
    })
    const result =  await Cloudinary.uploader.upload(file);
    return result
}

module.exports ={
    uploadFile
}