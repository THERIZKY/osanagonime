"use server";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

export const registrationForm = async (formData: FormData, callback: Function) => {
	callback(true);
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
			callback(false);
		});
	} else {
		if (password !== confirm_password) {
			Swal.fire({
				icon: "error",
				title: "Password Tidak sama...",
				text: "Coba cek password dan konfirmasi password!",
			}).then(() => {
				callback(false);
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
					callback(false);
				});
			}
		}
	}
};
