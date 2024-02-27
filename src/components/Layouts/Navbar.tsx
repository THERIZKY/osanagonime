"use client";
import Image from "next/image";
import ButtonLink from "../Elements/Button/Link/NavigationLink";
import Heading from "../Elements/Text/Heading";
import FormContainer from "../Elements/Form/FormContainer";
import FormInput from "../Elements/Form/Input";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="flex justify-between items-center relative h-[4rem]">
			<div className="flex-none">
				<ButtonLink href="/" className="btn btn-ghost text-base md:text-xl">
					<Heading level={1}>OsanagoManga</Heading>
				</ButtonLink>
			</div>

			{/* Hamburger Togle */}
			<div className="z-20 md:hidden">
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</div>

			<div
				className={`absolute flex right-0 z-10 w-full bg-slate-800/80 h-screen flex-col flex-none top-0 justify-center gap-10 items-center transform ${isOpen ? "translate-x-0" : "translate-x-full"}  overflow-hidden md:translate-x-0 md:static md:flex-row md:bg-base-100 md:top-0 md:w-auto md:flex-1 md:h-full md:flex md:justify-end md:items-center md:gap-2 transition-all duration-200`}
			>
				<ul className="gap-5 w-full flex flex-col items-center md:flex md:flex-row">
					<li>
						<Link href={"/manga"} className="btn btn-wide btn-accent md:btn-ghost md:btn-md rounded-btn">
							<h1>All Manga</h1>
						</Link>
					</li>
					<li>
						<Link href={"/manga/genre"} className="btn btn-wide btn-accent md:btn-ghost md:btn-md rounded-btn">
							<h1>Genre Manga</h1>
						</Link>
					</li>
				</ul>
				{/* Ini Pengganti Profil Disitu */}
				<button className="btn btn-wide btn-accent md:hidden" onClick={() => signOut()}>
					Log Out
				</button>
				<FormContainer className="input-groupw-full">
					<FormInput type="text" placeholder="Search" className="input input-bordered w-full md:w-auto" />
				</FormContainer>

				{/* Jangan Dihapus Nanti Dipake Buat User kalo udah login */}
				{/* Kalo Di Mobile Ini gak ada bakal diganti sama button log out*/}

				{/* Ini Gak Kepake */}
				<div className="hidden md:dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</div>
					<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
