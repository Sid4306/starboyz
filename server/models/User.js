const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // null for Google accounts
  provider: { type: String, default: "local" },
  googleId: { type: String },
  profilePic: { type: String }
});

module.exports = mongoose.model("User", userSchema);
