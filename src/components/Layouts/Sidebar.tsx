import Link from "next/link";

const Sidebar = () => {
	return (
		<div className="sidebar h-screen w-[20rem] bg-blue-600 fixed">
			<div className="header h-20 bg-blue-700 flex pl-5 items-center uppercase">
				<h2 className="text-white">Projects</h2>
			</div>
			<div className="nav-link flex flex-col gap-10 items-center pt-8">
				<Link href={"/admin/manga"}>
					<h3>Manga</h3>
				</Link>
				<Link href={"/admin/Anime"}>
					<h3>Anime</h3>
				</Link>
				<Link href={"/admin/Movie"}>
					<h3>Movie</h3>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
