const express = require("express")
const router = express.Router()
const {userAns,addUserAns,evaluateAns,points} = require("../controllers/userans")
const {isLogined,customRole} = require("../middleware/user")

router.route("/userans/:id").get(userAns);
router.route("/adduserans").post(addUserAns);
router.route("/ans/evaluate/:id").get(evaluateAns)
router.route("/userPoints/:id").get(points)

module.exports = router;
