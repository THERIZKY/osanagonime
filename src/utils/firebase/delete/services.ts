import { deleteDoc, doc } from "firebase/firestore";
import db from "../setup";

export const deleteManga = async (mangaId: string) => {
	const docRef = doc(db, "manga", mangaId);

	const delCheck: any = await deleteDoc(docRef);
	if (delCheck) {
		return true;
	} else {
		return false;
	}
};
