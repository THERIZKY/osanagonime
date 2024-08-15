import Cards from "@/components/Elements/Card";
import { getAllManga } from "@/utils/model/mangaModel";

interface dataMangaProps {
    id: number;
    judul: string;
    slug: string;
    deskripsi: string;
    cover: string;
    // genre: string[];
    release: string | Date;
}

export default async function MangaList() {
    //Buat Pengambilan Data manga
    const dataManga: dataMangaProps[] = await getAllManga();

    return (
        <div>
            <div className=" min-h-screen p-5">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                    {dataManga.map((item, index) => (
                        <Cards key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
