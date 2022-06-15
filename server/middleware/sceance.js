const Sceance = require("../models/sceance"),
 Specialite = require("../models/specialite"),
 Medecin = require("../models/medecin"),
 Patient = require("../models/patient"),
User = require("../models/user");

module.exports = {
    createSeance: async (req, res) => {
        const { date, time , finalTime , medecin11 , specialitee , code , patiente} = req.body;
        try {
            console.log("-----------------------------------------------------------------------")
            const specialite = await Specialite.findOne({name:specialitee});
            const medecin1 = await Medecin.findOne({username:medecin11});
            const patient = await Patient.findOne({username:patiente});
            const medecin20 =  await Medecin.find({specialite:specialite._id , isResp:'1'});
            const medecin2 =  medecin20[0];
            const user = await Sceance.create({ date, time , finalTime ,medecin1  , medecin2 , specialite ,code,patient});
            res.status(201).send(user);
            console.log(user)
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showSeance : async (req, res) => {
        const code = req.params.code;
        try {
            const pat = await Sceance.findOne({code:code});
            // res.json(pat);
            res.status(201).send(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    userSeance : async (req, res) => {
        const user = req.params.user;
        try {
            const medecin2 = await Medecin.findOne({username:user});

            const pat = await Sceance.find({medecin2:medecin2}).populate('medecin1').populate('medecin2').populate('patient').populate('specialite')            // res.json(pat);
            res.status(201).send(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },

}