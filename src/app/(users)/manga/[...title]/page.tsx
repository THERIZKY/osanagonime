"use client";
import MangaChapterPage from "@/components/Pages/Manga/MangaChapterPage";
import MangaDetailPage from "@/components/Pages/Manga/MangaDetailPage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MangaPage({ params }: { params: { title: string } }) {
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

			const findedItem = ChapterData.find((dataItem: any) => dataItem.mangaRef.slug === params.title[0]);

			setDataChapter(findedItem);
		};
		getAllChapter();
	}, [params.title]);

	if (params.title[1]) {
		return <MangaChapterPage dataChapter={dataChapter} />;
	} else {
		return <MangaDetailPage />;
	}
}
