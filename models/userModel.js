const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    nom: String,
    prenom: String,
    poste: String,
    email: String,
    password: String,
    gender: String,
    linkedIn: String

}, { timestamps: true })


module.exports = new mongoose.model('user ', userSchema)