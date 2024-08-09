import prisma from "./prisma";

/*-------------------Get Data---------------------- */
export const getAllManga = () => {
    const data = prisma.manga.findMany();
    return data;
};

/*------------------------------------------------ */

/*-------------------Post Data--------------------- */
/*------------------------------------------------ */
