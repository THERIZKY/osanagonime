import prisma from "./prisma";

export const getAllChapter = async () => {
    const data = prisma.chapter.findMany();

    return data;
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
