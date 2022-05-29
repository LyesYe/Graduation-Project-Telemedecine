const mongoose = require("mongoose");
hopitalSchema = new mongoose.Schema({
    name  :
        {    
        type: String,
    }
    ,
    adress :
        {    
            type: String,
        }
    
 })
 module.exports = mongoose.model("hopital", hopitalSchema);