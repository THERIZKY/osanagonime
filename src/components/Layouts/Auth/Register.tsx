"use client";

import { motion, steps } from "framer-motion";
import { Button, Card, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

const Register = ({ action }: any) => {
    const [state, formAction] = useFormState(action, null) as any;
    const status = useFormStatus();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "linear" }}
        >
            <Card className="w-[25rem] h-auto p-5">
                <div className="w-full h-full flex flex-col items-center px-5 ">
                    <h1 className="pt-5 text-3xl">Register</h1>
                    <form action={formAction} method="post" className="w-full h-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full h-full flex flex-col justify-center gap-5 "
                        >
                            <Input isRequired type="text" name="email" label="Email" />
                            {state?.error?.email && (
                                <p className="text-medium text-red-400">{state?.error?.email}</p>
                            )}
                            <Input isRequired type="username" name="username" label="Username" />
                            {state?.error.username && (
                                <p className="text-medium text-red-400">{state?.error.username}</p>
                            )}
                            <Input isRequired type="password" name="password" label="Password" />
                            {state?.error.password && (
                                <p className="text-medium text-red-400">{state?.error.password}</p>
                            )}
                            <Input
                                isRequired
                                type="password"
                                name="confirm_password"
                                label="Konfirmasi Password"
                            />
                            {state?.error.confirm_password && (
                                <p className="text-medium text-red-400">
                                    {state?.error.confirm_password}
                                </p>
                            )}
                            <Button disabled={status.pending} type="submit" color="primary">
                                {status.pending ? "Loading..." : "Register"}
                            </Button>
                            <div className="w-full flex justify-center items-center">
                                <h1>
                                    Sudah Punya Akun?{" "}
                                    <Link href="/login" className="text-blue-500 ">
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
