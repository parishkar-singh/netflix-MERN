const router=require("express").Router()
const User=require('../models/User')

// Register
router.post("/register",async(req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    try{
    const user=await newUser.save();
    res.status(2001).json(user)
    }catch(error){
        res.status(500).json(error)
    }
})
module.exports=router;

