import { Article } from "@/types";
import Image from "next/image";

import { getArticleTime } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  console.log("article", article);
  return (
    <div className="flex flex-col gap-2 justify-between p-2 items-center w-full max-w-[392px] max-h-[488px] h-full border dark:border-zinc-800 border-zinc-800/20 rounded-md shadow-sm">
      {/* <div className="flex items-center justify-center w-full h-1/2 border rounded-md dark:bg-zinc-300/10 bg-zinc-300/90"> */}
      {article?.mainImage && (
        <Image
          src={article?.mainImage}
          alt={article?.title}
          width={400}
          height={200}
          className="w-full max-w-[360px] max-h-[240px] h-full rounded-md"
        />
      )}
      {/* </div> */}
      <div className="w-full h-full max-w-[360px] max-h-[200px] gap-3 flex flex-col justify-between">
        <div className="w-full text-justify flex flex-col gap-1">
          <Link href={`/articles/${article?._id}`}>
            <h3 className="text-lg font-semibold dark:text-zinc-300/80 dark:hover:text-zinc-300/100 text-zinc-800/90 hover:text-zinc-800/100 duration-300 ease-in-out">
              {article?.title}
            </h3>
          </Link>
        </div>
        <div className="flex justify-between w-full items-end">
          <Link
            href={`/user/${article?.author?._id}`}
            className="flex gap-1 items-end justify-end"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage
                src={article?.author?.image}
                alt={article?.author?.name}
              />
            </Avatar>
            <span className="font-light text-sm text-zinc-600">
              {article?.author?.name}
            </span>
          </Link>
          <div className="flex gap-4 items-end justify-end">
            <span className="font-light text-sm text-zinc-600">
              {getArticleTime(article?.createdAt)}
            </span>
            <span className="font-light text-sm flex gap-1 items-center justify-center text-zinc-600">
              <EyeIcon className="h-4 w-4" />
              {article?.views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
