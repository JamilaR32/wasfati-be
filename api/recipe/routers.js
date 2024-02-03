const express = require("express");
const router = express.Router();
const Recipe = require("../../models/Recipe");
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

router.get("/", getAllRecipes);
router.get("/:_id", getRecipeByID);
router.post("/", upload.single("image"), createRecipe);
module.exports = router;
