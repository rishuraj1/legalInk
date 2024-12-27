"use server";

import { auth } from "@/auth";
import connectDb from "@/lib/db";
import { s3Client } from "@/lib/aws";

import { Article } from "@/models/article.model";
import { User } from "@/models/user.model";
import { Article as articles } from "@/types";
import { PutObjectCommand } from "@aws-sdk/client-s3";

interface NewArticleProps {
  title: string;
  subtitle: string;
  content: string;
  mainImage?: File | null;
}

const createNewArticle = async ({
  title,
  subtitle,
  content,
  mainImage,
}: NewArticleProps) => {
  try {
    const user = await auth();
    if (!user) {
      throw new Error("You need to be logged in to create a post");
    }

    if (!title || !subtitle || !content || content === "<p></p>") {
      throw new Error("All fields are required");
    }

    console.log("content:", content);

    const userId = user?.user?.id;
    console.log("User ID:", userId);
    await connectDb();

    // check if user exists or not
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      throw new Error("User not found");
    }
    console.log("User found:", existingUser);
    console.log("Saving the article to the database...");
    const newArticle = await Article.create({
      title,
      subtitle,
      content,
      author: userId,
    });

    // Upload main image to S3
    if (mainImage) {
      const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET;
      console.log("Bucket name:", bucketName);
      console.log("Uploading image to S3...");

      if (!bucketName) {
        throw new Error("Bucket name is required");
      }

      const buffer = await mainImage.arrayBuffer();
      const params = {
        Bucket: bucketName,
        Key: `articles/${newArticle._id}/${mainImage.name}`,
        Body: Buffer.from(buffer),
        ContentType: mainImage.type,
      };

      const data = await s3Client.send(new PutObjectCommand(params));
      // console.log("Image uploaded to S3:", data);

      if (!data) {
        throw new Error("Image upload failed");
      }
      newArticle.mainImage = `${process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN}/${params.Key}`;
      await newArticle.save();
    }

    console.log("Article saved successfully");
  } catch (error) {
    const err = error as Error;
    console.error("Error creating article:", err.message);
    return err.message; // Return error message if something goes wrong
  }
};

const getPostsByUserId = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }
    await connectDb();
    const posts = await Article.find({
      author: userId,
    })
      .populate("author")
      .sort({ createdAt: -1 });
    return posts;
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching posts:", err.message);
    return err.message; // Return error message if something goes wrong
  }
};

const getArticleById = async (articleId: string) => {
  try {
    if (!articleId) {
      throw new Error("Article ID is required");
    }
    await connectDb();
    const article = await Article.findById(articleId).populate("author");
    return article;
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching article:", err.message);
    return err.message;
  }
};

const getCommentsLikesByArticleId = async (articleId: string) => {
  try {
    if (!articleId) {
      throw new Error("Article ID is required");
    }
    await connectDb();
    const article = await Article.findById(articleId).populate("likes");
    return article;
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching article:", err.message);
    return err.message;
  }
};

const getAllArticles = async (): Promise<articles[] | null> => {
  try {
    await connectDb();
    const articles = await Article.find()
      .populate("author")
      .sort({ createdAt: -1 });
    return articles;
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching articles:", err.message);
    return null;
  }
};

const getAllPublishedArticles = async (): Promise<articles[] | null> => {
  try {
    await connectDb();
    const articles = await Article.find({
      status: "published",
      approveStatus: "approved",
    })
      .populate("author")
      .sort({ createdAt: -1 });
    return articles;
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching published articles:", err.message);
    return null;
  }
};

const increaseArticleViews = async (articleId: string) => {
  try {
    if (!articleId) {
      throw new Error("Article ID is required");
    }
    await connectDb();
    const article = await Article.findById(articleId);
    if (!article) {
      throw new Error("Article not found");
    }
    article.views += 1;
    await article.save();
    console.log("Article views increased:", article.views);
  } catch (error) {
    const err = error as Error;
    console.error("Error increasing article views:", err.message);
    return err.message;
  }
};

const uploadArticleImageToS3 = async (
  file: File,
  fileName: string
): Promise<string> => {
  const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET!;

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
    };

    await s3Client.send(new PutObjectCommand(params));
    // console.log("Successfully uploaded to S3:", data);
    return `${process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN!}/${fileName}`;
  } catch (err) {
    console.error("Error uploading to S3:", err);
    throw err;
  }
};

export {
  createNewArticle,
  getPostsByUserId,
  getArticleById,
  getCommentsLikesByArticleId,
  getAllArticles,
  increaseArticleViews,
  uploadArticleImageToS3,
  getAllPublishedArticles,
};
