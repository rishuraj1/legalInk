import { auth } from "@/auth";
import ArticleEditor from "@/components/article-editor";
import { redirect } from "next/navigation";

export default async function CreatePostPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth");
  }
  return (
    <main className="px-4 py-4 flex-col flex gap-6 justify-around h-full">
      <h1 className="font-semibold text-xl">
        Create a new post
      </h1>
      <ArticleEditor params={{ userId: session?.user?.id ?? "" }} />
    </main>
  );
}
