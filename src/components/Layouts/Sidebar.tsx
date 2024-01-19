"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Sidebar = ({ status }: any) => {
	return (
		<>
			<div className="sidebar translate-x-[-100%] h-screen w-[20rem] bg-slate-800 fixed sm:translate-x-[0] transition-all duration-300">
				<div className="header h-20 bg-slate-700 flex pl-5 items-center uppercase">
					<h2 className="text-white">Projects</h2>
				</div>
				<div className="flex flex-col h-[90%] justify-between">
					<div className="nav-link flex flex-col gap-4 items-center pt-8 text-white">
						{/* Manga */}
						<Link
							href={"/admin/manga"}
							className="text-md hover:bg-slate-600 border border-slate-600 w-[96%] py-2 text-center rounded-md font-semibold transition-all duration-300 group"
						>
							<h3 className="group-hover:scale-110 transition-all duration-300">
								Manga
							</h3>
						</Link>

						{/* Chapter */}
						<Link
							href={"/admin/chapter"}
							className="text-md hover:bg-slate-600 border border-slate-600 w-[96%] py-2 text-center rounded-md font-semibold transition-all duration-300 "
						>
							<h3 className="group-hover:scale-110 transition-all duration-300">
								Chapter
							</h3>
						</Link>

						{/* Anime */}
						<Link
							href={"/admin/Anime"}
							className="text-md hover:bg-slate-600 border border-slate-600 w-[96%] py-2 text-center rounded-md font-semibold transition-all duration-300 group"
						>
							<h3 className="group-hover:scale-110 transition-all duration-300">
								Anime
							</h3>
						</Link>

						{/* Movie */}
						<Link
							href={"/admin/Movie"}
							className="text-md hover:bg-slate-600 border border-slate-600 w-[96%] py-2 text-center rounded-md font-semibold transition-all duration-300 group"
						>
							<h3 className="group-hover:scale-110 transition-all duration-300">
								Movie
							</h3>
						</Link>
					</div>
					<div className="flex flex-col items-center text-white">
						{status === "authenticated" ? (
							<button
								type="button"
								onClick={() => signIn()}
								className="text-md hover:bg-slate-600 border border-slate-600 w-[96%] py-2 text-center rounded-md font-semibold transition-all duration-300 group"
							>
								<h3 className="group-hover:scale-110 transition-all duration-300">
									Sign In
								</h3>
							</button>
						) : (
							<button
								type="button"
								onClick={() => signOut()}
								className="text-md hover:bg-slate-600 border border-slate-600 w-[96%] py-2 text-center rounded-md font-semibold transition-all duration-300 group"
							>
								<h3 className="group-hover:scale-110 transition-all duration-300">
									Sign Out
								</h3>
							</button>
						)}
					</div>
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
