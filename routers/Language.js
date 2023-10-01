const {languageAdd,languageList} = require("../controllers/Language");
const express = require("express");
const router = express.Router();


router.route("/addlanguage").post(languageAdd);
router.route("/languagelist").get(languageList);

module.exports = router;