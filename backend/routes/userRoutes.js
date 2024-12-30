import express from "express";
import {
  createUser,
  getArticlesByUserId,
  getUserById,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("LegalInk API/Users");
});

router.get("/:userId", getUserById);
router.get("/:userId/articles", getArticlesByUserId);

export default router;
