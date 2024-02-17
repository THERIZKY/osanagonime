// Importing Component
import AddDataMangaPage from "@/components/Pages/AddMangaPage";
import EditDataMangaPage from "@/components/Pages/EditMangaPage";
import { redirect } from "next/navigation";

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
			return redirect("/admin/manga");
	}
};

export default HandlerDataManga;
