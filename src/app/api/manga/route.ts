import { NextResponse } from "next/server";
import "@/utils/firebase/services";
import { getAllData } from "@/utils/firebase/services";
import {
	getDataManga,
	getMangaCover,
} from "@/utils/firebase/PublicAPI/mangadex/services";

export async function GET(request: Request) {
	// const data = await getDataManga("yagate kimi ni naru");
	const cover = await getMangaCover("yagate kimi ni naru");

	const data = await getAllData();
	// console.log(data);

	return NextResponse.json({ status: 200, message: "sucess", cover, data });
}
