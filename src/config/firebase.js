// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7sX2Xrk7xxnoenjJa7GoQlxW9l93VX8c",
  authDomain: "shuttlesmash-23032.firebaseapp.com",
  projectId: "shuttlesmash-23032",
  storageBucket: "shuttlesmash-23032.appspot.com",
  messagingSenderId: "846335128532",
  appId: "1:846335128532:web:f5c8bba707b4a9f2c31c41",
  measurementId: "G-M9DTMDBDCX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export { app, googleProvider, auth, storage };
