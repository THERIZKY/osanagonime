import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../setup";

export async function getAllData(mangaId = "") {
	// Kalau ada id yang diinput maka jalanin ini
	if (mangaId !== "") {
		const q = query(
			collection(db, "manga"),
			where("__name__", "==", mangaId),
		);
		const querySnapshot = await getDocs(q);
		const data = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));

		return data;
	}

	// Kalau tidak ada id yang diinput
	const q = await getDocs(collection(db, "manga"));

	const data = q.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return data;
}

export async function getMangaById(mangaId = "") {
	const q = query(
		collection(db, "manga"),
		where("idManga", "==", Number(mangaId)),
	);
	const querySnapshot = await getDocs(q);
	const data = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	console.log(querySnapshot.docs);

	return data;
}

export async function getAllChapter(chapterId = "", mangaId = "") {
	if (chapterId !== "") {
		const q = query(
			collection(db, "chapter"),
			where("__name__", "==", chapterId),
		);
		const querySnapshot = await getDocs(q);
		const data = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));

		return data;
	}

	if (mangaId !== "") {
		const q = query(
			collection(db, "chapter"),
			where("idManga", "==", mangaId),
		);
		const querySnapshot = await getDocs(q);

		const data = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));

		return data;
	}

	const q = await getDocs(collection(db, "chapter"));
	const data = q.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	// console.log(data);

	return data;
}
