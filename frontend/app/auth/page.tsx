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
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
