const { isLoggedIn } = require("../middleware/auth");

const express = require("express"), 
 router = express.Router(),
 { createHosp} = require("../middleware/hospital");
 

 router.route("/").post(createHosp);
//  router.route("/all").get(showAllAdm);
//  router.route("/:id").get(showAdm).put(isLoggedIn, editAdm).delete(isLoggedIn, deleteAdm)


 module.exports = router;