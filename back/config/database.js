const mongoose = require('mongoose');

const {connect} = require('mongoose');

function dbConnexion() {
    connect('mongodb+srv://diawaisseta:ProjetsMeubles@cluster0.e0brxpv.mongodb.net/Projets-Meubles')
    .then(() => console.log('Connexion ok'))
    .catch(error => console.log(error))
}

module.exports = dbConnexion