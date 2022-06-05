const mongoose = require("mongoose");
const User = require("./user");
options = { discriminatorKey: "kind" };

infirmier = User.discriminator('infirmier',


new mongoose.Schema({
    listMedecin:  [
        {
            type: mongoose.Types.ObjectId,
            ref: "infirmier",
        },
    ],
    hopital:  
    {
        type: mongoose.Types.ObjectId,
        ref: "hopital",
    },
    },options)
);

module.exports = infirmier;