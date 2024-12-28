import { auth } from "@/auth";
import { LoginForm, RegisterForm } from "@/components/auth-form";
import BrandLogo from "@/components/brand-logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { redirect } from "next/navigation";

export default async function Auth() {
  const session = await auth();
  const user = session?.user;
  if (user) redirect("/");
  return (
    <div className="flex flex-col gap-3 justify-around items-center h-screen">
      <BrandLogo />
      <LoginForm />
    </div>
  );
}
