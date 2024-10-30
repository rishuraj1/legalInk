import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    images: [String],
    likes: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    highlightedWords: [
      {
        word: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Dictionary",
        },
      },
    ],
    status: {
      type: String,
      default: "pending",
      enum: ["draft", "published"],
    },
    approveStatus: {
      type: String,
      default: "pending",
      enum: ["approved", "pending", "rejected"],
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export const Article =
  mongoose.models?.Article || mongoose.model("Article", articleSchema);
