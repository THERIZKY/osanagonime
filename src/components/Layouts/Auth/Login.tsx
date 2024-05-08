"use client";
import { Button, Card, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";

const Login = ({ params }: any) => {
    const { push } = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const callbackUrl = params?.callbackUrl || "/";
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
                        setIsLoading(false);
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
            <Card className="w-[25rem] h-[30rem]">
                <div className="w-full h-full flex flex-col items-center ">
                    <h1 className="pt-5 text-3xl">Login</h1>
                    <form
                        action=""
                        className="w-full h-full flex flex-col px-5 gap-5 justify-center"
                    >
                        <Input
                            isRequired
                            type="email"
                            name="email"
                            label="Email"
                        />
                        <Input
                            isRequired
                            type="password"
                            name="password"
                            label="Password"
                        />
                        <Button type="submit" color="primary">
                            Login
                        </Button>
                        <div className="w-full flex justify-center">
                            <h1>
                                Belum Punya Akun?{" "}
                                <Link
                                    href="/register"
                                    className="text-blue-500 "
                                >
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
