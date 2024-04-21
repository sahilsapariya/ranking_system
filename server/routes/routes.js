const express = require("express");
const protect = require("../middlewares/authMiddleware");

const {
  LoginController,
  RegisterController,
} = require("../controllers/authController");

const router = express.Router();

router.post("/login", LoginController);
router.post("/register", RegisterController);

module.exports = router;
