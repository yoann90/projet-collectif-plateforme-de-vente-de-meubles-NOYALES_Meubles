const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");
require("dotenv").config()
const path = require("path")


const authenticateJWT = async(req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.SECRET_KEY, async(err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            console.log(user.id)
            let userProfil = await User.findById({_id: user.id})
            if(userProfil){
            console.log(userProfil)
            next();
        }else{
        res.status(401).json({msg:"utilisateur introuvable"})
        }
        });
    } else {
        res.sendStatus(401);
    }
};


module.exports = {authenticateJWT}



