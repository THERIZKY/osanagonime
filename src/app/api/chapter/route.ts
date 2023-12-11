import { NextResponse as res, NextRequest } from "next/server";
import {
	getDataChapter,
	performInnerJoin,
} from "@/utils/firebase/read/services";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const includeManga = searchParams.get("includeManga");
	const idManga = searchParams.get("idManga");
	const idChapter = searchParams.get("idChapter");

	console.log(idManga);
	console.log(includeManga);

	try {
		if (includeManga == "include") {
			try {
				if (idManga) {
					const data = await performInnerJoin(idManga);
					return res.json({ status: 200, data });
				}

				const data = await performInnerJoin();
				console.log(data);
				return res.json({ status: 200, data });
			} catch (err) {
				console.log(`Cannot Get Data ${err}`);
				return res.json({ status: 404, message: "Data Not Found!" });
			}
		}

		if (idManga) {
			const data = await getDataChapter("", idManga);
			return res.json({ status: 200, data });
		}

		if (idChapter) {
			const data = await getDataChapter(idChapter);
			return res.json({ status: 200, data });
		}

		const data = await getDataChapter();
		return res.json({ status: 200, data });
	} catch (err) {
		console.log(`Cannot Get Data ${err}`);
		return res.json({ status: 404, message: "Data Not Found!" });
	}
}
