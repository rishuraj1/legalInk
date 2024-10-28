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
  initials = "UG",
}: {
  src?: string;
  initials?: string;
}) {
  return (
    <Avatar>
      <AvatarImage src={src} alt="User" />
      <AvatarFallback>{initials}</AvatarFallback>
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar src={user?.image as string} initials={initials} />
      </DropdownMenuTrigger>
      {!user ? (
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Link href="/auth/signup">Sign Up</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            <Link href="/auth/login">Log In</Link>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent>
          <DropdownMenuLabel>My Profile</DropdownMenuLabel>
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
