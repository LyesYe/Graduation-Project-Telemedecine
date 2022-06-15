const { isLoggedIn } = require("../middleware/auth");

const express = require("express"), 
 router = express.Router(),
 {getResp,toResp, createMed,showMed , showAllMed,editMed,deleteMed} = require("../middleware/medecin");


 router.route("/").post(createMed);
 router.route("/all").get(showAllMed);
 router.route("/toResp").post(toResp);
 router.route("/getResp/:id").get(getResp);
 router.route("/:id").get(showMed).put(isLoggedIn, editMed).delete(isLoggedIn, deleteMed)


 module.exports = router;