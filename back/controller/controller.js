//Cette ligne importe le module express, qui est un framework web pour Node.js. Il est utilisé pour créer un serveur web et gérer les routes et les requêtes HTTP.
const express = require("express");
// Ces lignes importent des modules qui définissent les modèles de données pour les produits et les utilisateurs. Ces modèles sont généralement créés à l'aide de Mongoose pour interagir avec la base de données MongoDB.
const Products = require("../models/productmodel");
const User = require("../models/usermodel");
// Cette ligne importe le module bcryptjs, qui est utilisé pour le hachage (cryptage) des mots de passe. Il est couramment utilisé pour sécuriser les mots de passe stockés dans la base de données.
const bcrypt = require("bcrypt");
//Cette ligne importe le module mongoose-unique-validator, qui est utilisé pour valider l'unicité des champs dans les schémas Mongoose. Il s'assure que certains champs d'un modèle de données sont uniques.
const muv = require("mongoose-unique-validator");
const { mongoose } = require("mongoose");
// Cette ligne importe le module jsonwebtoken, qui est utilisé pour créer et vérifier les tokens JWT (JSON Web Tokens). Ces tokens sont couramment utilisés pour gérer l'authentification et l'autorisation des utilisateurs dans une application.
const jwt = require("jsonwebtoken");

// Cette ligne ajoute le plugin mongoose-unique-validator à l'instance de Mongoose. Cela signifie que les schémas Mongoose qui utilisent cet instance auront la validation des champs uniques activée.
mongoose.plugin(muv);
require("dotenv").config()


// clé secrete pour le token(à changer par une methode plus safe)


// exporte une fonction asynchrone nommée AddProduct qui est utilisée pour ajouter un produit  à l'application en utilisant les données reçues dans la requête HTTP et de les enregistrer dans la BDD.
//Elle reçoit deux paramètres, req et res, qui représentent respectivement la requête HTTP entrante et la réponse HTTP à renvoyer.
exports.AddProduct = async (req, res) => {
  try {
    // un objet product est créé à partir des données de la requête (req.body) et des fichiers téléchargés (req.files). Cet objet contient des informations sur le produit, telles que le titre, la description, le prix, les dimensions, la couleur, la matière, et les images associées.
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
    // Ensuite, un nouveau produit est créé en utilisant le modèle Products (modèle mongoose) avec les données de l'objet product.
    let newProduct = await new Products(product);
    newProduct.save(); //Le nouveau produit est ensuite enregistré dans la base de données en utilisant la méthode save() de Mongoose.
    res.status(200).json(newProduct); // Si l'opération d'enregistrement est réussie, la fonction renvoie une réponse HTTP avec un code de statut 200 (OK) et les données du nouveau produit au format JSON.
  } catch (error) {
    res.status(400).json({ msg: error }); // En cas d'erreur, la fonction renvoie une réponse HTTP avec un code de statut 400 (Bad Request) et un message d'erreur au format JSON.
  }
};

