import { auth } from "@/auth";
import ArticleEditor from "@/components/article-editor";
import { redirect } from "next/navigation";

export default async function CreatePostPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth");
  }
  return (
    <main className="px-4 py-2">
      <ArticleEditor params={{ userId: session?.user?.id ?? "" }} />
    </main>
  );
}
