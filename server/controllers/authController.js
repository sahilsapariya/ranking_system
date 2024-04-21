const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const RegisterController = async (req, res) => {
  try {
    var user = await userModel.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(200)
        .json({ message: "User already Exist", success: false });
    }
    const pass = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(pass, salt);

    user = await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();

    res.status(200).send({ message: "Registration successful", success: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({
        success: false,
        meaasge: `Register Controller ${error.message}`,
      });
  }
};

const LoginController = async (req, res) => {
  try {
    var user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invalid EmailId or password", success: false });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in login CTRL ${error.meaasge}` });
  }
};

module.exports = {
  LoginController,
  RegisterController,
};
