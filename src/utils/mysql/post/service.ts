import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/* -------------Post Manga To Database---------------- */

export const postManga = async (dataManga: any) => {
	try {
		// console.log(dataManga);
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
			console.log(user);
			return { userExists: null, message: "User Berhasil Di tambahkan" };
			// callback(null, "User Berhasil Di tambahkan");
		}
	} catch (err) {
		console.log(err);
	}
};
/* ------------------------------------------------------- */
