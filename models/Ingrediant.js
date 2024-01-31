const { model, Schema } = require("mongoose");

const IngSchema = new Schema({
  name: String,
  recipe: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = model("Ingrediant", IngSchema);
