import EditMangaForm from "@/components/Layouts/Admin/editMangaForm";
import Heading from "@/components/Elements/Text/Heading";
import { getMangaById } from "@/utils/mysql/get/services";

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
	const dataManga: any = await getMangaById(id);

	return (
		<>
			<div>
				<Heading level={1} className="text-white text-center text-3xl">
					Edit Data Manga
				</Heading>
				<div className="flex justify-center">
					<EditMangaForm selectedManga={dataManga} id={id} />
				</div>
			</div>
		</>
	);
};

export default EditDataMangaPage;
