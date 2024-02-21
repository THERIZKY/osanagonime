import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/components/Elements/Loading/Loading";
import { useRouter, usePathname } from "next/navigation";
import { countChapter } from "@/app/serverAction/action1";

const MangaChapterPage = (chapterData: any) => {
	const [image, setImage] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const pathPart = usePathname().split("/").filter(Boolean);
	const chapterBerapa = pathPart[2];

	useEffect(() => {
		const hitungJumlahChapter = async () => {
			const totalChapter = await countChapter(pathPart[1]);
			console.log(totalChapter);
		};

		hitungJumlahChapter();
	}, []);

	useEffect(() => {
		chapterData.image && setImage(chapterData.image.split(" "));
		setTimeout(() => {
			setIsLoading(false);
		}, 1200);
	}, [chapterData]);

	if (isLoading) {
		return (
			<div className="w-full flex flex-col items-center">
				<div className="skeleton w-[90%] items-center h-screen"></div>
			</div>
		);
	}

	return (
		<>
			<div className="w-full flex flex-col items-center">
				{image &&
					image.map((item: string, index: number) => {
						return <Image key={index} src={item} width={1500} height={1500} alt="image" className="object-cover" />;
					})}
			</div>
		</>
	);
};

export default MangaChapterPage;
