import { Fragment } from "react";
import Sidebar from "@/components/Layouts/Sidebar";
import AdminContainer from "@/components/Templates/Admin/AdminContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Admin Osanago || OsanagoManga",
	description: "Halaman Admin Osanago",
};

function AdminLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<Fragment>
			<Sidebar />
			<AdminContainer>{children}</AdminContainer>
		</Fragment>
	);
}

export default AdminLayout;
