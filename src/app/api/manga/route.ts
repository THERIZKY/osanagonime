import { NextResponse, NextRequest } from "next/server";
import "@/utils/firebase/read/services";
import { getMangaDetails } from "@/utils/PublicAPI/mangadex/services";
import { addDoc, collection } from "firebase/firestore";
import db from "@/utils/firebase/setup";
import { getNextCounter } from "@/utils/firebase/update/services";
import { createManga } from "@/utils/firebase/create/services";

interface dataManga {
	id: string;
	deskripsi: string;
	idManga: number;
	mangaTitle: string;
	cover: string;
	slug: string;
}

export async function POST(request: NextRequest) {
	const req = await request.json();

	// Ngambil judul nya
	const title = req.title;

	// Ngambil Data Manga Dari API
	const data: any = await getMangaDetails(title);

	// nambahin si data nya ke dalam database
	if (data) {
		const idManga = await getNextCounter();

		const idRef = await createManga(data, idManga);

		return NextResponse.json({
			status: 200,
			message: "Success Added with id : " + idManga,
		});
	}

	return NextResponse.json({ status: 404, message: "Manga Not Found" });
}
