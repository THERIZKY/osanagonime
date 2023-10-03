export default function Admin() {
	return (
		<>
			<div className="w-screen min-h-screen bg-slate-600">
				<div className="flex justify-center items-center h-screen gap-10">
					<div className="w-[250px] h-[400px] bg-orange-600">
						<h1 className="text-white text-center text-3xl font-bold py-3">
							Anime
						</h1>
					</div>
					<div className="w-[250px] h-[400px] bg-orange-600">
						<h1 className="text-white text-center text-3xl font-bold py-3">
							Manga
						</h1>
					</div>
					<div className="w-[250px] h-[400px] bg-orange-600">
						<h1 className="text-white text-center text-3xl font-bold py-3">
							News
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
