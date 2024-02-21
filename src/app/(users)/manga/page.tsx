"use client";
import Card from "@/components/Elements/Card/Card";
import { useEffect, useState } from "react";

// Interface
interface dataManga {
	mangaTitle: string;
	deskripsi: string;
	slug: string;
	cover: string;
}

export default function MangaList() {
	const [dataManga, setDataManga] = useState<any>([]);

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

			console.log(data);

			setDataManga(data.data);
			console.log(data.data);
		};

		getAllManga();
	}, []);
	return (
		<div>
			<div className="cards flex flex-col md:flex-row gap-5 justify-center items-center min-h-screen">
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
