import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const links = [
  { href: "/dashboard", icon: "House", label: "Dashboard" },
  { href: "/courses", icon: "Book", label: "Courses" },
  { href: "/calendar", icon: "Calendar", label: "Calendar" },
  { href: "/messages", icon: "MessageSquare", label: "Messages" },
  { href: "/settings", icon: "Settings", label: "Settings" },
];
