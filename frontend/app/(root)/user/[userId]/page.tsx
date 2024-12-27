import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function UserPage({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await (params);
    console.log(userId);
    const session = await auth();
    const thisUserId = session?.user?.id;
    console.log(thisUserId);
    if (thisUserId === userId) redirect("/profile");
    console.log(userId);
    return (
        <div>
            <h1>{userId}</h1>
        </div>
    )
}