"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { googleLogin } from "@/actions/user";
import Image from "next/image";

const LoginForm = () => {
  return (
    <Card>
      <CardHeader className="flex justify-center items-center">
        <CardTitle>Login</CardTitle>
        <CardDescription>Login</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form action={googleLogin}>
          <Button type="submit" variant="ghost" className="mr-2">
            Continue with{" "}
            <Image
              src={"/assets/Images/google.png"}
              alt="Google"
              width={21}
              height={21}
            />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// const RegisterForm = () => {
//   // const handleRegister = async (formData: FormData): Promise<void> => {
//   //   const name = formData.get("name") as string;
//   //   const email = formData.get("email") as string;
//   //   const password = formData.get("password") as string;

//   //   if (!name || !email || !password) {
//   //     toast.error("Please fill in all fields");
//   //     return;
//   //   }

//   //   const toastId = toast.loading("Registering...");
//   //   try {
//   //     await registerUser(email, password, name);
//   //     toast.success("Registered successfully! Please Log In now.", {
//   //       id: toastId,
//   //     });
//   //   } catch (error) {
//   //     toast.error(String(error), { id: toastId });
//   //   }
//   // };

//   return (
//     <Card>
//       <CardHeader className="flex justify-center items-center">
//         <CardTitle>Sign Up</CardTitle>
//         <CardDescription>Sign Up now.</CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-2">
//         <form action={handleRegister}>
//           <div className="space-y-1">
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               type="text"
//               name="name"
//               defaultValue=""
//               placeholder="John Doe"
//             />
//           </div>
//           <div className="space-y-1">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               name="email"
//               defaultValue=""
//               placeholder="doeJohn12@example.com"
//             />
//           </div>
//           <div className="space-y-1">
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               type="password"
//               name="password"
//               defaultValue=""
//               placeholder="***********"
//             />
//           </div>
//           <Button type="submit">Sign Up</Button>
//         </form>
//       </CardContent>
//       <CardFooter className="flex items-center justify-center">
//         <form action={googleLogin}>
//           <Button type="submit" variant="ghost" className="mr-2">
//             Continue with{" "}
//             <Image
//               src={"/assets/Images/google.png"}
//               alt="Google"
//               width={21}
//               height={21}
//             />
//           </Button>
//         </form>
//       </CardFooter>
//     </Card>
//   );
// };

export { LoginForm };
