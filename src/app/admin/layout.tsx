import { Fragment } from "react";
import Sidebar from "@/components/Layouts/Sidebar";
import AdminContainer from "@/components/Templates/Admin/AdminContainer";

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
