import Card from "@/components/Elements/Card/Card";
import { getAllManga } from "@/utils/mysql/get/services";
import Link from "next/link";
import Image from "next/image";

// Interface
interface interfaceDataManga {
	mangaTitle: string;
	deskripsi: string;
	slug: string;
	cover: string;
}

export default async function MangaList() {
	let dataManga: interfaceDataManga[] = [];
	try {
		dataManga = await getAllManga();
	} catch (error) {
		console.error(error);
	}
	return (
		<div>
			<div className="cards flex flex-col md:flex-row items-center md:items-start gap-10 min-h-screen p-5">
				{dataManga.map(({ mangaTitle, deskripsi, slug, cover }: interfaceDataManga, index: number) => (
					<Link key={index} href={"/manga/" + slug}>
						<div className="max-w-sm w-52 group rounded">
							<div className="max-w-sm w-52 group rounded overflow-hidden shadow-lg relative">
								<Image className="w-full" src={cover} width={200} height={200} alt="Gambar Kartu" />
								<div className="absolute top-0 left-0 right-0 h-full bg-slate-800/20"></div>
								<div className="absolute flex flex-col justify-center items-center h-full bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 ">
									<div className="font-bold text-xl mb-2">{mangaTitle.slice(0, 25)}...</div>
									<div className="text-sm mb-2">{deskripsi.slice(0, 43)}...</div>
								</div>
							</div>
							<h1 className="text-center group-hover:opacity-0 font-bold mb-2 transition-all">{mangaTitle}</h1>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
