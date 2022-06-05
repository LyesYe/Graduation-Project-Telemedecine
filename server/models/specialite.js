const mongoose = require("mongoose");
specialiteSchema = new mongoose.Schema({
    name  :
        {    
        type: String,
    }
    ,
    hopitalResp :
    {
        type: mongoose.Types.ObjectId,
        ref: "hopital",
    },
    
 })
 module.exports = mongoose.model("specialite", specialiteSchema);