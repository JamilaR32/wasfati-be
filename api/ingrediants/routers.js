const express = require("express");
const { createIngrediant, getAllIngrediants } = require("./controllers");
const router = express.Router();

router.get("/", getAllIngrediants);
router.post("/", createIngrediant);
module.exports = router;
