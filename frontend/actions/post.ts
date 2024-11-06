"use server";

import { auth } from "@/auth";
import connectDb from "@/lib/db";
import { Article } from "@/models/article.model";
import { User } from "@/models/user.model";

interface NewArticleProps {
  title: string;
  subtitle: string;
  content: string;
}

const createNewArticle = async ({
  title,
  subtitle,
  content,
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
    await Article.create({
      title,
      subtitle,
      content,
      author: userId,
    });
    console.log("Article saved successfully");
  } catch (error) {
    const err = error as Error;
    console.error("Error creating article:", err.message);
    return err.message; // Return error message if something goes wrong
  }
};

export { createNewArticle };
