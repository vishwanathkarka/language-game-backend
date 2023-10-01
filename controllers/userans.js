
const mongoose = require("mongoose");
const UserAns = require("../models/userans");
const BigPromise = require("../middleware/Bigpromise");
const CustomError = require("../util/customError");
const cookieToken = require("../util/cookieToken");


exports.addUserAns = BigPromise(async(req,res,next)=>{
    const {questionId,userAns,examId, ques} = req.body;
    let ansUser = await UserAns.create({questionId, ques,userAns,examId});
    res.status(200).json({
        success:true,
        ansUser
    })
    
    })
exports.userAns = BigPromise(async(req,res,next)=>{
    const {id} = req.params;
    let ans = await UserAns.findOne({_id:id})
     .populate("examId") // Populate the "questionId" field
  .exec()
  

  res.status(200).json({
    success:true,
    ans
})
})
    
    exports.evaluateAns = BigPromise(async(req,res,next)=>{
    const {id} = req.params;
    let ans = await UserAns.findOne({_id:id}).populate("examId").exec()
    let points = 0
    // console.log(ans)
    ans.ques.map((user) => {
        ans.examId.questions.map((el, indx) => 
        {
          if(user.questionId == el._id){ 
            el.options.map((option) => {
                if(user.userAns == option._id){
                    if(option.isAns){
                    points= points+1
                    }}})
          }
        })

    })
    // ans.ques.forEach((user) => {
    //     ans.examId.questions.forEach((el) => {
    //       if (user.questionId == el._id) {
    //         el.options.forEach((option) => {
    //           if (user.userAns == option._id && option.isAns) {
    //             points = points + 1;
    //             console.log("fjjf--g--ghh")
    //           }
    //         });
    //       }
    //     });
    //   });
    ans.Points = points
    ans.isPointCal = true
    await ans.save();
  
    res.status(200).json({
        success:true,
        ans
    })
    }
    )