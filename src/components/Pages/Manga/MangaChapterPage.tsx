import Image from "next/image";
const MangaChapterPage = ({ dataChapter }: any) => {
	console.log(dataChapter);
	const dataImage = `https://i.postimg.cc/KzhmgSTp/001.jpg
https://i.postimg.cc/Dy030yDy/002.jpg
https://i.postimg.cc/HnZGzfJg/003.jpg
https://i.postimg.cc/NMDZGWkH/004.png
https://i.postimg.cc/mrxvm3rt/005.jpg
https://i.postimg.cc/mrQ0JccV/006.jpg
https://i.postimg.cc/VLhQCPQ9/007.jpg
https://i.postimg.cc/HWBCT76h/008.jpg
https://i.postimg.cc/nhQ8KSpy/009.jpg
https://i.postimg.cc/0QPLs8Dv/010.jpg
https://i.postimg.cc/wxWnCYvK/011.jpg
https://i.postimg.cc/MGbFth4F/012.jpg
https://i.postimg.cc/wT7nH4y1/013.jpg
https://i.postimg.cc/W4PyG29Z/014.jpg
https://i.postimg.cc/yYttNhcv/015.jpg
https://i.postimg.cc/3RtbQ23j/016.jpg
https://i.postimg.cc/WzKWhjFh/017.jpg
https://i.postimg.cc/gJzB7gbk/018.jpg
https://i.postimg.cc/BnFyP8Cs/019.jpg
https://i.postimg.cc/SQttZLTk/020.jpg`;

	const ImageList = dataImage.split("\n");
	return (
		<>
			<div className="w-full bg-slate-700 flex flex-col items-center justify-center">Chapter</div>
			<h1 className="text-white">Testing Chapter Pages</h1>
			<div className="w-full flex flex-col items-center">
				{ImageList &&
					ImageList.map((item: any, index: number) => {
						return <Image key={index} src={item} width={1500} height={1500} alt="image" className="object-cover" />;
					})}
			</div>
		</>
	);
};

export default MangaChapterPage;
