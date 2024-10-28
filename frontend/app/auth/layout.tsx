import ToggleTheme from "@/components/toggle-theme";
import Image from "next/image";

const Layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans relative min-h-screen w-full flex">
      <div className="w-1/2 h-screen relative">
        <Image
          src={"/assets/Images/signup.jpg"}
          alt="Login"
          layout="fill"
          objectFit="cover"
          className="p-10 pr-2"
          loading="lazy"
        />
      </div>

      {/* Right section with centered content */}
      <div className="w-1/2 flex justify-center items-center p-10 pl-2 rounded-md">
        {children}
      </div>

      {/* Toggle theme button */}
      <div className="absolute left-7 bottom-9">
        <ToggleTheme />
      </div>
    </main>
  );
};

export default Layout;
