export default function SidebarContainer({ children }: any) {
	return <div className="sidebar translate-x-[-100%] h-screen w-[20rem] bg-slate-800 fixed sm:translate-x-[0] transition-all duration-300">{children}</div>;
}
