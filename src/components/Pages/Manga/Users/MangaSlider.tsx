import NavigationBottom from "@/components/Layouts/ReadMangaNav";
import ImageSlide from "@/components/Layouts/MangaSlider/MangaSlider";
import { getDetailedChapterForRead } from "@/utils/model/chapterModel";
import { notFound, redirect } from "next/navigation";

const MangaReadPage = async ({ idManga, chapter }: { idManga: number; chapter?: number }) => {
    const maxChapter = 10;

    // Ngambil Gambar Buat ditampilin
    const getChaptersImage = async () => {
        //Buat Pengambilan Data Chapter
        const Chapter = await getDetailedChapterForRead(idManga, Number(chapter));

        return Chapter?.image;
    };

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
