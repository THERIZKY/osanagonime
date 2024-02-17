import Image from "next/image";
import Link from "next/link";

const MangaDetailPage = (dataManga: any) => {
	console.log(dataManga.cover);
	return (
		
		<>
			{dataManga && dataManga.chapters && (
				<div className={`max-h-full bg-repeat`} style={{ backgroundImage: `url(${dataManga.cover})` , backgroundRepeat : 'repeat'}}>
					
					<div className={`hero min-h-[100%] overflow-hidden bg-slate-700/80`}>
						<div className="hero-content flex-col lg:flex-row">
							<Image width={200} height={200} src={dataManga.cover} className="max-w-sm rounded-lg shadow-2xl" alt="" />
							<div>
								<h1 className="text-5xl font-bold text-white">{dataManga.mangaTitle}</h1>
								<p className="py-6 text-white">{dataManga.deskripsi}</p>
							</div>
						</div>
					</div>
					<div className="max-h-[50vh] overflow-y-auto bg-base-200">
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
