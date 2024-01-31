const express = require("express");
const router = express.Router();
const Recipe = require("../../models/Recipe");
const upload = require("../../middlewares/multer");
const { getAllRecipes, createRecipe } = require("./controller");

router.get("/", getAllRecipes);
router.post("/", upload.single("image"), createRecipe);
module.exports = router;
