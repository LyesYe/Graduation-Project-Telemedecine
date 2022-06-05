const Hospital = require("../models/hopital"),
User = require("../models/user");

module.exports = {
    createHosp: async (req, res) => {
        const { name, adress} = req.body;
        try {
            const user = await Hospital.create({ name, adress });
            
            console.log(user)
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showAllHosp: async (req, res) => {
        try {
            const pat = await Hospital.find().select({_id : 0});
            res.json(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}