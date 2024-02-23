import AdminChapterPage from "@/components/Pages/Chapter/Admin/AdminChapterPage";
import axios from "axios";

type ChapterType = {
	idChapter: string;
	mangaId: string;
	judulChapter: string;
	// judulManga: string;
	chapter: number;
	mangaRef: {
		idManga: string;
		mangaTitle: string;
		slug: string;
		deskripsi: string;
		published_at: string;
	};
};

const AdminChapter = async () => {
	const getContent = async () => {
		try {
			const res = await fetch(`${process.env.BASE_URL}/api/chapter?manga=include`, { next: { revalidate: 1 } });

			const data = await res.json();
			return data.data;
		} catch (err) {
			console.error(err);
		}
	};

	const dataChapter = await getContent();

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
