const multer = require('multer');
const path = require('path');




const storage = multer.diskStorage({
    destination: "./Uploads",
    filename: function(req,file, cb){
        cb(null, file.originalname);
    }
})

// const upload = multer({
//     storage: storage,
//     limits:{fileSize: 1000000}
// }).single('myImage')

const fileUpload = (req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.status(500).json({
                message:"File uploading Error"
            })
        }
        else{
            if(req.file == undefined){
                res.status(400).json({
                    message:"No file selected"  
                })
            }
            else{
                console.log(req.body)
                res.status(200).json({
                    message:"file uploaded",
                    file: `uploads/${req.file.filename}`
                })
            }
        }
    })
}

module.exports = {
    fileUpload
}
