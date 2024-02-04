const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, default: "assets/No-image.png" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  category: [{ type: Schema.Types.ObjectId, ref: "Category", required: true }],
  ingrediant: [{ type: Schema.Types.ObjectId, ref: "Ingrediant" }],
});

module.exports = model("Recipe", RecipeSchema);
