const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/routes.js");
const db =require('./config/database');
const multer = require("multer")



db()
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(routes)
app.listen(port,() => console.log("serveur ok "))