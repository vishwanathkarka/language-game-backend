const mongoose = require("mongoose");


const LanguageModel = new mongoose.Schema({
title:{
    type:String
},
assignmentsCount :{
    type:Number,
    default:0
}

})

module.exports = mongoose.model("Language", LanguageModel);
