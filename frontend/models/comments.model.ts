import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    replies: [this], // Recursive reference for nested comments
  },
  { timestamps: true },
);

export const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
