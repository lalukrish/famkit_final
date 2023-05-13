const jwt =require("jsonwebtoken")
const mongoose = require("mongoose");
const User = mongoose.model("User");
const JWT_SECRET=require("../keys")



module.exports = {
  isAuthorized: async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
      return next(new ErrorHander("Please Login to access this resource", 401));
    }

    try {
      const decodedData = jwt.verify(token, JWT_SECRET);
      req.user = await User.findById(decodedData._id);
      if (!req.user) {
        return next(new ErrorHander("User not found", 404));
      }
      next();
    } catch (error) {
      return next(new ErrorHander("Invalid token", 401));
    }
  }
};
