"use client";
import Swal from "sweetalert2";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

/*------------------------Components ---------------------------------*/
import FormLabel from "@/components/Elements/Form/Label";
import FormInput from "@/components/Elements/Form/Input";
import Heading from "@/components/Elements/Text/Heading";
import FormContainer from "@/components/Elements/Form/FormContainer";
import Container from "@/components/Elements/Container";
import Content from "@/components/Elements/Content";
import Button from "@/components/Elements/Button/Buttons/Button";
import ButtonLink from "@/components/Elements/Button/Link/NavigationLink";
/*--------------------------------------------------------------------- */
/*------------------------ Functions ---------------------------------*/
/*--------------------------------------------------------------------- */
const Register = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const registrationForm = async (formData: FormData) => {
		// setIsLoading(true);
		const { username, email, password, confirm_password } = Object.fromEntries(formData.entries()) as {
			username: string;
			email: string;
			password: string;
			confirm_password: string;
		};

		if (password.length < 8) {
			Swal.fire({
				icon: "warning",
				title: "Password Terlalu Pendek",
				text: "Password harus lebih dari 8 karakter!",
			}).then(() => {
				setIsLoading(false);
			});
		} else {
			if (password !== confirm_password) {
				Swal.fire({
					icon: "error",
					title: "Password Tidak sama...",
					text: "Coba cek password dan konfirmasi password!",
				}).then(() => {
					setIsLoading(false);
				});
			} else {
				try {
					const res = await fetch("/api/auth/register", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							username,
							email,
							password,
						}),
					});

					const { message } = await res.json();

					if (res.status === 200) {
						Swal.fire({
							icon: "success",
							title: "Akun Berhasil Didaftarkan",
							text: message,
						}).then(() => {
							redirect("/login");
						});
					} else {
						throw new Error(message);
					}
				} catch (error) {
					Swal.fire({
						icon: "error",
						title: "Akun Gagal Didaftarkan",
						text: error instanceof Error ? error.message : "Error",
					}).then(() => {
						setIsLoading(false);
					});
				}
			}
		}
	};

	const renderInput = (id: string, label: string, placeholder: string, type: string) => (
		<Content id={id}>
			<FormLabel labelFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
				{label}
			</FormLabel>
			<FormInput
				type={type}
				name={id}
				id={id}
				className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder={placeholder}
				required
			/>
		</Content>
	);

	return (
		<Container className="dark w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<Content className="p-6 space-y-4 md:space-y-6 sm:p-8">
				<Heading level={1} className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					Daftar Akun Baru
				</Heading>
				<FormContainer action={registrationForm} onSubmit={() => setIsLoading(true)} className="space-y-4 md:space-y-6">
					{renderInput("username", "Username", "someone", "text")}
					{renderInput("email", "Your Email", "name@company.com", "email")}
					{renderInput("password", "Your Password", "••••••••", "password")}
					{renderInput("confirm_password", "Konfirmasi Password", "••••••••", "password")}
					<Button
						type="submit"
						disabled={isLoading}
						className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						{isLoading ? "Loading..." : "Daftar"}
					</Button>
					<Content className="text-sm font-light text-gray-500 dark:text-gray-400">
						Sudah Punya Akun?{" "}
						<ButtonLink href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
							<Heading level={3}>Masuk</Heading>
						</ButtonLink>
					</Content>
				</FormContainer>
			</Content>
		</Container>
	);
};

export default Register;
