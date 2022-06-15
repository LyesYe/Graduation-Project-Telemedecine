const { isLoggedIn } = require("../middleware/auth");

const express = require("express"), 
 router = express.Router(),
 {userSeance,showSeance, createSeance } = require("../middleware/sceance");
 

 router.route("/").post(createSeance);
 router.route("/:code").get(showSeance);
 router.route("/get/:user").get(userSeance);
//  router.route("/all").get(showAllSpec);
//  router.route("/:id").get(showAdm).put(isLoggedIn, editAdm).delete(isLoggedIn, deleteAdm)


 module.exports = router;