import { links } from "@/lib/utils";
import { ModeToggle } from "@/components/toggle-theme";
import { Separator } from "@/components/ui/separator";
import { NavigationLinks } from "./navigation-links";

export const NavigationSidebar = () => {
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
      {/* <NavigationAction /> */}
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-11 mx-auto" />
      <NavigationLinks />
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle size="icon" />
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
