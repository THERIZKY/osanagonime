"use client";
import { countChapter } from "@/app/serverAction/action1";
import MangaChapterPage from "@/components/Pages/Manga/MangaChapterPage";
import MangaDetailPage from "@/components/Pages/Manga/MangaDetailPage";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MangaPage({ params }: { params: { title: string } }) {
	const [dataManga, setDataManga] = useState<any>([]);
	const [totalChapter, setTotalChapter] = useState<number>(0);

	useEffect(() => {
		const getManga = async () => {
			const res = await fetch("/api/manga?chapter=include", {
				method: "GET",
				cache: "no-cache",
				next: {
					revalidate: 5,
				},
			});
			const data = await res.json();
			const mangaData = data.data;

			const findedItem = mangaData.find((dataItem: any) => dataItem.slug === params.title[0]);

			setDataManga(findedItem);

			// Buat Ngitung Jumlah Chapter yang dimiliki manga ini
			setTotalChapter(await countChapter(params.title[0]));
		};
		getManga();
	}, [params.title]);

	if (params.title[1]) {
		return <MangaChapterPage />;
	} else {
		return <MangaDetailPage {...dataManga} totalChapter={totalChapter} />;
	}
}
