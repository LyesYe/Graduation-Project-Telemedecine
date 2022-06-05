const Specialite = require("../models/specialite"),
 Hopital = require("../models/hopital"),
User = require("../models/user");

module.exports = {
    createSpec: async (req, res) => {
        const { name, hopital} = req.body;
        try {
            const hopitalResp = await Hopital.findOne({name:hopital});
            const user = await Specialite.create({ name, hopitalResp });
            
            console.log(user)
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showAllSpec: async (req, res) => {
        try {
            const pat = await Specialite.find().select({_id : 0});
            res.json(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}