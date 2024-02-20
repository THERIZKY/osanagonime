import Image from "next/image";
import Link from "next/link";

const MangaDetailPage = (dataManga: any) => {
	console.log(dataManga.cover);
 const imgUrl = decodeURIComponent(dataManga.cover);
 console.log(imgUrl);
	return (
		<>
			{dataManga && dataManga.chapters && (
				<div className="">
					
					
					
					<div className={`hero place-items-stretch min-h-[50%] overflow-hidden`}>
						<Image width={400} height={400} src={dataManga.cover} className="w-full h-full md:max-h-[45rem] lg:max-h-[21rem] object-cover pt-0 mt-0" alt="" />
						<div className="hero-content h-full max-w-full flex-col lg:flex-row bg-slate-800/75 ">
							<Image width={200} height={200} src={dataManga.cover} className="max-w-sm rounded-lg shadow-2xl" alt="" />
							<div>
								<h1 className="text-5xl font-bold">{dataManga.mangaTitle}</h1>
								<p className="py-6">{dataManga.deskripsi}</p>
							</div>
						</div>
					</div>
					<div className="max-h-[50vh] overflow-y-auto bg-slate-800">
						<ul className="menu menu-lg w-full ">
							{/* Kalo Manga Nya Gak Punya Chapter */}
							{!dataManga.chapters.length && <h1 className="text-5xl text-center">Masih Belum ada Chapternya bos, sabar yaa👌</h1>}

							{/* Kalo Manga Nya ada chapter */}
							{dataManga.chapters.map((chapter: any, index: any) => (
								<li key={chapter.id}>
									<Link className=" bg-base-100 " href={`/manga/${dataManga.slug}/${chapter.idChapter}`}>
										{index + 1 + ". "}
										{chapter.judulChapter}
									</Link>
								</li>
							))}
						</ul>
					</div>
				
				</div>
			)}
		</>
	);
};

export default MangaDetailPage;
