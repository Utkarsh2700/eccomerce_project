// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD04YQCR1MuEci4sp_WZj16Ml82P-kJ9U8",
  authDomain: "ecommerce-d2c4a.firebaseapp.com",
  projectId: "ecommerce-d2c4a",
  storageBucket: "ecommerce-d2c4a.appspot.com",
  messagingSenderId: "358376387554",
  appId: "1:358376387554:web:7b7bc2924c9c097eedbfbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
