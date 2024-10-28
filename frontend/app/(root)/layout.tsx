import NavBar from "@/components/nav-bar";

const Layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans">
      <NavBar />
      {children}
    </main>
  );
};

export default Layout;
