const { isLoggedIn } = require("../middleware/auth");

const express = require("express"), 
 router = express.Router(),
 { showAllSpec , createSpec} = require("../middleware/specialite");
 

 router.route("/").post(createSpec);
 router.route("/all").get(showAllSpec);
//  router.route("/:id").get(showAdm).put(isLoggedIn, editAdm).delete(isLoggedIn, deleteAdm)


 module.exports = router;