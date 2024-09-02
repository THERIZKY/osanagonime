import { getUsersByEmail } from "@/utils/model/usersModel";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

interface user {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
}

export const authOptions: NextAuthOptions = {
    secret: "10042005",
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                const user: any = await getUsersByEmail(email);

                console.log(user);
                if (user) {
                    const passwordConfirm = await compare(password, user.password);

                    if (passwordConfirm) {
                        return user;
                    }

                    return null;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            console.log(account);
            if (account?.provider === "credentials") {
                token.email = user.email;
                token.user = user.username;
                token.role = user.role;
            }
            console.log(token);
            return token;
        },

        async session({ session, token }: any) {
            if ("email" in token) {
                session.user.email = token.email;
            }

            if ("username" in token) {
                session.user.username = token.username;
            }

            if ("role" in token) {
                session.user.role = token.role;
            }

            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
