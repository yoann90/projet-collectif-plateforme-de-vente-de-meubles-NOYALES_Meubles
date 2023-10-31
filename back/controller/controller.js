const express = require("express")
const Products = require("../models/productmodel")


exports.AddProduct = async (req,res) => {
    try {
    const {body} = req
    const product = {
    img : [{
        img1:
        {   src : body.img.img1.src,
            alt : body.img.img1.alt
        },
        img2:
        {
            src : body.img.img2.src,
            alt : body.img.img2.alt
        },
        img3:
        {
            src : body.img.img3.src,
            alt : body.img.img3.alt
        }
    }],
    title : body.title,
    description : body.description,
    price :body.price,
    dimension:[{longeur : body.longeur , largeur : body.largeur , hauteur : body.hauteur}],
    couleur : body.couleur,
    matiere : body.matiere
    
    }

    res.status(200).json({msg : "test route"})
    } catch (error) {
        console.log(error)
    }
}
