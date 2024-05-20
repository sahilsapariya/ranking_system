import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide last name"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: { type: String, required: [true, "Please provide password"] },
  isAdmin: { type: Boolean, required: true, default: false },
  isVerified: { type: Boolean, required: true, default: false },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
  verifyToken: String,
  verifyTokenExpire: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
