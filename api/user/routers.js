const express = require("express");
const User = require("../../models/User");
const { login } = require("./controller");
const passport = require("passport");
const router = express.Router();

router.post("/", passport.authenticate("local", { session: false }, login));
