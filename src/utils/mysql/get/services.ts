import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/* -------------Get Manga From Database---------------- */
export async function getAllManga() {
	const manga = await prisma.manga.findMany();
	// console.log(manga);
	return manga;
}
/* ---------------------------------------------------- */

/* -------------Get Chapter From Database---------------- */
export async function getChapterByMangaId(id: number) {
	const chapter = await prisma.chapter.findFirst({
		where: {
			mangaId: id,
		},
	});

	return chapter;
}
/* ---------------------------------------------------- */

/* -------------Get User From Database---------------- */
export async function getAllUsers() {
	const user = await prisma.users.findMany();
	return user;
}

export async function getUserByEmail(email: string) {
	const user = await prisma.users.findFirst({
		where: {
			email: email,
		},
	});

	console.log(user);

	return user;
}
/* ---------------------------------------------------- */
