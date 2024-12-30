import { getArticleById, increaseArticleViews } from "@/actions/post";
import ArticleContent from "@/components/article-content";
import { redirect } from "next/navigation";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;

  if (!articleId) {
    return redirect("/not-found");
  }

  await increaseArticleViews(articleId);

  const article = await getArticleById(articleId);
  console.log("Article:", article);
  if (!article) return redirect("/not-found");
  return (
    <div className="px-4 py-4 flex-col flex gap-6 justify-around items-center h-full">
      <ArticleContent article={article} />
      {/* <ArticleComments articleId={articleId} /> */}
    </div>
  );
}
