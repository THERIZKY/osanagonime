// Importing Component
import AddDataMangaPage from "@/components/Pages/Manga/Admin/AddMangaPage";
import EditDataMangaPage from "@/components/Pages/Manga/Admin/EditMangaPage";
import { notFound } from "next/navigation";

// Interface
interface HandlerDataMangaProps {
	params: {
		type: string;
	};
}

const HandlerDataManga = ({ params }: HandlerDataMangaProps) => {
	const { type } = params;

	switch (type[0]) {
		case "add":
			return <AddDataMangaPage />;
		case "edit":
			return <EditDataMangaPage id={type[1]} />;
		default:
			return notFound();
	}
};

export default HandlerDataManga;
