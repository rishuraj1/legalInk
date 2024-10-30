import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function CreatePostPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth");
  }
  return (
    <div>
      <h1>Create Post</h1>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <label htmlFor="content">Content</label>
        <textarea id="content"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
