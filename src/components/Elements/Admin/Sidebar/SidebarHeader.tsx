function SidebarHeader({ className, children }: { className: string; children: React.ReactNode }) {
	return <div className={className}>{children}</div>;
	// return <div className="header h-20 bg-slate-700 flex pl-5 items-center uppercase">{children}</div>;
}

function HeaderText({ className, children }: { className: string; children: React.ReactNode }) {
	return <h2 className={className}>{children}</h2>;
}

SidebarHeader.Text = HeaderText;
export default SidebarHeader;
