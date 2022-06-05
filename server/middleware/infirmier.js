const Infirmier = require("../models/infirmier"),
Hopital = require("../models/hopital"),
User = require("../models/user");

module.exports = {
    createInf: async (req, res) => {
        const { email, username, firstname, lastname, password , hopitalA } = req.body;
        try {
            const hopital = await Hopital.findOne({name:hopitalA});
            const user = await Infirmier.create({ email, username, firstname, lastname, password ,hopital });
            res.status(201).json(user.insertToken());
            console.log(user)
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showInf : async (req, res) => {
        const id = req.params.id;
        try {
            const pat = await Infirmier.findById(id).select({_id : 0});
            res.json(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showAllInf: async (req, res) => {
        try {
            const pat = await Infirmier.find().select({_id : 0});
            res.json(pat);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    editInf : async (req, res) => {
        const { email, username, firstname, lastname, password ,maladie  } = req.body,
            id = req.params.id;
        try {
            const med = await Infirmier.findById(id);
            med.email = email ? email : med.email;
            med.username = username ? username : med.username;
            med.firstname = firstname ? firstname : med.firstname;
            med.lastname = lastname ? lastname : med.lastname;
            med.password = password ? password : med.password;
            med.grade = grade ? grade : med.grade;
            await med.save();
            res.status(201).send(med);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deleteInf : async (req, res) => {
        try {
            const id = req.params.id,
                med = await Infirmier.findById(id);
            await med.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}