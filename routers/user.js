const express = require("express")
const router = express.Router()
const {Signup,login} = require("../controllers/user")
const {isLogined,customRole} = require("../middleware/user")
router.route("/signup").post(Signup);
router.route("/login").post(login);

module.exports = router;
