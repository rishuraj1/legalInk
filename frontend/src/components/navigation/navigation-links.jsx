import Link from "next/link";
import Icon from "@/lib/icon";
import { links } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export const NavigationLinks = () => {
  return (
    <ScrollArea className="flex-1 w-full">
      {links?.map((link, index) => (
        <div key={index} className="mb-4">
          <Link
            href={link?.href}
            className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          >
            <Icon name={link?.icon} />
            <span className="sr-only">{link?.label}</span>
          </Link>
        </div>
      ))}
    </ScrollArea>
  );
};
