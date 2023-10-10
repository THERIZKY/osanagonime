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
	// console.log(params.type);

	if (type === "add") {
		return <AddDataMangaPage />;
	}

	if (type === "edit") {
		return <EditDataMangaPage />;
	}
};

export default HandlerDataManga;
