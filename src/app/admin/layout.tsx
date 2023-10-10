"use client";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AdminLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<Fragment>
			<div className="w-full min-h-screen bg-slate-600">{children}</div>
		</Fragment>
	);
}
