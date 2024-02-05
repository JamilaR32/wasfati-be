const express = require("express");
const User = require("../../models/User");
const { login, signUp, getAllUsers, getMyProfile } = require("./controller");
const passport = require("passport");
const router = express.Router();

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  login
);

router.post("/signup", signUp);

router.get("/users", getAllUsers);
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  getMyProfile
);


module.exports = router;
