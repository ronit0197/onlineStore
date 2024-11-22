import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCtoHifXlF-ABNIc4F7j66VVU6bR_Uu2s",
    authDomain: "onlinestore-6dd07.firebaseapp.com",
    projectId: "onlinestore-6dd07",
    storageBucket: "onlinestore-6dd07.firebasestorage.app",
    messagingSenderId: "963253717978",
    appId: "1:963253717978:web:274dad7f77228031258ee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);