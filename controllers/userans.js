
const mongoose = require("mongoose");
const UserAns = require("../models/userans");
const BigPromise = require("../middleware/Bigpromise");
const CustomError = require("../util/customError");
const cookieToken = require("../util/cookieToken");


exports.addUserAns = BigPromise(async(req,res,next)=>{
    const {questionId,userAns,examId, ques,user_id} = req.body;
    let ansUser = await UserAns.create({questionId, ques,userAns,examId,user_id});
    res.status(200).json({
        success:true,
        ansUser
    })
    
    })
exports.userAns = BigPromise(async(req,res,next)=>{
    const {id} = req.params;
    let ans = await UserAns.findOne({_id:id}).populate('examId') // Populate the 'questionId' field
    // .populate('examId')
    .exec();
//      .populate(["ques"]) // Populate the "questionId" field
//   .exec()
  

  res.status(200).json({
    success:true,
    ans
})
})
    
exports.points = BigPromise(async(req,res,next)=>{
    const {id} = req.params;
 let pointList  = await UserAns.find({ user_id: id, points: { $gt: 0 } }).select("points");
//     let pointList = await UserAns.aggregate( [{ $match: {
//         "user_id:id": id       
//       }
//   }, { $group : { "_id": null, "Points" :{ $sum: "$Points" } }  }] )

// let pointList = await UserAns.aggregate([
//     {
//       $match: { user_id: id }
//     },
    
//     {
//       $group: {
//         _id: null,
//         totalPoints: { $sum: '$Points' }
//       }
//     },
//     {
//         $lookup: {
//           from: 'Userans', // Replace with the actual name of the User collection
//           localField: 'user_id', // Field in UserAns collection
//          foreignField: 'user_id',   // Field in User collection
//            as: '_id'
//         }
//     },
//     {
//       $unwind: '$user'
//     }
    
  
//   ])

let points = 0;
console.log(points)
pointList.forEach((el) => {
    // el = JSON.stringify(el)
    const pointsValue = el.points;
    console.log(pointsValue)
  points += pointsValue;
});
console.log(points)

//     let points = 0;
// console.log(pointList)
//     console.log(typeof pointList)
//     pointList.map((el)=>{  
//         let aa = JSON.stringify(el)
//         console.log(sumOfPoints)
// // points = points+el.Points
// console.log(aa)
//  })

// for(let i=0; i<pointsList.length;i++){
//    points= points+  pointsList[i].Points
// }



console.log(points)

    res.status(200).json({
        success:true,
        points
    })
})
    exports.evaluateAns = BigPromise(async(req,res,next)=>{
    const {id} = req.params;
    let ans = await UserAns.findOne({_id:id}).populate("examId").exec()
    let points = 0
    // console.log(ans)
    ans&&  ans.ques.map((user) => {
        ans.examId.questions.map((el, indx) => 
        {
            console.log(JSON.stringify(user.questionId) === JSON.stringify(el._id))
          if(JSON.stringify(user.questionId) === JSON.stringify(el._id)){ 
            el.options.map((option) => {
                
                if(JSON.stringify(user.userAns) == JSON.stringify(option._id)){
                    console.log("data---fkgkkglgff")
                    if(option.isAns){
                    points= points+1
                    }}})
          }
        })

    })
console.log("Points"+points)
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

    ans.points = points
    ans.isPointCal = true
    await ans.save();
  
    res.status(200).json({
        success:true,
        ans
    })
    }
    )