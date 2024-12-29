import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, default: "" },
  password: { type: String, select: false },
  googleId: { type: String, default: null },
  isAdmin: { type: Boolean, default: false },
  socials: {
    instagram: { type: String, default: "" },
    facebook: { type: String, default: "" },
    twitter: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    github: { type: String, default: "" },
    website: { type: String, default: "" },
    bio: { type: String, default: "" },
  },
  designation: { type: String, default: "" },
  location: { type: String, default: "" },
}, { timestamps: true });

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
