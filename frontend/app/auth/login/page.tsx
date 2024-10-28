import { signIn } from "@/auth";
import BrandLogo from "@/components/brand-logo";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex flex-col relative w-full h-full justify-center items-center rounded-md bg-[#F4F4F5] dark:bg-[#242535]">
      <div className="absolute top-2">
        <BrandLogo />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-[#1E293B] dark:text-[#F9FAFB]">
          Log In
        </h1>
        <p className="text-[#64748B] dark:text-[#9CA3AF]">
          Log in to your account to continue
        </p>
      </div>
      <form className="flex flex-col justify-center items-center">
        <input
          type="email"
          placeholder="Email"
          className="w-80 h-12 p-4 mt-8 mb-4 rounded-md bg-[#FFFFFF] dark:bg-[#1E293B] dark:text-[#F9FAFB]"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-80 h-12 p-4 mb-4 rounded-md bg-[#FFFFFF] dark:bg-[#1E293B] dark:text-[#F9FAFB]"
        />
        <button
          type="submit"
          className="w-80 h-12 mt-4 mb-4 rounded-md bg-[#2563EB] text-[#F9FAFB] dark:bg-[#1E293B] dark:text-[#F9FAFB]"
        >
          Log In
        </button>
        <Separator orientation="horizontal" className="bg-zinc-500" />
      </form>
      <div className="flex pt-2 flex-col justify-center items-center gap-2">
        <form
          className="flex items-center justify-center gap-2"
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <span className="text-[#64748B] dark:text-[#9CA3AF]">
            Or continue with
          </span>
          <button type="submit">
            <Image
              src="/assets/Images/google.png"
              className="w-5 h-5"
              width={10}
              height={10}
              alt="Google"
            />
          </button>
        </form>
      </div>
      <p className="text-[#64748B] dark:text-[#9CA3AF]">
        Don&apos;t have an account?{" "}
        <a href="/auth/signup" className="text-[#2563EB] dark:text-[#60A5FA]">
          Sign Up
        </a>
      </p>
    </main>
  );
}
