const Medecin = require("../models/medecin"),
 Hopital = require("../models/hopital"),
 Specialite = require("../models/specialite"),
User = require("../models/user");

module.exports = {
    createMed: async (req, res) => {
        const { email, username, firstname, lastname, password , specialiteA , hopitalA ,isRep} = req.body;
        try {
            const hopital = await Hopital.findOne({name:hopitalA});
            const specialite = await Specialite.findOne({name:specialiteA});
            const isResp ='0';
            const user = await Medecin.create({ email, username, firstname, lastname, password ,specialite,hopital ,isResp});
            res.status(201).json(user.insertToken());
            console.log(user)
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showMed : async (req, res) => {
        const id = req.params.id;
        try {
            const med = await Medecin.findById(id).select({_id : 0});
            res.json(med);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showAllMed: async (req, res) => {
        try {
            const med = await Medecin.find().select({_id : 0});
            res.json(med);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    editMed : async (req, res) => {
        const { email, username, first_Name, last_Name, password ,specialite  } = req.body,
            id = req.params.id;
        try {
            const med = await Medecin.findById(id);
            med.email = email ? email : med.email;
            med.username = username ? username : med.username;
            med.first_Name = first_Name ? first_Name : med.first_Name;
            med.last_Name = last_Name ? last_Name : med.last_Name;
            med.password = password ? password : med.password;
            med.specialite = specialite ? specialite : med.specialite;
            await med.save();
            res.status(201).send(med);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deleteMed : async (req, res) => {
        try {
            const id = req.params.id,
                med = await Medecin.findById(id);
                med.isResp = isResp ? isResp : med.isResp;
            
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    toResp : async (req, res) => {
        try {
            const {  username  } = req.body;

            med = await Medecin.findOne({username:username});
            console.log(med)
            med.isResp = '1';
            await med.save();
            res.status(200).json({ done: "changed to resp" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    getResp : async (req, res) => {
        try {
            
            const specialite = req.params.id;
            // console.log("spec"+specialite)
            const sepo = await Specialite.findOne({name:specialite});
            console.log("sepo"+sepo)
            const med = await Medecin.find({specialite:sepo._id , isResp:'1'});
            console.log("med"+med);

            // await med.save();
            res.json(med);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}