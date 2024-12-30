import express from "express";
import {
  createNewArticle,
  getArticleByArticleId,
  getPostsByUserId,
  incrementArticleViews,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("LegalInk API/Posts");
});

// router.get("/:userId", getPostsByUserId)
router.post("/create-post", createNewArticle);
router.get("/:articleId", getArticleByArticleId);
router.put("/:articleId/increase-views", incrementArticleViews);

export default router;
