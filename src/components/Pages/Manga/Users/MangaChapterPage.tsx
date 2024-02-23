import NavigationBottom from "@/components/Layouts/NavigationBottom";
import ImageSlide from "@/components/Layouts/User/ImageSlide";
import { notFound } from "next/navigation";

const MangaChapterPage = async ({ slug, chapter }: { slug: string; chapter: string }) => {
	let image: any = [];

	const getImage = async () => {
		try {
			const res = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/chapter?manga=include`, {
				method: "GET",
				next: { revalidate: 1 },
			});

			const data = await res.json();

			const dataChapter = data.data;
			const findedChapter: any = dataChapter.find((chapterItems: any) => {
				if (chapterItems.mangaRef.slug === slug && chapterItems.chapter === Number(chapter)) {
					return chapterItems;
				}
			});

			const imageArray = findedChapter.image.split("\n").filter(Boolean);
			return imageArray;
		} catch (error) {
			console.error(error);
		}
	};

	image = await getImage();
	if (image === undefined) {
		return notFound();
	}

	return (
		<>
			<ImageSlide image={image} />
			<NavigationBottom />
		</>
	);
};

export default MangaChapterPage;
