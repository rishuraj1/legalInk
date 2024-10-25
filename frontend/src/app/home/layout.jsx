import { Header } from "@/components/header";
import { NavigationSidebar } from "@/components/navigation";

const MainLayout = async ({ children }) => {
  return (
    <div className="h-full w-full flex justify-center flex-col">
      <div className="hidden md:flex h-full w-full z-30">
        <Header />
      </div>
      <main className="h-full p-2">{children}</main>
    </div>
  );
};

export default MainLayout;
