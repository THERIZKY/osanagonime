import MangaDetailPage from "@/components/Pages/Manga/Users/MangaDetailPage";
import { notFound } from "next/navigation";
import MangaReadPage from "@/components/Pages/Manga/Users/MangaReadPage";
import { getMangaBySlug } from "@/utils/db/service";
import ProgressPage from "@/components/Pages/onProgressPage";

const mangaFilterPage = async ({
    params,
}: {
    params: { mangas: string[] };
}) => {
    // kondisi Halaman Genre Bukan
    if (params.mangas[0] === "genre") return <ProgressPage />;

    //Pengkondisian Semisal Data Manga Kosong
    const selectedManga = await getMangaBySlug(params.mangas[0]);
    if (!selectedManga) return notFound();

    // Seleksi Page yang nampil
    if (!params.mangas[1]) {
        return <MangaDetailPage dataManga={selectedManga} />;
    } else {
        return (
            <MangaReadPage
                dataManga={selectedManga}
                chapter={Number(params.mangas[1])}
            />
        );
    }
};

export default mangaFilterPage;
