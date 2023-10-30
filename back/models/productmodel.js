const {mongoose } = require("mongoose")

const productsSchema = mongoose.Schema({
img :{
src :{type:String ,required :true},
alt :{type:String,required :true},
},
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
})


let Products = mongoose.model("Product" , productsSchema)

module.exports = Products