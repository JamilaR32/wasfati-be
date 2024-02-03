const express = require("express");
const router = express.Router();

const upload = require("../../middlewares/multer");

const { getAllRecipes, createRecipe, getRecipeByID } = require("./controller");

router.param("_id", async (req, res, next, _id) => {
  const recipe = await Recipe.findById(_id);
  if (!recipe)
    return res
      .status(404)
      .json({ message: "Recipe with this id is not found! " });
  req.recipe = recipe;
  next();
});
=======
const {
  getAllRecipes,
  createRecipe,
  editRecipe,
  deleteRecipe,
} = require("./controller");


router.get("/", getAllRecipes);
router.get("/:_id", getRecipeByID);
router.post("/", upload.single("image"), createRecipe);
router.put("/:recipeId", editRecipe);
router.delete("/:recipeId", deleteRecipe);
module.exports = router;
