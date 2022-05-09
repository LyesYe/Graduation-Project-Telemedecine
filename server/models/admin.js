const mongoose = require("mongoose");
const User = require("./user");
options = { discriminatorKey: "kind" };

admin = User.discriminator('admin',


new mongoose.Schema({
    hospital:
    {
        type: mongoose.Types.ObjectId,
        ref: "hospital",
    },
    },options)
);

module.exports = admin;