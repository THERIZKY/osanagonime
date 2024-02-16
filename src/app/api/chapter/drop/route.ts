import { NextRequest, NextResponse as res } from "next/server";
import { dropChapterById } from "@/utils/mysql/post/service";

export async function DELETE(request: NextRequest) {
	const req = await request.json();

	const { id } = req;

	if (id) {
		const chapterDeleted = await dropChapterById(id);

		if (chapterDeleted?.status === 200) {
			return res.json({
				status: 200,
				message: `Chapter dengan id ${chapterDeleted.idDelete} Berhasil Di Hapus`,
			});
		}
	} else {
		return res.json({
			status: 404,
			message: "ID Tidak di temukan, periksa kembali ID nya",
		});
	}
}
