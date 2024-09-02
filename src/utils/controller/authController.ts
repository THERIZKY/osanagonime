"use server";
import { z } from "zod";
import { hash } from "bcrypt";
import { register } from "../model/usersModel";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

const registerSchema = z
    .object({
        username: z.string().min(3, { message: "Username minimal 3 karakter" }),
        email: z.string().email({ message: "Email tidak valid" }),
        password: z.string().min(8, { message: "Password minimal 8 karakter" }),
        confirm_password: z.string(),
    })
    .refine((data) => data.password === data.confirm_password, {
        message: "Konfirmasi Password harus sama",
        path: ["confirm_password"],
    });

const loginSchema = z.object({
    email: z.string().email({ message: "Email tidak valid" }),
    password: z.string().min(8, { message: "Password minimal 8 karakter" }),
});

export async function registerController(prevState: any, formData: FormData) {
    const registerValidate = registerSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!registerValidate.success) {
        return {
            error: registerValidate.error.flatten().fieldErrors,
        };
    }

    const { username, email, password } = registerValidate.data;
    const hashedPassword = await hash(password, 10);
    const statusRegister = await register({ username, email, password: hashedPassword });
    if (statusRegister.status === "success") {
        redirect("/login");
    }

    return {
        error: statusRegister.message,
    };
}

export const loginController = async (prevState: any, formData: FormData) => {
    const loginValidate = loginSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!loginValidate.success) {
        return {
            error: loginValidate.error.flatten().fieldErrors,
        };
    }

    const { email, password } = loginValidate.data;

    const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: prevState || "/",
    });

    console.log(res);
    if (res?.error === "CredentialsSignin") {
        return {
            error: { email: "Email atau Password salah" },
        };
    }

    // redirect(prevState || "/");
};
