"use client";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "@/components/Layouts/Sidebar";
import AdminContainer from "@/components/Templates/Admin/AdminContainer";

function AdminLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	// AOS init
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<Fragment>
			<Sidebar />
			<AdminContainer>{children}</AdminContainer>
		</Fragment>
	);
}

export default AdminLayout;
