"use client";
import MangaChapterPage from "@/components/Pages/Manga/MangaChapterPage";
import MangaDetailPage from "@/components/Pages/Manga/MangaDetailPage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MangaPage({ params }: { params: { title: string } }) {
	console.log(params.title);

	const [dataChapter, setDataChapter] = useState<any>([]);
	useEffect(() => {
		const getAllChapter = async () => {
			const res = await fetch("/api/chapter?manga=include", {
				method: "GET",
				cache: "no-cache",
				next: {
					revalidate: 10,
				},
			});
			const data = await res.json();

			const ChapterData = data.data;

			console.log(ChapterData);

			const findedItem = ChapterData.find((dataItem: any) => dataItem.mangaRef.slug === params.title[0]);

			console.log(findedItem);
			setDataChapter(findedItem);
		};
		getAllChapter();
	}, [params.title]);

	if (params.title[1]) {
		console.log(dataChapter);
		return <MangaChapterPage dataChapter={dataChapter} />;
	} else {
		return <MangaDetailPage />;
	}
}
