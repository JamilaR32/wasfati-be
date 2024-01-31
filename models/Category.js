const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  name: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  recipe: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = model("Category", CategorySchema);
