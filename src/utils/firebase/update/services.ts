import {
	getFirestore,
	runTransaction,
	doc,
	updateDoc,
	getDoc,
} from "firebase/firestore";
import db from "../setup";

export async function getNextCounter() {
	const counterRef: any = doc(db, "counter", "autoIncrement");

	const result = await runTransaction(db, async (transaction) => {
		const docSnap: any = await getDoc(counterRef);
		let currentCount = (docSnap?.data()?.count || 0) as number;

		// Meningkatkan counter
		currentCount++;

		// Menyimpan kembali ke Firestore
		transaction.update(counterRef, { count: currentCount });

		return currentCount;
	});

	return result;
}
