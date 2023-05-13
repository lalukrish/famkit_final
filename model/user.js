const mongoose = require("mongoose");
const shortid = require("shortid");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    default: shortid.generate,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["1", "2"],
    default: 1,
  },
});

mongoose.model("User", userSchema);
