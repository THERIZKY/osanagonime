import { postChapter } from "@/utils/mysql/post/service";
import { NextResponse as res, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const req = await request.json();
	const { judulChapter, mangaId, chapter, image } = req;
	const idChapter = await postChapter({
		judulChapter,
		mangaId,
		chapter,
		image,
	});

	if (idChapter) {
		return res.json({ status: 200, message: "Chapter Sucessfull Added With id : " + idChapter, idChapter: idChapter });
	} else {
		return res.json({ status: 500, message: "Data Yang Diberikan Tidak Lengkap" });
	}
}
