const Hospital = require("../models/hopital"),
Medecin = require("../models/medecin"),
     Specialite = require("../models/specialite");
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
    getCouple: async (req, res) => {
        const { hopoo} = req.body;
        try {
            const ho = await Hospital.find({name :hopoo });
            const so = await Specialite.find({hopitalResp :ho });
            const mi = await Medecin.find({hopital:ho,Specialite :so,isResp:'1' }).populate('specialite').select({firstname : 1,lastname : 1,specialite : 1,_id:0});
            console.log(mi)

            res.json(mi);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}