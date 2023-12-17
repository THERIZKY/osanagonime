"use client";

import Link from "next/link";

const Sidebar = () => {
	return (
		<>
			<div className="sidebar translate-x-[-100%] h-screen w-[20rem] bg-slate-800 fixed sm:translate-x-[100%]">
				<div className="header h-20 bg-slate-700 flex pl-5 items-center uppercase">
					<h2 className="text-white">Projects</h2>
				</div>
				<div className="nav-link flex flex-col gap-4 items-center pt-8 text-white">
					<Link
						href={"/admin/manga"}
						className="text-md hover:bg-slate-600 border border-slate-600 w-[96%] py-2 text-center rounded-md font-semibold transition-all duration-300 group"
					>
						<h3 className="group-hover:scale-110 transition-all duration-300">
							Manga
						</h3>
					</Link>
					<Link
						href={"/admin/Anime"}
						className="text-md hover:bg-slate-600 border border-slate-600 w-[96%] py-2 text-center rounded-md font-semibold transition-all duration-300 group"
					>
						<h3 className="group-hover:scale-110 transition-all duration-300">
							Anime
						</h3>
					</Link>
					<Link
						href={"/admin/Movie"}
						className="text-md hover:bg-slate-600 border border-slate-600 w-[96%] py-2 text-center rounded-md font-semibold transition-all duration-300 group"
					>
						<h3 className="group-hover:scale-110 transition-all duration-300">
							Movie
						</h3>
					</Link>
				</div>
			</div>
			<div
				className={`sidebar block w-[20rem] bg-slate-800 fixed sm:hidden `}
			>
				hamburger
			</div>
		</>
	);
};

export default Sidebar;
