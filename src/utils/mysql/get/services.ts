import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/* -------------Get Manga From Database---------------- */
export async function getAllManga() {
	const manga = await prisma.manga.findMany({
		include: {
			Manga_Genre: {
				select: {
					genreRef: true,
				},
			},
		},
	});
	return manga;
}

export async function getMangaById(id: string) {
	const manga = await prisma.manga.findFirst({
		where: {
			idManga: Number(id),
		},
	});

	return manga;
}

export async function getLatestManga() {
	const manga = await prisma.manga.findMany({
		orderBy: {
			published_at: "desc",
		},
		take: 5,
	});

	return manga;
}

export async function getMangaJoinChapter() {
	const manga = await prisma.manga.findMany({
		include: {
			chapters: true,
		},
	});
	return manga;
}

/* ---------------------------------------------------- */

/* -------------Get Chapter From Database---------------- */
export async function getAllChapter() {
	const chapter = await prisma.chapter.findMany();

	return chapter;
}

export async function getChapterByMangaId(id: number) {
	const chapter = await prisma.chapter.findFirst({
		where: {
			mangaId: id,
		},
	});
	return chapter;
}

export async function getChapterByChapterId(id: number) {
	const chapter = await prisma.chapter.findFirst({
		where: {
			idChapter: id,
		},
	});

	return chapter;
}

export async function getLatestChapter() {
	const chapter = await prisma.chapter.findMany({
		orderBy: {
			published_at: "desc",
		},
		take: 5,
	});

	return chapter;
}

export async function getChapterJoinManga(id?: number) {
	if (id) {
		const chapter = await prisma.chapter.findMany({
			include: {
				mangaRef: true,
			},
			where: {
				mangaId: id,
			},
		});
		return chapter;
	} else {
		const chapter = await prisma.chapter.findMany({
			include: {
				mangaRef: true,
			},
		});
		return chapter;
	}
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

	return user;
}
/* ---------------------------------------------------- */
