// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCe4-kmTHw5IGrAUeCFCYzGfd0xc0rnwJo",
    authDomain: "expense-tracker-80cf9.firebaseapp.com",
    projectId: "expense-tracker-80cf9",
    storageBucket: "expense-tracker-80cf9.appspot.com",
    messagingSenderId: "993082642802",
    appId: "1:993082642802:web:6008e699de03083e9e0deb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
