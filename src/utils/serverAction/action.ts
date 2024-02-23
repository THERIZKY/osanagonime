"use server";
import { editChapter, postChapter } from "@/utils/mysql/post/service";
import { redirect } from "next/navigation";

// Prisma
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

export async function submitHandler(formData: FormData) {
	const { judulChapter, mangaId, chapter, image }: any = Object.fromEntries(formData);

	const res = await postChapter({
		judulChapter,
		mangaId,
		chapter,
		image,
	});

	if (res) {
		redirect(`/admin/chapter`);
	}
}

export async function editHandler(formData: FormData) {
	const { idChapter, judulChapter, mangaId, chapter, image }: any = Object.fromEntries(formData);

	await editChapter({
		idChapter: Number(idChapter),
		judulChapter,
		mangaId: Number(mangaId),
		chapter: Number(chapter),
		image,
	});

	redirect(`/admin/chapter`);
}
