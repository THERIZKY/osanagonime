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

// export const performInnerJoin = async () => {
// 	try {
// 		const chapterQuery = await query(collection(db, "chapter"));
// 		const chaptersSnapshot = await getDocs(chapterQuery);
// 		const joinedData: any = [];

// 		// Iterasi melalui setiap dokumen di koleksi chapters
// 		chaptersSnapshot.forEach(async (chapterDoc) => {
// 			const chapterData = chapterDoc.data();
// 			const idManga = chapterData.idManga;

// 			console.log(idManga);

// 			// Ambil data manga yang sesuai berdasarkan idManga dari koleksi manga
// 			const mangaQuery = await query(
// 				collection(db, "manga"),
// 				where("idManga", "==", idManga),
// 			);
// 			const mangaSnapshot = await getDocs(mangaQuery);
// 			mangaSnapshot.forEach((mangaDoc) => {
// 				const mangaData = mangaDoc.data();

// 				console.log(mangaData);

// 				// Gabungkan data dari kedua koleksi
// 				const joinedItem = {
// 					...chapterData,
// 					...mangaData,
// 				};

// 				console.log(joinedItem);

// 				// Tambahkan hasil inner join ke array
// 				joinedData.push(joinedItem);
// 			});
// 		});

// 		// Hasil inner join dapat digunakan di sini setelah proses selesai
// 		console.log(joinedData);
// 		return joinedData;
// 	} catch (error) {
// 		console.error("Error performing inner join:", error);
// 		return [];
// 	}
// };

export const performInnerJoin = async () => {
	try {
		const chapterQuery = query(collection(db, "chapter"));
		const chaptersSnapshot = await getDocs(chapterQuery);
		const joinedData: any = [];

		// Ambil semua promise dari permintaan Firestore dan tunggu semuanya selesai
		const promises = chaptersSnapshot.docs.map(async (chapterDoc) => {
			const chapterData = chapterDoc.data();
			const idManga = chapterData.idManga;

			// Ambil data manga yang sesuai berdasarkan idManga dari koleksi manga
			const mangaQuery = query(
				collection(db, "manga"),
				where("idManga", "==", idManga),
			);
			const mangaSnapshot = await getDocs(mangaQuery);

			return mangaSnapshot.docs.map((mangaDoc) => {
				const mangaData = mangaDoc.data();

				// Gabungkan data dari kedua koleksi
				const joinedItem = {
					...chapterData,
					...mangaData,
				};

				return joinedItem;
			});
		});

		// Tunggu seluruh promise selesai dan gabungkan hasilnya
		const results = await Promise.all(promises);

		// Flatten hasil array dari hasil permintaan Firestore
		results.forEach((result) => {
			joinedData.push(...result);
		});

		// Hasil inner join dapat digunakan di sini setelah proses selesai
		console.log(joinedData);
		return joinedData;
	} catch (error) {
		console.error("Error performing inner join:", error);
		return [];
	}
};
