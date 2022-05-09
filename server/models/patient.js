const mongoose = require("mongoose");
const User = require("../models/user");
options = { discriminatorKey: "kind" };

patient = User.discriminator('patient',


new mongoose.Schema({
    infoMedical: {
        type: mongoose.Types.ObjectId,
        ref: "infoMedical",
    },
    listMedecin:  [
        {
            type: mongoose.Types.ObjectId,
            ref: "medecin",
        },
    ],
    lieuNaiss:{
        type:String,
    },
    Sexe:{
        type:String,
    },
    adresse:{
        type:String,
    },
    dateNaiss:{
        type:String,
    },
    Age:{
        type:String,
    },
    },options)
);

module.exports = patient;