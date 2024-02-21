function SidebarBody({ className, children }: { className: string; children: React.ReactNode }) {
	return <div className={className}>{children}</div>;
}

function ButtonContainer({ className, children }: { className: string; children: React.ReactNode }) {
	return <div className={className}>{children}</div>;
}

SidebarBody.ButtonContainer = ButtonContainer;
export default SidebarBody;
