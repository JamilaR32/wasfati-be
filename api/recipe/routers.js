const express = require("express");
const router = express.Router();

const upload = require("../../middlewares/multer");
const {
  getAllRecipes,
  createRecipe,
  editRecipe,
  deleteRecipe,
  getRecipeById,
} = require("./controller");

router.get("/", getAllRecipes);
router.get("/:recipeId", getRecipeById);

router.post("/", upload.single("image"), createRecipe);
router.put("/:recipeId", editRecipe);
router.delete("/:recipeId", deleteRecipe);
module.exports = router;
