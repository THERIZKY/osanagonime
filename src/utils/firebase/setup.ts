// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA7mfcWJJLjbzJUI4KqPOZU6WuJY24P-V4",
	authDomain: "osanago-97cf6.firebaseapp.com",
	projectId: "osanago-97cf6",
	storageBucket: "osanago-97cf6.appspot.com",
	messagingSenderId: "446300910863",
	appId: "1:446300910863:web:856655977ef48042497a7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
