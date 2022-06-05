const mongoose = require("mongoose");
const User = require("./user");
options = { discriminatorKey: "kind" };

admin = User.discriminator('admin',


new mongoose.Schema({
    hopital:
    {    
        type: mongoose.Types.ObjectId,
        ref: "hopital",
    },
    },options)
);

module.exports = admin;