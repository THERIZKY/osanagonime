import { redirect } from "next/navigation";
import AddChapterPage from "@/components/Pages/Chapter/Admin/AddChapterPage";
import EditChapterPage from "@/components/Pages/Chapter/Admin/EditChapterPage";

interface HandlerDataMangaProps {
	params: {
		type: string;
	};
}

const HandlerChapterPage = ({ params }: HandlerDataMangaProps) => {
	const { type } = params;

	console.log(type);

	switch (type[0]) {
		case "add":
			return <AddChapterPage />;
		case "edit":
			return <EditChapterPage />;
		default:
			return redirect("/admin/chapter");
	}
};

export default HandlerChapterPage;
