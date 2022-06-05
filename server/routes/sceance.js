const { isLoggedIn } = require("../middleware/auth");

const express = require("express"), 
 router = express.Router(),
 { createSeance } = require("../middleware/sceance");
 

 router.route("/").post(createSeance);
//  router.route("/all").get(showAllSpec);
//  router.route("/:id").get(showAdm).put(isLoggedIn, editAdm).delete(isLoggedIn, deleteAdm)


 module.exports = router;