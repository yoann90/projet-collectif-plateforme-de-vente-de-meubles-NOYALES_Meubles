const {Router} = require("express")
// Cette ligne importe des fonctions à partir du fichier controller.js et les assigne à des variables pour les utiliser ultérieurement. Ces fonctions gèrent les différentes opérations liées aux produits et aux utilisateurs de votre application.
const {AddProduct,DeleteProduct, GetOneProduct, GetAllProduct, AddUser, DeleteUser,GetOneUser,GetAllUser} = require("../controller/controller.js")
const router = Router()
const multer = require("multer")
const { fileStorage, uploadImage } = require("../middleware/upload.js")



// Cette route HTTP GET permet de récupérer un produit spécifique en fonction de son identifiant.
router.get('/get-OneProduct/:id',GetOneProduct)
// Cette route HTTP GET permet de récupérer la liste de tous les produits.
router.get('/get-AllProduct/',GetAllProduct)
// Cette route HTTP POST permet d'ajouter un nouveau produit, et elle utilise le middleware Multer (uploadImage) pour gérer le téléchargement d'images.
router.post('/add-Product',uploadImage.array('img',3),AddProduct)



// Cette route HTTP POST permet d'ajouter un nouvel utilisateur.
router.post('/register',AddUser)
// Cette route HTTP GET permet de récupérer un utilisateur spécifique en fonction de son identifiant.
router.get('/get-user/:id',GetOneUser)
// Cette route HTTP GET permet de récupérer la liste de tous les utilisateurs.
router.get('/get-AllUser/',GetAllUser)

// Cette route HTTP DELETE permet de supprimer un utilisateur en fonction de son identifiant.
router.delete('/delete-user/:id', DeleteUser)
// Cette route HTTP DELETE permet de supprimer un produit en fonction de son identifiant.
router.delete('/delete-Product/:id',DeleteProduct)

module.exports = router





