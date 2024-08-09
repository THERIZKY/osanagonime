import NavigationBottom from "@/components/Layouts/MangaReadingNavigation/NavigationBottom";
import ImageSlide from "@/components/Layouts/User/MangaImageRead";
import { SelectedChapter } from "@/utils/controller/function";
import { getDetailedChapterForRead } from "@/utils/model/chapterModel";
import { notFound, redirect } from "next/navigation";

const MangaReadPage = async ({
    idManga,
    chapter,
}: {
    idManga?: string;
    chapter?: number;
}) => {
    const maxChapter = 10;

    // Ngambil Gambar Buat ditampilin
    const getChaptersImage = async () => {
        //Buat Pengambilan Data Chapter
        const Chapter = await getDetailedChapterForRead(
            String(idManga),
            Number(chapter)
        );

        return Chapter?.image;
    };

    const testing = SelectedChapter(String(idManga), Number(chapter));

    console.log(testing)

    const image = await getChaptersImage();

    // Pengkodisian Semisal Data Image nya kosong
    if (image) {
        return (
            <>
                <ImageSlide image={image} />
                <NavigationBottom maxChapter={maxChapter} />
            </>
        );
    } else {
        redirect("/manga");
    }
};

export default MangaReadPage;
