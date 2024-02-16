"use client";
import MangaChapterPage from "@/components/Pages/Manga/MangaChapterPage";
import MangaDetailPage from "@/components/Pages/Manga/MangaDetailPage";
import { useEffect, useState } from "react";

export default function MangaPage({ params }: { params: { title: string } }) {
	const [dataManga, setDataManga] = useState<any>([]);

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
		};
		getManga();
	}, [params.title]);

	if (params.title[1]) {
		return <MangaChapterPage />;
	} else {
		return <MangaDetailPage {...dataManga} />;
	}
}
