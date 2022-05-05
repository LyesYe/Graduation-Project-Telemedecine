const Admin = require("../models/admin"),
User = require("../models/user");

module.exports = {
    createAdm: async (req, res) => {
        const { email, username, first_Name, last_Name, password , secteur } = req.body;
        try {
            const user = await Admin.create({ email, username, first_Name, last_Name, password ,secteur });
            res.status(201).json(user.insertToken());
            console.log(user)
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showAdm : async (req, res) => {
        const id = req.params.id;
        try {
            const pat = await Admin.findById(id).select({_id : 0});
            res.json(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showAllAdm: async (req, res) => {
        try {
            const pat = await Admin.find().select({_id : 0});
            res.json(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    editAdm : async (req, res) => {
        const { email, username, first_Name, last_Name, password ,secteur  } = req.body,
            id = req.params.id;
        try {
            const med = await Admin.findById(id);
            med.email = email ? email : med.email;
            med.username = username ? username : med.username;
            med.first_Name = first_Name ? first_Name : med.first_Name;
            med.last_Name = last_Name ? last_Name : med.last_Name;
            med.password = password ? password : med.password;
            med.secteur = secteur ? secteur : med.secteur;
            await med.save();
            res.status(201).send(med);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deleteAdm : async (req, res) => {
        try {
            const id = req.params.id,
                med = await Admin.findById(id);
            await med.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}