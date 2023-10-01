const express = require("express")
const router = express.Router()
const {userAns,addUserAns,evaluateAns} = require("../controllers/userans")
const {isLogined,customRole} = require("../middleware/user")

router.route("/userans/:id").get(userAns);
router.route("/adduserans").post(addUserAns);
router.route("/ans/evaluate/:id").get(evaluateAns)

module.exports = router;
