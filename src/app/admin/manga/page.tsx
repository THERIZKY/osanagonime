import { Suspense } from "react";
import Loading from "@/components/Elements/Loading/Loading";
import AdminMangaPage from "@/components/Pages/Manga/Admin/AdminMangaPage";

interface MangaData {
	id: string;
	deskripsi: string;
	idManga: number;
	mangaTitle: string;
	cover: string;
	slug: string;
	type: string;
}

const AdminManga = async () => {
	const res = await fetch(`${process.env.BASE_URL}/api/manga`, {
		method: "GET",
	});

	const dataManga = await res.json();
	return (
		<Suspense fallback={<Loading />}>
			<AdminMangaPage dataManga={dataManga} />
		</Suspense>
	);
};

export default AdminManga;
