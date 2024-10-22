import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const links = [
  { href: "/home", icon: "House", label: "Dashboard" },
  { href: "/dictionary", icon: "Book", label: "Legal Dictionary" },
  { href: "/calendar", icon: "Calendar", label: "Calendar" },
  { href: "/messages", icon: "MessageSquare", label: "Messages" },
  { href: "/settings", icon: "Settings", label: "Settings" },
];
