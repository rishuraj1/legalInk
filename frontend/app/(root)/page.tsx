import { getAllPublishedArticles } from "@/actions/post";
import ArticleCard from "@/components/article-card";
import HeroSection from "@/components/hero-section";
import { Article } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = await searchParams.query as string;
  console.log("query", query);
  // const articles = await getAllPublishedArticles();
  const articles = null;
  return (
    <main className="p-4 flex-col flex gap-6 justify-around items-center h-full">
      <HeroSection />
      <h2 className="text-2xl font-bold">All Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles && articles.map((article: Article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </main>
  );
}
