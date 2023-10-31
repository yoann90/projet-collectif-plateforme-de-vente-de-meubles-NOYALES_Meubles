const express = require("express")
const Products = require("../models/productmodel")


exports.AddProduct = async (req,res) => {
    try {
    const product = {
        title : req.body.title,
        description : req.body.description,
        price :req.body.price,
        dimension:[{longeur : req.body.longeur , largeur : req.body.largeur , hauteur : req.body.hauteur}],
        couleur : req.body.couleur,
        matiere : req.body.matiere,
        img : [{
            img1:
            {   src : req.files[0].path,
                alt : req.files[0].originalname
            },
            img2:
            {
                src : req.files[1].path,
                alt : req.files[1].originalname
            },
            img3:
            {
                src : req.files[2].path,
                alt : req.files[2].originalname
            }
        }],
}

let newProduct = await new Products(product)
newProduct.save()
res.status(200).json(newProduct)
    } catch (error) {
        console.log(error)
    }
}


