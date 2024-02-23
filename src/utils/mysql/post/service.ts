import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/* -------------Post Manga To Database---------------- */

export const postManga = async (dataManga: any) => {
	try {
		const manga = await prisma.manga.create({
			data: {
				cover: dataManga?.mangaCover,
				mangaTitle: dataManga?.mangaTitle,
				deskripsi: dataManga?.mangaDescription,
				slug: dataManga?.mangaSlug,
			},
		});

		return { sucess: 200, message: "success" };
	} catch (err) {
		console.error("Error Creating Manga", err);
	}
};

export const postEditManga = async (dataManga: any) => {
	try {
		const manga = await prisma.manga.update({
			where: {
				idManga: Number(dataManga?.id),
			},
			data: {
				cover: dataManga?.cover,
				mangaTitle: dataManga?.title,
				deskripsi: dataManga?.deskripsi,
				slug: dataManga?.slug,
			},
		});

		return manga;
	} catch (err) {
		console.error("Error Creating Manga", err);
	}
};

export const dropManga = async (id: string) => {
	try {
		const res = await prisma.manga.delete({
			where: {
				idManga: Number(id),
			},
		});

		if (res) {
			return { status: 200 };
		} else {
			return { status: 404 };
		}
	} catch (err) {
		console.error(err);
	}
};

/* ---------------------------------------------------- */

/* -------------Post Chapter To Database---------------- */
export const postChapter = async (dataChapter: any) => {
	try {
		const { judulChapter, mangaId, chapter, image } = dataChapter;
		const chapterPost = await prisma.chapter.create({
			data: {
				judulChapter: judulChapter,
				mangaId: Number(mangaId),
				chapter: Number(chapter),
				image: image,
			},
		});

		return chapterPost.idChapter;
	} catch (err) {
		console.log("Something Went Wrong : ", err);
	}
};

export const editChapter = async (dataChapter: any) => {
	const res = await prisma.chapter.update({
		where: {
			idChapter: dataChapter.idChapter,
		},
		data: {
			judulChapter: dataChapter.judulChapter,
			chapter: dataChapter.chapter,
			mangaId: dataChapter.mangaId,
			image: dataChapter.image,
		},
	});

	return res;
};

export const dropChapterById = async (id: string) => {
	try {
		const res = await prisma.chapter.delete({
			where: {
				idChapter: Number(id),
			},
		});

		return { status: 200, idDelete: res.idChapter };
	} catch (err) {
		console.error(err);
	}
};

export const dropAllChapterByMangaId = async (id: string) => {
	try {
		if (id) {
			const res = await prisma.chapter.deleteMany({
				where: {
					mangaId: {
						equals: Number(id),
					},
				},
			});

			if (res) {
				return { status: 200, message: "success delete all Chapter" };
			} else {
				return { status: 500, message: "Something went wrong" };
			}
		}

		return { status: 404, message: "Id Not Found!" };
	} catch (err) {
		console.log("Something Went Wrong : ", err);
	}
};

/* ------------------------------------------------------ */

/* -------------Post User To Database---------------- */
export const postUser = async (data: { username: string; email: string; password: string }) => {
	const { username, email, password } = data;
	try {
		const userExists = await prisma.users.findFirst({
			where: {
				email: email,
			},
		});

		if (userExists) {
			return { userExists, message: "email already exists" };
			// callback(userExists, "email already exists");
		} else {
			const user = await prisma.users.create({
				data: {
					username: username,
					email: email,
					password: password,
				},
			});
			return { userExists: null, message: "User Berhasil Di tambahkan" };
			// callback(null, "User Berhasil Di tambahkan");
		}
	} catch (err) {
		console.error(err);
	}
};
/* ------------------------------------------------------- */
