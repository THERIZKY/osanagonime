"use client";
import Card from "@/components/Elements/Card";
import { useEffect, useState } from "react";

export default function MangaList() {
	const [dataManga, setDataManga] = useState<any>([]);
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

		getAllManga();
	}, []);
	return (
		<div>
			<div className="flex h-[3rem] justify-center items-center bg-gray-700">
				<h1>Manga List</h1>
			</div>
			<div className="cards flex gap-5 justify-center items-center h-screen">
				{dataManga.map(
					(
						{
							mangaTitle,
							deskripsi,
							slug,
							cover,
						}: {
							mangaTitle: string;
							deskripsi: string;
							slug: string;
							cover: string;
						},
						index: number,
					) => (
						<Card key={index}>
							<Card.header image={cover} />
							<Card.body
								title={mangaTitle}
								description={deskripsi}
							/>
							<Card.footer slug={slug} />
						</Card>
					),
				)}
			</div>
		</div>
	);
}
