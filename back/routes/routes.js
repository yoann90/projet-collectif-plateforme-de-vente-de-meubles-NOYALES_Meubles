const {Router} = require("express")
const {AddProduct,DeleteProduct, GetOneProduct, GetAllProduct, AddUser, DeleteUser,GetOneUser,GetAllUser} = require("../controller/controller.js")
const router = Router()
const multer = require("multer")
const { fileStorage, uploadImage } = require("../middleware/upload.js")




router.get('/get-OneProduct/:id',GetOneProduct)
router.get('/get-AllProduct/',GetAllProduct)
router.post('/add-Product',uploadImage.array('img',3),AddProduct)



router.post('/register',AddUser)
router.get('/get-user/:id',GetOneUser)
router.get('/get-AllUser/',GetAllUser)

router.delete('/delete-user/:id', DeleteUser)
router.delete('/delete-Product/:id',DeleteProduct)

module.exports = router





