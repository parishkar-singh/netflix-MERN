const express = require("express")
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("Database Connected! Lets go"))
PORT = process.env.PORT || 9999
app.listen(PORT, () => {
    console.log("Express server Up and running @", PORT)
})