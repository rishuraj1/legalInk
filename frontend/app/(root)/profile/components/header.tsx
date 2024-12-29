import { getUserDetails } from "@/actions/user";
import { UserAvatar } from "@/components/user-button";
import { getInitials } from "@/lib/utils";
import { User } from "next-auth";
import Socials from "./socials";

interface ProfileHeaderProps {
    user: User;
}

const ProfileHeader = async ({ user }: ProfileHeaderProps) => {
    console.log("User:", user);
    const userDetails = await getUserDetails(user?.id as string)
    console.log("User Details:", userDetails);
    return (
        <div className="flex flex-col items-center w-full dark:bg-[#242535] p-3 rounded-md gap-3">
            <div className="flex items-center justify-center gap-3">
                <UserAvatar size="medium" src={user?.image as string} initials={user && getInitials(user?.name as string)} />
                <span>
                    <h3 className="text-xl font-bold">{user?.name}</h3>
                    {/* TODO: Designation */}
                    <p className="text-gray-400 text-sm">{user?.email}</p>
                </span>
            </div>
            {/* About */}
            <span className="flex justify-center items-center font-sans text-center px-20 font-semibold">
                {userDetails?.bio}
            </span>
            <Socials socials={userDetails?.socials} />
        </div>
    );
}

export default ProfileHeader;