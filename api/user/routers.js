const express = require("express");
const User = require("../../models/User");
const { login } = require("./controller");
const signUp = require("./controller");
const passport = require("passport");
const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }, login)
);

router.post("/signup", signUp);

module.exports = router;
