const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
const recipeRouter = require("./api/recipe/routers");

app.use("/api/recipe", recipeRouter);
const connectDB = require("./database");
const PORT = 8000;
connectDB();

app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});
