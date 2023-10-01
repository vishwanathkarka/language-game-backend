const express = require("express")
const router = express.Router()
const {addExam,addUserAns,userAns,getAssignments,getAssignment} = require("../controllers/exam")
const {isLogined,customRole} = require("../middleware/user")
router.route("/addexam").post(addExam);
router.route("/assignments/:id").get(getAssignments);
router.route("/assignment/:id").get(getAssignment);
module.exports = router;
