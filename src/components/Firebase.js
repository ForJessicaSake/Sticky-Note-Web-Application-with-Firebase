// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbtl5VZKesEHbQhpF1h3AEF-XACHTGNdU",
    authDomain: "notes-21a9f.firebaseapp.com",
    projectId: "notes-21a9f",
    storageBucket: "notes-21a9f.appspot.com",
    messagingSenderId: "342199964035",
    appId: "1:342199964035:web:531aab2c59d12f21bca6b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app)
const auth = getAuth()

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}