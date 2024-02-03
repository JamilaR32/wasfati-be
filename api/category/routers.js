const express = require("express");
const {
  getAllCategories,
  createCateqories,
  editCategory,
  deletCategory,
} = require("./controllers");
const router = express.Router();
const passport = require("passport");

router.get("/", getAllCategories);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createCateqories
);
router.put("/:categoryId", editCategory);
router.delete("/:categoryId", deletCategory);
module.exports = router;
