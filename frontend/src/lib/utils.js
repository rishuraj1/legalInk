import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const links = [
  { href: "/home", icon: "House", label: "Dashboard" },
  { href: "/dictionary", icon: "Book", label: "Legal Dictionary" },
  { href: "/library", icon: "LibraryBig", label: "Library" },
  { href: "/legal-queries", icon: "Scale", label: "Legal Queries" },
  { href: "/network", icon: "Users", label: "Network" },
];
