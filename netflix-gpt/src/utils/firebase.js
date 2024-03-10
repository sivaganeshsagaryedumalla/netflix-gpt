
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjGqa11mmNoiEEfNWSHUSEb9tVlES-wJE",
    authDomain: "netflix-gpt-25ceb.firebaseapp.com",
    projectId: "netflix-gpt-25ceb",
    storageBucket: "netflix-gpt-25ceb.appspot.com",
    messagingSenderId: "436646925128",
    appId: "1:436646925128:web:98452d6e2c8b325ed5197d",
    measurementId: "G-7FJDD21YLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

