import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String },
  password: { type: String, select: false },
  googleId: { type: String },
  isAdmin: { type: Boolean, default: false },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
