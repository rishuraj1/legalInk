import ArticleCard from "@/components/article-card";
import HeroSection from "@/components/hero-section";
import { Article } from "@/types";

type searchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: searchParams }) {
  const searchParams = await props.searchParams;
  const query = searchParams.query as string;
  console.log(query);
  // const articles = await getAllPublishedArticles();
  const articles: Article[] = [];
  return (
    <main className="p-4 flex-col flex gap-6 justify-around items-center h-full">
      <HeroSection />
      <h2 className="text-2xl font-bold">All Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles?.length > 0 &&
          articles?.map((article: Article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
      </div>
    </main>
  );
}
