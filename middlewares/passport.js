const User = require("../models/User");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const { fromAuthHeaderAsBearerToken } = require("passport-jwt").ExtractJwt;

const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done({ message: "username or password is wrong" });
      }
      const checkPass = await bcrypt.compare(password, user.password);
      if (!checkPass) {
        return done({ message: "username or password is wrong" });
      }
      return done(null, user);
    } catch (error) {
      done(error);
    }
  }
);
const jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWTSECRET,
  },
  async (payload, done) => {
    try {
      const userId = payload._id;
      const user = await User.findById(userId);
      if (!user) return done({ message: "user not found!" });
      if (Date.now() / 1000 > payload.exp) {
        return done({ message: "token expired!" });
      }
      return done(null, user); // req.user = user
    } catch (error) {
      done(error);
    }
  }
);
module.exports = { localStrategy, jwtStrategy };
