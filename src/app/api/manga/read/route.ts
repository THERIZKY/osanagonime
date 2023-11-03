import { getAllData, getMangaById } from "@/utils/firebase/read/services";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const mangaId: any = searchParams.get("mangaid");
	const idManga: any = searchParams.get("idManga");
	console.log(idManga);

	// Kalo Manga ID nya gak null baru jalanin query
	if (mangaId !== null) {
		const data = await getAllData(mangaId);

		return NextResponse.json({
			status: 200,
			message: "Success",
			data,
		});
	}

	// kalo id Dari manga yang dikasih
	if (idManga !== null) {
		const data = await getMangaById(idManga);

		return NextResponse.json({
			status: 200,
			message: "success",
			data,
		});
	}

	const data = await getAllData();
	return NextResponse.json({ status: 200, message: "Success", data });
}
