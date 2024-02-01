const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  name: String,
  text: String,
  image: { type: String, default: "assets/No-image.png" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  ingrediant: [{ type: Schema.Types.ObjectId, ref: "Ingrediant" }],
});

module.exports = model("Recipe", RecipeSchema);
