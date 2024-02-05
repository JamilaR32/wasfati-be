const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Category = require("../../models/Category");
const { json } = require("express");

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
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate("username");

    return res.status(200).json("all users fetched");
  } catch (error) {
    next(error);
  }
};

module.exports = { signUp, login, getAllUsers };
