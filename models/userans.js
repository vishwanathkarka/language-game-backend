const mongoose = require("mongoose");
const { Exam } = require("../models/exam");

const userAnsModel = new mongoose.Schema({
  examId: {
    type: mongoose.Schema.ObjectId,
    ref: "Exam",
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
  Points:{
    type:Number,
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

module.exports = mongoose.model("Userans", userAnsModel);
