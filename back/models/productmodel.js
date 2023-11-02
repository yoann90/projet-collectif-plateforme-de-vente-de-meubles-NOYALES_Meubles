const {mongoose } = require("mongoose");
// Cette partie crée un schéma de modèle de données pour les produits en utilisant la méthode Schema de Mongoose. Le schéma définit la structure des données que chaque produit doit avoir.
const productsSchema = mongoose.Schema({
    title : {type: String ,required : true },
    description:{type:String,required:true},
    price : {type: Number ,required: true },
    dimension : [{
        longeur : {type: Number ,required:false},
        largeur : {type: Number ,required:false},
        hauteur : {type: Number ,required:false},
    }],
    couleur : {type:String ,required:true},
    matiere : {type:String ,required:true},
    img :[{
        img1:{ src :{type:String ,required :true},
                alt :{type:String,required :false},},
        img2:{ src :{type:String ,required :true},
                alt :{type:String,required :false},},
        img3:{ src :{type:String ,required :true},
                alt :{type:String,required :false},}
    }],
})


let Products = mongoose.model("Product" , productsSchema)

module.exports = Products