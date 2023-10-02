import { collection, addDoc } from "firebase/firestore";
import db from "../setup";

export const createManga = async (data: any, idManga: number) => {
	const docRef = await addDoc(collection(db, "manga"), {
		mangaTitle: data.mangaTitle,
		cover: data.mangaCover,
		deskripsi: data.mangaDescription,
		slug: data.mangaSlug,
		idManga: idManga,
	});

	return docRef.id;
};
