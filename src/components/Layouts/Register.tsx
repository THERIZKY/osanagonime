"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
	const { push } = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onRegister = async (e: any) => {
		e.preventDefault();
		setIsLoading(true);

		if (
			e.currentTarget.password.value !==
			e.currentTarget.confirm_password.value
		) {
			Swal.fire({
				icon: "error",
				title: "Password Tidak sama...",
				text: "Coba cek password dan konfirmasi password!",
			}).then(() => {
				setIsLoading(false);
			});
		} else {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: e.currentTarget.email.value,
					password: e.currentTarget.password.value,
				}),
			});

			const { message } = await res.json();
			if (res.status === 200) {
				Swal.fire({
					icon: "success",
					title: "Akun Berhasil Didaftarkan",
					text: message,
				}).then(() => {
					push("/login");
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Akun Gagal Didaftarkan",
					text: message,
				}).then(() => {
					setIsLoading(false);
				});
			}
		}
	};
	return (
		<div className="dark w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					Daftar Akun Baru
				</h1>
				<form
					className="space-y-4 md:space-y-6"
					method="POST"
					onSubmit={onRegister}
				>
					<div id="email">
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
					<div id="password">
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
					<div id="konfirmasiPassword">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Konfirmasi Password
						</label>
						<input
							type="password"
							name="confirm_password"
							id="confirm_password"
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
						{isLoading ? "Loading..." : "Daftar"}
					</button>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Sudah Punya Akun?{" "}
						<Link
							href="/login"
							className="font-medium text-primary-600 hover:underline dark:text-primary-500"
						>
							Masuk
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;
