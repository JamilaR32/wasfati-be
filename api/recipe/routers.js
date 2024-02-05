const express = require("express");
const router = express.Router();

const upload = require("../../middlewares/multer");
const {
  getAllRecipes,
  createRecipe,
  editRecipe,
  deleteRecipe,
  getRecipeById,
} = require("./controller");
const passport = require("passport");

router.get("/", getAllRecipes);
router.get("/:recipeId", getRecipeById);

router.post(
  "/",
  upload.single("image"),
  passport.authenticate("jwt", { session: false }),
  createRecipe
);

router.put(
  "/:recipeId",
  passport.authenticate("jwt", { session: false }),
  editRecipe
);

router.delete(
  "/:recipeId",
  passport.authenticate("jwt", { session: false }),
  deleteRecipe
);
module.exports = router;
