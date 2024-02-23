import Card from "@/components/Elements/Card/Card";
import { getAllManga } from "@/utils/mysql/get/services";
import Link from "next/link";

// Interface
interface interfaceDataManga {
	mangaTitle: string;
	deskripsi: string;
	slug: string;
	cover: string;
}

export default async function MangaList() {
	let dataManga: interfaceDataManga[] = [];
	try {
		dataManga = await getAllManga();
	} catch (error) {
		console.error(error);
	}
	return (
		<div>
			<div className="cards flex flex-col md:flex-row items-center md:items-start gap-5 min-h-screen p-5">
				{dataManga.map(({ mangaTitle, deskripsi, slug, cover }: interfaceDataManga, index: number) => (
					<Link href={"/manga/" + slug}>
						<Card key={index}>
							<Card.header image={cover} />
							<Card.body title={mangaTitle} description={deskripsi} />
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
