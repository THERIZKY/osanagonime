import { Fragment } from "react";

export default function AdminLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <Fragment>
            <div className="w-full min-h-screen ">{children}</div>
        </Fragment>
    );
}
