const Recipe = require("../../models/Recipe");

const getAllRecipes = async (req, res, next) => {
  try {
    const allRecipe = await Recipe.find();
    return res.status(201).json(allRecipe);
  } catch (error) {
    next(error);
  }
};
const createRecipe = async (req, res, next) => {
  try {
    req.body.user = req.user._id;
    if (req.file) {
      req.body.image = req.file.path.replace("\\", "/");
    }
    const recipe = await Recipe.create(req.body);
    return res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};
const editRecipe = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);

    if (recipe.user.equals(req.user._id)) {
      await recipe.updateOne(req.body);
      return res.status(204).end();
    } else {
      return res.status(401).json({ message: "You are not the recipe owner!" });
    }
  } catch (error) {
    next(error);
  }
};
const deleteRecipe = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) return res.status(404).json({ message: "recipe not found" });

    if (recipe.user.equals(req.user._id)) {
      await recipe.deleteOne();
      return res.status(204).end();
    } else {
      return res.status(401).json({ message: "You are not the recipe owner!" });
    }
  } catch (error) {
    next(error);
  }
};
const getRecipeById = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);
    return res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllRecipes,
  createRecipe,
  editRecipe,
  deleteRecipe,
  getRecipeById,
};
