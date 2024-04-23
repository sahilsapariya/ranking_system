const express = require("express");
const { protect } = require("../middlewares/authMiddleware");

const {
  LoginController,
  RegisterController,
} = require("../controllers/authController");
const {
  AddResultController,
  GetResultController,
} = require("../controllers/resultController");
const formidable = require("express-formidable");

const router = express.Router();
router.use(formidable());

router.post("/login", LoginController);
router.post("/register", RegisterController);
router.post("/addresult", protect, AddResultController);
router.get("/getresult", protect, GetResultController);

module.exports = router;
