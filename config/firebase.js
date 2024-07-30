// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlNYqC3RDSBUDIHc0SOkiKLF-8TIUgVp8",
  authDomain: "theory4nerds.firebaseapp.com",
  projectId: "theory4nerds",
  storageBucket: "theory4nerds.appspot.com",
  messagingSenderId: "163885883597",
  appId: "1:163885883597:web:679d75392d2834fd6c8984",
  measurementId: "G-6PDRR36HRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);