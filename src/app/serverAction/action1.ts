"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function countChapter(slug: string) {
	const count = await prisma.chapter.count({
		where: {
			mangaRef: {
				slug,
			},
		},
	});

	return count;
}
