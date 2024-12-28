import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { comparePassword } from "./lib/utils";
import { User } from "./models/user.model";
import connectDb from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw new Error("Missing email or password");
        }

        await connectDb();
        const user = await User.findOne({ email }).select("+password");
        console.log(user);
        if (!user) {
          throw new Error("Account not found! Please create an account first.");
        }

        if (!user.password) {
          throw new Error("Login using Google");
        }

        const isValidPw = await comparePassword(
          password as string,
          user.password
        );
        if (!isValidPw) {
          throw new Error("Invalid password");
        }

        const thisUser = {
          email: user.email,
          name: user.name,
          image: user.image,
          id: String(user._id),
          isAdmin: user.isAdmin,
        };
        console.log(thisUser, "this user");
        return thisUser;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
    signOut: "/",
  },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      await connectDb();
      if (account?.provider === "google") {
        try {
          const existingUser = await User.findOne({ email: profile?.email });

          if (!existingUser) {
            // Create a new user
            const newUser = await User.create({
              email: profile?.email as string,
              name: profile?.name as string,
              image: profile?.picture as string,
              providerId: user?.id as string,
            });
            // Set token.id to the newly created user's _id
            user.id = String(newUser._id);
          } else {
            // Update existing user's data if needed
            const updates: Partial<typeof existingUser> = {};
            if (!existingUser.image) updates.image = profile?.picture as string;
            if (!existingUser.providerId)
              updates.providerId = user?.id as string;

            if (Object.keys(updates).length > 0) {
              await User.updateOne(
                { email: profile?.email as string },
                updates
              );
            }
            user.id = String(existingUser._id);
          }
          return true;
        } catch (error) {
          console.error("Error in Google sign-in callback:", error);
          throw new Error("Failed to sign in with Google");
        }
      } else if (account?.provider === "credentials") {
        return true;
      }
      return false;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        console.log(user, "user in jwt");
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
});