// Cette fonction permet de supprimer un produit de l'application en fonction de l'identifiant passé dans la requête et de le supprimer de la base de données.
exports.DeleteProduct = async (req, res) => {
  try {
    let id = req.params.id; // elle extrait l'identifiant du produit à supprimer à partir des paramètres de la requête (req.params.id). Cet identifiant est généralement passé dans l'URL de la requête.
    await Products.deleteOne({ _id: id }); // La fonction utilise le modèle Products (modèle mongoose) pour supprimer le produit de la base de données. Elle utilise la méthode deleteOne() en spécifiant le critère de recherche pour l'élément à supprimer : l'identifiant _id du produit.
    res.status(200).json({ msg: "produit supprimé batard" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

// Cette fonction permet d'obtenir la liste de tous les produits de l'application depuis la base de données, puis de renvoyer cette liste en réponse à la requête HTTP.
exports.GetAllProduct = async (req, res) => {
  try {
    let allProducts = await Products.find(); // La fonction utilise le modèle Products pour rechercher tous les produits dans la base de données en utilisant la méthode find(), sans spécifier de critères de recherche. Cela signifie qu'elle récupère tous les produits disponibles dans la base de données.
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

// Cette fonction permet d'obtenir un produit spécifique de l'application en fonction de l'identifiant passé dans la requête, de récupérer ce produit depuis la base de données, puis de renvoyer ce produit en réponse à la requête HTTP.
exports.GetOneProduct = async (req, res) => {
  try {
    let id = req.params.id; // elle extrait l'identifiant du produit à obtenir à partir des paramètres de la requête (req.params.id). Cet identifiant est généralement passé dans l'URL de la requête.
    let oneProduct = await Products.findById(id); // La fonction utilise le modèle Products pour rechercher un produit spécifique dans la base de données en utilisant la méthode findById() de Mongoose, en spécifiant l'identifiant du produit à rechercher.
    res.status(200).json(oneProduct);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};


// cette fonction permet d'ajouter un nouvel utilisateur à l'application en utilisant les données reçues dans la requête, de hacher le mot de passe, de les enregistrer dans une base de données et de renvoyer une réponse appropriée en fonction du succès ou de l'échec de l'opération.
exports.AddUser = async (req, res) => {
  try {
    let passwordHash = await bcrypt.hashSync(req.body.password, 10); //  elle utilise le module bcrypt pour hacher le mot de passe fourni dans la requête 
    // un objet user est créé à partir des données de la requête (req.body) et du mot de passe haché. Cet objet contient des informations sur l'utilisateur, telles que le prénom, le nom de famille, le nom d'utilisateur, l'e-mail, le mot de passe et le rôle.
    const user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      login: req.body.login,
      email: req.body.email,
      password: passwordHash,
      role: req.body.role,
    };
    // Un nouvel utilisateur est créé en utilisant le modèle User défini dans le model mongoose avec les données de l'objet user.
    let newUser = await new User(user);
    newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ msg: error });
  }}

  // Cette fonction permet de supprimer un utilisateur de l'application en fonction de l'identifiant passé dans la requête, de le supprimer de la base de données, et de renvoyer une réponse appropriée en fonction du succès ou de l'échec de l'opération.
exports.DeleteUser = async (req, res) => {
    try {
      let id = req.params.id;
      await User.deleteOne({ _id: id }); // La fonction utilise le modèle User pour supprimer l'utilisateur de la base de données. Elle utilise la méthode deleteOne() en spécifiant le critère de recherche pour l'élément à supprimer : l'identifiant _id de l'utilisateur.
      res.status(200).json({ msg: "user supprimé batard" });
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  };


  // Cette fonction permet d'obtenir un utilisateur spécifique de l'application en fonction de l'identifiant passé dans la requête, de récupérer cet utilisateur depuis la base de données, puis de renvoyer cet utilisateur en réponse à la requête HTTP.
exports.GetOneUser = async (req, res) => {
  try {
    let id = req.params.id;
    let oneUser = await User.findById(id); // La fonction utilise le modèle User pour rechercher un utilisateur spécifique dans la base de données en utilisant la méthode findById(), en spécifiant l'identifiant de l'utilisateur à rechercher.
    res.status(200).json(oneUser);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

// Cette fonction sert à obtenir la liste complète des utilisateurs de l'application depuis la base de données, puis à renvoyer cette liste en réponse à la requête HTTP.
exports.GetAllUser = async (req, res) => {
  try {
    
    let allUser = await User.find(); // la fonction utilise le modèle User pour rechercher tous les utilisateurs dans la base de données à l'aide de la méthode find() de Mongoose, sans spécifier de critères de recherche. Cela signifie qu'elle récupère tous les utilisateurs enregistrés dans la base de données.
    res.status(200).json(allUser);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

// Cette fonction vérifie les informations d'authentification fournies par l'utilisateur, recherche l'utilisateur dans la base de données, compare les mots de passe(hashé et non hashé fourni par l'utilisateur), génère un jeton JWT en cas de succès
exports.Login = async (req, res) => {
    try {
      let login = req.body.login;
      let userPassword = req.body.password;

      let verifyUser = await User.findOne({login : login});
     
      if(!verifyUser){
          res.status(400).json({ msg: "utilisateur introuvable" });
        }
        else{

     let passwordVerify = await bcrypt.compare(userPassword,verifyUser.password);
      if(!passwordVerify){
        return res.status(401).json({ message: "Mot de passe incorrect." })
      }else{
     const token = jwt.sign({id: verifyUser._id }, process.env.SECRET_KEY, { expiresIn: '1h'});
    res.status(200).json({ token: token, id: verifyUser.id ,message: "Login réussie."})
      }
    
  }} catch (error) {
      res.status(400).json({ msg: error });
    }
  };
  

exports.test = async(req,res)=>{
try {
res.status(200).json({msg : "acces a la route ok "})
} catch (error) {
console.log(error)
}
}

exports.UpdateProduct = async (req, res) => {
  
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
    }
  
    const id = req.params.id
  
    await Products.updateOne({"_id": id }, product);
    res.status(200).json({msg : "produit modifé batard"})
} catch (error) {
    res.status(401).json({msg : error})
}

};