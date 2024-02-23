import Image from "next/image";
import NavigationBottom from "@/components/Layouts/NavigationBottom";
import { getChapterJoinManga } from "@/utils/mysql/get/services";

const MangaChapterPage = async ({ slug }: any) => {
	const image: string[] = [""];

	try {
		const dataChapter = await getChapterJoinManga();
		dataChapter.filter((chapter: any) => {
			if (chapter.mangaRef.slug === slug) {
				console.log(chapter);
			}
		});
		console.log(dataChapter);
	} catch (error) {
		console.error(error);
	}

	return (
		<>
			<div className="w-full flex flex-col items-center pb-4">
				{image &&
					image.map((item: string, index: number) => {
						return <Image key={index} src={item} width={1500} height={1500} alt="image for read" className="object-cover" />;
					})}
			</div>
			<NavigationBottom />
		</>
	);
};

export default MangaChapterPage;
