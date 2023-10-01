const express = require("express")
const app = express()
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")


const userRoute = require("./routers/user")
const examRoute = require("./routers/exam")
const userAns = require("./routers/userans")
const Language = require("./routers/Language")
var cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true}));

app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(cookieParser())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
})

//api route
app.use("/api/v1",userRoute)
app.use("/api/v1",examRoute)
app.use("/api/v1",userAns)
app.use("/api/v1",Language)

module.exports = app;
