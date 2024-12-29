import { Article } from "@/types"
import dynamic from "next/dynamic"

const ArticleCard = dynamic(() => import("@/components/article-card"))

interface UserPostsProps {
    posts: Article[]
}

const UserPosts = ({ posts }: UserPostsProps) => {
    if (!posts) return <div className="flex justify-center items-center h-full w-full">No posts found</div>

    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {posts?.map((post) => (
                <ArticleCard key={post?._id} article={post} />
            ))}
        </div>
    )
}

export default UserPosts