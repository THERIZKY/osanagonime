import { NextResponse as res, NextRequest } from "next/server";
import { getAllChapter, getChapterByChapterId, getChapterByMangaId, getChapterJoinManga } from "@/utils/mysql/get/services";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const idManga = searchParams.get("idManga");
	const idChapter = searchParams.get("idChapter");
	const manga = searchParams.get("manga");

	try {
		if (idManga) {
			const chapter = await getChapterByMangaId(Number(idManga));

			return res.json({ status: 200, data: chapter });
		}

		if (idChapter) {
			const chapter = await getChapterByChapterId(Number(idChapter));
			return res.json({ status: 200, data: chapter });
		}

		if (manga) {
			const manga = await getChapterJoinManga();
			return res.json({ status: 200, data: manga });
		}

		const chapter = await getAllChapter();
		return res.json({
			status: 200,
			data: chapter,
		});
	} catch (err) {
		console.log(err);
		res.redirect("/admin/chapter");
	}
}
