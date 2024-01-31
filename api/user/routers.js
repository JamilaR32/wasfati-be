const express = require("express");
const newUser = require("./controller");

const router = express.Router();

router.post("/", newUser);
