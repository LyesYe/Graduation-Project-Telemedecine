const Sceance = require("../models/sceance"),
 Specialite = require("../models/specialite"),
 Medecin = require("../models/medecin"),
User = require("../models/user");

module.exports = {
    createSeance: async (req, res) => {
        const { date, time , finalTime , medecin11 , medecin22 , specialitee , code} = req.body;
        try {
            const medecin1 = await Medecin.findOne({username:medecin11});
            const medecin2 = await Medecin.findOne({username:medecin22});
            const specialite = await Specialite.findOne({name:specialitee});
            const user = await Sceance.create({ date, time , finalTime ,medecin1  , medecin2 , specialite ,code});
            
            console.log(user)
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    // showAllSpec: async (req, res) => {
    //     try {
    //         const pat = await Specialite.find().select({_id : 0});
    //         res.json(pat);
    //     } catch (e) {
    //         res.json({ error: e.message });
    //     }
    // },
}