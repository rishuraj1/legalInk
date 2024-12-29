// import { getCommentsLikesByArticleId } from "@/actions/post";
// import { MessageCircleHeart, ThumbsUpIcon } from "lucide-react";
// import { UserAvatar } from "./user-button";

// const ArticleComments = async ({ articleId }: { articleId: string }) => {
//     const comments = await getCommentsLikesByArticleId(articleId);
//     if (!comments) return (
//         <div className="flex flex-col gap-4 w-full px-20 pt-10">
//             <p className="text-lg text-zinc-800 dark:text-zinc-500">No Comments on this article</p>
//         </div>
//     );
//     return (
//         <div className="flex flex-col gap-4 w-full px-20 pt-10">
//             <div className="flex gap-4 items-end justify-end">
//                 <div className="flex items-center gap-2">
//                     <ThumbsUpIcon size={24} />
//                     <span className="text-lg font-semibold">12</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <MessageCircleHeart size={24} />
//                     <span className="text-lg font-semibold"></span>
//                 </div>
//             </div>
//             <h2 className="text-2xl font-bold">Comments</h2>
//             <div className="flex flex-col gap-4 mt-4">
//                 <div className="flex items-center gap-4">
//                     <UserAvatar initials="UG" size="medium" />
//                     <div className="flex flex-col">
//                         <span className="text-lg font-semibold">User Name</span>
//                         <span className="text-sm text-zinc-700 dark:text-zinc-500">Comment Date</span>
//                     </div>
//                 </div>
//                 <p className="text-lg text-zinc-800 dark:text-zinc-500">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt
//                     tincidunt. Nulla facilisi. Nullam nec turpis
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default ArticleComments;