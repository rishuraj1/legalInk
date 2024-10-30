"use server";

import { signIn } from "@/auth";
import connectDb from "@/lib/db";
import { hashPassword } from "@/lib/utils";
import { User } from "@/models/user.model";
import { CredentialsSignin } from "next-auth";

const registerUser = async (email: string, password: string, name: string) => {
  console.log(email, password, name);
  try {
    await connectDb();
    const existingUser = await User.findOne({ email });
    console.log(existingUser, "user already exists");
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPw = await hashPassword(password);
    const newUser = await User.create({
      email,
      password: hashedPw,
      name,
    });
    console.log(newUser);
  } catch (error) {
    const err = error as Error;
    return err.message;
  }
};

const loginUser = async (email: string, password: string) => {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    const err = error as CredentialsSignin;
    console.log(err);
    return err.cause;
  }
};

const googleLogin = async () => {
  await signIn("google");
};

export { registerUser, loginUser, googleLogin };
