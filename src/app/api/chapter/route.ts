import { NextResponse as res, NextRequest } from "next/server";
import { getAllChapter, getChapterByChapterId, getChapterByMangaId, getChapterJoinManga } from "@/utils/mysql/get/services";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const idManga = searchParams.get("idManga");
	const manga = searchParams.get("manga");

	try {
		if (manga) {
			if (idManga) {
				const manga = await getChapterJoinManga(Number(idManga));
				return res.json({ status: 200, data: manga });
			}
			const manga = await getChapterJoinManga();
			return res.json({ status: 200, data: manga });
		}

		if (idManga) {
			const chapter = await getChapterByMangaId(Number(idManga));

			return res.json({ status: 200, data: chapter });
		}

		const chapter = await getAllChapter();

		revalidatePath("/admin/chapter");
		return res.json({
			status: 200,
			data: chapter,
		});
	} catch (err) {
		console.error(err);
		res.redirect("/admin/chapter");
	}
}
