// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYFHdrGUWZefrJQQl04GcE-COxw_j74Co",
    authDomain: "assignment-12-a15bd.firebaseapp.com",
    projectId: "assignment-12-a15bd",
    storageBucket: "assignment-12-a15bd.appspot.com",
    messagingSenderId: "777260752602",
    appId: "1:777260752602:web:2df151ab0b4eb4b4d60fe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;