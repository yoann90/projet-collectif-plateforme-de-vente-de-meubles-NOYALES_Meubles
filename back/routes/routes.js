const {Router} = require("express")
const {exemple} = require("../controller/controller.js")
const router = Router()

router.get("/", exemple )


module.exports = router