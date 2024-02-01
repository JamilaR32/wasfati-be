const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/media", express.static(path.join(__dirname, "media")));

const recipeRouter = require("./api/recipe/routers");
//day3
app.use("/api/recipe", recipeRouter);
const connectDB = require("./database");
const PORT = 8000;
connectDB();

app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});
