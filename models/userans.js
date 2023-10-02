const mongoose = require("mongoose");
const { Exam } = require("../models/exam");
const {User} = require("../models/user")
const userAnsModel = new mongoose.Schema({
  examId: {
    type: mongoose.Schema.ObjectId,
    ref: "Exam",
  },
  user_id:{
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  ques: [
    {
    //   questionId: {
    //     type: mongoose.Schema.ObjectId,

    //     ref: "Exam.questions._id",

    //     // friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exam'}],
    //   },
    questionId: {
        type: mongoose.Schema.ObjectId, // Use mongoose.Schema.Types.ObjectId
        ref: "Exam",
      },
    //   [{ type: mongoose.Schema.Types.ObjectId, ref: "Exam"}]: {
    //     type: mongoose.Schema.ObjectId, // Use mongoose.Schema.Types.ObjectId
    //     ref: "Exam",
    //   },

      userAns: {
        //             type: mongoose.Schema.ObjectId,
        type: mongoose.Schema.ObjectId,
        ref: "Exam",
        // lists: [Exam],
        // friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exam'}],
      },

    // userAns: {
    //     type: mongoose.Schema.ObjectId, // Use mongoose.Schema.Types.ObjectId
    //     ref: "Exam",
    //   },
     
    },
  ],
  points:{
    type:Number,
    integer: true,
    default:0
  },
  isPointCal:{
    type:Boolean,
    default:false
  },
  attemptedData: {
    type: Date,
    default: Date.now,
  },
});

// mongoose.model("Exam", Exam);
mongoose.model("Exam", Exam);
// mongoose.model("User", User);

module.exports = mongoose.model("Userans", userAnsModel);
