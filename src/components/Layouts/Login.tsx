"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
	const { push } = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const res = await signIn("credentials", {
				redirect: false,
				email: e.currentTarget.email.value,
				password: e.currentTarget.password.value,
				callbackUrl: "/",
			});

			if (!res?.error) {
				Swal.fire({
					title: "Successful!",
					text: "Login berhasil!",
					icon: "success",
				}).then(() => {
					push("/admin");
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
			console.log(err);
			notFound();
		}
	};
	return (
		<div className="dark w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					Sign in to your account
				</h1>
				<form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Your email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="name@company.com"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						{isLoading ? "Loading..." : "Sign in"}
					</button>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Gapunya Akun?{" "}
						<Link
							href="/register"
							className="font-medium text-primary-600 hover:underline dark:text-primary-500"
						>
							Daftar
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
