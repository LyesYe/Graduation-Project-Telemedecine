const express = require("express"),
    { isLoggedIn, isAdmin } = require("../middleware/auth"),
    { showAllUsers ,showUser, updateUser } = require("../middleware/user");
router = express.Router();

router.route("/").get(showAllUsers);
router.route("/:id").get(showUser).put(isLoggedIn, updateUser);
module.exports = router;