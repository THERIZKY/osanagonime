import NavigationBottom from "@/components/Layouts/MangaReadingNavigation/NavigationBottom";
import ImageSlide from "@/components/Layouts/User/MangaImageRead";
import { getDetailedChapterForRead } from "@/utils/db/service";
import { notFound, redirect } from "next/navigation";

interface dataMangaProps {
    id: string;
    cover: string;
    deskripsi: string;
    mangaTitle: string;
    genre: string[];
    published_at: string | Date;
    slug: string;
}

const MangaReadPage = async ({
    dataManga,
    chapter,
}: {
    dataManga?: dataMangaProps;
    chapter?: Number;
}) => {
    // Ngambil Gambar Buat ditampilin
    const getChaptersImage = async () => {
        const idManga = dataManga?.id;

        //Buat Pengambilan Data Chapter
        const Chapter = await getDetailedChapterForRead(
            String(idManga),
            Number(chapter)
        );

        return Chapter?.image;
    };

    const maxChapter = 10;

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
        redirect;
    }
};

export default MangaReadPage;
