const express = require("express");
const router = express.Router();
const Recipe = require("../../models/Recipe");
const upload = require("../../middlewares/multer");
const {
  getAllRecipes,
  createRecipe,
  createIngrediant,
} = require("./controller");

router.get("/", getAllRecipes);
router.post("/", upload.single("image"), createRecipe);
router.post("/", createIngrediant);
module.exports = router;
