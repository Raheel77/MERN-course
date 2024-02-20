// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6ihSDN4kfXVAKARD3yClYGPRMpy3Ke44",
  authDomain: "fir-14feb.firebaseapp.com",
  projectId: "fir-14feb",
  storageBucket: "fir-14feb.appspot.com",
  messagingSenderId: "263949362759",
  appId: "1:263949362759:web:d1e825524d96eb6b8a3362"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
const database = getDatabase(firebase_app);

export { firebase_app, auth, database };
