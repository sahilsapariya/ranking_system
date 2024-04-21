const express = require("express");
const { protect } = require("../middlewares/authMiddleware");

const {
  LoginController,
  RegisterController,
} = require("../controllers/authController");
const { AddResultController } = require("../controllers/resultController");

const router = express.Router();

router.post("/login", LoginController);
router.post("/register", RegisterController);
router.post("/addresult", protect, AddResultController);

module.exports = router;
