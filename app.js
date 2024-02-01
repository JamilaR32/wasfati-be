const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const recipeRouter = require("./api/recipe/routers");
const connectDB = require("./database");
const userRouter = require("./api/user/routers");
const categoryRouter = require("./api/category/routers");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middlewares/passport");
const connectDB = require("./database");
const localStrategy = require("./middlewares/passport");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

const PORT = 8000;
connectDB();
//my routes
app.use("/users", userRouter);
app.use("/category", categoryRouter);
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/api/recipe", recipeRouter);
app.use(userRouter);

app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});
