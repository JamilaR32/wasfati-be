const express = require("express");
const User = require("../../models/User");
const { login } = require("./controller");
const passport = require("passport");
const router = express.Router();

router.post("/", passport.authenticate("local", { session: false }, login));
const signUp = require("./controller");

const router = express.Router();

router.post("/signup", signUp);

module.exports = router;
