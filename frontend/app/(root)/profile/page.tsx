import { getPostsByUserId } from "@/actions/post";
import { auth } from "@/auth";
import { ProfileHeader, UserPosts } from "./components";
import { User } from "next-auth";
import { redirect } from "next/navigation";
import { Article } from "@/types";

export default async function ProfilePage() {
    const user = (await auth())?.user
    if(!user) return redirect("/auth")
    const postsOfThisUser = await getPostsByUserId(user?.id as string)
    return (
        <div className="px-4 py-4 flex-col flex gap-6 justify-around items-center h-full">
            <ProfileHeader user={user as User} />
            <h2 className="text-xl">{user?.name}&apos;s Posts</h2>
            <UserPosts posts={postsOfThisUser as Article[]} />
        </div>
    )
}