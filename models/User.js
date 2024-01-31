const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

module.exports = model("User", UserSchema);
