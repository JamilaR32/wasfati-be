const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());
const connectDB = require("./database");
const PORT = 8000;
connectDB();

app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});
