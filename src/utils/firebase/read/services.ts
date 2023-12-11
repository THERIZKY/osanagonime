import {
	collection,
	getDocs,
	query,
	where,
	Timestamp,
	orderBy,
} from "firebase/firestore";
import db from "../setup";
import { type } from "os";

// Ngambil Data Manga Semuanya
export async function getDataManga(documentId: string = "") {
	try {
		if (documentId) {
			const q = query(
				collection(db, "manga"),
				where("__name__", "==", documentId),
			);
			const querySnapshot = await getDocs(q);
			const data = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			return data;
		} else {
			const q = await getDocs(collection(db, "manga"));

			const data = q.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			return data;
		}
	} catch (error) {
		// Handle error jika terjadi kesalahan
		console.error("Terjadi kesalahan:", error);
		throw error; // Melempar kembali error untuk ditangani oleh pemanggil fungsi
	}
}

// ngambil data by ID
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

// Ini Fungsi Gak kepake, !!TAPI JANGAN DIAPUS!!
export async function getAllChapter(
	chapterId: string = "",
	mangaId: string = "",
) {
	try {
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
	} catch (error) {
		// Handle error jika terjadi kesalahan
		console.error("Terjadi kesalahan:", error);
		throw error; // Melempar kembali error untuk ditangani oleh pemanggil fungsi
	}
}

// fungsi buat ngambil data chapter berdasarkan request
export async function getDataChapter(
	chapterId: string = "",
	mangaId: string = "",
) {
	try {
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
				where("idManga", "==", Number(mangaId)),
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

		return data;
	} catch (error) {
		console.error("Terjadi kesalahan:", error);
		throw error;
	}
}

// Fungsi buat join tabel chapter dan manga
export const performInnerJoin = async (idManga: string = "") => {
	try {
		let chapterQuery: any;

		if (idManga) {
			chapterQuery = query(
				collection(db, "chapter"),
				where("idManga", "==", Number(idManga)),
			);
		} else {
			chapterQuery = query(collection(db, "chapter"));
		}
		const chaptersSnapshot: any = await getDocs(chapterQuery);
		const joinedData: any = [];

		console.log(chaptersSnapshot.docs);
		// Ambil semua promise dari permintaan Firestore dan tunggu semuanya selesai
		const promises = chaptersSnapshot.docs.map(async (chapterDoc: any) => {
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

		console.log(results);
		// Flatten hasil array dari hasil permintaan Firestore
		results.forEach((result) => {
			joinedData.push(...result);
		});

		// Hasil inner join dapat digunakan di sini setelah proses selesai
		return joinedData;
	} catch (error) {
		console.error("Error performing inner join:", error);
		return [];
	}
};

// ini fungsi buat rubah timestamp ke objek date
export const convertToDate = async (timeStampsDalamSecond: number) => {
	const date = new Date();

	// const secondToMiliSecond = Timestamp.fromDate(date).seconds * 1000;
	// Contoh timestamp yang didapat dari Firestore
	const firestoreTimestamp = Timestamp.fromMillis(1701712800 * 1000);

	console.log(firestoreTimestamp);
	// Konversi Firestore Timestamp menjadi objek Date
	const dateObject = firestoreTimestamp.toDate();

	console.log(dateObject); // Ini adalah objek tanggal (datetime) asli dari timestamp Firestore
};

// fungsi untuk rubah objek date ke timestamp
export const convertToTimestamp = () => {
	const date = new Date();
	const timestamp = Timestamp.fromDate(date);

	console.log(timestamp);
	return timestamp;
};

export const getMangaByRelease = async (typeOrder: any) => {
	const q = query(collection(db, "manga"), orderBy("release", typeOrder));
	const querySnapshot = await getDocs(q);
	const data = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	console.log(data);

	return data;
};
