import { getAllManga } from "@/utils/model/mangaModel";
import { getAllChapter } from "../model/chapterModel";

export const SelectedManga = async (slug: string) => {
    const data = await getAllManga();

    const selected = data.find((item) => {
        if (item.slug === slug) {
            return {
                ...item,
            };
        }
    });

    return selected;
};

export const SelectedChapter = async (idManga: string, chapter: number) => {
    const data = await getAllChapter();

    const selected = data.find((item) => {
        if (item.idManga === idManga && item.chapter === chapter) {
            return {
                ...item,
            };
        }
    });

    return selected;
};
