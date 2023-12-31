import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import db from "../setup";

export const register = async (data: { email: string; password: string }) => {
	const { email, password } = data;
	const role = "user";
	const q = query(collection(db, "users"), where("email", "==", email));
	const querySnapshot = await getDocs(q);

	if (querySnapshot.docs.length > 0) {
		return false;
	} else {
		await addDoc(collection(db, "users"), {
			email: email,
			password: password,
			role: role,
		});
		return true;
	}
};

export const login = async (data: { email: string }) => {
	const { email } = data;

	const q = query(collection(db, "users"), where("email", "==", email));

	const querySnapshot = await getDocs(q);

	const user = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	if (user) {
		return user[0];
	} else {
		return null;
	}
};
