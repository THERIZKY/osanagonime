import EditMangaForm from "@/components/Layouts/Admin/editMangaForm";
import Heading from "@/components/Elements/Text/Heading";

interface MangaData {
	data: {
		id: string;
		deskripsi: string;
		idManga: number;
		mangaTitle: string;
		cover: string;
		slug: string;
	};
}

const EditDataMangaPage = async ({ id }: { id: string }) => {
	const res = await fetch(`${process.env.BASE_URL}/api/manga?idManga=` + id, { method: "GET" });

	const selectedManga: MangaData = await res.json();

	return (
		<>
			<div>
				<Heading level={1} className="text-white text-center text-3xl">
					Edit Data Manga
				</Heading>
				<div className="flex justify-center">
					<EditMangaForm selectedManga={selectedManga.data} id={id} />
				</div>
			</div>
		</>
	);
};

export default EditDataMangaPage;
