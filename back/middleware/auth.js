const jwt = require("jsonwebtoken");
const User= require("../models/usermodel");
require("dotenv").config()
const path = require("path")


const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            console.log(user)
            next();
        });
    } else {
        res.sendStatus(401);
    }
};


module.exports = {authenticateJWT}



