"use server";

export async function fetchManga(url: string) {
	const res = await fetch(url);
	const data = await res.json();
	return data;
}
