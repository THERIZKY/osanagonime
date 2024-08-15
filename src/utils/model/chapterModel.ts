import prisma from "../../../prisma/prisma";

export const getAllChapter = async () => {
    const data = prisma.chapter.findMany();

    return data;
};

export const getDetailedChapterForRead = (id: number, chapterNumber: number) => {
    const dataChapter = prisma.chapter.findFirst({
        where: {
            mangaId: {
                equals: id,
            },
            chapter: {
                equals: chapterNumber,
            },
        },
    });

    return dataChapter;
};
