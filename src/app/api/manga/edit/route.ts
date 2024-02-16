import { postEditManga } from "@/utils/mysql/post/service";
import { NextRequest, NextResponse as res } from "next/server";

export async function POST(request: NextRequest) {
	const req = await request.json();
	if (req) {
		await postEditManga(req);
		return res.json({ status: 200, message: "success" });
	}

	return res.json({ status: 500, message: "something went wrong" });
}
