
const path = require("path");
const multer = require("multer");

const fileStorage = multer.diskStorage({
    destination:'images',
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + '_' + Date.now()+path.extname(file.originalname));
    }
})

const uploadImage= multer({
    storage:fileStorage,
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error("Please upload un jpg ou png batard"));
        }
        cb(undefined, true);
        }
    })

    module.exports = {fileStorage , uploadImage}