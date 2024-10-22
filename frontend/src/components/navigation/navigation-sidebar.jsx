import { links } from "@/lib/utils";
import { ModeToggle } from "@/components/toggle-theme";
import { Separator } from "@/components/ui/separator";
import { NavigationLink, ExpandSidebar } from "@/components/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserAvatar } from "../user-avatar";
import { ActionTooltip } from "../action-tooltip";

export const NavigationSidebar = () => {
  return (
    <div className="space-y-4 flex flex-col items-center h-full justify-between text-primary w-full dark:bg-[#1E1F22] py-3">
      {/* <NavigationAction /> */}
      {/* <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-11 mx-auto" /> */}
      <ScrollArea className="flex items-center flex-col gap-y-4">
        {links?.map((link, index) => (
          <div key={index} className="mb-4">
            <NavigationLink
              label={link?.label}
              href={link?.href}
              icon={link?.icon}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-5 mt-auto flex items-center flex-col gap-y-4">
        <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-11 mx-auto" />
        <div className="flex items-center gap-4">
          <UserAvatar />
        </div>
        <ModeToggle size="icon" />
        <ExpandSidebar />
        {/* <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
            },
          }}
        /> */}
      </div>
    </div>
  );
};
