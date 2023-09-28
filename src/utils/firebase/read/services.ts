import { collection, getDocs } from "firebase/firestore";
import db from "../setup";

export async function getAllData() {
	const query = await getDocs(collection(db, "manga"));

	const data = query.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return data;
}
