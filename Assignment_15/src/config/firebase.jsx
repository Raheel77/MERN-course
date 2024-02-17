// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import {authIs } from '../config/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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
const firebaseApp = initializeApp(firebaseConfig);
const authIs = getAuth(firebaseApp);

export {firebaseApp,authIs}