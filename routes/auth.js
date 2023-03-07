const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} =require("../keys")
 
router.post("/signup", (req, res) => {
  const { name, email, password,role } = req.body;
  if (!email || !password || !name || !role) {
    return res.status(422).json({ error: "please add all the fields" });
  }

  //user is validate with email for duplication

  User.findOne({
    email: email,
  })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exist with that email" });
      }

      //store the new user with encrypted passwd
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
          role
        });
        user
          .save()
         
          .then((user) => {
            console.log("user",user)
            res.json({ message: "saved sucessfully",user: user });
            
          })
          .catch((err) => {
            console.log(err);
          });
          
      });
     
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res,next) => {
  const {email,password}=req.body
    if(!email || !password){
         return res.status(422).json({error:"please fill all the fields"})
    }
    User.findOne({email:email}).then(savedUser =>{
        if(!savedUser){
         return   res.status(422).json({error:"invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password).then(doMatch=>{
            if(doMatch){
                
                console.log("user",doMatch)
            const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
            const {_id,name,email} = savedUser
            res.json({token,user:{_id,name,email}})
            //res.json({token:token})
          
        }   else{
          console.log("user",doMatch)
                return res.status(422).json({error:"invalid email or password"})
            }
        }).catch(err=>{console.log(err)})
    })
})

module.exports = router;
