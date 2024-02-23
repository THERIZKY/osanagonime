import MangaChapterPage from "@/components/Pages/Manga/Users/MangaChapterPage";
import MangaDetailPage from "@/components/Pages/Manga/Users/MangaDetailPage";

export default function MangaPage({ params }: { params: { title: string } }) {
	if (params.title[1]) {
		return <MangaChapterPage slug={params.title[0]} chapter={params.title[1]} />;
	} else {
		return <MangaDetailPage slug={params.title[0]} />;
	}
}
