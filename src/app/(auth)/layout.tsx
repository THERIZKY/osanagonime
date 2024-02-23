import { Fragment } from "react";
import "animate.css";

export default function AdminLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<Fragment>
			<div className="w-full min-h-screen bg-slate-600 ">{children}</div>
		</Fragment>
	);
}
