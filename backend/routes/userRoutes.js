import express from 'express';
import { createUser } from '../controllers/userControllers.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("LegalInk API/Users");
});
router.post("/register", createUser)

export default router;