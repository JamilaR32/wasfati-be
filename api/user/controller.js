const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashingPass = async (password) => {
  const hashedPass = await bcrypt.hash(password, 10);
  return hashedPass;
};
const generateToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
  };
  const token = jwt.sign(payload, process.env.JWTSECRET, { expiresIn: "5h" });
  return token;
};

const signUp = async (req, res, next) => {
  try {
    const hashedPass = await hashingPass(req.body.password);
    req.body.password = hashedPass;
    const newuser = await User.create(req.body);
    const token = generateToken(newuser);
    return res.status(201).json({ token: token });
  } catch (error) {
    console.log("test");
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    // const user = req.user;
    const token = generateToken(req.user);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const getCategories = async () => {
  try {
  } catch (error) {
    next(error);
  }
};

const createCateqories = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = { signUp, login, getCategories, createCateqories };
