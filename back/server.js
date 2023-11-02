const express = require("express");
const app = express();
const port = 3003;
//  Cette ligne importe les routes définies dans le fichier routes.js. Les routes sont les points de terminaison des requêtes HTTP de votre application.
const routes = require("./routes/routes.js");
// Cette ligne importe la configuration de la base de données depuis le fichier database.js. Elle appelle également la fonction db(), qui est responsable de l'établissement d'une connexion à la base de données.
const db =require('./config/database');
const multer = require("multer");



db()
//Cette ligne active la prise en charge de l'analyse des corps de requête HTTP au format URL-encoded. Cela permet de traiter les données envoyées via les formulaires HTML.
app.use(express.urlencoded({extended:true}));
// Cette ligne active la prise en charge de l'analyse des corps de requête au format JSON. Cela permet de traiter les données JSON envoyées avec les requêtes HTTP.
app.use(express.json())
//Cette ligne indique à l'application Express d'utiliser les routes définies dans le fichier routes.js pour gérer les requêtes entrantes.
app.use(routes)
// Cette ligne démarre le serveur en écoutant les requêtes sur le port spécifié (port). Lorsque le serveur est démarré avec succès, il affiche un message "serveur ok" dans la console.
app.listen(port,() => console.log("serveur ok "))