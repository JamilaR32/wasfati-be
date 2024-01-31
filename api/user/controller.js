const User = require("../../models/User");

const newUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = { newUser, login };
