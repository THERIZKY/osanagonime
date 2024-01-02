export default function MangaNavigation() {
	return (
		<div>
			<div className="w-full h-[5rem] bg-gray-800">
				<div className="flex h-full gap-5 justify-between items-center px-5">
					<button className="w-[7rem] h-[3rem] bg-white rounded-lg">
						previous
					</button>
					<button className="w-[7rem] h-[3rem] bg-white rounded-lg">
						next
					</button>
				</div>
			</div>
		</div>
	);
}
