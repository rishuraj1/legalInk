import { cn } from "@/lib/utils";
import Image from "next/image";

import logo from "@/assets/images/logo.png";

export const BrandLogo = ({
  isButton = false,
  size = "icon",
  nameDown = false,
}) => {
  return (
    <div
      className={cn(
        `${nameDown ? "flex flex-col items-center" : "flex items-center"}`,
        { "cursor-pointer": isButton },
      )}
    >
      <Image
        src={logo}
        alt="Sureshot"
        className="w-[40px] h-[40px] object-cover"
      />
      <span className="text-xl font-semibold ml-2">Sureshot</span>
    </div>
  );
};
