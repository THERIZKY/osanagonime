import prisma from "../../../prisma/prisma";

/*-------------------Get Data---------------------- */
export const getAllManga = async () => {
    const data = await prisma.manga.findMany();

    return data;
};

/*------------------------------------------------ */

/*-------------------Post Data--------------------- */
/*------------------------------------------------ */
