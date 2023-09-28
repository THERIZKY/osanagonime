import { collection, addDoc } from "firebase/firestore";
import db from "../setup";
export async function addDataManga(title: string) {
	try {
		await addDoc(collection(db, "manga"), {
			title: title,
		});
	} catch (err) {
		console.error(err);
	}
}
