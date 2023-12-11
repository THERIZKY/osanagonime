import { collection, addDoc } from "firebase/firestore";
import { convertToTimestamp } from "@/utils/firebase/read/services";
import db from "../setup";

export const createManga = async (data: any, idManga: number) => {
	const docRef = await addDoc(collection(db, "manga"), {
		mangaTitle: data.mangaTitle,
		cover: data.mangaCover,
		deskripsi: data.mangaDescription,
		slug: data.mangaSlug,
		idManga: idManga,
		release: convertToTimestamp(),
	});

	return docRef.id;
};
