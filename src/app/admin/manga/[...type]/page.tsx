// Importing Component
import AddDataMangaPage from "@/components/Pages/AddMangaPage";
import EditDataMangaPage from "@/components/Pages/EditMangaPage";

// Interface
interface HandlerDataMangaProps {
	params: {
		type: string;
	};
}

const HandlerDataManga = ({ params }: HandlerDataMangaProps) => {
	const { type } = params;

	if (type[0] === "add") {
		return <AddDataMangaPage />;
	}
	if (type[0] === "edit") {
		return <EditDataMangaPage id={type[1]} />;
	}
};

export default HandlerDataManga;
