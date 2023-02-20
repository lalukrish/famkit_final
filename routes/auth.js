const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
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
        });
        user
          .save()
          .then((user) => {
            res.json({ message: "saved sucessfully" });
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
router.get("/get", (req, res) => {
  res.send("hello this is method1");
});
module.exports = router;
