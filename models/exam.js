const mongoose = require("mongoose");


const examModel = new mongoose.Schema({

    title:{
        type:String
    },
    description:{
        type:String,
    },

    // examId:{
    //     type: mongoose.Schema.ObjectId,
    //     ref: "exam",
    // }, 
    language:{
        type: mongoose.Schema.ObjectId,
        ref: "Language",
    },
    
    questions:[
        
            {
                // questionId:{
                //     type: mongoose.Schema.ObjectId,
                //     ref: "questionId",
                // },
                que:{
                    type:String,
                },
                options:[
                    {
                        title:{
                            type:String,
                        },
                        isAns:{
                            type:Boolean,
                            default:false
                        },
                       
                    },

                ],
        //         userAns:{
        //             type: mongoose.Schema.ObjectId,
        // ref: "exam",
        //         }

            }
        
    ]
}
)

module.exports = mongoose.model("Exam", examModel);
