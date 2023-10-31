const express = require("express");
const Products = require("../models/productmodel");
const User = require("../models/usermodel");
const bcrypt = require("bcrypt");
const muv = require("mongoose-unique-validator");
const { mongoose } = require("mongoose");
mongoose.plugin(muv);

exports.AddProduct = async (req, res) => {
  try {
    const product = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      dimension: [
        {
          longeur: req.body.longeur,
          largeur: req.body.largeur,
          hauteur: req.body.hauteur,
        },
      ],
      couleur: req.body.couleur,
      matiere: req.body.matiere,
      img: [
        {
          img1: { src: req.files[0].path, alt: req.files[0].originalname },
          img2: {
            src: req.files[1].path,
            alt: req.files[1].originalname,
          },
          img3: {
            src: req.files[2].path,
            alt: req.files[2].originalname,
          },
        },
      ],
    };

    let newProduct = await new Products(product);
    newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.DeleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    await Products.deleteOne({ _id: id });
    res.status(200).json({ msg: "produit supprimé batard" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.GetAllProduct = async (req, res) => {
  try {
    let allProducts = await Products.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.GetOneProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let oneProduct = await Products.findById(id);
    res.status(200).json(oneProduct);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.AddUser = async (req, res) => {
  try {
    let passwordHash = await bcrypt.hashSync(req.body.password, 10);
    const user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      login: req.body.login,
      email: req.body.email,
      password: passwordHash,
      role: req.body.role,
    };
    let newUser = await new User(user);
    newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ msg: error });
  }}

exports.DeleteUser = async (req, res) => {
    try {
      let id = req.params.id;
      await User.deleteOne({ _id: id });
      res.status(200).json({ msg: "user supprimé batard" });
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  };



exports.GetOneUser = async (req, res) => {
  try {
    let id = req.params.id;
    let oneUser = await User.findById(id);
    res.status(200).json(oneUser);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

exports.GetAllUser = async (req, res) => {
  try {
    let id = req.params.id;
    let allUser = await User.find();
    res.status(200).json(allUser);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};



// exports.Login = async (req, res) => {
//     try {
//       let id = req.params.id;
//       let oneUser = await User.findById(id);
//       oneUser.id
//       res.status(200).json(oneProduct);
//     } catch (error) {
//       res.status(400).json({ msg: error });
//     }
//   };
