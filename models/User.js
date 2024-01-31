const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

module.exports = model("User", UserSchema);
