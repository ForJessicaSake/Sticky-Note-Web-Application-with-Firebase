// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain: "notes-21a9f.firebaseapp.com",
    projectId: "notes-21a9f",
    storageBucket: "notes-21a9f.appspot.com",
    messagingSenderId: "342199964035",
    appId: "1:342199964035:web:531aab2c59d12f21bca6b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
const auth = getAuth();

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}
export function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}
export function Logout() {
    return signOut(auth);
}
//custom hook for signUp
export function UseAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const account = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return account;
    }, []);
    return currentUser;
}