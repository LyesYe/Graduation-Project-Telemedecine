const mongoose = require("mongoose");
infoMedicalSchema = new mongoose.Schema({
    resultats  : {
        
        type: String,
    },
    compteRendue : {
        
        type: String,
    },
    vaccin : {
        
        type: String,
    },
 })
 module.exports = mongoose.model("infoMedical", infoMedicalSchema);