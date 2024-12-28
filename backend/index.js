import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import connectDB from './utils/db.js';
const PORT = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
    res.send("LegalInk API");
});

app.listen(PORT, async (req, res) => {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
});