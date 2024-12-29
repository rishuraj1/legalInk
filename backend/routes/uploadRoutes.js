import express from 'express';
import multer from 'multer';
import { uploadToS3 } from '../controllers/uploadController.js';

const upload = multer().single("file");

const router = express.Router();

router.post("/", upload, uploadToS3);

export default router;