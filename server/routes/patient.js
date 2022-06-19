const { isLoggedIn } = require("../middleware/auth");

const express = require("express"), 
 router = express.Router(),
 {show, createPat,showPat ,updateInfo, showAllPat,editPat,deletePat} = require("../middleware/patient");

 
 router.route("/").post(createPat);
 router.route("/all").get(showAllPat);
 router.route("/updateInfo").get(isLoggedIn,updateInfo);
 router.route("/show").post(show);
 router.route("/:id").get(showPat).put(isLoggedIn, editPat).delete(isLoggedIn, deletePat)


 module.exports = router;