import { NextResponse } from "next/server";
const chapter = [
	{
		id: 1,
		idManga: 1,
		judul: "Chapter 1",
		chapter: 1,
	},
	{
		id: 2,
		idManga: 1,
		judul: "Chapter 2",
		chapter: 2,
	},
	{
		id: 3,
		idManga: 1,
		judul: "Chapter 3",
		chapter: 3,
	},
];
export async function POST(request: Request) {
	return NextResponse.json({ message: "sucess" });
}
