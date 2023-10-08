import { deleteManga } from "@/utils/firebase/delete/services";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
	const req = await request.json();

	const mangaId = req.id;

	if (mangaId !== null) {
		const isSuccess = await deleteManga(mangaId);

		if (isSuccess) {
			return NextResponse.json({
				status: 200,
				message: "Data Berhasil Di Hapus",
			});
		}

		return NextResponse.json({
			status: 404,
			message: "ID Tidak di temukan, periksa kembali ID nya",
		});
	}

	return NextResponse.json({
		status: 500,
		message: "Cannot Delete manga without any id",
	});
}
