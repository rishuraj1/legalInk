"use client";

import RichTextEditor from "@/components/editor/rich-text-editor";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import { createNewArticle } from "@/actions/post";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export default function ArticleEditor({
  params,
}: {
  params: { id?: string; userId: string };
}) {
  console.log("ArticleEditor params:", params);

  const { userId } = params;
  // Simulated initial content or fetched content
  const [content, setContent] = useState("Initial content of the blog post");
  const [title, setTitle] = useState(""); // State for title
  const [subtitle, setSubtitle] = useState(""); // State for subtitle

  // Handle content change in the rich text editor
  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    console.log("Updated content:", newContent);
  };

  // Handle title change
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Handle subtitle change
  const handleSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value);
  };

  // Handle form submission (saving the content)
  const handleSubmit = async () => {
    if (!title || !subtitle || !content || content === "<p></p>") {
      toast.error("All fields are required");
    }
    const data = { title, subtitle, content };
    const toastId = toast.loading("Saving article...");
    const error = await createNewArticle(data);
    if (error) {
      toast.error(error, { id: toastId });
    } else {
      toast.success("Article saved successfully", { id: toastId });
      redirect(`/${userId}/articles`);
    }
  };

  return (
    <div>
      <h1>Edit Blog Post</h1>

      {/* Title Input */}
      <Input
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
        className="mb-2"
      />

      {/* Subtitle Input */}
      <Input
        value={subtitle}
        onChange={handleSubtitleChange}
        placeholder="Subtitle"
        className="mb-4"
      />

      {/* Rich Text Editor */}
      <RichTextEditor value={content} onChange={handleContentChange} />

      {/* Save Button */}
      <Button
        className="mt-4 dark:bg-gray-800 dark:hover:bg-gray-700 ease-in-out drop-shadow-md dark:text-cyan-200"
        onClick={handleSubmit}
      >
        Save
      </Button>
    </div>
  );
}
