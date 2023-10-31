const {Router} = require("express")
const {AddProduct} = require("../controller/controller.js")
const router = Router()
const multer = require("multer")
const { fileStorage, uploadImage } = require("../middleware/upload.js")


router.post('/add-Product',uploadImage.array('img',3),AddProduct)


module.exports = router