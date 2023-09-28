import { NextResponse } from "next/server";
import "@/utils/firebase/read/services";
import { getMangaDetails } from "@/utils/PublicAPI/mangadex/services";

export async function POST(request: Request) {
	//ambil data dari form
	const formData = await request.formData();

	// Ambil Title dari request
	const title: any = formData.get("title");
	console.log(title);

	// Masukin Data ke firebase

	// masukin data ke variable untuk response
	const data = await getMangaDetails(title);
	return NextResponse.json({ status: 200, message: "sucess", data });
}
