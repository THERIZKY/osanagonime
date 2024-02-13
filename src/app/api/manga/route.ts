// import { getDataManga, getMangaById, convertToTimestamp, getMangaByRelease, searchSystem } from "@/utils/firebase/read/services";
import { getAllManga, getMangaById, getLatestManga, getMangaJoinChapter } from "@/utils/mysql/get/services";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const idManga: string | null = searchParams.get("idManga");
	const latestManga: string | null = searchParams.get("latestManga");
	const chapter: string | null = searchParams.get("chapter");

	if (chapter) {
		const data = await getMangaJoinChapter();
		return NextResponse.json({
			status: 200,
			message: "success",
			data,
		});
	}

	console.log(idManga);
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
		const data = await getLatestManga();
		return NextResponse.json({
			status: 200,
			message: "success",
			data,
		});
	}

	const data = await getAllManga();
	return NextResponse.json({ status: 200, message: "Success", data });
}
