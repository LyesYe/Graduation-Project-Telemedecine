const mongoose = require("mongoose");
const User = require("./user");
options = { discriminatorKey: "kind" };

admin = User.discriminator('admin',


new mongoose.Schema({
    hospital:
    {    
        type: String,
    },
    },options)
);

module.exports = admin;