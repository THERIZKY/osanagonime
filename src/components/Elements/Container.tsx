export default function Container({ className, children }: { className?: string; children: React.ReactNode }) {
	return <div className={"w-full h-screen overflow-hidden" + className}>{children}</div>;
}
