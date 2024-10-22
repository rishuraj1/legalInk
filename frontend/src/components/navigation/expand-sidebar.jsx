import Icon from "@/lib/icon";

export const ExpandSidebar = () => {
  return (
    <button className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors">
      <Icon name="ArrowRight" />
      <span className="sr-only">Expand Sidebar</span>
    </button>
  );
};
