import { getArticleTime } from "@/lib/utils";
import { Article } from "@/types";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserAvatar } from "./user-button";

const ArticleContent = ({ article }: { article: Article }) => {
    console.log("Article:", article);
    return (
        <div className="flex flex-col gap-4 mx-20 mt-14">
            <h1 className="text-4xl font-semibold font-sans">{article?.title}</h1>
            <div className="flex items-center gap-2 dark:bg-zinc-900 bg-[#E8E8EA] bg-opacity-65 rounded-md">
                {article?.mainImage && (
                    <Image
                        src={article?.mainImage}
                        alt="Main Image"
                        className="w-full h-64 object-contain rounded-lg border-zinc-500"
                        width={100}
                        height={100}
                    />
                )}
            </div>
            <div className="flex items-center justify-between">
                <Link href={`/user/${article?.author?._id}`} className="flex items-center gap-2">
                    <UserAvatar src={article?.author?.image} initials={article?.author?.name} className="w-9 h-9" />
                    <span className="text-sm text-zinc-700 dark:text-zinc-500 text-ellipsis">{article?.author?.name}</span>
                </Link>
                <div className="flex items-center gap-5">
                    {article?.createdAt && (
                        <span className="text-sm text-zinc-700 dark:text-zinc-500">{getArticleTime(article?.createdAt)}</span>
                    )}
                    <span className="text-sm text-zinc-700 dark:text-zinc-500 flex items-center gap-1">
                        <EyeIcon className="h-4 w-4" />
                        {article?.views}
                    </span>
                </div>
            </div>
            <h2 className="text-lg font-semibold">{article.subtitle}</h2>
            <div
                className="text-lg text-zinc-800 dark:text-zinc-500"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </div>
    )
}

export default ArticleContent;
