const mongoose = require("mongoose");
const Exam  = require("../models/exam");
const BigPromise = require("../middleware/Bigpromise");
const CustomError = require("../util/customError");
const cookieToken = require("../util/cookieToken");

//exam
exports.addExam = BigPromise(async (req, res, next) => {
    const { title, language , questions } = req.body;
    let exam = await Exam.create({ title,language,questions });

res.status(200).json({
    success: true,
    exam
})
})

exports.getAssignments = BigPromise(async(req,res,next) =>{
    const {id} = req.params;
    let assignments = await Exam.find({language:id}).select("title");
assignments.questions = undefined;
    res.status(200).json({
       success: true,
       assignments
    })
})

exports.getAssignment = BigPromise(async(req,res,next) =>{
    const {id} = req.params;
    let assignments = await Exam.findOne({id:id}).select("-questions.options.isAns");

    res.status(200).json({
       success: true,
       assignments
    })
})


