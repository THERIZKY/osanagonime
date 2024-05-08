"use client";

import { motion } from "framer-motion";
import { Button, Card, Input } from "@nextui-org/react";
import Link from "next/link";

const Register = ({ action }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "linear" }}
        >
            <Card className="w-[25rem] h-[30rem]">
                <div className="w-full h-full flex flex-col items-center px-5 ">
                    <h1 className="pt-5 text-3xl">Register</h1>
                    <form
                        action={action}
                        method="post"
                        className="w-full h-full"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full h-full flex flex-col justify-center gap-5 "
                        >
                            <Input
                                isRequired
                                type="email"
                                name="email"
                                label="Email"
                            />
                            <Input
                                isRequired
                                type="username"
                                name="username"
                                label="Username"
                            />
                            <Input
                                isRequired
                                type="password"
                                name="password"
                                label="Password"
                            />
                            <Input
                                isRequired
                                type="password"
                                name="confirm_password"
                                label="Konfirmasi Password"
                            />
                            <Button type="submit" color="primary">
                                Daftar
                            </Button>
                            <div className="w-full flex justify-center items-center">
                                <h1>
                                    Sudah Punya Akun?{" "}
                                    <Link
                                        href="/login"
                                        className="text-blue-500 "
                                    >
                                        Login Disini
                                    </Link>
                                </h1>
                            </div>
                        </motion.div>
                    </form>
                </div>
            </Card>
        </motion.div>
    );
};

export default Register;
