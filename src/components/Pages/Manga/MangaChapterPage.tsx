import Image from "next/image";
const MangaChapterPage = ({ dataChapter }: any) => {
	console.log(dataChapter);

	const ImageList = dataChapter.image;
	return (
		<>
			<div className="w-full bg-slate-700 flex flex-col items-center justify-center">
				Chapter
			</div>
			<h1 className="text-white">Testing Chapter Pages</h1>
			<div className="w-full flex flex-col items-center bg-white">
				{ImageList &&
					ImageList.map((item: any, index: number) => {
						return (
							<Image
								key={index}
								src={item}
								width={1500}
								height={1500}
								alt="image"
								className="object-cover"
							/>
						);
					})}
			</div>
		</>
	);
};

export default MangaChapterPage;
