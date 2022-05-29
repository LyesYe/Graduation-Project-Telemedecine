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
}