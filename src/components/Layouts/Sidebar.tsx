const Sidebar = () => {
	return (
		<div className="sidebar h-screen w-[20rem] bg-blue-600 fixed">
			<div className="header h-20 bg-blue-700 flex pl-5 items-center uppercase">
				<h2 className="text-white">Projects</h2>
			</div>
			<div className="nav-link flex flex-col gap-5 items-center">
				<h3>Manga</h3>
				<h3>Anime</h3>
				<h3>Movie</h3>
			</div>
		</div>
	);
};

export default Sidebar;
