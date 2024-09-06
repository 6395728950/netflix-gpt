// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSVhHOZXO-s4BtKRkAo2TN7MrcdODO5kg",
  authDomain: "netflix-gpt-c1020.firebaseapp.com",
  projectId: "netflix-gpt-c1020",
  storageBucket: "netflix-gpt-c1020.appspot.com",
  messagingSenderId: "918885258912",
  appId: "1:918885258912:web:b6e93c4acd7846728adbc5",
  measurementId: "G-8PKT6LK5EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();