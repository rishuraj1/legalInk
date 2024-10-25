import { NavigationBar } from "@/components/navigation";

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-3 bg-primary dark:bg-[#1E1F22]">
      <NavigationBar />
    </div>
  );
};
