import { auth, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function UserAvatar({
  src = "https://github.com/shadcn.png",
  initials,
  size = "icon",
  className,
}: {
  src?: string;
  initials?: string;
  size?: "icon" | "medium" | "large";
  className?: string;
}) {
  const name = initials
    ? initials
        .split(" ")
        .map((name: string) => name[0])
        .join("")
    : ("UG" as string);
  return (
    <Avatar
      className={`${size === "icon" && "w-10 h-10"} ${className} ${size === "medium" && "w-16 h-16"} ${size === "large" && "w-20 h-20"}`}
    >
      <AvatarImage src={src} alt="User" />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
}

export async function UserButton() {
  const session = await auth();
  const user = session?.user;
  const initials = user?.name
    ? user?.name
        .split(" ")
        .map((name: string) => name[0])
        .join("")
    : ("G" as string);
  console.log(user, "user");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar src={user?.image as string} initials={initials} />
      </DropdownMenuTrigger>
      {!user ? (
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Link href="/auth">Log In/Sign Up</Link>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Link href="/profile">{user?.name}</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit">
                <span>Sign Out</span>
              </button>
            </form>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
