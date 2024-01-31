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
    if (req.file) {
      req.body.image = req.file.path;
    }
    const recipe = await Recipe.create(req.body);
    return res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllRecipes, createRecipe };
