const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./api/user/routers");
const passport = require("passport");
const localStrategy = require("./middlewares/passport");
const connectDB = require("./database");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(passport.initialize());
passport.use("local", localStrategy);

const PORT = 8000;
connectDB();

app.use("/users", userRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});
