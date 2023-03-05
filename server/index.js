const express = require("express")
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const authRoute=require("./routes/auth")

//middleware
app.use("/api/auth",authRoute);
app.use(express.json())

// Database
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
}).then(()=>console.log("Database Connected! Lets go"))
PORT = process.env.PORT || 9999

//Express server
app.listen(PORT, () => {
    console.log("Express server Up and running @", PORT)
})
