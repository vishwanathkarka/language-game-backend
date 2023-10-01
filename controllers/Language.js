const mongoose = require("mongoose");
const Language  = require("../models/Languages");
const BigPromise = require("../middleware/Bigpromise");
const CustomError = require("../util/customError");
const cookieToken = require("../util/cookieToken");

exports.languageAdd = BigPromise(async (req, res, next) => {
const {title} = req.body;

const language = await Language.create({title});

res.status(200).json({
    success: true,
    language,
})
})

exports.languageList = BigPromise(async (req, res, next) => {

    
    const languages = await Language.find();
    
    res.status(200).json({
        success: true,
        languages,
    })
    })