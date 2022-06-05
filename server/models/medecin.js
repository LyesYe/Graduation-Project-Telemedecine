const mongoose = require("mongoose");
const User = require("../models/user");
options = { discriminatorKey: "kind" };

medecin = User.discriminator('medecin',


new mongoose.Schema({
    specialite: {
        type: mongoose.Types.ObjectId,
        ref: "specialite",
    },
    listInfirmier:  [
        {
            type: mongoose.Types.ObjectId,
            ref: "Infirmier",
        },
    ],
    hopital:
    {
        type: mongoose.Types.ObjectId,
        ref: "hopital",
    },
    
    },options)
);

module.exports = medecin;