import ToggleTheme from "@/components/toggle-theme";

const Layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans relative min-h-screen w-full flex justify-center items-center">
      {children}
      {/* Toggle theme button */}
      <div className="absolute left-7 bottom-9">
        <ToggleTheme />
      </div>
    </main>
  );
};

export default Layout;
