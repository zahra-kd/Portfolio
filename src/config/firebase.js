// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQAX2tA9t6hpxUHoyuI6shFNw7gNs5qNg",
  authDomain: "portfolio-8dbc3.firebaseapp.com",
  projectId: "portfolio-8dbc3",
  storageBucket: "portfolio-8dbc3.appspot.com",
  messagingSenderId: "868933419236",
  appId: "1:868933419236:web:584898c4789e966d096cf1",
  measurementId: "G-ZXYFQ16SH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);