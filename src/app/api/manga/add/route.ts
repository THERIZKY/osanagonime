import { NextResponse, NextRequest } from "next/server";
import "@/utils/firebase/read/services";
import { getMangaDetails } from "@/utils/PublicAPI/mangadex/services";
import { addDoc, collection } from "firebase/firestore";
import db from "@/utils/firebase/setup";
import { getNextCounter } from "@/utils/firebase/update/services";
import { createManga } from "@/utils/firebase/create/services";
import { postManga } from "@/utils/mysql/post/service";

interface dataManga {
	id: string;
	mangaDescription: string;
	idManga: number;
	mangaTitle: string;
	mangaCover: string;
	mangaSlug: string;
}

export async function POST(request: NextRequest) {
	const req = await request.json();

	// Ngambil judul nya
	const title = req.title;

	// Ngambil Data Manga Dari API
	const data: any = await getMangaDetails(title);

	if (data) {
		await postManga(data);
		return NextResponse.json({
			status: 200,
			message: "Success Added Manga",
		});
	}

	return NextResponse.json({ status: 404, message: "Manga Not Found" });
}
