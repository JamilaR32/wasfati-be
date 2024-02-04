const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const recipeRouter = require("./api/recipe/routers");
const connectDB = require("./database");
const userRouter = require("./api/user/routers");
const passport = require("passport");
const localStrategy = require("./middlewares/passport");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(passport.initialize());
passport.use("local", localStrategy);
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/recipe", recipeRouter);
app.use(userRouter);

const PORT = 8001;
connectDB();

app.listen(PORT, () => {
  console.log(`The application is running on localhost${PORT}`);
});
