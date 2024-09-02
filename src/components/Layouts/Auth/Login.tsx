"use client";
import { Button, Card, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import { useFormState, useFormStatus } from "react-dom";
import { loginController } from "@/utils/controller/authController";

const Login = ({ params }: any) => {
    const { push } = useRouter();
    const callbackUrl = params?.callbackUrl || "/";
    const [state, formAction] = useFormState(loginController, callbackUrl);

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value,
                callbackUrl,
            });

            if (!res?.error) {
                Swal.fire({
                    title: "Successful!",
                    text: "Login berhasil!",
                    icon: "success",
                }).then(() => {
                    push(callbackUrl);
                });
            } else {
                if (res.error === "CredentialsSignin") {
                    Swal.fire({
                        icon: "error",
                        title: "Email Atau Password Salah",
                        text: "Coba Cek email atau password anda kembali!",
                    }).then(() => {
                        push("/login");
                    });
                }
            }
        } catch (err) {
            console.error(err);
            notFound();
        }
    };

    return (
        <div>
            <Card className="w-[25rem] h-auto p-5">
                <div className="w-full h-full flex flex-col gap-5 items-center ">
                    <h1 className="pt-5 text-3xl">Login</h1>
                    <form
                        action={formAction}
                        method="post"
                        className="w-full h-full flex flex-col px-5 gap-5 justify-center"
                    >
                        <Input isRequired type="email" name="email" label="Email" />
                        {state?.error?.email && (
                            <p className="text-red-400">{state?.error?.email}</p>
                        )}
                        <Input isRequired type="password" name="password" label="Password" />
                        {state?.error?.email && (
                            <p className="text-red-400">{state?.error?.email}</p>
                        )}
                        <Button type="submit" color="primary">
                            Login
                        </Button>
                        <div className="w-full flex justify-center">
                            <h1>
                                Belum Punya Akun?{" "}
                                <Link href="/register" className="text-blue-500 ">
                                    Daftar Disini
                                </Link>
                            </h1>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default Login;
