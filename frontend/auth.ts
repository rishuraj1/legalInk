import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { comparePassword } from "./lib/utils";
import { loginFunction } from "./actions/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/auth",
    signOut: "/",
  },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (account?.provider === "google") {
        try {
          // const existingUser = await User.findOne({ email: profile?.email });

          // if (!existingUser) {
          //   // Create a new user
          //   const newUser = await User.create({
          //     email: profile?.email as string,
          //     name: profile?.name as string,
          //     image: profile?.picture as string,
          //     providerId: user?.id as string,
          //   });
          //   // Set token.id to the newly created user's _id
          //   user.id = String(newUser._id);
          // } else {
          //   // Update existing user's data if needed
          //   const updates: Partial<typeof existingUser> = {};
          //   if (!existingUser.image) updates.image = profile?.picture as string;
          //   if (!existingUser.providerId)
          //     updates.providerId = user?.id as string;

          //   if (Object.keys(updates).length > 0) {
          //     await User.updateOne(
          //       { email: profile?.email as string },
          //       updates
          //     );
          //   }
          //   user.id = String(existingUser._id);
          // }
          // return true;

          const user = await loginFunction(profile);
          console.log(user, "user in callback");
        } catch (error) {
          console.error("Error in Google sign-in callback:", error);
          throw new Error("Failed to sign in with Google");
        }
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
