const Patient = require("../models/patient"),
User = require("../models/user");

module.exports = {
    createPat: async (req, res) => {
        const { email, username, firstname, lastname, password , lieuNaiss ,  Sexe , adresse  , dateNaiss  } = req.body;
        try {
            const user = await Patient.create({ email, username, firstname, lastname, password , lieuNaiss ,  Sexe , adresse  , dateNaiss });
            res.status(201).json(user.insertToken());
            console.log(user)
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showPat : async (req, res) => {
        const id = req.params.id;
        try {
            const pat = await Patient.findById(id).select({_id : 0});
            res.json(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showAllPat: async (req, res) => {
        try {
            const pat = await Patient.find().select({_id : 0});
            res.json(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    editPat : async (req, res) => {
        const { email, username, first_Name, last_Name, password ,maladie  } = req.body,
            id = req.params.id;
        try {
            const med = await Patient.findById(id);
            med.email = email ? email : med.email;
            med.username = username ? username : med.username;
            med.firstname = firstname ? firstname : med.firstname;
            med.lastname = lastname ? lastname : med.lastname;
            med.password = password ? password : med.password;
            med.maladie = maladie ? maladie : med.maladie;
            await med.save();
            res.status(201).send(med);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    updateInfo: async (req, res) => {
        const { resultats, compteRendue, vaccin } = req.body,
            id = req.params.id;
        try {
            if (id !== req.user._id)
                throw new Error("You aren't allowed to edit other users profiles.");
            const u = await User.findById(id);
            u.resultats = resultats ? resultats : med.resultats;
            u.compteRendue = compteRendue ? compteRendue : med.compteRendue;
            u.vaccin = vaccin ? vaccin : med.vaccin;
            await u.save();
            res.status(201).send(u);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deletePat : async (req, res) => {
        try {
            const id = req.params.id,
                med = await Patient.findById(id);
            await med.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}