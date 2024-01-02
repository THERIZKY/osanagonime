"use client";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "@/components/Layouts/Sidebar";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

interface sessionInterface {
	user: {
		name: string;
		email: string;
		role: string;
	};
}

export default function AdminLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	const {
		data: session,
		status,
	}: { data: sessionInterface | any; status: string } = useSession();

	// AOS init
	useEffect(() => {
		AOS.init();
	}, []);

	// Pengecekan session
	useEffect(() => {
		if (status === "unauthenticated") {
			redirect("/login");
		} else {
			if (session !== undefined && session?.user.role !== "admin") {
				redirect("/");
			}
		}
	}, [session, session?.user.role, status]);

	return (
		<Fragment>
			<Sidebar />
			<div className="w-full min-h-screen sm:pl-[21rem] bg-slate-600">
				{children}
			</div>
		</Fragment>
	);
}
