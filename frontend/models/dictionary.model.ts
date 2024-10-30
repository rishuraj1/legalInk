import mongoose from "mongoose";

const dictionarySchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
    example: String,
    contributedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["approved", "pending", "rejected"],
    },
  },
  { timestamps: true },
);

export const Dictionary =
  mongoose.models.Dictionary || mongoose.model("Dictionary", dictionarySchema);
