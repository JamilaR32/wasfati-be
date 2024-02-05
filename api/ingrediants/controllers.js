const Ingrediant = require("../../models/Ingrediant");

const getAllIngrediants = async (req, res, next) => {
  try {
    const ingrediants = await Ingrediant.find();
    return res.status(200).json(ingrediants);
  } catch (error) {
    next(error);
  }
};
const createIngrediant = async (req, res, next) => {
  try {
    const newIngrediant = await Ingrediant.create(req.body);
    return res.status(201).json(newIngrediant);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllIngrediants, createIngrediant };
