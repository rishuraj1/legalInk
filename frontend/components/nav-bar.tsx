import BrandLogo from "@/components/brand-logo";
import Link from "next/link";
import SearchInput from "@/components/search-input";
import ToggleTheme from "@/components/toggle-theme";
import { UserButton } from "./user-button";
import { auth } from "@/auth";
import { Button } from "./ui/button";

const routes = [
  { name: "Home", href: "/" },
  { name: "Library", href: "/library" },
  { name: "Dictionary", href: "/dictionary" },
  { name: "Network", href: "/network" },
  { name: "About", href: "/about" },
];

export default async function NavBar() {
  const session = await auth();
  const user = session?.user;
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <div className="w-1/3">
        <BrandLogo />
      </div>
      <nav className="hidden md:flex gap-5 w-1/3">
        {routes?.map((route) => (
          <Link
            key={route?.href}
            href={route?.href}
            className="ease-in-out duration-75 text-[#3B3C4A] dark:text-[#A1A1AA] hover:text-black dark:hover:text-white"
          >
            <span className="font-semibold leading-8">{route?.name}</span>
          </Link>
        ))}
      </nav>
      <div className="flex gap-2 items-center w-1/3 justify-end">
        {user && (
          <Link href={`/create-post`}>
            <Button
              variant={"default"}
              className="font-semibold text-white bg-blue-700 hover:bg-blue-800 ease-in-out"
            >
              Create Post
            </Button>
          </Link>
        )}
        <SearchInput />
        <UserButton />
        <ToggleTheme />
      </div>
    </header>
  );
}
