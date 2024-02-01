const { getAllIngrediants } = require("./controller");
const express = require("express");
const router = express.Router();

router.get("/", getAllIngrediants);

module.exports = router;
