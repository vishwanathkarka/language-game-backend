const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Jwt = require("jsonwebtoken");

const usermodel = new mongoose.Schema({
  firstName: {
    type: String,
    // required: [true, "Name is mandatory"],
  },
  lastName: {
    type: String,
    // required: [true, "Name is mandatory"],
  },
  gender: {
    type: String,
    required: [true, "Email in mandatory"],
    enum: ["male", "female"],
  },
  email: {
    type: String,
    required: [true, "Email in mandatory"],
    validate: [validator.isEmail, "enter the email correctly"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is mandatory"],
    minlength: [6, "password length should atleast 6  "],
    select: false,
  },
  role: {
    type: String,
    default: "user",
    
  },

  photo: {
    id: {
      type: String,
      // required:true
    },
    secure_url: {
      type: String,
    },
  },
  totalScore:{
   type:Number,
   default:0

  },
  attendedExamList:[
{
  examId:{
    type: mongoose.Schema.ObjectId,
    ref: "Exam",
  },
  ansId:{
    type: mongoose.Schema.ObjectId,
    ref: "Userans",
  },
  marks:{
    type:Number,
  }
}
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

usermodel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

usermodel.methods.isValidatePassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

usermodel.methods.getJwtToken = async function () {
  return await Jwt.sign({ id: this._id,role:this.role }, process.env.JWT_SCREATE, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

module.exports = mongoose.model("user", usermodel);

