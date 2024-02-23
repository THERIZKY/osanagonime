import AdminChapterPage from "@/components/Pages/Chapter/Admin/AdminChapterPage";
import { getChapterJoinManga } from "@/utils/mysql/get/services";

type ChapterType = {
	idChapter: number;
	mangaId: number;
	judulChapter: string;
	chapter: number;
	image: string;
	mangaRef: {
		idManga: number;
		mangaTitle: string;
		slug: string;
		cover: string;
		deskripsi: string;
		published_at: string;
	};
};

const AdminChapter = async () => {
	const getContent = async () => {
		try {
			const data = await getChapterJoinManga();
			return data;
		} catch (err) {
			console.error(err);
		}
	};

	const dataChapter: any = await getContent();

	return (
		<section className="dark p-3 sm:p-5">
			<div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
				{/* Start coding here */}
				<div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
					<AdminChapterPage dataChapter={dataChapter} />
				</div>
			</div>
		</section>
	);
};

export default AdminChapter;
