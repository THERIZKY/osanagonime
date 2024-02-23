"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Container from "@/components/Elements/Container";

const NotFound = () => {
	const { back } = useRouter();

	return (
		<Container>
			<div className="flex flex-col justify-center items-center h-screen">
				<h1 className="text-9xl text-white outline-4 outline-red-700">404</h1>
				<h3 className="text-3xl">Page Not Found</h3>
				<p className="pt-10">halaman yang anda cari tidak ditemukan</p>
				<button className="btn btn-ghost btn-wide" onClick={() => back()}>
					Kembali
				</button>
			</div>
		</Container>
	);
};

export default NotFound;
