import Link from "next/link";
import Icon from "@/lib/icon";
import { ActionTooltip } from "@/components/action-tooltip";

export const NavigationLink = ({ label, href, icon }) => {
  return (
    <ActionTooltip label={label} align="right" side="right">
      <Link
        href={href}
        className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
      >
        <Icon name={icon} />
        <span className="sr-only">{label}</span>
      </Link>
    </ActionTooltip>
  );
};
