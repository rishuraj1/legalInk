import NavBar from "@/components/nav-bar";
import ToggleTheme from "@/components/toggle-theme";

const Layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans relative min-h-screen w-full">
      <NavBar />
      {children}
      <div className="fixed left-7 bottom-9">
        <ToggleTheme />
      </div>
    </main>
  );
};

export default Layout;
