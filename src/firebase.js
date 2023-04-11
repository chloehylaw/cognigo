// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBA7qP0UjYatmDk3-4iV_jHKOa1v8JGyo4",
    authDomain: "cognigo-soen357.firebaseapp.com",
    projectId: "cognigo-soen357",
    storageBucket: "cognigo-soen357.appspot.com",
    messagingSenderId: "558329195804",
    appId: "1:558329195804:web:d952469f7070a9f93d1ed9",
    measurementId: "G-TXK0ZM9R5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}