import {
	getDataManga,
	getMangaById,
	convertToTimestamp,
	getMangaByRelease,
} from "@/utils/firebase/read/services";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const documentId: any = searchParams.get("documentId");
	const idManga: any = searchParams.get("idManga");
	const latestManga: any = searchParams.get("latestManga");

	// Kalo Manga ID nya gak null baru jalanin query
	if (documentId) {
		const data = await getDataManga(documentId);

		return NextResponse.json({
			status: 200,
			message: "Success",
			data,
		});
	}

	// kalo id Dari manga yang dikasih
	if (idManga) {
		const data = await getMangaById(idManga);

		return NextResponse.json({
			status: 200,
			message: "success",
			data,
		});
	}

	if (latestManga) {
		let typeOrder = "asc";
		if (latestManga === "latest") {
			typeOrder = "desc";
		}

		const data = await getMangaByRelease(typeOrder);
		return NextResponse.json({
			status: 200,
			message: "success",
			data,
		});
	}

	const data = await getDataManga();
	return NextResponse.json({ status: 200, message: "Success", data });
}
