import { equal } from "assert";
import prisma from "./prisma";

/*-------------------Get Data---------------------- */
export const getAllManga = () => {
    const data = prisma.manga.findMany();
    return data;
};

export const getMangaBySlug = (slug: string) => {
    const dataManga = prisma.manga.findFirst({
        where: {
            slug: slug,
        },
    });

    return dataManga;
};

export const getDetailedChapterForRead = (
    id: string,
    chapterNumber: number
) => {
    const dataChapter = prisma.chapter.findFirst({
        where: {
            idManga: {
                equals: id,
            },
            chapter: {
                equals: chapterNumber,
            },
        },
    });

    return dataChapter;
};

/*------------------------------------------------ */

/*-------------------Post Data--------------------- */
/*------------------------------------------------ */
