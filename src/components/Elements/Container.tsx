export default function Container({ className, children }: { className?: string; children: React.ReactNode }) {
	return <div className={className || "w-full h-screen overflow-hidden"}>{children}</div>;
}
