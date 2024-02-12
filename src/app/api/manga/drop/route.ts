import { deleteManga } from "@/utils/firebase/delete/services";
import { dropAllChapterByMangaId, dropManga } from "@/utils/mysql/post/service";
import { NextRequest, NextResponse as res } from "next/server";

export async function DELETE(request: NextRequest) {
	const req = await request.json();

	const mangaId = req.id;

	if (mangaId !== null) {
		const chapterDeleted = await dropAllChapterByMangaId(mangaId);

		if (chapterDeleted?.status === 200) {
			const mangaDeleted = await dropManga(mangaId);

			if (mangaDeleted?.status === 200) {
				return res.json({
					status: 200,
					message: "Manga Berhasil Di Hapus",
				});
			}

			return res.json({
				status: 404,
				message: "ID Tidak di temukan, periksa kembali ID nya",
			});
		}

		return res.json({
			status: 500,
			message: "Something Wront Went Deleted The Chapter",
		});
	}

	return res.json({
		status: 500,
		message: "Manga Tidak Bisa Dihapus Tanpa ID",
	});
}
