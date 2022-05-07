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
    },options)
);

module.exports = patient;