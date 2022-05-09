const mongoose = require("mongoose");
infoMedicalSchema = new mongoose.Schema({
    files  : [
        {    
        type: String,
    }
    ],
    compteRendues : [
    {
        compteRendue :{
            type: String,
            },
        date:{
            type: String
            },
        medecin:
        {
            type: mongoose.Types.ObjectId,
            ref: "medecin",
        },
    }
    ],
    allergies : [
        {    
            type: String,
        }
    ]
 })
 module.exports = mongoose.model("infoMedical", infoMedicalSchema);