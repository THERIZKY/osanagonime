import { NextResponse } from "next/server";
import {
	getAllChapter,
	performInnerJoin,
} from "@/utils/firebase/read/services";

export async function GET() {
	try {
		// const data = await getAllChapter();
		const data = await performInnerJoin();
		return NextResponse.json({ status: 200, data });
	} catch (err) {
		console.log(`Cannot Get Data ${err}`);
		return NextResponse.json({ status: 404, message: "Data Not Found!" });
	}
}
