import { ExpandSidebar, NavigationLink } from ".";
import { BrandLogo } from "@/components/brand-logo";
import { ModeToggle } from "@/components/toggle-theme";
import { UserAvatar } from "@/components/user-avatar";
import { links } from "@/lib/utils";

export const NavigationBar = () => {
  return (
    <div className="flex items-center justify-between w-full px-2 py-1 bg-primary dark:bg-[#1E1F22]">
      <BrandLogo isButton nameDown />
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          {links?.map((link) => (
            <NavigationLink key={link?.label} {...link} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle size="icon" />
        <UserAvatar />
      </div>
    </div>
  );
};
