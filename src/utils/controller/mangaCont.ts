import { getAllManga } from "@/utils/model/mangaModel";

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
