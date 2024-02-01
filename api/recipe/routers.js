const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/multer");
const { getAllRecipes, createRecipe } = require("./controller");
const { createIngrediant } = require("../ingrediants/controller");

router.get("/", getAllRecipes);
router.post("/", upload.single("image"), createRecipe);
router.post("/", createIngrediant);
module.exports = router;
