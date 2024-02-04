const Category = require("../../models/Category");
const User = require("../../models/User");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

const createCateqories = async (req, res, next) => {
  try {
    req.body.user = req.user._id;
    const category = await Category.create(req.body);
    await req.user.updateOne({ $push: { category: category.id } });
    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

const editCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    await Category.findByIdAndUpdate(categoryId, req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const deletCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    await Category.findByIdAndDelete(categoryId, req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategories,
  createCateqories,
  editCategory,
  deletCategory,
};
