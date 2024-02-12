"use client";
import Card from "@/components/Elements/Card";
import Navbar from "@/components/Layouts/Navbar";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Interface
interface dataManga {
	mangaTitle: string;
	deskripsi: string;
	slug: string;
	cover: string;
}

export default function MangaList() {
	const [dataManga, setDataManga] = useState<any>([]);
	const searchParams = useSearchParams();

	console.log(searchParams.get("search"));
	const params = searchParams.get("search") || "";

	// Use Effect
	useEffect(() => {
		const getAllManga = async () => {
			const res = await fetch("/api/manga", {
				method: "GET",
				cache: "force-cache",
				next: {
					revalidate: 10,
				},
			});
			const data = await res.json();
			setDataManga(data.data);
		};

		const getSearchManga = async () => {
			const res = await fetch("/api/manga?search=" + params, {
				method: "GET",
				cache: "force-cache",
				next: {
					revalidate: 10,
				},
			});
			const data = await res.json();
			setDataManga(data.data);
		};

		if (params) {
			getSearchManga();
		} else {
			getAllManga();
		}
	}, []);
	return (
		<div>
			{/* <div className="flex h-[3rem] justify-center items-center bg-gray-700">
				<h1>Manga List</h1>
			</div> */}
			<Navbar />
			<div className="cards flex gap-5 justify-center items-center h-screen">
				{dataManga.map(({ mangaTitle, deskripsi, slug, cover }: dataManga, index: number) => (
					<Card key={index}>
						<Card.header image={cover} />
						<Card.body title={mangaTitle} description={deskripsi} />
						<Card.footer slug={slug} />
					</Card>
				))}
			</div>
		</div>
	);
}
