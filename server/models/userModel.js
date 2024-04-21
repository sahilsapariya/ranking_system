const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is required."],
  },
  password: {
    type: String,
    require: [true, "password is required."],
  },
  email: {
    type: String,
    require: [true, "email is required."],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
