import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from '../utils/aws.js';
import { v4 } from 'uuid';

const uploadToS3 = async (req, res) => {
    try {
        const file = req.file;
        console.log(file);
        if (!file) {
            console.log("No file uploaded");
            return res.status(400).json({ message: "No file uploaded" });
        }
        const fileName = `${v4()}-${file.originalname}`;
        const params = {
            Bucket: process.env.AWS_S3_BUCKET,
            Key: fileName,
            Body: file.buffer,
            ContentType: file.mimetype,
        }
        console.log(params);

        const data = await s3Client.send(new PutObjectCommand(params));
        console.log(data);
        const s3Url = `${process.env.CLOUDFRONT_DOMAIN}/${params?.Key}`;
        console.log(s3Url);
        res.status(200).json({ message: "File uploaded successfully", s3Url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { uploadToS3 }