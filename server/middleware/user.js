const User = require("../models/user");
const jwt = require("jsonwebtoken"),
cookieParser = require("cookie-parser");


// const insertToken2 =  (user , req,res) =>{
        
//     delete user.password;
//     user.token = jwt.sign(
//         {
//             id: user._id,
//             username: user.username,
//         },
//         process.env.SECRET_KEY,
//         {
//             expiresIn: "100h",
//         }
//     );
//     res.cookie(String(user._id),user.token,{
//         path:'/',
//         expiresIn:new Date(Date.now()+1000 * 3000),
//         httpOnly: true,
//         sameSite: 'lax'
//     })
//     console.log(user)
    
// }


module.exports = {
    createUser: async (req, res) => {
        const { email, username, firstname, lastname, password } = req.body;
        try {
            const user = await User.create({ email, username, firstname, lastname, password });
            res.status(201).json(user.insertToken());
            console.log(user)
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    logUser: async (req, res) => {
        const { username, password } = req.body;
        try {
            const user = await User.findOne({ username });
            console.log(user)
            if (!user) throw new Error("We didn't find any user with this email : " + email);
            if (!(await user.comparePasswords(password)))
                throw Error("Wrong Password,Try again !!");

        
            res.status(201).json(user.insertToken());
            



        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showAllUsers: async (req, res) => {
        try {
            const u = await User.find().select({_id : 0 , password: 0});
            res.json(u);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showUser: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await User.findById(id).select({ passwords: 0 }); //.select( "-passwords" );
            res.json(user);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    updateUser: async (req, res) => {
        const { firstname, lastname, passwords } = req.body,
            id = req.params.id;
        try {
            if (id !== req.user._id)
                throw new Error("You aren't allowed to edit other users profiles.");
            const u = await User.findById(id);
            u.firstname = firstname ? firstname : u.firstname;
            u.lastname = lastname ? lastname : u.lastname;
            u.passwords = passwords ? passwords : u.passwords;
            await u.save();
            res.status(201).send(u);
        } catch (e) {
            res.json({ error: e.message });
        }
    },

    userToAdmin: async (req, res) => {
        const id = req.params.id;
        try {
            const u = await User.findById(id);
            u.is_Admin = true;
            await u.save();
            // add published games
            res.status(201).send(u);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
};
