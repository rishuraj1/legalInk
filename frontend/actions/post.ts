"use server";

import axios from "axios";

import { auth } from "@/auth";
// import connectDb from "@/lib/db";
// import { s3Client } from "@/lib/aws";

// import { Article } from "@/models/article.model";
// import { User } from "@/models/user.model";
// import { Article as articles } from "@/types";
// import { PutObjectCommand } from "@aws-sdk/client-s3";

const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL! || "http://localhost:5000";

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

    // check if user exists or not
    // const existingUser = await User.findById(userId);
    // if (!existingUser) {
    //   throw new Error("User not found");
    // }
    // console.log("User found:", existingUser);
    // console.log("Saving the article to the database...");
    // const newArticle = await Article.create({
    //   title,
    //   subtitle,
    //   content,
    //   author: userId,
    // });

    // // Upload main image to S3
    // if (mainImage) {
    //   const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET;
    //   console.log("Bucket name:", bucketName);
    //   console.log("Uploading image to S3...");

    //   if (!bucketName) {
    //     throw new Error("Bucket name is required");
    //   }

    //   const buffer = await mainImage.arrayBuffer();
    //   const params = {
    //     Bucket: bucketName,
    //     Key: `articles/${newArticle._id}/${mainImage.name}`,
    //     Body: Buffer.from(buffer),
    //     ContentType: mainImage.type,
    //   };

    //   const data = await s3Client.send(new PutObjectCommand(params));
    //   // console.log("Image uploaded to S3:", data);

    //   if (!data) {
    //     throw new Error("Image upload failed");
    //   }
    //   newArticle.mainImage = `${process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN}/${params.Key}`;
    //   await newArticle.save();
    // }

    // console.log("Article saved successfully");

    let mainImageUrl = "";
    if (mainImage) {
      mainImageUrl = await uploadArticleImageToS3(mainImage);
      console.log("Main image uploaded to S3:", mainImageUrl);
    }

    const data = {
      title,
      subtitle,
      content,
      mainImageUrl,
      userId,
    };

    const response = await axios.post(
      `${baseAPIUrl}/api/v1/posts/create-post`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log("Article saved successfully:", response.data);
    return null;
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

    const posts = await axios.get(
      `${baseAPIUrl}/api/v1/users/${userId}/articles`,
    );
    return posts.data;
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching posts:", err.message);
    return err.message;
  }
};

const getArticleById = async (articleId: string) => {
  try {
    if (!articleId) {
      throw new Error("Article ID is required");
    }
    const article = await axios.get(`${baseAPIUrl}/api/v1/posts/${articleId}`);
    return article?.data;
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching article:", err.message);
    return err.message;
  }
};

// const getCommentsLikesByArticleId = async (articleId: string) => {
//   try {
//     if (!articleId) {
//       throw new Error("Article ID is required");
//     }
//     await connectDb();
//     const article = await Article.findById(articleId).populate("likes");
//     return article;
//   } catch (error) {
//     const err = error as Error;
//     console.error("Error fetching article:", err.message);
//     return err.message;
//   }
// };

// const getAllArticles = async (): Promise<articles[] | null> => {
//   try {
//     await connectDb();
//     const articles = await Article.find()
//       .populate("author")
//       .sort({ createdAt: -1 });
//     return articles;
//   } catch (error) {
//     const err = error as Error;
//     console.error("Error fetching articles:", err.message);
//     return null;
//   }
// };

// const getAllPublishedArticles = async (): Promise<articles[] | null> => {
//   try {
//     await connectDb();
//     const articles = await Article.find({
//       status: "published",
//       approveStatus: "approved",
//     })
//       .populate("author")
//       .sort({ createdAt: -1 });
//     return articles;
//   } catch (error) {
//     const err = error as Error;
//     console.error("Error fetching published articles:", err.message);
//     return null;
//   }
// };

const increaseArticleViews = async (articleId: string) => {
  try {
    if (!articleId) {
      throw new Error("Article ID is required");
    }
    await axios.put(`${baseAPIUrl}/api/v1/posts/${articleId}/increase-views`);
  } catch (error) {
    const err = error as Error;
    console.error("Error increasing article views:", err.message);
    return err.message;
  }
};

const uploadArticleImageToS3 = async (
  file: File,
  fileName?: string,
): Promise<string> => {
  try {
    console.log("Uploading image to S3...");
    const formData = new FormData();
    formData.append("file", file);
    if (fileName) formData.append("fileName", fileName);

    console.log("Uploading image to S3...", formData);

    const response = await axios.post(
      `${baseAPIUrl}/api/v1/upload-to-s3`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    console.log("Image uploaded to S3:", response.data.s3Url);
    return response.data.s3Url;
  } catch (err) {
    console.error("Error uploading to S3:", err);
    throw err;
  }
};

export {
  createNewArticle,
  getPostsByUserId,
  getArticleById,
  //   getCommentsLikesByArticleId,
  //   getAllArticles,
  increaseArticleViews,
  uploadArticleImageToS3,
  //   getAllPublishedArticles,
};
