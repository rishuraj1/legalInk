import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import fallbackImage from "@/assets/images/avatar_fallback.png";
import { ActionTooltip } from "./action-tooltip";

export const UserAvatar = ({ className, src }) => {
  return (
    <ActionTooltip label="User Avatar" align="right" side="right">
      <Avatar className={cn("w-[1.8rem] h-[1.8rem] cursor-pointer", className)}>
        <AvatarImage src={src} alt="User Avatar" />
        <AvatarFallback>
          <Image
            src={fallbackImage}
            alt="Fallback"
            className="w-full h-full object-cover"
          />
        </AvatarFallback>
      </Avatar>
    </ActionTooltip>
  );
};
