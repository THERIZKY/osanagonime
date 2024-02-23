import AddChapterPage from "@/components/Pages/Chapter/Admin/AddChapterPage";
import EditChapterPage from "@/components/Pages/Chapter/Admin/EditChapterPage";
import { notFound } from "next/navigation";

interface interfaceChapterPage {
	params: {
		type: string;
	};
}

const HandlerChapterPage = ({ params }: interfaceChapterPage) => {
	const { type } = params;

	switch (type[0]) {
		case "add":
			return <AddChapterPage />;
		case "edit":
			return <EditChapterPage idChapter={type[1]} />;
		default:
			return notFound();
	}
};

export default HandlerChapterPage;
