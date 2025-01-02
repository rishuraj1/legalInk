const Layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className={`font-work-sans w-full min-h-screen`}>{children}</main>
  );
};

export default Layout;
