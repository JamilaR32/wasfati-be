const express = require("express");
const User = require("../../models/User");
const {
  login,
  signUp,
  getCategories,
  createCateqories,
} = require("./controller");
const passport = require("passport");
const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);

router.post("/signup", signUp);

//category
router.get("/", getCategories);
router.post("/", createCateqories);
module.exports = router;
