const mongoose = require('mongoose');

const {connect} = require('mongoose');

const dbConnexion = async()=> {
    try {
        await mongoose.connect('mongodb+srv://diawaisseta:ProjetsMeubles@cluster0.e0brxpv.mongodb.net/Projets-Meubles')
        console.log('Connexion ok')
    } catch (error) {
        console.log(error)
    }}
module.exports = dbConnexion