import BrandLogo from "@/components/brand-logo";
import Link from "next/link";
import SearchInput from "@/components/search-input";
import ToggleTheme from "@/components/toggle-theme";
import { UserButton } from "./user-button";

const routes = [
  { name: "Home", href: "/" },
  { name: "Library", href: "/library" },
  { name: "Dictionary", href: "/dictionary" },
  { name: "Network", href: "/network" },
  { name: "About", href: "/about" },
];

export default function NavBar() {
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
            <span className="font-normal leading-8">{route?.name}</span>
          </Link>
        ))}
      </nav>
      <div className="flex gap-2 items-center w-1/3 justify-end">
        <SearchInput />
        <UserButton />
        <ToggleTheme />
      </div>
    </header>
  );
}
