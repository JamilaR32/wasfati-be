const express = require("express");
const {
  getAllCategories,
  createCateqories,
  editCategory,
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
module.exports = router;
