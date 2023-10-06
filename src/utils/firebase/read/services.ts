import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../setup";

export async function getAllData(mangaId = "") {
	if (mangaId !== "") {
		const q = query(
			collection(db, "manga"),
			where("idManga", "==", "C8N65p8mPYqy1MoJSLp5"),
		);
		const querySnapshot = await getDocs(q);

		const data = querySnapshot.forEach((doc) => ({
			id: doc.id,
			...doc.data(),
		}));

		// const data = querySnapshot.map((doc) => ({
		// 	id: doc.id,
		// 	...doc.data(),
		// }));

		console.log(data);
		return data;
	}
	const q = await getDocs(collection(db, "manga"));

	const data = q.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return data;
}
