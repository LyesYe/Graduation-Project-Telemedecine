const { isLoggedIn } = require("../middleware/auth");

const express = require("express"), 
 router = express.Router(),
 { createAdm,showAdm , showAllAdm,editAdm,deleteAdm} = require("../middleware/admin");
 

 router.route("/signup").post(createAdm);
 router.route("/all").get(showAllAdm);
 router.route("/:id").get(showAdm).put(isLoggedIn, editAdm).delete(isLoggedIn, deleteAdm)


 module.exports = router;