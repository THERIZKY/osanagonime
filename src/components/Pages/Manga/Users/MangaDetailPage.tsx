import Image from "next/image";
import Link from "next/link";

const MangaDetailPage = async ({ slug }: any) => {
	// const manga = await getMangaJoinChapter();
	const res = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/manga?chapter=include`, { method: "GET", next: { revalidate: 1 } });

	const mangaJSON = await res.json();
	const manga = mangaJSON.data;

	const findedManga = manga.find((mangaItems: any) => {
		if (mangaItems.slug === slug) {
			return mangaItems;
		}
	});

	const dataManga: any = findedManga;

	const imgUrl = decodeURI(dataManga?.cover);
	return (
		<>
			<div className="pb-4">
				{dataManga && dataManga.chapters && (
					<div className="max-h-full" style={{ backgroundImage: `url(${imgUrl})` }}>
						<div className={`hero min-h-[100%] overflow-hidden bg-slate-800/75`}>
							<div className="hero-content flex-col lg:flex-row">
								<Image width={200} height={200} src={dataManga.cover} className="max-w-sm rounded-lg shadow-2xl" alt="" />
								<div>
									<h1 className="text-5xl font-bold">{dataManga.mangaTitle}</h1>
									<p className="py-6">{dataManga.deskripsi}</p>
								</div>
							</div>
						</div>
						<div className="max-h-[50vh] overflow-y-auto bg-base-100">
							<ul className="menu menu-lg w-full flex gap-4">
								{/* Kalo Manga Nya Gak Punya Chapter */}
								{!dataManga.chapters.length && <h1 className="text-5xl text-center">Masih Belum ada Chapternya bos, sabar yaa👌</h1>}

								{/* Kalo Manga Nya ada chapter */}
								{dataManga.chapters.map((chapter: any, index: any) => (
									<li key={chapter.id}>
										<Link className=" bg-base-100 outline outline-1 outline-base-300" href={`/manga/${dataManga.slug}/${chapter.chapter}`}>
											{index + 1 + ". "}
											{chapter.judulChapter}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default MangaDetailPage;
