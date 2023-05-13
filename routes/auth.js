const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const isAuthorized = require("../middileware/authorization");

router.post("/signup", (req, res) => {
  const { name, email, password, role } = req.body;
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
          role,
          // userId,
        });
        user
          .save()

          .then((user) => {
            console.log("user", user);
            res.json({ message: "saved sucessfully", user: user });
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

router.post("/signin", (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please fill all the fields" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "invalid email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          console.log("user", doMatch);
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { _id, name, email, role } = savedUser;
          res.json({ token, user: { _id, name, email, role }, userId: _id });
          console.log("user:", savedUser);
          next();

          //res.json({token:token})
        } else {
          console.log("user", doMatch);
          return res.status(422).json({ error: "invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

//logout

router.get("/logout", (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "logged out",
  });
});

router.put("/users/update", (req, res) => {
  const userId = req.body.userId;
  const name = req.body.name;
  const email = req.body.email;

  User.findByIdAndUpdate(
    userId,
    { name, email },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        return res.status(422).json({ error: "error udpating user data" });
      }
      res.json({ message: "updated succesfuly", user: updatedUser });
    }
  );
});
module.exports = router;
