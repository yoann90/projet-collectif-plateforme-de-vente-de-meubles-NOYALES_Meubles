const {Router} = require("express")
const {AddProduct} = require("../controller/controller.js")
const router = Router()
const multer = require("multer")
const { fileStorage, uploadImage } = require("../middleware/upload.js")


router.post('/uploadMultipleImages' , uploadImage.array('images',3),(req,res)=>
res.send(req.files)
,(errror , req ,res ,next)=>{
    res.status(400).send({error: error.message});
})

  


module.exports = router